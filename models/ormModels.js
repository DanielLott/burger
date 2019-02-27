// Import the ORM to create functions that will interact with our specific database.
var orm = require("../config/orm.js");

var burgerTracker = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (eatenProperty_P1, idEqualsVal_P1, cb) {
        orm.update("burgers", eatenProperty_P1, idEqualsVal_P1, function (res) {
            cb(res);
        });
    }

};

module.exports = burgerTracker;