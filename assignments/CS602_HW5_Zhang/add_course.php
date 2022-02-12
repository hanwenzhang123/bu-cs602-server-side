<?php

// Get the course form data

$course = strtolower(filter_input(INPUT_POST, 'course_id', FILTER_SANITIZE_STRING));
$title = filter_input(INPUT_POST, 'course_name', FILTER_SANITIZE_STRING);

//Input validation

if ($course == null || $title == null || $course == false || $title == false) {
    $error = "Invalid course data. Check all fields and try again.";
    include('error.php');
} else {

    require_once('database.php');

    // Add the course to the database  
    $query = 'INSERT INTO hz_courses (courseID, courseName) VALUES (:course, :title)';
    $statement = $db->prepare($query);
    $statement->bindValue(':course', $course);
    $statement->bindValue(':title', $title);
    $statement->execute();
    $statement->closeCursor();

}

    // Display the Course List page
    $course_id = $course;
    include('course_list.php');
?>