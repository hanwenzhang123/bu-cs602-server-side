<?php
    require_once('database.php');
    
// Get all courses
$queryAllCourses = 'SELECT * FROM hz_courses ORDER BY courseID ASC';
$coursesStatement = $db->prepare($queryAllCourses);
$coursesStatement->execute();
$courses = $coursesStatement->fetchAll();
$coursesStatement->closeCursor();

if (!isset($course_id)) {
    $course_id = filter_input(INPUT_GET, 'course_id');
    if ($course_id == NULL || $course_id == FALSE){
        $course_id = $courses[0]["courseID"];
    } else if (!$course_id) {
        header('HTTP/1.1 404 Not Found');
        $_GET['e'] = 404; 
        $error = "Something goes wrong! Invalid course!";
        include 'error.php';
        exit; 
    }
}

// Get name for selected course
$queryCourse = 'SELECT * FROM hz_courses WHERE courseID = :course_id';
$courseStatement = $db->prepare($queryCourse);
$courseStatement->bindValue(':course_id', $course_id);
$courseStatement->execute();
$course = $courseStatement->fetch();
$course_number = $course['courseID'];
$course_name = $course['courseName'];
if (!$course_number || !$course_name) {
  header('HTTP/1.1 404 Not Found');
  $_GET['e'] = 404; 
  $error = "Something goes wrong! Invalid course!";
  include 'error.php';
  exit; 
}
$courseStatement->closeCursor();

// Get students for selected course
$queryStudents = 'SELECT * FROM hz_students WHERE courseID = :course_id ORDER BY studentID';
$studentStatement = $db->prepare($queryStudents);
$studentStatement->bindValue(':course_id', $course_id);
$studentStatement->execute();
$students = $studentStatement->fetchAll();
$studentStatement->closeCursor();
?>

<!DOCTYPE html>
<html>

<!-- the head section -->
<head>
    <title>My Course Manager</title>
    <link rel="stylesheet" type="text/css" href="main.css" />
</head>

<!-- the body section -->
<body>
<header><h1>Course Manager</h1></header>
<main>
    <center><h1>Student List</h1></center>

    <aside>
        <!-- display a list of Courses -->
        <h2>Courses</h2>
        <nav>
        <ul>
            <?php foreach ($courses as $course) : ?>
            <li>
                <a href="./index.php?course_id=<?php echo $course['courseID']; ?>">
                    <?php echo $course['courseID']; ?>
                </a>
            </li>
            <?php endforeach; ?>
        </ul>
        </nav>          
    </aside>

    <section>
        <!-- display a table of Students -->
        <h2><?php echo $course_number . " - " . $course_name ?></h2>
        
        <table>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>&nbsp;</th>
            </tr>

            <?php foreach ($students as $student) : ?>
            <tr>
                <td><?php echo $student['firstName']; ?></td>
                <td><?php echo $student['lastName']; ?></td>
                <td><?php echo $student['email']; ?></td>
                <td><form action="delete_student.php" method="post">
                    <input type="hidden" name="student_id"
                           value="<?php echo $student['studentID'] ?>">
                    <input type="hidden" name="course_id"
                           value="<?php echo $student['courseID'] ?>">
                    <input type="submit" value="Delete">
                </form></td>
            <?php endforeach; ?>
            </tr>

        </table>

        <p><a href="add_student_form.php">Add Student</a></p>

        <p><a href="course_list.php">List Courses</a></p>    

    </section>
</main>

<footer>
    <p>&copy; <?php echo date("Y"); ?> Hanwen Zhang</p>
</footer>
</body>
</html>