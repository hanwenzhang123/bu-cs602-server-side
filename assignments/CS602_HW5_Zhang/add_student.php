<?php
    // Get the student form data
    $course = filter_input(INPUT_POST, 'course_id', FILTER_SANITIZE_STRING);
    $firstName = filter_input(INPUT_POST, 'first_name', FILTER_SANITIZE_STRING);
    $lastName = filter_input(INPUT_POST, 'last_name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);

    // Validate student inputs
    if ($course == null || $firstName == null || $lastName == null || $email == null || $course == false || $firstName == false || $lastName == false || $email == false) {
        $error = "Invalid student data. Check all fields and try again.";
        include('error.php');
    } else {
        require_once('database.php');

        // Add the student to the database  
        $query = 'INSERT INTO hz_students (courseID, firstName, lastName, email)
                    VALUES (:course_id, :first_name, :last_name, :email)';
        $statement = $db->prepare($query);
        $statement->bindValue(':course_id', $course);
        $statement->bindValue(':first_name', $firstName);
        $statement->bindValue(':last_name', $lastName);
        $statement->bindValue(':email', $email);
        $statement->execute();
        $statement->closeCursor();
    }
    
    // Display the Student List page
    $course_id = $course;
    include('index.php');
?>