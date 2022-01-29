const employeeDB = require("../employeeDB.js");
const Employee = employeeDB.getModel();

module.exports = async (req, res, next) => {
  // Fill in the code
  const id = req.params.id;

  Employee.findOne({ _id: id }, (err, data) => {
    if (err) res.render("404");
    if (!data) {
      res.render("404");
    } else {
      res.render("editEmployeeView", {
        title: "Edit an Employee",
        data: {
          id: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
        },
      });
    }
  });
};
