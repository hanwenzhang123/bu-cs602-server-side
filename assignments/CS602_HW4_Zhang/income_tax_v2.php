<?php

define('TAX_RATES',
  array(
    'Single' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,9700,39475,84200,160725,204100,510300),
      'MinTax' => array(0, 970,4543,14382,32748,46628,153798)
      ),
    'Married_Jointly' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,19400,78950,168400,321450,408200,612350),
      'MinTax' => array(0, 1940,9086,28765,65497,93257,164709)
      ),
    'Married_Separately' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,9700,39475,84200,160725,204100,306175),
      'MinTax' => array(0, 970,4543,14382.50,32748.50,46628.50,82354.75)
      ),
    'Head_Household' => array(
      'Rates' => array(10,12,22,24,32,35,37),
      'Ranges' => array(0,13850,52850,84200,160700,204100,510300),
      'MinTax' => array(0, 1385,6065,12962,31322,45210,152380)
      )
    )
);

// Fill in the code for the following function

if (isset($_POST['netIncome'])){
    if ($_POST['netIncome'] > 0) {
        $incomeInput = $_POST["netIncome"];
        $incomeSingle = incomeTax($incomeInput, "Single");
        $incomeTaxMarriedJointly = incomeTax($incomeInput, "Married_Jointly");
        $incomeTaxMarriedSeparately = incomeTax($incomeInput, "Married_Separately");
        $incomeTaxHeadOfHousehold = incomeTax($incomeInput, "Head_Household");
    } else {
        $incomeInput =  0;
        $incomeSingle = 0;
        $incomeTaxMarriedJointly = 0;
        $incomeTaxMarriedSeparately = 0;
        $incomeTaxHeadOfHousehold = 0;
        echo "<h1>Something Wrong, not a valid input, please check!!!</h1>";
    }

} else {
    $incomeInput = '';
}

function incomeTax($taxableIncome, $status) {
    $incTax = 0.0;
    $ranges = TAX_RATES[$status]['Ranges'];
    $minTax = TAX_RATES[$status]['MinTax'];
    $rates = TAX_RATES[$status]['Rates'];
    $maxIndex = max(array_keys($ranges));

    foreach ($ranges as $index => $range){
        if (($taxableIncome <= $range) and ($taxableIncome >= $ranges[$index - 1])){
            $rate = $rates[$index - 1] / 100; 
            $incTax = (($taxableIncome - $ranges[$index]) * $rate) + $minTax[$index];
            break;
        } elseif ($taxableIncome > $ranges[$maxIndex]){
            $rate = $rates[$maxIndex] / 100;
            $incTax = (($taxableIncome - $ranges[$maxIndex]) * $rate) + $minTax[$maxIndex];
            break;
        }
    }
    
    return $incTax;
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HW4 Part2 - LastName</title>

  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>

<body>

<div class="container">

    <h3>Income Tax Calculator</h3>

    <form class="form-horizontal" method="post">

      <div class="form-group">
        <label class="control-label col-sm-2">Enter Net Income:</label>
        <div class="col-sm-10">
          <input type="number"  step="any" name="netIncome" placeholder="Taxable  Income" required autofocus>
        </div>
      </div>
      <div class="form-group"> 
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>

    </form>

    <?php

        // Fill in the rest of the PHP code for form submission results
        
        if(isset($_POST['netIncome'])) 
        {
          echo "With a net taxable income of $" . number_format($incomeInput, 2);
          echo "<table>";
          echo "<tr><th>Status</th><th>Tax</th></tr>";

          echo "<tr><td>Single</td><td>$", number_format($incomeSingle, 2) , "</td></tr>";
          echo "<tr><td>Married Filing Jointly</td><td>$", number_format($incomeTaxMarriedJointly, 2) , "</td></tr>";
          echo "<tr><td>Married Filing Separately</td><td>$", number_format($incomeTaxMarriedSeparately, 2) , "</td></tr>";
          echo "<tr><td>Head of Household</td><td>$", number_format($incomeTaxHeadOfHousehold, 2) , "</td></tr>";

          echo "</table>";
        }

    ?>

    

    <h3>2019 Tax Tables</h3>

    <?php

      // Fill in the code for Tax Tables display

    foreach (TAX_RATES as $status => $taxArray) {
		  echo "<strong>" . $status . "</strong><br>";
      echo "<table><thead><tr><th>Taxable Income</th><th>Tax Rate</th></tr></thead>";
      echo "<tbody><tr><td> $", number_format(TAX_RATES[$status]['Ranges'][0]) , " - $", number_format(TAX_RATES[$status]['Ranges'][1]) , "</td>";
      echo "<td>", TAX_RATES[$status]['Rates'][0], "%</td></tr>";

    $loopCount = count(TAX_RATES[$status]['Ranges']); 
    $maxIndex = max(array_keys(TAX_RATES[$status]['Rates'])); 

    for ($i = 1; $i < ($loopCount - 1); $i++) {
        echo '<tr><td scope="row">';
        echo "$" . number_format((TAX_RATES[$status]['Ranges'][$i]) + 1);
        echo " - $" . number_format(TAX_RATES[$status]['Ranges'][$i + 1]);
        echo '</td>
                    <td>';
        echo "$" . number_format(TAX_RATES[$status]['MinTax'][$i], 2) . " plus ";
        echo TAX_RATES[$status]['Rates'][$i] . "% of the amount over ";
        echo "$" . number_format(TAX_RATES[$status]['Ranges'][$i]);
        echo '</td></tr>';
    }

    echo "<tr><td>$", number_format((TAX_RATES[$status]['Ranges'][$maxIndex]) + 1) , " or more</td>";
    echo "<td>$", number_format(TAX_RATES[$status]['MinTax'][$maxIndex], 2) , " plus ", TAX_RATES[$status]['Rates'][$maxIndex] . "% of the amount over $", number_format(TAX_RATES[$status]['Ranges'][$maxIndex]);
    echo"</tr></tbody></table><br>";

}

    ?>

</div>

</body>
</html>