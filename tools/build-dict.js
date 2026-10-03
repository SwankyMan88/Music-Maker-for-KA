/*
* Packs CMUdict into js/voice-dict.js for the HD voices.
* Run with: node tools/build-dict.js path/to/cmudict.dict path/to/LICENSE
*
* Each word keeps its first pronunciation. Every sound becomes one character,
* vowels come in a stressed and an unstressed form (secondary stress counts as stressed).
*/
var fs = require("fs");

var cons = "B CH D DH F G HH JH K L M N NG P R S SH T TH V W Y Z ZH".split(" ");
var vows = "AA AE AH AO AW AY EH ER EY IH IY OW OY UH UW".split(" ");
var syms = cons.concat(vows, vows.map(function (v) { return v + "0"; }));
var marks = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_`{|}~";

var src = fs.readFileSync(process.argv[2], "utf8").split("\n");
var license = fs.readFileSync(process.argv[3], "utf8").trim();
var out = [];
var seen = {};

src.forEach(function (line) {
    var bits = line.split("#")[0].trim().split(/\s+/);
    var word = bits.shift();
    if (!word || !/^[a-z']+$/.test(word) || seen[word]) {
        return;
    }
    var code = bits.map(function (p) {
        var name = /[02]$/.test(p) ? (p.slice(-1) === "0" ? p : p.slice(0, -1)) : p.replace(/1$/, "");
        var k = syms.indexOf(name);
        if (k < 0) {
            throw new Error("Unknown sound " + p + " in " + word);
        }
        return marks.charAt(k);
    }).join("");
    seen[word] = true;
    out.push(word + code);
});

var text = [
    "/*",
    "* Pronunciations from the CMU Pronouncing Dictionary (cmudict), packed for the HD voices.",
    "* Source: https://github.com/cmusphinx/cmudict",
    "*",
    license.split("\n").map(function (l) { return "* " + l; }).join("\n").replace(/ +$/gm, ""),
    "*/",
    "voice.addDict(\"" + syms.join(" ") + "\", \"" + marks.slice(0, syms.length) + "\", \"" + out.join("") + "\");",
    ""
].join("\n");

fs.writeFileSync(__dirname + "/../js/voice-dict.js", text);
console.log(out.length + " words, " + text.length + " characters");
