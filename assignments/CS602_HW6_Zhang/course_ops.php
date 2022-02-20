<?php 
namespace course_utilities;
require_once('database.php');

function deleteStudent($course_id, $student_id){
    global $db;

    if ($student_id != false && $course_id != null) {
        $query = 'DELETE FROM hz_students WHERE studentID = :student_id';
        $statement = $db->prepare($query);
        $statement->bindValue(':student_id', $student_id);
        $success = $statement->execute();
        $statement->closeCursor();    
    }
}

?>