<?php

// Fill in the code for the following four functions

if (isset($_POST['netIncome'])){
    if ($_POST['netIncome'] >= 0) {
        $incomeInput = $_POST["netIncome"];
    } else {
        $incomeInput =  0;
        echo "<h1>Something Wrong, not a valid input, please check!!!</h1>";
    }
    $incomeSingle = incomeTaxSingle($incomeInput, 2);
    $incomeTaxMarriedJointly = incomeTaxMarriedJointly($incomeInput, 2);
    $incomeTaxMarriedSeparately = incomeTaxMarriedSeparately($incomeInput, 2);
    $incomeTaxHeadOfHousehold = incomeTaxHeadOfHousehold($incomeInput, 2);
} else {
    $incomeInput = '';
}

function incomeTaxSingle($taxableIncome) {
    $incTax = 0.0;

    if ($taxableIncome >= 0 && $taxableIncome <= 9700)
    {
        $taxPercentage = 0.1;
        $incTax = ($taxableIncome * $taxPercentage);
    }
    elseif ($taxableIncome >= 9700 && $taxableIncome <= 39475)
    {
        $amount = 970;
        $remaining = $taxableIncome - 9700;
        $taxPercentage = 0.12;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 39475 && $taxableIncome <= 84200)
    {
        $amount = 4543;
        $remaining = $taxableIncome - 39475;
        $taxPercentage = 0.22;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 84200 && $taxableIncome <= 160725)
    {
        $amount = 14382;
        $remaining = $taxableIncome - 84200;
        $taxPercentage = 0.24;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 160725 && $taxableIncome <= 204100)
    {
        $amount = 32748;
        $remaining = $taxableIncome - 160725;
        $taxPercentage = 0.32;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 204100 && $taxableIncome <= 510000)
    {
        $amount = 46628;
        $remaining = $taxableIncome - 204100;
        $taxPercentage = 0.35;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 510300)
    {
        $amount = 153798;
        $remaining = $taxableIncome - 510300;
        $taxPercentage = 0.37;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    
    return $incTax;

}

function incomeTaxMarriedJointly($taxableIncome) {
    $incTax = 0.0;

    if ($taxableIncome >= 0 && $taxableIncome <= 19400)
    {
        $taxPercentage = 0.1;
        $incTax = ($taxableIncome * $taxPercentage);
    }
    elseif ($taxableIncome >= 19400 && $taxableIncome <= 78950)
    {
        $amount = 1940;
        $remaining = $taxableIncome - 19400;
        $taxPercentage = 0.12;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 78950 && $taxableIncome <= 168400)
    {
        $amount = 9086;
        $remaining = $taxableIncome - 78950;
        $taxPercentage = 0.22;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 168400 && $taxableIncome <= 321450)
    {
        $amount = 28765;
        $remaining = $taxableIncome - 168400;
        $taxPercentage = 0.24;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 321450 && $taxableIncome <= 408200)
    {
        $amount = 65497;
        $remaining = $taxableIncome - 321450;
        $taxPercentage = 0.32;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 408200 && $taxableIncome <= 612350)
    {
        $amount = 93257;
        $remaining = $taxableIncome - 408200;
        $taxPercentage = 0.35;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 612350)
    {
        $amount = 164709;
        $remaining = $taxableIncome - 612350;
        $taxPercentage = 0.37;
        $incTax = $amount + ($remaining * $taxPercentage);
    }

    return $incTax;

}

function incomeTaxMarriedSeparately($taxableIncome) {
    $incTax = 0.0;
        if ($taxableIncome >= 0 && $taxableIncome <= 9700)
    {
        $taxPercentage = 0.1;
        $incTax = ($taxableIncome * $taxPercentage);
    }
    elseif ($taxableIncome >= 9700 && $taxableIncome <= 39475)
    {
        $amount = 970;
        $remaining = $taxableIncome - 9700;
        $taxPercentage = 0.12;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 39475 && $taxableIncome <= 84200)
    {
        $amount = 4543;
        $remaining = $taxableIncome - 39475;
        $taxPercentage = 0.22;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 84200 && $taxableIncome <= 160725)
    {
        $amount = 14382.5;
        $remaining = $taxableIncome - 84200;
        $taxPercentage = 0.24;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 160725 && $taxableIncome <= 204100)
    {
        $amount = 32748.5;
        $remaining = $taxableIncome - 160725;
        $taxPercentage = 0.32;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 204100 && $taxableIncome <= 306175)
    {
        $amount = 46628.5;
        $remaining = $taxableIncome - 204100;
        $taxPercentage = 0.35;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 306175)
    {
        $amount = 82354.75;
        $remaining = $taxableIncome - 306175;
        $taxPercentage = 0.37;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    
    return $incTax;

}

function incomeTaxHeadOfHousehold($taxableIncome) {
    $incTax = 0.0;
        if ($taxableIncome >= 0 && $taxableIncome <= 13850)
    {
        $taxPercentage = 0.1;
        $incTax = ($taxableIncome * $taxPercentage);
    }
    elseif ($taxableIncome >= 13850 && $taxableIncome <= 52850)
    {
        $amount = 1385;
        $remaining = $taxableIncome - 13850;
        $taxPercentage = 0.12;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 52850 && $taxableIncome <= 84200)
    {
        $amount = 6065;
        $remaining = $taxableIncome - 52850;
        $taxPercentage = 0.22;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 84200 && $taxableIncome <= 160700)
    {
        $amount = 12962;
        $remaining = $taxableIncome - 84200;
        $taxPercentage = 0.24;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 160700 && $taxableIncome <= 204100)
    {
        $amount = 31322;
        $remaining = $taxableIncome - 160700;
        $taxPercentage = 0.32;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 204100 && $taxableIncome <= 510300)
    {
        $amount = 45210;
        $remaining = $taxableIncome - 204100;
        $taxPercentage = 0.35;
        $incTax = $amount + ($remaining * $taxPercentage);
    }
    elseif ($taxableIncome >= 510300)
    {
        $amount = 152380;
        $remaining = $taxableIncome - 510300;
        $taxPercentage = 0.37;
        $incTax = $amount + ($remaining * $taxPercentage);
    } else {
        echo "<h1>Something Wrong, not a valid input, please check!!!</h1>";
        return;
    }
    
    return $incTax;

}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HW4 Part1 - LastName</title>

  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">

    <h3>Income Tax Calculator</h3>

    <form class="form-horizontal" method="post">

        
        <div class="form-group">
            <label class="control-label col-sm-2" for="netIncome">Your Net Income:</label>
            <div class="col-sm-10">
            <input type="number" step="any" name="netIncome" placeholder="Taxable  Income" required autofocus>
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

        if (isset($_POST['netIncome']))
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

</div>

</body>
</html>