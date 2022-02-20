<?php

require_once('database.php');

// Get the student form data
$student= filter_input(INPUT_POST, 'student_id', FILTER_VALIDATE_INT);
$course = filter_input(INPUT_POST, 'course_id');

// Delete the student from the database
if ($student != FALSE && $course != NULL) {
    $query = 'DELETE FROM hz_students WHERE studentID = :student';
    $statement = $db->prepare($query);
    $statement->bindValue(':student', $student);
    $success = $statement->execute();
    $statement->closeCursor();    
}

//Call utilities function in the namespace
// course_utilities\deleteStudent($course_id, $student)

// Display the Home page
$course_id = $course;
include('index.php');