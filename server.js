const express = require("express");
const app = express();
const response = require('./backend/API/res')
app.get("/", (req, res) => {
    res.send(response());
});
app.listen(8080, () => {
        console.log("app is listening on port 8080");
        console.log(response());
});
