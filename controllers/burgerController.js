var express = require("express");

var router = express.Router();

// Import the model (ormModels.js) to use its database functions.
var ormFunction = require("../models/ormModels.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  ormFunction.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  ormFunction.create([
    "name", "eaten"
  ], [
    req.body.name, req.body.eaten
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var eatenStatus = "id = " + req.params.id;

  console.log("eatenStatus", eatenStatus);

  ormFunction.update({
    eaten: req.body.eaten
  }, eatenStatus, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/api/burgers/:id", function(req, res) {
//   var eatenStatus = "id = " + req.params.id;

//   ormFunction.delete(eatenStatus, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
