// Publishes index.html as a script (js/page.js), so a copy running on Khan Academy can load its own original page.
// Run with: node tools/build-page.js (after any change to index.html, before tagging a release).
var fs = require("fs");

var html = fs.readFileSync(__dirname + "/../index.html", "utf8").replace(/\r/g, "");
fs.writeFileSync(__dirname + "/../js/page.js", "window.songboardPage = " + JSON.stringify(html) + ";\n");
console.log("js/page.js written, " + html.length + " characters");
