const employeeDB = require("../employeeDB.js");
const Employee = employeeDB.getModel();

module.exports = async (req, res, next) => {
  // Fill in the code

  try {
    const id = req.body.id;
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    // await Employee.findOneAndUpdate({ _id: id }, { firstName, lastName });
    // res.redirect("/employees");
    Employee.findById(id, (err, data) => {
      if (err) throw err;
      if (!data) return res.render("404");
      data.firstName = firstName;
      data.lastName = lastName;
      data.save((err) => {
        if (err) throw err;
        res.redirect("/employees");
      });
    });
  } catch (error) {
    res.render("404");
  }
};
