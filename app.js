const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
