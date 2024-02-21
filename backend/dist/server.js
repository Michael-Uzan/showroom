const express = require("express");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
// start the server
app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});
// Please note that to access an env variable, follow the syntax:
// process.env.NAME_OF_YOUR_VARIABLE_DECLARED_IN_THE_ENV_FILE
//# sourceMappingURL=server.js.map