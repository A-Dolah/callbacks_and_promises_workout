const path = require("path");

module.exports = {
  // entry: ["./callback.js", "./promises.js"],
  entry: "./theProject.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  mode: "development",
  watch: true
};
