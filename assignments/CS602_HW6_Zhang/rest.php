<?php
    require_once('database.php');

// rest.php?format=format_type&action=courses
// rest.php?format=format_type&action=students&course=id

//rest.php?format=xml&action=courses
//rest.php?format=json&action=courses
//rest.php?format=xml&action=students&course=cs602
//rest.php?format=json&action=students&course=cs602

$format = strtolower(filter_input(INPUT_GET, 'format'));
$action = strtolower(filter_input(INPUT_GET, 'action'));
$course = strtolower(filter_input(INPUT_GET, 'course'));

if($format == "json" ){
    if($action == "courses"){
        // Get all courses
        $queryAllCourses = 'SELECT * FROM hz_courses ORDER BY courseID ASC';
        $coursesStatement = $db->prepare($queryAllCourses);
        $coursesStatement->execute();
        $courses = $coursesStatement->fetchAll();
        $coursesStatement->closeCursor();

        $array = array();
        foreach ($courses as $course) {
            $temp = array("courseID" => $course["courseID"], "courseName" => $course["courseName"]);
            array_push($array, $temp);
        }

        if($courses) echo json_encode($array, JSON_PRETTY_PRINT);
        if(!$courses) {
            header('HTTP/1.1 404 Not Found');
            $_GET['e'] = 404; 
            $error = "Something goes wrong! Invalid course!";
            include 'error.php';
            exit; 
        }
    } elseif ($action == "students"){
        // Get students for selected course
        $queryStudents = 'SELECT * FROM hz_students WHERE courseID = :course_id ORDER BY studentID';
        $studentStatement = $db->prepare($queryStudents);
        $studentStatement->bindValue(':course_id', $course);
        $studentStatement->execute();
        $students = $studentStatement->fetchAll();
        $studentStatement->closeCursor();

        $array = array();
        foreach ($students as $student) {
            $temp = array("studentID" => $student["studentID"], "courseID" => $student["courseID"], "firstName" => $student["firstName"], "lastName" => $student["firstName"], "email" => $student["email"]);
            array_push($array, $temp);
        }

        if($students) echo json_encode($array, JSON_PRETTY_PRINT);
        if(!$students) {
            header('HTTP/1.1 404 Not Found');
            $_GET['e'] = 404; 
            $error = "Something goes wrong! Invalid course!";
            include 'error.php';
            exit; 
        }
    } else {
        header('HTTP/1.1 404 Not Found');
        $_GET['e'] = 404; 
        $error = "Something goes wrong! Invalid action!";
        include 'error.php';
        exit; 
    }

} elseif ($format == "xml" ){
    if($action == "courses"){
        // Get all courses
        $queryAllCourses = 'SELECT * FROM hz_courses ORDER BY courseID ASC';
        $coursesStatement = $db->prepare($queryAllCourses);
        $coursesStatement->execute();
        $courses = $coursesStatement->fetchAll();
        $coursesStatement->closeCursor();

		$node = 'courses';
        $course = 'course';
        $courseID = "courseID";
        $courseName = "courseName";

        $dom = new DOMDocument('1.0','UTF-8');
        $dom->preserveWhiteSpace = true;
        $dom->formatOutput = true;

        $root = $dom->createElement($node);
        $dom->appendChild($root);

        foreach ($courses as $each) {
            $course_tag = $dom->createElement($course);
            $root->appendChild($course_tag);

            $course_id = $dom->createElement($courseID, $each["courseID"]);
            $course_tag->appendChild($course_id);

            $course_name = $dom->createElement($courseName, $each["courseName"]);
            $course_tag->appendChild($course_name);
        }

        echo '<xmp>'. $dom->saveXML() .'</xmp>';
        // $dom->save('result.xml') or die('XML Create Error');

    } elseif ($action == "students"){
        // Get students for selected course
        $queryStudents = 'SELECT * FROM hz_students WHERE courseID = :course_id ORDER BY studentID';
        $studentStatement = $db->prepare($queryStudents);
        $studentStatement->bindValue(':course_id', $course);
        $studentStatement->execute();
        $students = $studentStatement->fetchAll();
        $studentStatement->closeCursor();

        $node = 'students';
        $student = 'student';
        $studentID = "studentID";
        $courseID = "courseID";
        $firstName = "firstName";
        $lastName = "lastName";
        $email = "email";

        $dom = new DOMDocument('1.0','UTF-8');
        $dom->preserveWhiteSpace = true;
        $dom->formatOutput = true;

        $root = $dom->createElement($node);
        $dom->appendChild($root);

        foreach ($students as $each) {
            $student_tag = $dom->createElement($student);
            $root->appendChild($student_tag);

            $student_id = $dom->createElement($studentID, $each["studentID"]);
            $student_tag->appendChild($student_id);

            $course_id = $dom->createElement($courseID, $each["courseID"]);
            $student_tag->appendChild($course_id);

            $student_fname = $dom->createElement($firstName, $each["firstName"]);
            $student_tag->appendChild($student_fname);

            $student_lname = $dom->createElement($lastName, $each["lastName"]);
            $student_tag->appendChild($student_lname);

            $student_email = $dom->createElement($email, $each["email"]);
            $student_tag->appendChild($student_email);
        }

        if($students) echo '<xmp>'. $dom->saveXML() .'</xmp>';
        if(!$students) {
            header('HTTP/1.1 404 Not Found');
            $_GET['e'] = 404; 
            $error = "Something goes wrong! Invalid course!";
            include 'error.php';
            exit; 
        }
    }  else {
        header('HTTP/1.1 404 Not Found');
        $_GET['e'] = 404; 
        $error = "Something goes wrong! Invalid action!";
        include 'error.php';
        exit; 
    }
} else {
    header('HTTP/1.1 404 Not Found');
    $_GET['e'] = 404; 
    $error = "Something goes wrong! Invalid format!";
    include 'error.php';
    exit; 
}

?>