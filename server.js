__path = process.cwd();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 8080 || 5000 || 3000;
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__path + '/views/index.html')
});
app.get("/flower", (req, res) => {
  res.sendFile(__path + '/views/flower.html')
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;