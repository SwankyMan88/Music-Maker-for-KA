/**
 * Crimson Castle - made with Songboard.
 * Vox tracks show their lyrics but only sing in Songboard.
**/
// Each line in songs is one song: paste in text from Songboard's Export Text to add one, delete a line to remove one.
var songs = [
    "EqFMCBOcC1CAA8xBgJB1DtBGBdvBGBhBx~LAz~LB1~LA3~LB5~LA7~LB9~LA/~LBhCGBdjC~LAl~LAn~LBp~LArCGBlBkDABpCtCADhBkDDA1BoBDBFvCAAJhCDA~PBt~nBBQAB5BxCDAV~jBBz~jBPpC1~gBF3~jCU5~jBF7~jCR9~gBF/~jCUhD~jBEjD~jCQl~gBFn~gBP~jCBp~jBFr~jBNDAx~MAAB~5BMDAh~ZP~vByOABhDmCDAtBoBABxBq~MBhCABZu~iVCABZyCDBlC~1SDZ2CDBB6CAAJoBDBd+CAAhBhCDBdiD~LA~7CFDo~rbEAtBwCAAx~8DB~ME~8EP~nBY~5GE~rCugB~kmBQ9C~wBE~qmBDl~RD~xmBc~+CCBR~3mBF~RE~9mBzjB~opBoCDoDAAR3BMAAMBlD/CAApD~PD1DkDAA5~PE~e/FlDyBMBB2~FA6~FA+BMBAGBBgCGBBi~FAk~FAm~FAo~FAq~FAs~KCDBBr~FAs~FAt~FAu~FAv~FAw~FAx~FAy~FAz~FA0~FA1~FA2~FA3~FA4~FA5~UCC~UA~FE4~FA5~FF6~FA7~FF8~FA9~FF+~FA/~FFgDCBBh~FFi~FAj~FFk~FAl~FEN~m8Cs+B~9mBs+B~rCldd8BDBB/~FAiCDBBl~FAo~mhFFu~ygFF0~+/EF6~FA9~FAgDDBBj~FAm~FApDDBNuDABpD6CMBlD~MQY~MCDpDkDJDuCAA/WgME9E/CG~ikFChD1CDE9C~RcB~hBMG~jC9B1D~jC9BtI~mE+B~sI+Bt~sI+B~jC/Bl~yM/BEkDG~h0FChD6~yBB~RcB~hBMG~jC9B1D~jC9BtI~mE+B~sI+Bt~sI+B~jC/Bl~yM/B~4QxQjME1E1~93GC~SAr~zBB~RcB~hBMG~jC9B1D~jC9BtI~mE+B~9pBphBDEl~whBrhB9F~gvD8BH1EkDMHAMHAPEtBAAgOgME9ByBGE4BGEoBGEkBGE0~QMC~gBaQ~fakE~gBaM~/Bb~+Db~gBc8~+Gb~/Db~9H4GmMEZt~/Ib8~iDbs~gCbkD~gBaZ~+Tc~hE6CmGEN3~gY0PGEA~6PzPHFyBAAdAvB9H8BwBvBc~FAoC~GAsCwrBvBxCm~PBk~gBBI~aB~LBw~XPHvBpB3~qCP~MA~XBM~FFEwNvB5B~4DQ~uBRQ/CpB1CDAqBoBAwcgGBhE8BDBYDBgBDBoBDBkBDBcDBU~Ve8C~PB~LA~TAc~nBC~kBC~VZ8C~MC~sCD~5CCk~2CD~VYkD~yDzB1Cy~mH/G0~rFC~kHuBsD~MC~sCD~6CDc~Ves~9I0B~kHzBjMB1Ct~rO9GjG~yVD~1DxB~nHD~gJuB0C~nQ0B~4c2B8~mHhH~zV1B9C1~hEG~2DqB9C9~8K0BlDl~rZ0B~qrBkO~2V5B~prBoFlC3~xVjO~kH1B~p2CpF~v9C1B~7jBoFImCDBQDBI~GB~JCY~PE~VPCAoBdArFAvBhBhCAvBYAvBgBwBvB0B~PD~woDC8~PAo~UBwBvBk~tBE~eC1B3~vBE~+BsBZvB1Bt~+B0B~tBI~8BC~eBg~tBG~rCK~8BJWxC6CYWYYWEYWcYKMMKgBMWYYQESEMGWUYWBm~hBCMYWUYKEMKY~gBBMSEEGWU4GvB1C~6EC~9FsD~3J2D~eH~yHtDy~6DwDE/C1EmCA/CgDA/CY~JABA/Co~FA~OCMGwBJAwOgMEhE/CGEYGKgBMCMD~DAE~GAEQGEIGEUGEcGEgB~jBBoBMEEGEMGCA~pBB~sBE~1BGY~sBB~pBBQG~aCKEMEU~/BB0BMEo~qCC~tDSkB~/BCY~dB~7CEKQMCcDCQ~DBYD~mEEcGKU~JBY~DBQGWgBYE0~tGmG4GCd6CDCIDCY~GBA~nCBU~GB0B~WBgBDCoBDCkBDCc~cEwB~+CB~4BF~1BFkC~yBCY~1BGU~4BBMDCgD~vBEQ~qDB~0FCUDC8~xBGg~mDC~4BDEDCg~/EIQ~1BHkC~1BTUjSEhB~zT0MYEk~tGnGCc~9ZvBo~6VC~wWC~9ZC~/DC0~zWU~1BM~9ZMo~uDG~mDCkB~9Z1BGB8B~0pCpBOHkBQAgKgMEhDmC~zKF~3GFU~oNBI~6OB~6MB~0NFMGEE~9OE~7JF~oNE~pLCKwBMEIG~ZCKEM~/QDK8~9OD~tDV~9ON~+CBKIM~JA~5LCgB~+OCMGEUGKc~+OB~7TCEI~5bG~vGlG4e~wGqG~/MrG~6oBC~vGlGNImBKAgOgYEhH3~nsBY~0vBsF9D1~0pCwB~3vB6EYEhE~mNrG~62CxB~mN5EDC4~u9CtGDEx~5ToG4GC9D/~mNtGVAqBTAglBgSDhB3BADYADgBGD1Bo~NI~aoClC~aAg~RA~aE~NF~aoCl~iEEoBGD9~iEE~NC~aoC~wGC~oD+C1B8~yKIt~NI~axC~iEC~aD~NC~auC~hHB~aE~NF~aoClC~wGiD~gNkD~wGC~yXF~aA~NF~aoCl~oQjD~gNiDm~nmBsC~hnBtKW5Bh~lkGYYD1Cy~kfIj~NI~auC~7OF~aA~NF~aoCt~aB~7OF~aA~NF~aoCl~4JB~zLF~iED~NC~anC~/4GPl~u7GG~vjGCtBr~RA~8lGG1B1~iBIDlD~m3B9Z~hN4MGDlBhC~8wBU~axC~0tBP~auC~06BS~aoClC~wGiD~mMzC~aN~wGC~89BS~aoC~wTF~4J7C~gNmD~hhC8M~ga5MvB9Bw~y7CGgD~0/IeaA0BYAsOgYHhBmCAHYAHgBJD0~tMEV~LGSH0B~hBBoBJ~q+CEoBV~LGSH8B~eAAHY~hBC~/UB~hBC~LBSHk~jDC~iCW~jDD~kEWkC~eA~jDB~WA~qOB~hBC~LBSHk~lFc~kEd1Br~qIhIyGWxC/~+iKZ4GHtD~uJiISH1Bw~qIjI~iCD~yQ/H1~yQhIiCH1HkDAHg~ED~vEBAHoBMH8I~XmBWJmBAAxEgGvBhE~7hL1BT~p6K3BNvB1~8CM~PB~tCGs~PA~tCH~hgLMh~n5EK~+BmBH~/hL8B~l+EN~7lLpB~0JL~6DrB~nHL~ttLjF~yiM4B~ttL5BB8BFAwBnBAJAXhE6CYX9CmCYXhD~Mc4vD/CxD6CdKoBUAwDsMBtFmCYBA~DmE4S~kD9CQ~gD5C|Crimson Castle|Drums|Gallop Bass|Triangle|Sub|Lead|Harmony|Saw|Choir|Chip ~7BB"
];


