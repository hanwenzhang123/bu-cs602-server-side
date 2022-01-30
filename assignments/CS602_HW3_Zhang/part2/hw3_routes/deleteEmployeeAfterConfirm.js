const employeeDB = require("../employeeDB.js");
const Employee = employeeDB.getModel();

module.exports = async (req, res, next) => {
  // Fill in the code
  try {
    const id = req.body.id || req.query.id;
    // await Employee.findOneAndDelete({ _id: id });
    // res.redirect("/employees");
    Employee.findById(id, (err, employee) => {
      if (err) throw err;
      if (!employee) return res.render("404");

      employee.remove((err) => {
        if (err) throw err;
        res.redirect("/employees");
      });
    });
  } catch (error) {
    console.log(error);
    res.render("404");
  }
};
