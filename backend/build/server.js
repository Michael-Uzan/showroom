"use strict";
var express = require("express");
var dotenv = require("dotenv");
var app = express();
dotenv.config();
// start the server
app.listen(process.env.BACK_PORT, function () {
    console.log("server running : http://".concat(process.env.BACK_HOST, ":").concat(process.env.BACK_PORT));
});
// Please note that to access an env variable, follow the syntax:
// process.env.NAME_OF_YOUR_VARIABLE_DECLARED_IN_THE_ENV_FILE
//# sourceMappingURL=server.js.map