// Everything below plays the songs, there is nothing to change.
var sfx = (function () {
/**
*    --- SFX ENGINE ---
*
*    Code by SwankyMan
*   IIFE by LemonTurtle
*
* AudioContext made by Squishy
* Non ES6 and easy to use.
*
* Keep credits here. Do not remove.
* Credits in comments other than here are not necessary.
*
**/
function _SFX () { var mode = "value"; var iife = (function(a) { return this[a]; })(mode[4] + mode.slice(0, 3));
this.audioCtx = (0, iife)("new(window.AudioContext||window.webkitAudioContext)()"); this.context = this.audioCtx; this.sound = {}; this.active = [];
this.master = this.context.createGain(); this.master.gain.value = 0.4; this.eqLow = this.context.createBiquadFilter();
this.eqMid = this.context.createBiquadFilter(); this.eqHigh = this.context.createBiquadFilter(); this.eqLow.type = "lowshelf";
this.eqMid.type = "peaking"; this.eqHigh.type = "highshelf"; this.eqLow.frequency.value = 180; this.eqMid.frequency.value = 1100;
this.eqHigh.frequency.value = 4800; this.eqLow.gain.value = 0; this.eqMid.gain.value = 0; this.eqHigh.gain.value = 0; this.eqLow.connect(this.eqMid);
this.eqMid.connect(this.eqHigh); this.eqHigh.connect(this.master); this.master.connect(this.context.destination); } _SFX.prototype = {
pick: function (v, d) { if (!v) { return d; } if (v.length === 2) { return v[0] + random() * (v[1] - v[0]); } return v; }, track: function (n) {
this.active.push(n); var self = this; n.onended = function () { var i = self.active.indexOf(n); if (i !== -1) { self.active.splice(i, 1); } }; },
make: function (ctx, o) { var sr = ctx.sampleRate; var dur = o.dur || 0.2; var len = Math.floor(sr * dur); var buf = ctx.createBuffer(1, len, sr);
var out = buf.getChannelData(0); var fq1 = o.freq || 440; var fq2 = o.freqTo || fq1; var type = o.type || "sine"; var a = o.attack || 0.01;
var d = o.decay || 0.1; var s = o.sustain; if (s === undefined) { s = 0.5; } var r = o.release || 0.1; var g = o.gain || 0.8; var sum = a + d + r;
if (sum > 1) { var k = 1 / sum; a *= k; d *= k; r *= k; } var wob = o.wobble || null; var wobSp = wob ? wob.speed || 5 : 0;
var wobAmt = wob ? wob.amount || 10 : 0; var curF = (random() * 2) - 1; for (var i = 0; i < len; i++) { var t = i / sr; var tn = t / dur; var env;
if (tn < a) { env = tn / a; } else if (tn < a + d) { env = 1 - (1 - s) * ((tn - a) / d); } else if (tn < 1 - r) { env = s; } else {
env = s * (1 - ((tn - (1 - r)) / r)); } var f = fq1 + (fq2 - fq1) * tn; if (wob && type !== "noise") { f += Math.sin(t * wobSp * 6.283) * wobAmt; }
var v; if (type === "sine") { v = Math.sin(6.283 * f * t); } else if (type === "square") { v = Math.sin(6.283 * f * t) > 0 ? 1 : -1;
} else if (type === "triangle") { var ph = (t * f) % 1; v = 4 * Math.abs(ph - 0.5) - 1; } else if (type === "saw") { var ph2 = (t * f) % 1;
v = (ph2 * 2) - 1; } else if (type === "noise") { var n = (random() * 2) - 1; curF = curF * 0.98 + n * 0.02; var cutoff = fq1 + (fq2 - fq1) * tn;
if (cutoff < 0) { cutoff = 0; } var alpha = cutoff / (cutoff + sr); v = v = curF = curF + alpha * (n - curF); } else { v = 0; } out[i] = v * env * g;
} return buf; }, define: function (n, o) { this.sound[n] = { buf: this.make(this.context, o), eq: o.eq || null
}; }, stop: function () { while (this.active.length) { this.active.pop().stop(); } }, play: function (n, o) { o = o || {}; var s = this.sound[n];
if (!s) { return null; } if (s.eq) { if (s.eq.low !== undefined) { this.eqLow.gain.value = s.eq.low; }
if (s.eq.mid !== undefined) { this.eqMid.gain.value = s.eq.mid; } if (s.eq.high !== undefined) { this.eqHigh.gain.value = s.eq.high; } }
var rate = this.pick(o.rate, 1); var gain = this.pick(o.gain, 1); var pan = this.context.createStereoPanner();
var src = this.context.createBufferSource(); var vol = this.context.createGain(); src.loop = o.loop || false; src.buffer = s.buf;
src.playbackRate.value = rate; pan.pan.value = o.pan || 0; vol.gain.value = gain; src.connect(vol); vol.connect(pan); pan.connect(this.eqLow);
if (this.context.state === "suspended") { this.context.resume(); } src.start(this.context.currentTime + 0.001); this.track(src); return src; },
sequence: function (seq) { if (!seq || !seq.length) { return null; } var sr = this.context.sampleRate; var parts = []; var total = 0;
for (var i = 0; i < seq.length; i++) { var s = seq[i]; var d = Math.floor(sr * (s.delay || 0)); if (d > 0) { parts.push({ t: 0, f: d }); total += d; }
var snd = this.sound[s.name]; var b = snd ? snd.buf : null; if (!b) { continue; } parts.push({ t: 1, b: b, g: s.gain !== null ? s.gain : 1
}); total += b.length; } if (!total) { return null; } var out = this.context.createBuffer(1, total, sr); var dest = out.getChannelData(0); var i = 0;
for (var j = 0; j < parts.length; j++) { var p = parts[j]; if (p.t === 0) {
                i += p.f; // skip silence
} else { var d = p.b.getChannelData(0); var g = p.g; for (var k = 0; k < d.length; k++) { dest[i + k] += d[k] * g; } i += d.length; } }
var src = this.context.createBufferSource(); src.buffer = out; var gain = this.context.createGain(); gain.gain.value = 1; src.connect(gain);
gain.connect(this.master); src.start(0); this.track(src); return src; } }; return new _SFX();
})(); // SFX IIFE
sfx.define("hover", { dur: 0.1, freq: 240, freqTo: 430, type: "sine", attack: 0.02, decay: 0.9, sustain: 0.0, gain: 0.1 });
sfx.define("unhover", { dur: 0.05, freq: 400, freqTo: 240, type: "sine", attack: 0.02, decay: 0.9, sustain: 0.0, gain: 0.1 });
sfx.define("press", { dur: 0.05, freq: 400, freqTo: 480, type: "sine", attack: 0.02, decay: 0.9, sustain: 0.0, gain: 0.1 });
sfx.define("released", { dur: 0.07, freq: 480, freqTo: 370, type: "sine", attack: 0.02, decay: 0.9, sustain: 0.0, gain: 0.1 });

