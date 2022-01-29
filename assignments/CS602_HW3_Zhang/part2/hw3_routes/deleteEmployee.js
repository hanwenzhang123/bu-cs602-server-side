const employeeDB = require("../employeeDB.js");
const Employee = employeeDB.getModel();

module.exports = async (req, res, next) => {
  // Fill in the code
  let id = req.params.id;

  Employee.findOne({ _id: id }, (err, data) => {
    if (err) res.render("404");
    if (!data) {
      res.render("404");
    } else {
      res.render("deleteEmployeeView", {
        title: "Delete an Employee",
        data: {
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });
    }
  });
};
