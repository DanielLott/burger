// Import the ORM to create functions that will interact with our specific database.
var orm = require("../config/orm.js");

var burgerTracker = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (eatenProperty_P1, idEqualsVal_P1, cb) {
        orm.update("burgers", eatenProperty_P1, idEqualsVal_P1, function (res) {
            cb(res);
        });
    },
    //   delete: function(eatenStatus, cb) {
    //     orm.delete("burgers", eatenStatus, function(res) {
    //       cb(res);
    //     });
    //   }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burgerTracker;
