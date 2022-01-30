const employeeDB = require("../employeeDB.js");
const Employee = employeeDB.getModel();

module.exports = async (req, res, next) => {
  // Fill in the code

  const firstName = req.body.fname;
  const lastName = req.body.lname;

  let newEmployee = new Employee({
    firstName: firstName,
    lastName: lastName,
  });

  try {
    await newEmployee.save();
  } catch (error) {
    console.log(error);
    res.render("404");
  }

  res.redirect("/employees");
};