// The song engine: instruments, song text and building sounds.
var core = (function () {
var core = { ver: 4, res: 12 }; var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
core.insts = [
    0, 0,
    {"n":"Organ","g":"Keys","c":[214,139,77],"l":[{"w":"sin","g":0.26,"a":0.008,"r":0.06,"vb":[6.5,6,0]},{"w":"sin","m":2,"g":0.18,"a":0.008,"r":0.06,"vb":[6.5,6,0]},{"w":"sin","m":3,"g":0.12,"a":0.008,"r":0.06},{"w":"sin","m":4,"g":0.08,"a":0.008,"r":0.06},{"w":"sin","m":0.5,"g":0.14,"a":0.008,"r":0.06}]},
    {"n":"Harpsichord","g":"Keys","c":[201,167,112],"l":[{"w":"pls","pw":0.18,"g":0.24,"a":0.001,"d":0.7,"s":0,"r":0.12,"ft":"lp","fc":14,"fe":4,"fk":1,"fd":0.3},{"w":"saw","m":2,"g":0.06,"a":0.001,"d":0.3,"s":0,"r":0.1,"ft":"lp","fc":8,"fk":1}]},
    0,
    {"n":"Bell","g":"Keys","c":[188,224,238],"l":[{"w":"sin","g":0.32,"a":0.002,"d":2.4,"s":0,"r":1.2},{"w":"sin","m":2.76,"g":0.14,"a":0.002,"d":1.1,"s":0,"r":0.8},{"w":"sin","m":5.4,"g":0.07,"a":0.001,"d":0.5,"s":0,"r":0.4},{"w":"sin","m":8.93,"g":0.04,"a":0.001,"d":0.25,"s":0,"r":0.2}]},
    0,
    {"n":"Sub Bass","g":"Bass","c":[118,92,211],"l":[{"w":"sin","g":0.6,"a":0.005,"d":0.3,"s":0.9,"r":0.08},{"w":"tri","g":0.1,"a":0.005,"d":0.3,"s":0.8,"r":0.08}]},
    0,
    {"n":"Pluck Bass","g":"Bass","c":[158,129,239],"l":[{"w":"sqr","g":0.3,"a":0.002,"d":0.22,"s":0.15,"r":0.06,"ft":"lp","fc":9,"fe":1.5,"fk":1,"fd":0.07},{"w":"sin","g":0.3,"a":0.002,"d":0.4,"s":0.3,"r":0.06}]},
    0, 0,
    {"n":"Square Lead","g":"Lead","c":[83,199,157],"l":[{"w":"sqr","g":0.2,"a":0.005,"d":0.2,"s":0.8,"r":0.1,"vb":[5.5,14,0.25],"ft":"lp","fc":16,"fk":1}]},
    {"n":"Saw Lead","g":"Lead","c":[62,182,133],"l":[{"w":"saw","g":0.17,"a":0.006,"d":0.3,"s":0.8,"r":0.12,"ft":"lp","fc":10,"fk":1,"vb":[5.5,12,0.3]},{"w":"saw","dt":9,"g":0.13,"a":0.006,"d":0.3,"s":0.8,"r":0.12,"ft":"lp","fc":10,"fk":1,"vb":[5.5,12,0.3]}]},
    {"n":"Chip Pulse","g":"Lead","c":[104,221,121],"l":[{"w":"pls","pw":0.25,"g":0.18,"a":0.001,"d":0.12,"s":0.8,"r":0.03}]},
    {"n":"Chip Triangle","g":"Lead","c":[139,228,108],"l":[{"w":"tri","g":0.42,"a":0.001,"d":0.1,"s":1,"r":0.03,"qz":7}]},
    0, 0, 0, 0, 0,
    {"n":"Strings","g":"Pad","c":[107,121,219],"l":[{"w":"saw","dt":-7,"g":0.12,"a":0.28,"d":0.5,"s":0.85,"r":0.5,"ft":"lp","fc":6,"fk":1,"vb":[5,10,0.3]},{"w":"saw","dt":7,"g":0.12,"a":0.28,"d":0.5,"s":0.85,"r":0.5,"ft":"lp","fc":6,"fk":1,"vb":[5,10,0.3]},{"w":"saw","m":0.5,"g":0.06,"a":0.3,"d":0.5,"s":0.85,"r":0.5,"ft":"lp","fc":8,"fk":1}]},
    {"n":"Choir Pad","g":"Pad","c":[162,158,238],"l":[{"w":"saw","g":0.3,"a":0.35,"d":0.6,"s":0.9,"r":0.7,"ft":"bp","fc":720,"fq":0.6,"vb":[5,14,0.2]},{"w":"saw","dt":6,"g":0.2,"a":0.35,"d":0.6,"s":0.9,"r":0.7,"ft":"bp","fc":1150,"fq":0.6,"vb":[5,14,0.2]},{"w":"tri","g":0.08,"a":0.35,"d":0.6,"s":0.9,"r":0.7}]},
    0, 0, 0,
    {"n":"Brass","g":"Wind","c":[233,167,66],"l":[{"w":"saw","g":0.24,"a":0.035,"d":0.3,"s":0.85,"r":0.12,"ft":"lp","fc":1.2,"fe":7,"fk":1,"fd":0.07,"vb":[5.2,10,0.35]},{"w":"saw","dt":6,"g":0.12,"a":0.04,"d":0.3,"s":0.85,"r":0.12,"ft":"lp","fc":1.2,"fe":7,"fk":1,"fd":0.07,"vb":[5.2,10,0.35]}]},
    0,
    {"n":"Drum Kit","g":"Drums","c":[228,93,82],"k":"kit","kit":{"35":{"n":"Deep Kick","len":0.6,"l":[{"w":"sin","f":45,"g":0.9,"a":0.001,"d":0.3,"s":0,"r":0.05,"pe":[24,0.05]}]},"36":{"n":"Kick","len":0.45,"l":[{"w":"sin","f":50,"g":0.95,"a":0.001,"d":0.16,"s":0,"r":0.04,"pe":[30,0.03]},{"w":"noi","g":0.2,"a":0.001,"d":0.008,"s":0,"r":0.01,"ft":"lp","fc":4000}]},"37":{"n":"Rim","len":0.08,"l":[{"w":"tri","f":820,"g":0.5,"a":0.001,"d":0.012,"s":0,"r":0.02},{"w":"noi","g":0.2,"a":0.001,"d":0.006,"s":0,"r":0.01,"ft":"hp","fc":3000}]},"38":{"n":"Snare","len":0.3,"l":[{"w":"tri","f":185,"g":0.5,"a":0.001,"d":0.05,"s":0,"r":0.04,"pe":[8,0.015]},{"w":"noi","g":0.55,"a":0.001,"d":0.085,"s":0,"r":0.05,"ft":"hp","fc":1400}]},"39":{"n":"Clap","len":0.35,"l":[{"w":"noi","g":0.6,"a":0.001,"d":0.11,"s":0,"r":0.05,"ft":"bp","fc":1250,"fq":0.4,"bu":3}]},"41":{"n":"Low Tom","len":0.5,"l":[{"w":"sin","f":92,"g":0.75,"a":0.001,"d":0.22,"s":0,"r":0.05,"pe":[7,0.04]}]},"42":{"n":"Closed Hat","len":0.1,"l":[{"w":"noi","g":0.35,"a":0.001,"d":0.022,"s":0,"r":0.02,"ft":"hp","fc":7500}]},"44":{"n":"Pedal Hat","len":0.1,"l":[{"w":"noi","g":0.25,"a":0.004,"d":0.015,"s":0,"r":0.02,"ft":"hp","fc":6000}]},"45":{"n":"Mid Tom","len":0.45,"l":[{"w":"sin","f":128,"g":0.7,"a":0.001,"d":0.2,"s":0,"r":0.05,"pe":[7,0.04]}]},"46":{"n":"Open Hat","len":0.45,"l":[{"w":"noi","g":0.3,"a":0.001,"d":0.16,"s":0,"r":0.06,"ft":"hp","fc":7000}]},"48":{"n":"High Tom","len":0.4,"l":[{"w":"sin","f":170,"g":0.65,"a":0.001,"d":0.18,"s":0,"r":0.05,"pe":[7,0.04]}]},"49":{"n":"Crash","len":1.8,"l":[{"w":"noi","g":0.35,"a":0.001,"d":0.6,"s":0,"r":0.2,"ft":"hp","fc":4500},{"w":"sqr","f":410,"g":0.04,"a":0.001,"d":0.3,"s":0,"r":0.1,"ft":"hp","fc":3000}]},"51":{"n":"Ride","len":1.2,"l":[{"w":"noi","g":0.15,"a":0.001,"d":0.35,"s":0,"r":0.1,"ft":"hp","fc":8500},{"w":"sin","f":3150,"g":0.07,"a":0.001,"d":0.45,"s":0,"r":0.1}]}}},
    {"n":"8-Bit Kit","g":"Drums","c":[241,118,73],"k":"kit","kit":{"36":{"n":"Kick","len":0.3,"l":[{"w":"tri","f":60,"g":0.8,"a":0.001,"d":0.14,"s":0,"r":0.03,"pe":[30,0.03],"qz":8}]},"38":{"n":"Snare","len":0.25,"l":[{"w":"noi","nr":9000,"g":0.45,"a":0.001,"d":0.08,"s":0,"r":0.04},{"w":"tri","f":220,"g":0.3,"a":0.001,"d":0.04,"s":0,"r":0.03,"pe":[12,0.02],"qz":8}]},"39":{"n":"Clap","len":0.25,"l":[{"w":"noi","nr":7000,"g":0.5,"a":0.001,"d":0.08,"s":0,"r":0.04,"bu":3}]},"42":{"n":"Hat","len":0.08,"l":[{"w":"noi","nr":22000,"g":0.25,"a":0.001,"d":0.02,"s":0,"r":0.02,"ft":"hp","fc":5000}]},"45":{"n":"Tom","len":0.35,"l":[{"w":"tri","f":140,"g":0.6,"a":0.001,"d":0.15,"s":0,"r":0.04,"pe":[12,0.05],"qz":8}]},"46":{"n":"Open Hat","len":0.3,"l":[{"w":"noi","nr":22000,"g":0.22,"a":0.001,"d":0.12,"s":0,"r":0.04,"ft":"hp","fc":5000}]},"49":{"n":"Crash","len":1,"l":[{"w":"noi","nr":14000,"g":0.25,"a":0.001,"d":0.5,"s":0,"r":0.1}]},"50":{"n":"Blip","len":0.12,"l":[{"w":"sqr","f":880,"g":0.15,"a":0.001,"d":0.05,"s":0,"r":0.02,"pe":[12,0.01]}]}}},
    0, 0, 0, 0, 0, 0
];
core.freq = function (m) { return 440 * Math.pow(2, (m - 69) / 12); }; core.arr = function (ctx, n) {
return ctx.createBuffer(1, Math.max(1, n), ctx.sampleRate).getChannelData(0); }; core.blep = function (t, dt) {
if (t < dt) { t = t / dt; return t + t - t * t - 1; } if (t > 1 - dt) { t = (t - 1) / dt; return t * t + t + t + 1; } return 0; };
core.bend = function (gl, t) { var off = gl.s0; for (var i = 0; i < gl.p.length && t >= gl.p[i].at; i++) {
var u = Math.min(1, (t - gl.p[i].at) / gl.p[i].t); off += (gl.p[i].s - off) * (gl.p[i].c ? u * u * (3 - 2 * u) : u); } return off; };
core.secs = function (gl, sp) { var p = [];
for (var i = 0; i < gl.p.length; i++) { p.push({ at: gl.p[i].at * sp, s: gl.p[i].s, t: gl.p[i].t, c: gl.p[i].c }); } return { s0: gl.s0, p: p }; };
core.chain = function (notes, vox) { var spot = {}, i, n, to, h; for (i = 0; i < notes.length; i++) { n = notes[i];
n._bend = n._skip = n._in = n._head = null; spot[n.t + ":" + n.p] = n; } for (i = 0; i < notes.length; i++) { n = notes[i];
to = n.g && spot[(n.t + n.g.dt) + ":" + (n.p + n.g.dp)]; if (!to || to.t <= n.t || to._in) { continue; } to._in = n; h = vox ? n : n._head || n;
h._bend = h._bend || { len: h.l, gl: vox ? null : { s0: 0, p: [] } }; if (vox) { h._bend.len = Math.max(h._bend.len, to.t - n.t);
to._bend = { len: to.l, gl: { s0: n.p - to.p, p: [{ at: 0, s: 0, t: n.g.ms / 1000, c: n.g.c }] } }; } else {
h._bend.gl.p.push({ at: to.t - h.t, s: to.p - h.p, t: n.g.ms / 1000, c: n.g.c }); h._bend.len = to.t + to.l - h.t; to._skip = to._head = h; } } };
core.layerJob = function (ctx, out, L, base, hold, gl) { var sr = ctx.sampleRate, w = L.w || "sin", pw = L.pw || 0.5, step = L.nr ? sr / L.nr : 0;
var g = L.g === undefined ? 0.3 : L.g, s = L.s === undefined ? 1 : L.s;
var a = L.a || 0.002, d = L.d || 0.2, r = L.r || 0.05, damp = 1.4 - (L.fq || 0) * 1.25;
var f0 = (L.f || base * (L.m || 1)) * Math.pow(2, (L.dt || 0) / 1200);
var ph = 0, lo = 0, band = 0, cf = 0, held = 0, cnt = 0, nz = 0, y = null, dl = 0, burst = 0; var fc = (L.fc || 1000) * (L.fk ? f0 : 1);
var fe = (L.fe || L.fc || 1000) * (L.fk ? f0 : 1); if (w === "ks") { y = core.arr(ctx, out.length); dl = sr / f0 - 0.5; burst = Math.round(sr / f0); }
var i = 0; var run = function (n) { var end = Math.min(out.length, i + n); for (; i < end; i++) { var t = i / sr;
var e = t < a ? t / a : s + (1 - s) * Math.exp((a - t) / d); if (t > hold && (t - hold) / r >= 1) { i = out.length; break; }
if (t > hold) { e = e * (1 - (t - hold) / r); } if (L.bu && t < L.bu * 0.011) { e = e * (1 - (t / 0.011) % 1); }
var f = gl ? f0 * Math.pow(2, core.bend(gl, t) / 12) : f0; if (L.pe) { f = f * Math.pow(2, L.pe[0] * Math.exp(-t / L.pe[1]) / 12); }
if (L.vb && t > L.vb[2]) { var vr = Math.min(1, (t - L.vb[2]) / 0.3); f = f * Math.pow(2, L.vb[1] * vr * Math.sin(6.2832 * L.vb[0] * t) / 1200); }
var dp = f / sr, v = 0; if (w === "sin") { v = Math.sin(6.2832 * ph); } else if (w === "tri") { v = 4 * Math.abs(ph - 0.5) - 1;
} else if (w === "saw") { v = 2 * ph - 1 - core.blep(ph, dp); } else if (w === "sqr" || w === "pls") {
v = (ph < pw ? 1 : -1) + core.blep(ph, dp) - core.blep((ph + 1 - pw) % 1, dp); } else if (w === "noi") { if (!step) { v = Math.random() * 2 - 1;
} else { cnt--; if (cnt <= 0) { held = Math.random() * 2 - 1; cnt += step; } v = held; } } else if (w === "ks") {
if (i < burst) { nz += (L.br || 0.5) * (Math.random() * 2 - 1 - nz); v = nz; } var at = i - dl; if (at >= 1) { var i0 = Math.floor(at), fr = at - i0;
v += (L.dm || 0.996) * 0.5 * (y[i0] + (y[i0 + 1] - y[i0]) * fr + y[i0 - 1] + (y[i0] - y[i0 - 1]) * fr); } y[i] = v; } ph += dp;
if (ph >= 1) { ph -= Math.floor(ph); } if (L.qz) { v = Math.round(v * L.qz) / L.qz; } if (L.ft) { if (i % 32 === 0) {
var c = fe + (fc - fe) * Math.exp(-t / (L.fd || 0.2)); if (L.fl) { c = c * Math.pow(2, L.fl[1] * Math.sin(6.2832 * L.fl[0] * t)); }
c = Math.max(20, Math.min(c, sr * 0.16)); cf = 2 * Math.sin(3.1416 * c / sr); } lo += cf * band; var hi = v - lo - damp * band; band += cf * hi;
v = L.ft === "lp" ? lo : (L.ft === "hp" ? hi : band); } out[i] += v * e * g; } return i >= out.length; }; return { run: run }; };
core.layer = function (ctx, out, L, base, hold, gl) { core.layerJob(ctx, out, L, base, hold, gl).run(out.length); };
core.job = function (ctx, ins, midi, sec, gl) { var pc = !ins || ins.k === "vox" ? null : (ins.k === "kit" ? ins.kit[midi] : ins);
if (!pc) { return { buf: null, step: function () { return true; } }; } var ls = pc.l, hold = pc.len || Math.min(sec, 30), tail = 0, k = 0, cur = null;
for (var i = 0; i < ls.length; i++) { tail = Math.max(tail, ls[i].r || 0.05); }
var buf = ctx.createBuffer(1, Math.ceil((hold + tail) * ctx.sampleRate) + 1, ctx.sampleRate); var step = function (n) { while (k < ls.length) {
cur = cur || core.layerJob(ctx, buf.getChannelData(0), ls[k], core.freq(midi), hold, gl); if (!cur.run(n)) { return false; } cur = null; k++; }
return true; }; return { buf: buf, step: step }; }; core.render = function (ctx, ins, midi, sec, gl) { var j = core.job(ctx, ins, midi, sec, gl);
j.step(1e9); return j.buf; }; core.key = function (id, p, sec, ins) { ins = ins || core.insts[id];
if (ins && ins.k === "kit") { return id + ":" + p; } return id + ":" + p + ":" + Math.round(sec * 1000); }; core.insOf = function (tr) {
return (tr.x && tr.x.ins) || core.insts[tr.inst]; }; core.setup = function (sfx) { if (sfx.comp) { return sfx.comp; }
var c = sfx.context.createDynamicsCompressor(); var cfg = { threshold: -12, knee: 12, ratio: 4, attack: 0.004, release: 0.2 };
for (var k in cfg) { c[k].value = cfg[k]; } sfx.master.disconnect(); sfx.master.connect(c); c.connect(sfx.context.destination);
sfx.master.gain.value = 0.7; sfx.comp = c; return c; }; core.fire = function (sfx, buf, when, gain, pan, dest) {
var ctx = sfx.context, now = ctx.currentTime; var src = ctx.createBufferSource(), vol = ctx.createGain(), p = ctx.createStereoPanner();
src.buffer = buf; vol.gain.value = gain; p.pan.value = pan || 0; src.connect(vol); vol.connect(dest || p); p.connect(sfx.eqLow);
src.start(Math.max(when, now), Math.max(0, Math.min(now - when, buf.duration))); sfx.track(src); return src; }; core.uz = function (n) {
return n % 2 ? -(n + 1) / 2 : n / 2; }; core.get = function (r) { var n = 0, m = 1; while (r.i < r.s.length) { var c = abc.indexOf(r.s.charAt(r.i));
r.i++; if (c < 0) { break; } n += (c % 32) * m; if (c < 32) { return n; } m *= 32; } throw "Bad song text"; }; core.unpack = function (s) {
var a = [], r = { s: s, i: 0 }; while (r.i < s.length) { if (s.charAt(r.i) !== "~") { a.push(s.charAt(r.i)); r.i++; continue; } r.i++;
var st = a.length - core.get(r), l = core.get(r) + 4; if (st < 0) { throw "Bad song text"; } for (var k = 0; k < l; k++) { a.push(a[st + k]); } }
return a.join(""); }; core.decode = function (txt) { var parts = core.unpack(String(txt).replace(/^\s+|\s+$/g, "")).split("|");
var r = { s: parts[0], i: 0 }; var get = function () { return core.get(r); }; var str = function (k) { return k ? parts[k] || "" : ""; };
var ver = get(); if (ver < 1 || ver > core.ver) { throw "Unknown song version"; }
var song = { bpm: get(), res: get(), vis: 0, title: "", tracks: [] }; if (ver > 1) { song.vis = get(); } song.title = str(get()); var nt = get();
for (var i = 0; i < nt; i++) { var inst = get(), ins = core.insts[inst], nm = get();
var tr = { inst: inst, name: nm ? str(nm) : (ins ? ins.n : "Missing"), vol: get(), pan: core.uz(get()), notes: [] }; var fl = get(), nn = get();
tr.mute = (fl & 1) > 0; tr.solo = (fl & 2) > 0; if (fl & 8) { tr.x = JSON.parse(str(get()).replace(/'/g, "\"")); }
var pt = 0, pp = 60, pv = 100, flags = ver > 3 ? 4 : 2; for (var j = 0; j < nn; j++) {
var t = pt + get(), l = get() + 1, q = get(), p = pp + core.uz(Math.floor(q / flags)); var v = q % 2 ? get() : pv;
var g = flags > 2 && q % 4 > 1 ? { dt: get(), dp: core.uz(get()), ms: get() * 10, c: get() } : null;
tr.notes.push(g ? { t: t, l: l, p: p, v: v, g: g, w: fl & 4 ? str(get()) : "" } : { t: t, l: l, p: p, v: v, w: fl & 4 ? str(get()) : "" }); pt = t;
pp = p; pv = v; } song.tracks.push(tr); } return core.scrubSong(song); };
core.bad = "107jhhh.107rsy8.10waom7.112hsmb.1172ikv.11fpj3m.11ju5d4.11p2bdc.11urwl8.12f2kpg.12hqpqd.12i5580.12szyde.12tovkk.12u5kst.12vr8y3.133xteh.13apgup.13b1dem.13jd5md.13oofxt.146yz8k.1492re3.14s396c.151dk3l.155as7r.1592vuy.15hdxb1.15jzvsm.15muqqb.15nyaht.15pf3vp.15te2yh.15z0mdk.162rg5q.164m6rs.16k6h0c.16kvtvp.16w5pqu.16zrpsd.170i6eh.1721ub4.172xcc3.1737df2.176c9on.178g884.17bsuiz.17fyo34.17kiht.17p98j4.17sgpiu.17v8asg.17yc18d.185fz52.18g2433.18gsltn.18h2btd.18hphur.18i5ilq.18ikhwx.18jiv5r.18lwbi9.18pth0q.18sgw7y.191tgrr.19877ev.19bu3l6.19jah75.19l4ml1.19mq3kb.19ua0gf.19zvd0l.1a5whbx.1a97h00.1abv700.1al9fyb.1ap00hb.1aqa68w.1axrg2x.1b29fqy.1b59cek.1b8er1q.1bi5687.1bixwm8.1bltint.1bww2sq.1c5aqad.1ceiknh.1cik77i.1cmqo98.1cqmt20.1d3nuxf.1d55v6n.1d5geml.1d5lvym.1d6wapq.1d7hk5z.1d9ndv4.1dbnhhm.1dcjhel.1denpd9.1di95q2.1dob5ky.1domlmu.1dr3pff.1duk6cs.1dul8ad.1e3e35r.1einnix.1eqg3to.1euu98y.1f26gde.1f4a70h.1f6phzh.1f72kkr.1f807jn.1f8lpjj.1fdwk1o.1fj5aik.1fq7tuv.1fus052.1fz0gy2.1fzfx10.1g0i1w0.1g1lh9u.1g4ficb.1g5ubpe.1ghci7k.1gl0iqq.1gswi5a.1gue6i3.1gx1cbg.1h3u0ui.1h837n3.1hcbcs0.1hcnyvg.1hgd66q.1hpa1ju.1i1m89v.1i4ry1h.1i6yx4m.1i8ggyx.1id4871.1ii7hdn.1ij94dr.1ijcair.1iofwiv.1ixie7o.1j23jdz.1j7xwb0.1jde7ye.1jk4flt.1jx5pew.1k27s6v.1kinay0.1kko0sq.1knvf6q.1kv9x42.1l54spn.1l6sep7.1l7j6ev.1lbyfg7.1lrq1lx.1m3dq2h.1mi8fzd.1mra301.1mv0gaa.1n2oaiv.1nch3pn.1ncv1w1.1ndj3vx.1ne7f4i.1nm0c0x.1noi5fp.1o7x2m.1oc2yb9.1odocrb.1ok2ny9.1on8mc0.1osjr5h.1ov1mt2.1oxh42.1oxxczb.1p1xpn0.1p2jlzb.1p3xymt.1p655ce.1p9g2cp.1pa6tii.1pd8nj7.1pf6brn.1pp2a7j.1pu3oao.1q88zdt.1qb2rcd.1qg2wos.1r6fmy3.1ra7fem.1rdwwz7.1rprjpk.1rr1tv3.1ryftn6.1sdb0qe.1slclk2.1ssurko.1t3mnpt.1t4gpw1.1t9s3df.1tg2c7z.1tiw1l1.1twy4wi.1tx7zjn.1tyjf4t.1u5zhyx.1ua7epq.1ud04oq.1ut1fxf.1uuid8l.1uv3u8a.1v15mw8.1v7wxly.1v9n1m4.1vbyeri.1vdq821.1vezp6r.1vfoexp.1vh3izn.1vhmt0q.1vjer53.1vkst03.1w023a8.1w19dvj.1w4x5di.1wldqtj.1wr1fa2.1wxc8kd.1x3d1sm.1x5qeq4.1x6njys.1x7crwi.1x88zkv.1xa06tw.1xbrwjg.1xe066m.1xjo543.1xsrzhy.1y1twbx.1y33gh9.1y58z5x.1y6gdjh.1y862fw.1ydkjpj.1yfjnxl.1yhfn8z.1yxdoot.2370gs.28j37d.2bnvjc.2bon8l.2fe19c.2fyr6c.2g7og7.2mmg68.2nu0y5.2rrpq3.2usybl.2xekcn.2xvm4t.301ulb.30z26m.34v0vl.35th8s.3jyd4s.3nbn6o.3p227i.44ei3t.47vng.4b8cgr.4bzeto.4jeqml.4lfoze.4pokc0.4tufag.4wglb9.51ljc5.54d6zb.54s9ej.563zq9.5i3gv3.5puqgj.5vdji5.65rrx5.66nfv3.6fnkq9.6ifsgj.6ijj3w.6jw8dg.6scrvh.7510m6.7ab6mj.7m0xbc.7na9wt.7ujy6d.7vfe4r.89704n.8al0kl.8bh5lc.8cpx7q.8g43xb.8gsein.8p6iwn.8s4nsv.911zfg.93e97y.9agk1z.9i0gl4.9iwrm5.9w2feu.9y530h.agnmz0.ainwr6.apobnb.aq3qm3.b6k5dr.b8wxs.ba1tsc.bbt3wv.bis58l.bs865u.bsqd6i.bwt4vg.c4py20.c6rdvk.c8hfa4.ct1bv0.d0odpm.d2j7al.d32icz.d3ff1k.dld66l.dq0tm8.du6u5f.dvtly9.e33iio.eitcli.eqt7uz.erpjbo.etjk71.exf6yq.f83d3n.fa2edc.fe0kzl.fis1yt.fng5ve.frfc11.fyybrz.g1c2u4.g1uz9x.g2qie1.g666mz.g78mlf.g9pc91.gfiyp3.gol2nf.gsd79i.gv2zxe.gv6okf.gw9p15.gwgjjh.h20mxn.he518w.her12x.hfixyk.hn8uya.hs9efq.hubb1w.i06gk8.i2xdjj.i3zuzs.i4gn4e.i5mwme.iieimc.ikb409.inv7cz.io9zxc.izbw35.jafpuc.jiobok.jk7e1r.jmogj2.jqm35a.jslb6a.jzj1zm.khabx5.kninjd.l4uofv.lbcxuv.leozy3.lfsgss.li2akc.li87ti.lndm8u.lns0wq.lohxj0.loprma.m3yfij.m4mggh.mcjcq1.me9zd8.mhldmc.mmv0im.mw8peg.n309i3.nebb7f.nfnixo.nicrlu.nmgfs7.nnrz4w.nuyuhw.nwogmw.nypbtf.o9mogn.oarvw7.odc2n3.ofudeg.ofw2ce.ohfmkx.oj3vy0.oo0vh1.orsuxp.ot085a.oxhd8v.p93p0i.phy0p.pjdoe3.pjmmbu.q85hix.qcw0dr.qf1pse.r4tzvx.r5lrj7.r6hm5m.rna8kp.rp6oz2.rt9w4k.s1npx3.s44jk0.s8afuz.sbno01.sbp3wx.sfcoam.sjaobi.slpsy1.srzdxe.sua42r.sz441d.t47cyv.tc7awc.tck1iz.tfqhhc.u0qae0.u7c76c.u911y7.ud0o7x.ueqhyo.ujcxlj.uuqt52.v8bptk.vavt10.vbvl0d.vjorto.vn9i1t.vx65bx.vxaiiq.vyxlph.w1637m.w1uxol.w6837n.w8r4iv.wj07af.wju1io.wnps5q.wqk7yg.x1lb4g.x1uwsg.x5npvf.x85t53.xdrq72.xouvsz.xp0kvt.xtgafz.y1zqw9.y56odr.y6izwn.y7fpf9.y7hrn7.y9imcn.yh1e5n.ymp8ym.z27xie.zc7fxd.zdlwnf.zf3jkn.zl80xr.zmnvau.znvjvm.zrljof.ztihu7.zwo2rc";
core.badN = 6; core.norm = function (s) { s = String(s || "").toLowerCase().replace(/0/g, "o").replace(/1/g, "i").replace(/3/g, "e");
s = s.replace(/4/g, "a").replace(/5/g, "s").replace(/7/g, "t").replace(/@/g, "a").replace(/\$/g, "s");
return s.replace(/[^a-z ]/g, "").replace(/\s+/g, " ").replace(/^ | $/g, ""); }; core.hash = function (s) { var h = 2166136261; s = "sb7q" + s;
for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24); h = h >>> 0; }
return h.toString(36); }; core.isBad = function (s) { if (!core.badSet) { core.badSet = {}; var hs = core.bad.split(".");
for (var i = 0; i < hs.length; i++) { core.badSet[hs[i]] = true; } } s = core.norm(s);
if (core.badSeen[s] === undefined) { core.badSeen[s] = !!s && !!(core.badSet[core.hash(s)] || core.badSet[core.hash(s.replace(/ /g, ""))]); }
return core.badSeen[s]; }; core.badSeen = {}; core.badRuns = function (words) { var hit = [], at = [], ws = [];
for (var a = 0; a < words.length; a++) { if (words[a]) { at.push(a); ws.push(String(words[a])); } } for (var i = 0; i < ws.length; i++) {
var run = ""; for (var k = 0; k < core.badN + 2 && i + k < ws.length; k++) { run += (k && !/-$/.test(ws[i + k - 1]) ? " " : "") + ws[i + k];
if (!core.isBad(run)) { continue; } for (var j = i; j <= i + k; j++) { hit[at[j]] = true; } } } return hit; }; core.scrub = function (text) {
var words = String(text || "").split(/\s+/); var hit = core.badRuns(words); var out = []; for (var i = 0; i < words.length; i++) {
if (!hit[i] && words[i]) { out.push(words[i]); } } return out.join(" "); }; core.scrubSong = function (song) { song.title = core.scrub(song.title);
for (var i = 0; i < song.tracks.length; i++) { var tr = song.tracks[i]; tr.name = core.scrub(tr.name);
tr.notes.sort(function (x, y) { return x.t - y.t || x.p - y.p; }); var ws = []; for (var j = 0; j < tr.notes.length; j++) { ws.push(tr.notes[j].w); }
var hit = core.badRuns(ws); for (var k = 0; k < tr.notes.length; k++) { tr.notes[k].w = hit[k] ? "" : tr.notes[k].w; } } return song; }; return core;
})();


// The player: loading, visuals, lyrics and controls.
var list = typeof songs !== "undefined" ? songs : [song]; var names = [], bufs = {}, at = 0, menu = false, over = false, U = width / 400;
var data, spt, look, evs, notes, sing, jobs, parts, lev, tint, lo, hi, total, done, base, pos, idx, vi, kick, state, foot;
var bySt = function (x, y) { return x.s - y.s; }; core.setup(sfx); for (var q = 0; q < list.length; q++) { names.push("Song " + (q + 1)); }
var named = 0; var prep = function (n) { sfx.stop(); at = n; data = core.decode(list[n]); spt = 60 / (data.bpm * data.res);
look = (typeof visuals !== "undefined" && visuals[n]) || data.vis || 1; evs = []; notes = []; sing = []; jobs = []; parts = []; lev = []; tint = [];
var seen = {}; lo = 127; hi = 0; total = 0; done = 0; base = 0; pos = 0; idx = 0; vi = 0; kick = 0; state = "load"; var solo = false;
for (var a = 0; a < data.tracks.length; a++) { solo = solo || data.tracks[a].solo; } for (var ti = 0; ti < data.tracks.length; ti++) {
var tr = data.tracks[ti], ins = core.insOf(tr), prev = "", ly = [], own = tr.x && tr.x.ins ? "c" + ti : "";
var on = !tr.mute && (!solo || tr.solo), dest = tr.x && tr.x.fx && core.fx ? core.fx(sfx, tr.x.fx, tr.pan / 50) : null;
if (ins && ins.k !== "kit") { core.chain(tr.notes, ins.k === "vox"); } for (var ni = 0; ins && ni < tr.notes.length; ni++) {
var nt = tr.notes[ni], s = nt.t * spt, e = (nt.t + nt.l) * spt, vox = ins.k === "vox", b = nt._bend;
var d = b ? b.len * spt : e - s, gl = b && b.gl ? core.secs(b.gl, spt) : null; total = max(total, e);
notes.push({ s: s, e: e, p: nt.p, c: ins.c, kit: ins.k === "kit", tr: ti, v: nt.v / 127, pan: tr.pan / 50 });
lo = ins.k === "kit" ? lo : min(lo, nt.p); hi = ins.k === "kit" ? hi : max(hi, nt.p);
if (vox && !seen[round(s * 100) + nt.w]) { ly.push({ s: s, e: e, w: nt.w }); }
var k = (vox ? "v" + tr.inst + nt.w + ":" + prev + ":" + (tr.notes[ni + 1] || {}).w + nt.p + ":" + round(d * 1000) : own + core.key(tr.inst, nt.p, d, ins)) + (gl ? JSON.stringify(gl) : "");
var pw = prev; if (vox && !/^[-_+]?$/.test(nt.w)) { prev = nt.w; } if (!on || nt._skip || (vox && !core.vox)) { continue; }
if (bufs[k] === undefined) { bufs[k] = null; jobs.push({ k: k, ins: ins, p: nt.p, d: d, w: nt.w, pw: pw, tl: tr.notes, nt: nt, gl: gl }); }
evs.push({ s: s, k: k, g: tr.vol / 100 * nt.v / 127, pan: tr.pan / 50, to: dest }); }
for (var sl = 0; sl < ly.length; sl++) { seen[round(ly[sl].s * 100) + ly[sl].w] = true; }
if (ly.length && sing.length < 3) { sing.push({ l: ly, c: ins.c }); } } foot = 104 + max(0, sing.length - 1) * 22; evs.sort(bySt); notes.sort(bySt);
lo = hi < lo ? 60 : lo; hi = hi < lo ? 72 : hi; }; prep(0); var clock = function (t) { t = max(0, t); var sc = floor(t % 60);
return floor(t / 60) + ":" + (sc < 10 ? "0" : "") + sc; }; var col = function (c, al) { fill(c[0], c[1], c[2], al); };
var lit = function (n) { return state === "play" && pos >= n.s && pos < max(n.e, n.s + 0.12); }; var go = function (p) { sfx.context.resume();
sfx.stop(); base = sfx.context.currentTime + 0.12 - p; pos = p; idx = vi = 0; parts = []; while (idx < evs.length && evs[idx].s < p) { idx++; }
while (vi < notes.length && notes[vi].s < p) { vi++; } state = "play"; }; var halt = function () { sfx.stop(); state = "stop"; };
var toggle = function () { if (state === "play") { halt(); sfx.play("released"); } else if (state === "stop") { sfx.play("press");
go(pos >= total ? 0 : pos); } }; var drRoll = function () { var top = 64 * U, bot = height - foot * U, cx = width * 0.3;
var rh = (bot - top - 26 * U) / max(12, hi - lo + 1); for (var i = 0; i < notes.length; i++) { var n = notes[i]; var x1 = cx + (n.s - pos) * 110 * U;
var x2 = cx + (n.e - pos) * 110 * U; if (x2 < 0 || x1 > width) { continue; } col(n.c, lit(n) ? 255 : 140); if (n.kit) {
var lane = n.p < 37 ? 0 : n.p < 41 ? 1 : n.p < 49 && n.p !== 42 && n.p !== 44 && n.p !== 46 ? 2 : 3;
rect(x1, bot - (14 + lane * 7) * U, max(3, min(x2 - x1, 7 * U)), 5 * U, 2); } else {
rect(x1, top + 6 * U + (hi - n.p) * rh, max(2, x2 - x1 - 1), max(2, rh - 1), 2); } } stroke(255, 255, 255, 110); line(cx, top, cx, bot); noStroke();
}; var drBars = function () { var nb = 32, bw = width / nb, bot = height - (foot + 8) * U, tall = bot - 74 * U;
for (var i = 0; i < notes.length && notes[i].s <= pos; i++) { var n = notes[i]; if (!lit(n)) { continue; }
var b = n.kit ? (n.p < 37 ? 0 : n.p < 41 ? 1 : n.p === 42 || n.p === 44 || n.p === 46 ? 3 : 2) : floor((n.p - lo) / (hi - lo + 1) * (nb - 4)) + 4;
lev[b] = lev[b] || {}; lev[b][n.tr] = max(lev[b][n.tr] || 0, (n.kit ? 0.9 : 1 - (pos - n.s) * 0.4) * (0.45 + 0.55 * n.v)); tint[n.tr] = n.c; }
for (var j = 0; j < nb; j++) { var row = lev[j] || {}, on = []; for (var t in row) { if (row[t] > 0.01) { on.push(t); } } if (!on.length) {
col([96, 183, 247], 230); rect(j * bw + 2, bot - 3 * U, bw - 4, 3 * U, 3); } var sw = (bw - 4) / max(1, on.length);
for (var k = 0; k < on.length; k++) { var h = row[on[k]] * tall + 3 * U, x = j * bw + 2 + k * sw; col(tint[on[k]], 230);
rect(x, bot - h, max(1, sw - (on.length > 1 ? 1 : 0)), h, 3); col(tint[on[k]], 45);
rect(x, bot + 4 * U, max(1, sw - (on.length > 1 ? 1 : 0)), h * 0.3, 3); row[on[k]] *= 0.9; } } }; var drOrbit = function () {
var cx = width / 2, cy = height / 2 - 34 * U, R = min(width, height) * 0.3;
var bar = 240 / data.bpm, st = floor(pos / bar) * bar, nt = data.tracks.length; noFill(); stroke(255, 255, 255, 30);
for (var t = 0; t < nt; t++) { ellipse(cx, cy, R * (0.6 + 1.4 * (t + 1) / nt), R * (0.6 + 1.4 * (t + 1) / nt)); } noStroke();
for (var i = 0; i < notes.length; i++) { var n = notes[i]; if (n.s < st || n.s >= st + bar) { continue; }
var ang = (n.s - st) / bar * TWO_PI - PI / 2; var r = R * (0.3 + 0.7 * (n.tr + 1) / nt); var sz = (lit(n) ? 8 + 10 * n.v : 7) * U;
col(n.c, lit(n) ? 255 : 150); ellipse(cx + cos(ang) * r, cy + sin(ang) * r, sz, sz); } var hand = (pos - st) / bar * TWO_PI - PI / 2;
stroke(252, 214, 105); strokeWeight(2); line(cx, cy, cx + cos(hand) * R * 1.05, cy + sin(hand) * R * 1.05); strokeWeight(1); noStroke(); };
var drStars = function () { var cx = width / 2, cy = height / 2 - 34 * U; while (state === "play" && vi < notes.length && notes[vi].s <= pos) {
var n = notes[vi]; var hiP = (n.p - lo) / (hi - lo + 1), boom = n.kit && n.p < 37; var ang = n.kit ? random(0, TWO_PI) : hiP * TWO_PI;
if (boom) { kick = max(kick, n.v); } for (var j = 0; j < (boom ? 0 : n.kit ? 2 : 2 + round(n.v * 5)) && parts.length < 500; j++) {
var sp = (n.kit ? random(3, 5) : random(0.8, 1.6) + hiP * 2.6) * U; var a2 = ang + random(-0.25, 0.25);
parts.push({ x: cx, y: cy, vx: cos(a2) * sp + n.pan * U, vy: sin(a2) * sp, c: n.c, life: 1, z: n.kit ? 3 : 4 + (1 - hiP) * 8 }); } vi++; }
col([96, 183, 247], 40 + kick * 90); ellipse(cx, cy, (40 + kick * 45) * U, (40 + kick * 45) * U); kick *= 0.88;
for (var i = parts.length - 1; i >= 0; i--) { var q = parts[i]; q.x += q.vx; q.y += q.vy; q.life -= 0.012; if (q.life <= 0) { parts.splice(i, 1);
continue; } col(q.c, q.life * 255); ellipse(q.x, q.y, q.z * U * q.life + 2, q.z * U * q.life + 2); } }; var drLyrics = function () { textSize(17 * U);
textAlign(LEFT, CENTER); for (var li = 0; li < sing.length; li++) {
var ly = sing[li].l, c = sing[li].c, y = height - (82 + (sing.length - 1 - li) * 22) * U; var k = -1, words = [], x = width / 2;
for (var i = 0; i < ly.length && ly[i].s <= pos + 0.05; i++) { k = i; } for (var j = max(0, k - 3); j < ly.length && words.length < 7; j++) {
if (/^[-_+]?$/.test(ly[j].w)) { continue; } var glue = words.length && !/-$/.test(words[words.length - 1].w);
words.push({ j: j, w: ly[j].w, t: (glue ? " " : "") + ly[j].w.replace(/-$/, "") }); }
for (var a = 0; a < words.length; a++) { x -= textWidth(words[a].t) / 2; } for (var b = 0; b < words.length; b++) {
var now = state === "play" && words[b].j === k && pos < ly[k].e + 0.3;
fill(now ? c[0] : (words[b].j < k ? 150 : 226), now ? c[1] : (words[b].j < k ? 154 : 228), now ? c[2] : (words[b].j < k ? 168 : 235));
text(words[b].t, x, y); x += textWidth(words[b].t); } } }; var drUi = function () {
var by = height - 40 * U, bar = (width - 86 * U) * constrain(pos / max(total, 0.01), 0, 1); textAlign(LEFT, CENTER); fill(236, 238, 243);
textSize(18 * U); text((data.title || "Untitled") + (list.length > 1 ? "  \u25BE" : ""), 16 * U, 24 * U); fill(141, 148, 163); textSize(12 * U);
text(data.bpm + " BPM", 16 * U, 46 * U); textAlign(RIGHT, CENTER); text(clock(pos) + " / " + clock(total), width - 16 * U, 46 * U);
fill(over ? 120 : 96, over ? 198 : 183, 247); ellipse(34 * U, by, 40 * U, 40 * U); fill(21, 23, 29);
rect(27 * U, by - 8 * U, 5 * U, state === "play" ? 16 * U : 0); rect(36 * U, by - 8 * U, 5 * U, state === "play" ? 16 * U : 0);
triangle(29 * U, by - 9 * U, 29 * U, by + 9 * U, state === "play" ? 29 * U : 43 * U, by); fill(46, 51, 63);
rect(66 * U, by - 4 * U, width - 86 * U, 8 * U, 4); fill(96, 183, 247); rect(66 * U, by - 4 * U, bar, 8 * U, 4); if (!menu) { return; }
fill(31, 34, 42, 245); rect(10 * U, 38 * U, 250 * U, list.length * 24 * U + 8 * U, 6); textAlign(LEFT, CENTER); textSize(14 * U);
for (var m = 0; m < list.length; m++) { fill(m === at ? 252 : 226, m === at ? 160 : 228, m === at ? 216 : 235);
text(names[m], 22 * U, 54 * U + m * 24 * U); } }; var looks = [drRoll, drRoll, drBars, drOrbit, drStars]; draw = function () { background(21, 23, 29);
noStroke(); if (named < list.length) { names[named] = core.decode(list[named]).title || names[named]; named++; } if (state === "load") {
var t0 = millis(); while (done < jobs.length && millis() - t0 < 12) { var j = jobs[done], ji = j.ins; if (ji.k === "vox") {
bufs[j.k] = core.vox(sfx.context, j.w, j.p, j.d, j.pw, ji.vx, j.tl, j.nt, j.gl); done++; continue; }
j.r = j.r || core.job(sfx.context, ji, j.p, j.d, j.gl); if (j.r.step(3000)) { bufs[j.k] = { buf: j.r.buf, pre: 0 }; done++; } }
state = done >= jobs.length ? "stop" : state; fill(226, 228, 235); textSize(15 * U); textAlign(CENTER, CENTER);
text("Building sounds...", width / 2, height / 2 - 20 * U); fill(46, 51, 63); rect(width / 2 - 100 * U, height / 2, 200 * U, 8 * U, 4);
fill(96, 183, 247); rect(width / 2 - 100 * U, height / 2, 200 * U * done / max(1, jobs.length), 8 * U, 4); return; } if (state === "play") {
pos = sfx.context.currentTime - base; while (idx < evs.length && evs[idx].s < pos + 0.4) { var ev = evs[idx], b = bufs[ev.k];
if (b && b.buf && ev.s > pos - 0.03) { core.fire(sfx, b.buf, base + ev.s - b.pre, ev.g, ev.pan, ev.to); } idx++; } if (pos > total + 0.6) { halt();
pos = 0; } } (looks[look] || drRoll)(); drLyrics(); drUi(); }; mouseClicked = function () { var row = floor((mouseY - 42 * U) / (24 * U));
if (menu || (mouseY < 36 * U && list.length > 1)) { if (menu && mouseX < 260 * U && row >= 0 && row < list.length) { prep(row); } menu = !menu;
return; } if (state === "load") { return; } var p = constrain((mouseX - 66 * U) / (width - 86 * U), 0, 1) * total;
var seek = mouseY > height - 56 * U && mouseX > 60 * U; if (!seek) { toggle(); } else if (state === "play") { go(p); } else { pos = p; } };
mouseMoved = function () { var now = dist(mouseX, mouseY, 34 * U, height - 40 * U) < 21 * U; if (now !== over) { over = now;
sfx.play(over ? "hover" : "unhover"); } }; keyPressed = function () { if (keyCode === 32) { toggle(); } };
