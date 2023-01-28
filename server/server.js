const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;

app.use(cors());
// app.use(express.json());
app.use(require("./routes/routes"));

app.listen(port, () => {
    // perform a database connection when server starts
    console.log(`Server is running on port: ${port}`);
});