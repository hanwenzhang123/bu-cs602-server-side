Encapsulation - not effective outside of the class, not public exposed like ssn
Abstraction - model something, further refine/generalize the concept
Inheritance
Polymorphism  - many forms

A class is a blueprint
class defines the attributes and behaviors that all objects derived from the class will have
class must define the basic building blocks of the objects

instance is when you create something based on that class
  
constructor -> things you want to assign to your attributes within your class
	with constructor, you can set the initial value without using setter
	for immutability if with no setter
  

include
require
include once  //only load once
require once  //only load once


object operation ->
  
  $dog1 = new Dog();
  $dog1->setName("Rhett");
	$dog1->setBreed("Boston Terrier");
	$dog1->setFriendly(TRUE);


//access modifier
public - can be accessed by other classes
private - limited the class in which it is declared
protected - only accessible in the class which declared and in class that extend to that class
  
final - can not be overridden by a subclass
abstract - prohibit a class from being created directly, must be extended in order to be utilized


//static
no instance, belong to the entier ecosystem
static can only access to static, you have to create static function to access to the static
static is not instance variables, can not be changed through non-static
static belongs to the no instance of the class, shares along with the whole instance, not for instance variables
good for constances


//instance
by default, interface is public, you can not declare anything static
folder for interface, a folder for class

An interface can contain methods and constants, but can not contain any variables.

interface Vehicle {}
class Car implements Vehicle {}

interface Shape {}
class Square implements Shape {}
class Triangle implements Shape {}


//namespace
- a way of encapsulating items
- a hierarchically labeled code block holding a regular PHP code


//PDO vs MySQLi
PDO - PHP Data Objects (better)
MYSQLi - object oriented


//MVC
model view controller
model - data/object
view - what the user sees, UI
controller - CRUD


//abstract
PHP has abstract classes and methods. 
Classes defined as abstract cannot be instantiated 
any class that contains at least one abstract method must also be abstract. 

 
