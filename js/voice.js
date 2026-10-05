// Vox: a small formant singer.
// Words get turned into sounds (phonemes), then sung on the note's pitch through a buzz source and three vocal tract filters.
// No downloads needed.
var voice = {
    ph: {
        IY: { f: [270, 2290, 3010] },
        IH: { f: [390, 1990, 2550] },
        EH: { f: [530, 1840, 2480] },
        AE: { f: [660, 1720, 2410] },
        AA: { f: [730, 1090, 2440] },
        AO: { f: [570, 840, 2410] },
        UH: { f: [440, 1020, 2240] },
        UW: { f: [300, 870, 2240] },
        AH: { f: [640, 1190, 2390] },
        ER: { f: [490, 1350, 1690] },
        EY: { f: [530, 1840, 2480], to: [300, 2200, 2900] },
        AY: { f: [730, 1090, 2440], to: [300, 2200, 2900] },
        OW: { f: [570, 840, 2410], to: [320, 800, 2240] },
        AW: { f: [730, 1090, 2440], to: [320, 800, 2240] },
        OY: { f: [570, 840, 2410], to: [300, 2200, 2900] },
        MM: { f: [280, 1000, 2200], a: 0.45 },
        AX: { f: [500, 1450, 2450] },
        L: { k: "son", f: [360, 1300, 2700], d: 0.06 },
        R: { k: "son", f: [420, 1300, 1600], d: 0.06 },
        W: { k: "son", f: [300, 610, 2200], d: 0.05 },
        Y: { k: "son", f: [280, 2250, 2900], d: 0.05 },
        M: { k: "nas", f: [250, 1100, 2200], d: 0.08 },
        N: { k: "nas", f: [250, 1700, 2600], d: 0.08 },
        NG: { k: "nas", f: [250, 2100, 2700], d: 0.08 },
        S: { k: "fri", f: [280, 1700, 2600], nf: 6000, q: 1.6, na: 0.55, d: 0.11 },
        Z: { k: "fri", f: [280, 1700, 2600], nf: 6000, q: 1.6, na: 0.4, v: 1, d: 0.09 },
        SH: { k: "fri", f: [280, 1900, 2400], nf: 3000, q: 1.6, na: 0.65, d: 0.11 },
        ZH: { k: "fri", f: [280, 1900, 2400], nf: 3000, q: 1.6, na: 0.45, v: 1, d: 0.09 },
        F: { k: "fri", f: [300, 1000, 2300], nf: 5500, q: 0.7, na: 0.25, d: 0.09 },
        V: { k: "fri", f: [300, 1000, 2300], nf: 5500, q: 0.7, na: 0.16, v: 1, d: 0.07 },
        TH: { k: "fri", f: [300, 1400, 2600], nf: 5800, q: 0.7, na: 0.2, d: 0.08 },
        DH: { k: "fri", f: [300, 1400, 2600], nf: 5000, q: 0.7, na: 0.1, v: 1, d: 0.05 },
        HH: { k: "asp", d: 0.07 },
        P: { k: "plo", f: [220, 900, 2200], nf: 900 },
        B: { k: "plo", f: [220, 900, 2200], nf: 900, v: 1 },
        T: { k: "plo", f: [240, 1700, 2600], nf: 4500 },
        D: { k: "plo", f: [240, 1700, 2600], nf: 4500, v: 1 },
        K: { k: "plo", f: [260, 1900, 2500], nf: 2200 },
        G: { k: "plo", f: [260, 1900, 2500], nf: 2200, v: 1 },
        CH: { k: "aff", f: [280, 1900, 2400] },
        JH: { k: "aff", f: [280, 1900, 2400], v: 1 }
    },

    // Voice settings: fs formant scale (bigger = smaller, brighter head), op / cl glottal open and closing time, br breath, tl tone (1 = bright), vr / vd vibrato rate and depth in semitones.
    norm: { fs: 1, op: 0.4, cl: 0.16, br: 0.04, tl: 0.62, vr: 5.5, vd: 0.3 },

    dict: {
        a: "AH", i: "AY", im: "AY M", the: "DH AH", you: "Y UW", your: "Y AO R", youre: "Y AO R",
        me: "M IY", my: "M AY", mine: "M AY N", we: "W IY", be: "B IY", he: "HH IY", she: "SH IY",
        they: "DH EY", them: "DH EH M", there: "DH EH R", their: "DH EH R", this: "DH IH S",
        that: "DH AE T", these: "DH IY Z", those: "DH OW Z", then: "DH EH N", than: "DH AE N",
        to: "T UW", too: "T UW", two: "T UW", do: "D UW", who: "HH UW", into: "IH N T UW",
        of: "AH V", from: "F R AH M", for: "F AO R", are: "AA R", was: "W AH Z", were: "W ER",
        is: "IH Z", has: "HH AE Z", have: "HH AE V", give: "G IH V", live: "L IH V", love: "L AH V",
        above: "AH B AH V", come: "K AH M", some: "S AH M", done: "D AH N", one: "W AH N",
        none: "N AH N", gone: "G AO N", what: "W AH T", want: "W AA N T", where: "W EH R",
        when: "W EH N", why: "W AY", how: "HH AW", now: "N AW", know: "N OW", no: "N OW",
        go: "G OW", so: "S OW", oh: "OW", ooh: "UW", oo: "UW", ah: "AA", yeah: "Y EH", la: "L AA",
        na: "N AA", da: "D AA", hey: "HH EY", baby: "B EY B IY", heart: "HH AA R T", night: "N AY T",
        light: "L AY T", eyes: "AY Z", eye: "AY", said: "S EH D", says: "S EH Z", again: "AH G EH N",
        away: "AH W EY", world: "W ER L D", only: "OW N L IY", every: "EH V R IY", very: "V EH R IY",
        never: "N EH V ER", ever: "EH V ER", forever: "F ER EH V ER", together: "T AH G EH DH ER",
        music: "M Y UW Z IH K", song: "S AO NG", sing: "S IH NG", dream: "D R IY M", dance: "D AE N S",
        feel: "F IY L", fall: "F AO L", all: "AO L", call: "K AO L", sky: "S K AY", fly: "F L AY",
        cry: "K R AY", try: "T R AY", by: "B AY", day: "D EY", say: "S EY", way: "W EY", stay: "S T EY",
        play: "P L EY", see: "S IY", free: "F R IY", sea: "S IY", sun: "S AH N", moon: "M UW N",
        star: "S T AA R", stars: "S T AA R Z", fire: "F AY ER", time: "T AY M", home: "HH OW M",
        hold: "HH OW L D", old: "OW L D", girl: "G ER L", boy: "B OY", good: "G UH D", could: "K UH D",
        would: "W UH D", should: "SH UH D", look: "L UH K", book: "B UH K", put: "P UH T",
        hello: "HH AH L OW", little: "L IH T AH L", people: "P IY P AH L", heaven: "HH EH V AH N",
        maybe: "M EY B IY", tonight: "T AH N AY T", alone: "AH L OW N", break: "B R EY K",
        great: "G R EY T", head: "HH EH D", ready: "R EH D IY", friend: "F R EH N D", any: "EH N IY",
        many: "M EH N IY", been: "B IH N", dont: "D OW N T", cant: "K AE N T", wont: "W OW N T",
        its: "IH T S", lets: "L EH T S", mm: "MM", hmm: "HH MM", uh: "AH", whoa: "W OW", yo: "Y OW",
        lo: "L OW", tle: "T AH L", hel: "HH EH L", ty: "T IY", ry: "R IY", ny: "N IY", by: "B AY",
        ple: "P AH L", ble: "B AH L", ver: "V ER", der: "D ER", ter: "T ER", ing: "IH NG",
        through: "TH R UW", though: "DH OW", thought: "TH AO T", nothing: "N AH TH IH NG",
        beautiful: "B Y UW T IH F AH L", believe: "B IH L IY V", open: "OW P AH N", over: "OW V ER",
        lonely: "L OW N L IY", color: "K AH L ER", wanna: "W AA N AH", gonna: "G AH N AH",
        gotta: "G AA T AH", water: "W AO T ER", tomorrow: "T AH M AA R OW", city: "S IH T IY",
        yesterday: "Y EH S T ER D EY", rhythm: "R IH DH AH M", alright: "AO L R AY T", bye: "B AY",
        goodbye: "G UH D B AY", wonder: "W AH N D ER", mother: "M AH DH ER", brother: "B R AH DH ER",
        other: "AH DH ER", another: "AH N AH DH ER", cause: "K AO Z", because: "B IH K AO Z",
        money: "M AH N IY", honey: "HH AH N IY", body: "B AA D IY", party: "P AA R T IY",
        woman: "W UH M AH N", women: "W IH M AH N", word: "W ER D", work: "W ER K", heard: "HH ER D",
        learn: "L ER N", earth: "ER TH", move: "M UW V", lose: "L UW Z", whole: "HH OW L",
        soul: "S OW L", always: "AO L W EY Z", remember: "R IH M EH M B ER", forget: "F ER G EH T",
        inside: "IH N S AY D", outside: "AW T S AY D", in: "IH N", out: "AW T", up: "AH P",
        it: "IH T", on: "AA N", at: "AE T", an: "AE N", and: "AE N D", as: "AE Z", or: "AO R",
        if: "IH F", us: "AH S", hear: "HH IY R", here: "HH IY R", near: "N IY R", dear: "D IY R",
        year: "Y IY R", tear: "T IY R", fear: "F IY R", wear: "W EH R", bear: "B EH R",
        thing: "TH IH NG", think: "TH IH NG K", walk: "W AO K", talk: "T AO K", down: "D AW N",
        town: "T AW N", own: "OW N", blow: "B L OW", show: "SH OW", grow: "G R OW", slow: "S L OW",
        snow: "S N OW", low: "L OW", tonite: "T AH N AY T", angel: "EY N JH AH L", change: "CH EY N JH",
        kiss: "K IH S", miss: "M IH S", yes: "Y EH S", bus: "B AH S", gas: "G AE S", this: "DH IH S"
    },

    rules: {
        tch: "CH", igh: "AY", ind: "AY N D", ild: "AY L D", old: "OW L D", alk: "AO K",
        ange: "EY N JH", ight: "AY T", ful: "F AH L", ous: "AH S", ture: "CH ER", ough: "AO", augh: "AO", tion: "SH AH N", sion: "ZH AH N",
        th: "TH", sh: "SH", ch: "CH", ph: "F", wh: "W", ck: "K", ng: "NG", qu: "K W", kn: "N", wr: "R",
        ee: "IY", ea: "IY", oo: "UW", ou: "AW", ow: "OW", oi: "OY", oy: "OY", ai: "EY", ay: "EY",
        ey: "EY", ie: "IY", oa: "OW", au: "AO", aw: "AO", ew: "UW", ue: "UW",
        ar: "AA R", er: "ER", ir: "ER", ur: "ER", or: "AO R",
        a: "AE", b: "B", c: "K", d: "D", e: "EH", f: "F", g: "G", h: "HH", i: "IH", j: "JH", k: "K",
        l: "L", m: "M", n: "N", o: "AA", p: "P", q: "K", r: "R", s: "S", t: "T", u: "AH", v: "V",
        w: "W", x: "K S", z: "Z"
    },

    held: function (w) {
        return !w || w === "-" || w === "_" || w === "+";
    },

    isV: function (p) {
        var d = this.ph[this.base(p)];
        return !!d && !d.k;
    },

    // "AH0" style names are unstressed vowels, the plain unstressed "uh" gets its own softer sound
    base: function (p) {
        return p === "AH0" ? "AX" : String(p).replace(/0$/, "");
    },

    // HD voices: the big pronunciation dictionary (js/voice-dict.js) plus stress, and words split over several notes ("sil-" "ver") are read as one word.
    big: null,

    addDict: function (names, marks, data) {
        var map = Object.create(null);
        var re = /([a-z']+)([^a-z']+)/g;
        var m;
        while ((m = re.exec(data))) {
            map[m[1]] = m[2];
        }
        this.big = map;
        this.syms = names.split(" ");
        this.marks = marks;
    },

    look: function (word) {
        var w = String(word || "").toLowerCase().replace(/[^a-z']/g, "");
        var code = this.big && w ? this.big[w] : null;
        if (!code) { return null; }
        var out = [];
        for (var i = 0; i < code.length; i++) {
            out.push(this.syms[this.marks.indexOf(code.charAt(i))]);
        }
        return out;
    },

    chain: function (notes, note) {
        var self = this;
        var joins = function (n) { return /-$/.test(n.w || "") && !self.held(n.w); };
        var list = notes.sorted ? notes : notes.slice().sort(function (a, b) { return a.t - b.t || a.p - b.p; });
        var i = list.indexOf(note);
        if (i < 0 || this.held(note.w)) { return null; }
        var a = i, b = i;
        while (a > 0 && joins(list[a - 1])) { a--; }
        while (b < list.length - 1 && joins(list[b]) && !this.held(list[b + 1].w)) { b++; }
        if (a === b) { return null; }
        var words = list.slice(a, b + 1).map(function (n) { return n.w.replace(/-$/, ""); });
        return { word: words.join(""), part: i - a, count: words.length };
    },

    syll: function (ph, count) {
        var v = [];
        for (var i = 0; i < ph.length; i++) {
            if (this.isV(ph[i])) { v.push(i); }
        }
        if (v.length !== count) { return null; }
        var cuts = [0];
        for (var k = 1; k < count; k++) {
            cuts.push(v[k - 1] + 1 + (v[k] - v[k - 1] - 1 >= 2 ? 1 : 0));
        }
        cuts.push(ph.length);
        var parts = [];
        for (var j = 0; j < count; j++) {
            parts.push(ph.slice(cuts[j], cuts[j + 1]));
        }
        return parts;
    },

    // A reduced syllable ("bih" in becomes) held on its own note is sung with its full vowel ("bee")
    // when the syllable is also a word with the same consonants.
    full: function (part, text) {
        var vs = part.filter(this.isV, this);
        if (vs.length !== 1 || (vs[0] !== "IH0" && vs[0] !== "AH0")) { return part; }
        var own = this.look(text);
        var self = this;
        var bare = function (l) { return l.filter(function (p) { return !self.isV(p); }).join(" "); };
        return own && own.filter(this.isV, this).length === 1 && bare(own) === bare(part) ? own : part;
    },

    hdList: function (word, notes, note) {
        var ch = notes && note ? this.chain(notes, note) : null;
        if (ch) {
            var parts = this.syll(this.look(ch.word) || this.g2p(ch.word), ch.count);
            if (parts) { return this.full(parts[ch.part], note.w); }
        }
        return this.look(word);
    },

    g2p: function (word) {
        var w = String(word || "").toLowerCase().replace(/[^a-z]/g, "");
        if (!w) {
            return [];
        }
        if (this.dict[w]) {
            return this.dict[w].split(" ");
        }
        var known = this.parts(w);
        if (known) {
            return known;
        }

        var out = [];
        var magic = -1;
        var longs = { a: "EY", e: "IY", i: "AY", o: "OW", u: "UW" };
        var vow = "aeiou";
        if (w.length > 2 && /[aeiou][^aeiouwxy]e$/.test(w) && !/[aeiou][aeiou][^aeiou]e$/.test(w)) {
            magic = w.length - 3;
            w = w.slice(0, -1);
        }

        var push = function (s) {
            var bits = s.split(" ");
            for (var b = 0; b < bits.length; b++) {
                out.push(bits[b]);
            }
        };

        var i = 0;
        while (i < w.length) {
            var ch = w[i];
            var nx = w[i + 1] || "";
            var last = i === w.length - 1;

            if (i === magic) {
                out.push(longs[ch]);
                i++;
                continue;
            }
            if (magic >= 0 && i === magic + 1 && (ch === "c" || ch === "g")) {
                out.push(ch === "c" ? "S" : "JH");
                i++;
                continue;
            }
            if (i > 0 && ch === w[i - 1] && vow.indexOf(ch) < 0) {
                i++;
                continue;
            }
            if (ch === "y") {
                if (i === 0 || (nx && vow.indexOf(nx) >= 0)) {
                    out.push("Y");
                } else if (last) {
                    out.push(w.length <= 3 ? "AY" : "IY");
                } else {
                    out.push("IH");
                }
                i++;
                continue;
            }
            if (last && ch === "e") {
                if (!this.hasV(out)) {
                    out.push("IY");
                }
                i++;
                continue;
            }
            if (last && ch === "o") {
                out.push("OW");
                i++;
                continue;
            }
            if (last && ch === "a") {
                out.push("AA");
                i++;
                continue;
            }
            if (last && ch === "i") {
                out.push("IY");
                i++;
                continue;
            }
            if (ch === "c" && nx && "eiy".indexOf(nx) >= 0) {
                out.push("S");
                i++;
                continue;
            }

            var hit = false;
            for (var n = 4; n >= 2; n--) {
                var sub = w.substr(i, n);
                if (sub.length !== n || !this.rules[sub]) {
                    continue;
                }
                if ((sub === "kn" || sub === "wr") && i > 0) {
                    continue;
                }
                push(this.rules[sub]);
                i += n;
                hit = true;
                break;
            }
            if (hit) {
                continue;
            }
            if (this.rules[ch]) {
                push(this.rules[ch]);
            }
            i++;
        }

        var end = out.length - 1;
        if (w[w.length - 1] === "s" && !/ss$/.test(w) && end > 0 && out[end] === "S") {
            var hard = ["P", "T", "K", "F", "TH", "S", "SH", "CH"];
            if (hard.indexOf(out[end - 1]) < 0) {
                out[end] = "Z";
            }
        }
        return out;
    },

    root: function (base) {
        var n = base.length;
        if (n > 2 && base[n - 1] === base[n - 2] && "lsz".indexOf(base[n - 1]) < 0) {
            return this.g2p(base.slice(0, -1));
        }
        if (this.dict[base]) {
            return this.g2p(base);
        }
        if (this.dict[base + "e"] || /[^aeiou][aeiou][^aeiouwxy]$/.test(base) || /[cgvz]$/.test(base)) {
            return this.g2p(base + "e");
        }
        return this.g2p(base);
    },

    parts: function (w) {
        var d = this.dict;
        var hard = ["P", "T", "K", "F", "TH"];
        var stem;
        if (/s$/.test(w) && !/ss$/.test(w)) {
            stem = d[w.slice(0, -1)] || (/es$/.test(w) ? d[w.slice(0, -2)] : null);
            if (stem) {
                var ps = stem.split(" ");
                var ending = /(s|sh|ch|x|z)es$/.test(w) ? ["IH", "Z"] : [hard.indexOf(ps[ps.length - 1]) >= 0 ? "S" : "Z"];
                return ps.concat(ending);
            }
        }
        if (/ing$/.test(w) && w.length > 5) {
            return this.root(w.slice(0, -3)).concat(["IH", "NG"]);
        }
        if (/ed$/.test(w) && w.length > 4) {
            var pe = this.root(w.slice(0, -2));
            if (pe.length) {
                var last = pe[pe.length - 1];
                var tail = last === "T" || last === "D" ? ["IH", "D"] : [hard.concat(["S", "SH", "CH"]).indexOf(last) >= 0 ? "T" : "D"];
                return pe.concat(tail);
            }
        }
        for (var k = w.length - 3; k >= 2; k--) {
            var left = w.slice(0, k);
            var right = w.slice(k);
            if (d[left] && (d[right] || (left.length >= 3 && right.length >= 3))) {
                return d[left].split(" ").concat(this.g2p(right));
            }
        }
        return null;
    },

    hasV: function (list) {
        for (var i = 0; i < list.length; i++) {
            if (this.isV(list[i])) {
                return true;
            }
        }
        return false;
    },

    cons: function (p) {
        var d = this.ph[p];
        if (!d) {
            return [];
        }
        if (d.k === "son") {
            return [{ d: d.d, f: d.f, av: 0.75 }];
        }
        if (d.k === "nas") {
            return [{ d: d.d, f: d.f, av: 0.75, nas: 1 }];
        }
        if (d.k === "fri") {
            return [{ d: d.d, f: d.f, av: d.v ? 0.3 : 0, an: d.na, nf: d.nf, q: d.q }];
        }
        if (d.k === "asp") {
            return [{ d: d.d, asp: 0.7 }];
        }
        if (d.k === "plo") {
            var out = [
                { d: 0.05, f: d.f, av: d.v ? 0.14 : 0 },
                { d: 0.018, f: d.f, an: 0.7, nf: d.nf, q: 0.7, av: d.v ? 0.3 : 0 }
            ];
            if (!d.v) {
                out.push({ d: 0.045, asp: 0.55 });
            }
            return out;
        }
        if (d.k === "aff") {
            return [
                { d: 0.045, f: d.f, av: d.v ? 0.14 : 0 },
                { d: 0.08, f: d.f, an: 0.7, nf: 3000, q: 1.6, av: d.v ? 0.3 : 0 }
            ];
        }
        return [];
    },

    dur: function (segs) {
        var d = 0;
        for (var i = 0; i < segs.length; i++) {
            d += segs[i].d;
        }
        return d;
    },

    phones: function (word, prev, given) {
        var list;
        if (given && given.length) {
            list = given.slice();
        } else if (this.held(word)) {
            var pl = this.g2p(prev);
            var lv = "AA";
            for (var a = 0; a < pl.length; a++) {
                if (this.isV(pl[a])) {
                    lv = pl[a];
                }
            }
            list = [lv];
        } else {
            list = this.g2p(word);
        }
        if (!list.length) {
            list = ["AA"];
        }
        if (!this.hasV(list)) {
            var m = list.indexOf("M");
            if (m >= 0) {
                list[m] = "MM";
            } else {
                list.splice(Math.min(1, list.length), 0, "AH");
            }
        }

        return list;
    },

    plan: function (word, sec, prev, given) {
        var list = this.phones(word, prev, given);
        var vi = [];
        for (var b = 0; b < list.length; b++) {
            if (this.isV(list[b])) {
                vi.push(b);
            }
        }
        var first = vi[0];
        var lastV = vi[vi.length - 1];

        var onset = [];
        var coda = [];
        var midD = 0;
        for (var c = 0; c < list.length; c++) {
            if (c < first) {
                onset = onset.concat(this.cons(list[c]));
            } else if (c > lastV) {
                coda = coda.concat(this.cons(list[c]));
            } else if (!this.isV(list[c])) {
                midD += this.dur(this.cons(list[c]));
            }
        }

        var pre = this.dur(onset);
        var vt = Math.max(0.06 * vi.length, sec - this.dur(coda) - midD);
        var weak = vi.filter(function (v) { return /0$/.test(list[v]); }).length;
        if (weak === vi.length) { weak = 0; }
        var short = Math.min(0.1, vt / vi.length);
        var segs = onset.slice();

        for (var k = first; k <= lastV; k++) {
            var d = this.ph[this.base(list[k])];
            var each = weak && /0$/.test(list[k]) ? short : (vt - short * weak) / (vi.length - weak);
            if (!this.isV(list[k])) {
                segs = segs.concat(this.cons(list[k]));
            } else if (d.to) {
                var gl = Math.min(0.22, each * 0.4);
                segs.push({ d: each - gl, f: d.f, av: d.a || 1 });
                segs.push({ d: gl, f: d.to, av: d.a || 1 });
            } else {
                segs.push({ d: each, f: d.f, av: d.a || 1 });
            }
        }
        segs = segs.concat(coda);

        var lastF = null;
        for (var s = 0; s < segs.length; s++) {
            if (segs[s].f) {
                lastF = segs[s].f;
                continue;
            }
            var nf = null;
            for (var u = s + 1; u < segs.length && !nf; u++) {
                nf = segs[u].f || null;
            }
            segs[s].f = nf || lastF || this.ph.AH.f;
        }
        return { segs: segs, pre: pre };
    },

    res: function (r, f, bw, sr) {
        var c = -Math.exp(-6.2832 * bw / sr);
        var b = 2 * Math.exp(-3.1416 * bw / sr) * Math.cos(6.2832 * f / sr);
        r.c = c;
        r.b = b;
        r.a = 1 - b - c;
    },

    band: function (r, f, q, sr) {
        var w0 = 6.2832 * Math.min(f, sr * 0.45) / sr;
        var al = Math.sin(w0) / (2 * q);
        var a0 = 1 + al;
        r.b0 = al / a0;
        r.b2 = -al / a0;
        r.a1 = -2 * Math.cos(w0) / a0;
        r.a2 = (1 - al) / a0;
    },

    render: function (ctx, word, midi, sec, prev, vx, notes, note) {
        var sr = ctx.sampleRate;
        var o = vx || this.norm;
        var dflt = this.norm;
        var fs = o.fs || dflt.fs;
        var op = o.op || dflt.op;
        var cl = o.cl || dflt.cl;
        var br = o.br === undefined ? dflt.br : o.br;
        var tb = o.tb === undefined ? 50 : o.tb;
        var tl = Math.min(1, (o.tl || dflt.tl) * (0.15 + tb * 0.017));
        var lift = tb > 50 ? Math.min(0.95, (tb - 50) / 50) : 0;
        var vr = o.vr || dflt.vr;
        var vdep = o.vd || dflt.vd;
        if (o.hd && this.hd) {
            return this.hd.render(ctx, this.phones(word, prev || "", this.hdList(word, notes, note)), midi, sec, o);
        }
        var plan = this.plan(word, sec, prev || "", null);
        var segs = plan.segs;
        var total = this.dur(segs);
        var len = Math.ceil((total + 0.1) * sr);
        var buf = ctx.createBuffer(1, len, sr);
        var out = buf.getChannelData(0);
        var nb = core.arr(ctx, len);
        var f0 = core.freq(midi);
        var bw = [60 + f0 * 0.25, 90 + f0 * 0.25, 120 + f0 * 0.2, 220, 300];
        var cf = [segs[0].f[0] * fs, segs[0].f[1] * fs, segs[0].f[2] * fs];
        var rs = [];
        var rn = [];
        for (var q = 0; q < 5; q++) {
            rs.push({ a: 0, b: 0, c: 0, y1: 0, y2: 0 });
            rn.push({ a: 0, b: 0, c: 0, y1: 0, y2: 0 });
        }
        var fz = { b0: 0, b2: 0, a1: 0, a2: 0, x1: 0, x2: 0, y1: 0, y2: 0 };
        var nf = 0;
        var nq = 1;
        var av = 0;
        var an = 0;
        var asp = 0;
        var nas = 0;
        var si = 0;
        var end = segs[0].d;
        var ph = 0;
        var gp = 0;
        var lp = 0;
        var jit = 0;
        var peak = 0;
        var vSum = 0;
        var vCnt = 0;
        var kF = 1 - Math.exp(-16 / (sr * 0.016));
        var kA = 1 - Math.exp(-16 / (sr * 0.007));

        this.res(rs[3], 3500 * fs, bw[3], sr);
        this.res(rs[4], 4500 * fs, bw[4], sr);

        for (var i = 0; i < len; i++) {
            var t = i / sr;
            if (i % 16 === 0) {
                while (si < segs.length && t >= end) {
                    si++;
                    if (si < segs.length) {
                        end += segs[si].d;
                    }
                }
                var sg = segs[si] || null;
                if (sg) {
                    for (var j = 0; j < 3; j++) {
                        cf[j] += (sg.f[j] * fs - cf[j]) * kF;
                    }
                    if (sg.nf && (sg.nf !== nf || sg.q !== nq)) {
                        nf = sg.nf;
                        nq = sg.q;
                        this.band(fz, nf, nq, sr);
                    }
                }
                av += ((sg ? sg.av || 0 : 0) - av) * kA;
                an += ((sg ? sg.an || 0 : 0) - an) * Math.min(1, kA * 2);
                asp += ((sg ? sg.asp || 0 : 0) - asp) * kA;
                nas += ((sg && sg.nas ? 1 : 0) - nas) * kA;

                // when the note is higher than the first formant, singers open up to follow it
                this.res(rs[0], Math.max(cf[0], f0 * 1.1), bw[0] * (1 + nas), sr);
                this.res(rs[1], cf[1], bw[1] * (1 + nas * 3), sr);
                this.res(rs[2], cf[2], bw[2] * (1 + nas * 2), sr);
                for (var c = 0; c < 5; c++) {
                    rn[c].a = rs[c].a;
                    rn[c].b = rs[c].b;
                    rn[c].c = rs[c].c;
                }
                jit = jit * 0.97 + (Math.random() * 2 - 1) * 0.03;
            }

            var rt = t - plan.pre;
            var semi = -0.3 * Math.exp(-Math.max(0, rt) / 0.05);
            var vd = Math.min(1, Math.max(0, rt - 0.3) / 0.35);
            semi += vd * vdep * Math.sin(6.2832 * vr * t) + jit * 0.1;
            if (o.gl) { semi += o.gl.s * core.slide(o.gl, Math.max(0, rt)); }
            var dp = f0 * Math.pow(2, semi / 12) / sr;
            ph += dp;
            if (ph >= 1) {
                ph -= 1;
            }

            // glottal pulse: smooth opening, quicker closing, then shut
            var gl = 0;
            if (ph < op) {
                gl = 0.5 - 0.5 * Math.cos(3.1416 * ph / op);
            } else if (ph < op + cl) {
                gl = Math.cos(1.5708 * (ph - op) / cl);
            }
            var src = (gl - gp) / dp * 0.1;
            gp = gl;
            lp += tl * (src - lp);
            var nz = Math.random() * 2 - 1;

            var x = av * lp;
            var xn = av * nz * br * gl * 2 + asp * nz * 0.5;
            for (var r = 0; r < 5; r++) {
                x = this.step(rs[r], x);
                xn = this.step(rn[r], xn);
            }

            var fy = fz.b0 * nz + fz.b2 * fz.x2 - fz.a1 * fz.y1 - fz.a2 * fz.y2;
            fz.x2 = fz.x1;
            fz.x1 = nz;
            fz.y2 = fz.y1;
            fz.y1 = fy;

            x = x * (1 - nas * 0.2);
            out[i] = x;
            nb[i] = xn + fy * an * this.fric;
            if (sg && sg.av >= 0.9 && t > end - sg.d + 0.03) {
                vSum += x * x;
                vCnt++;
            }
        }

        // consonants and breath are set against this word's own vowel level
        var vRef = vCnt ? Math.sqrt(vSum / vCnt) : 0.1;
        var last = 0;
        for (var m = 0; m < len; m++) {
            var mixed = out[m] + nb[m] * vRef * this.mix;
            out[m] = mixed - lift * last;
            last = mixed;
            if (Math.abs(out[m]) > peak) {
                peak = Math.abs(out[m]);
            }
        }

        var gain = peak > 0 ? 0.6 / peak : 0;
        var fade = Math.floor(sr * 0.03);
        for (var k = 0; k < len; k++) {
            var e = 1;
            if (k > len - fade) {
                e = (len - k) / fade;
            }
            out[k] *= gain * e;
        }
        return { buf: buf, pre: plan.pre };
    },

    step: function (r, x) {
        var y = r.a * x + r.b * r.y1 + r.c * r.y2;
        r.y2 = r.y1;
        r.y1 = y;
        return y;
    },

    fric: 3,
    mix: 0.68
};

core.vox = function (ctx, w, p, sec, prev, vx, notes, note) {
    if (note && note.gl) {
        var own = {};
        Object.keys(vx || {}).forEach(function (k) { own[k] = vx[k]; });
        own.gl = note.gl;
        vx = own;
    }
    return voice.render(ctx, w, p, sec, prev, vx, notes, note);
};
