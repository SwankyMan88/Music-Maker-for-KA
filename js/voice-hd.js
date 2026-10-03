// HD singer: a Klatt style formant synthesizer used by the HD voices.
// Voicing and breath go through a chain of vocal tract filters (cascade), while hiss and bursts go through their own bank of filters (parallel) so each consonant gets its own shape.
// Sounds glide into each other the way they do in speech.
// Sound settings: f formants, b bandwidths, av voice, ah breath, af hiss, p hiss shape [F2, F3, F4, F5, F6, flat], nz nasal zero, d length, rel how long the next sound takes to glide out of this one.
voice.hd = {
    vow: {
        IY: [270, 2290, 3010], IH: [390, 1990, 2550], EH: [530, 1840, 2480], AE: [660, 1720, 2410],
        AA: [730, 1090, 2440], AO: [570, 840, 2410], UH: [440, 1020, 2240], UW: [300, 870, 2240],
        AH: [640, 1190, 2390], ER: [490, 1350, 1690], AX: [500, 1450, 2450], MM: [250, 1100, 2200]
    },

    glide: {
        EY: ["EH", [300, 2200, 2900]], AY: ["AA", [300, 2200, 2900]], OW: ["AO", [320, 800, 2240]],
        AW: ["AA", [320, 800, 2240]], OY: ["AO", [300, 2200, 2900]]
    },

    con: {
        P: { k: "stop", f: [220, 900, 2200], p: [0.15, 0.1, 0.05, 0, 0, 0.9] },
        B: { k: "stop", v: 1, f: [220, 900, 2200], p: [0.15, 0.1, 0.05, 0, 0, 0.7] },
        T: { k: "stop", f: [240, 1700, 2600], p: [0, 0.1, 0.25, 0.55, 0.9, 0] },
        D: { k: "stop", v: 1, f: [240, 1700, 2600], p: [0, 0.1, 0.25, 0.5, 0.8, 0] },
        K: { k: "stop", f: [260, 1900, 2500], p: [0.7, 0.8, 0.4, 0.1, 0, 0] },
        G: { k: "stop", v: 1, f: [260, 1900, 2500], p: [0.6, 0.7, 0.35, 0.1, 0, 0] },
        CH: { k: "aff", f: [280, 1900, 2400], p: [0, 0.6, 0.9, 0.5, 0.2, 0] },
        JH: { k: "aff", v: 1, f: [280, 1900, 2400], p: [0, 0.55, 0.8, 0.45, 0.2, 0] },
        S: { k: "fri", f: [280, 1700, 2600], p: [0, 0, 0.05, 0.35, 1, 0], af: 0.9, d: 0.11 },
        Z: { k: "fri", v: 1, f: [280, 1700, 2600], p: [0, 0, 0.05, 0.3, 0.8, 0], af: 0.6, d: 0.09 },
        SH: { k: "fri", f: [280, 1900, 2400], p: [0, 0.7, 1, 0.6, 0.25, 0], af: 0.9, d: 0.11 },
        ZH: { k: "fri", v: 1, f: [280, 1900, 2400], p: [0, 0.6, 0.8, 0.5, 0.2, 0], af: 0.6, d: 0.09 },
        F: { k: "fri", f: [300, 1000, 2300], p: [0, 0, 0, 0, 0.15, 0.6], af: 0.5, d: 0.1 },
        V: { k: "fri", v: 1, f: [300, 1000, 2300], p: [0, 0, 0, 0, 0.1, 0.45], af: 0.35, d: 0.07 },
        TH: { k: "fri", f: [300, 1400, 2600], p: [0, 0, 0, 0.1, 0.25, 0.45], af: 0.45, d: 0.09 },
        DH: { k: "fri", v: 1, f: [300, 1400, 2600], p: [0, 0, 0, 0.1, 0.2, 0.35], af: 0.25, d: 0.05 },
        HH: { k: "asp", d: 0.07 },
        M: { k: "nas", f: [250, 1100, 2200], nz: 900 },
        N: { k: "nas", f: [250, 1700, 2600], nz: 1500 },
        NG: { k: "nas", f: [250, 2100, 2700], nz: 2400 },
        L: { k: "liq", f: [330, 1050, 2400] },
        R: { k: "liq", f: [330, 1060, 1380] },
        W: { k: "liq", f: [290, 610, 2150] },
        Y: { k: "liq", f: [260, 2070, 3020] }
    },

    // the segments one consonant turns into
    cons: function (p, before) {
        var c = this.con[p];
        if (!c) { return []; }
        // after s, sh or f a stop is short and has no puff of air ("st" in star, "sp" in spin)
        if (c.k === "stop" && (before === "S" || before === "SH" || before === "F")) {
            return [
                { d: 0.03, f: c.f, av: 0, low: 1 },
                { d: 0.01, f: c.f, af: 0.8, p: c.p, av: 0, rel: 0.035 }
            ];
        }
        if (c.k === "stop") {
            var out = [
                { d: 0.06, f: c.f, av: c.v ? 0.18 : 0, low: 1 },
                { d: c.v ? 0.012 : 0.016, f: c.f, af: 1, p: c.p, av: c.v ? 0.3 : 0 }
            ];
            if (!c.v) { out.push({ d: 0.05, f: c.f, ah: 0.9, wide: 1, rel: 0.05 }); }
            out[out.length - 1].rel = 0.05;
            return out;
        }
        if (c.k === "aff") {
            return [
                { d: 0.05, f: c.f, av: c.v ? 0.18 : 0, low: 1 },
                { d: 0.08, f: c.f, af: 0.9, p: c.p, av: c.v ? 0.35 : 0, rel: 0.04 }
            ];
        }
        if (c.k === "fri") { return [{ d: c.d, f: c.f, af: c.af, p: c.p, av: c.v ? 0.45 : 0, rel: 0.04, tr: 0.03 }]; }
        if (c.k === "asp") { return [{ d: c.d, ah: 1, rel: 0.01 }]; }
        if (c.k === "nas") { return [{ d: 0.075, f: c.f, b: [100, 250, 300], av: this.nas, nz: c.nz, rel: 0.03, tr: 0.02 }]; }
        return [{ d: 0.065, f: c.f, av: 0.85, rel: 0.06, tr: 0.05 }];
    },

    build: function (list, sec) {
        var V = voice;
        var vi = [];
        list.forEach(function (p, i) {
            if (V.isV(p)) { vi.push(i); }
        });
        var first = vi[0], last = vi[vi.length - 1];
        var onset = [], coda = [], mid = 0, self = this;
        var dur = function (a) { return a.reduce(function (t, s) { return t + s.d; }, 0); };
        list.forEach(function (p, i) {
            if (i < first) {
                onset = onset.concat(self.cons(p, list[i - 1]));
            } else if (i > last) {
                coda = coda.concat(self.cons(p, list[i - 1]));
            } else if (!V.isV(p)) {
                mid += dur(self.cons(p, list[i - 1]));
            }
        });
        var vt = Math.max(0.07 * vi.length, sec - dur(coda) - mid);
        var weak = vi.filter(function (v) { return /0$/.test(list[v]); }).length;
        if (weak === vi.length) { weak = 0; }
        var short = Math.min(0.1, vt / vi.length);
        if (onset.length && onset[0].low) { onset[0].av = 0; }
        var segs = onset.slice();
        for (var k = first; k <= last; k++) {
            var p = list[k];
            if (!V.isV(p)) {
                segs = segs.concat(this.cons(p, list[k - 1]));
                continue;
            }
            var each = weak && /0$/.test(p) ? short : (vt - short * weak) / (vi.length - weak);
            var b = V.base(p);
            var g = this.glide[b];
            if (g) {
                var gl = Math.min(0.2, each * 0.4);
                segs.push({ d: each - gl, f: this.vow[g[0]], av: 1, vow: 1 });
                segs.push({ d: gl, f: g[1], av: 1, vow: 1, tr: gl });
            } else {
                segs.push({ d: each, f: this.vow[b] || this.vow.AH, av: b === "MM" ? 0.6 : 1, vow: 1, nz: b === "MM" ? 900 : 0 });
            }
        }
        segs = segs.concat(coda);

        // sounds without their own formants borrow the next sound's, glides come from the previous sound
        for (var i = 0; i < segs.length; i++) {
            var sg = segs[i];
            if (!sg.f) {
                for (var j = i + 1; j < segs.length && !sg.f; j++) { sg.f = segs[j].f; }
                sg.f = sg.f || (i ? segs[i - 1].f : this.vow.AH);
            }
            if (sg.tr === undefined) { sg.tr = i ? segs[i - 1].rel || 0.03 : 0; }
        }
        return { segs: segs, pre: dur(onset) };
    },

    render: function (ctx, list, midi, sec, o) {
        var V = voice;
        var sr = ctx.sampleRate;
        var plan = this.build(list, sec);
        var segs = plan.segs;
        var total = segs.reduce(function (t, s) { return t + s.d; }, 0);
        var len = Math.ceil((total + 0.1) * sr);
        var buf = ctx.createBuffer(1, len, sr);
        var out = buf.getChannelData(0);
        var noisy = core.arr(ctx, len);
        var f0 = core.freq(midi);
        var fs = o.fs || 1;
        var op = this.op || o.op || 0.4, cl = this.cl || o.cl || 0.16, tl = this.tilt || o.tl || 0.62, br = o.br === undefined ? 0.04 : o.br;
        var hp = 0;
        var cas = [], casN = [], par = [];
        for (var q = 0; q < 7; q++) {
            cas.push({ a: 0, b: 0, c: 0, y1: 0, y2: 0 });
            casN.push({ a: 0, b: 0, c: 0, y1: 0, y2: 0 });
        }
        for (var r = 0; r < 5; r++) { par.push({ b0: 0, b2: 0, a1: 0, a2: 0, x1: 0, x2: 0, y1: 0, y2: 0 }); }
        var zero = { a: 1, b: 0, c: 0, x1: 0, x2: 0 }, zeroN = { a: 1, b: 0, c: 0, x1: 0, x2: 0 };
        var av = 0, ah = 0, af = 0, pAmp = [0, 0, 0, 0, 0, 0];
        var si = 0, start = 0, ph = 0, gp = 0, lp = 0, jit = 0, vSum = 0, vCnt = 0, peak = 0;
        var kA = 1 - Math.exp(-16 / (sr * 0.004));
        var F = [0, 0, 0];

        V.res(cas[5], 3300 * fs, 250, sr);
        V.res(cas[6], 3750 * fs, 200, sr);
        V.res(casN[5], 3300 * fs, 250, sr);
        V.res(casN[6], 3750 * fs, 200, sr);

        for (var i = 0; i < len; i++) {
            var t = i / sr;
            if (i % 16 === 0) {
                while (si < segs.length - 1 && t >= start + segs[si].d) {
                    start += segs[si].d;
                    si++;
                }
                var sg = t < start + segs[si].d ? segs[si] : null;
                var cur = segs[si];
                var prv = si ? segs[si - 1] : cur;
                var k = cur.tr > 0 ? Math.min(1, (t - start) / cur.tr) : 1;
                for (var j = 0; j < 3; j++) { F[j] = (prv.f[j] + (cur.f[j] - prv.f[j]) * k) * fs; }
                av += ((sg ? sg.av || 0 : 0) - av) * kA;
                ah += ((sg ? sg.ah || 0 : 0) - ah) * kA;
                af += ((sg ? sg.af || 0 : 0) - af) * kA * 2;
                for (var a = 0; a < 6; a++) { pAmp[a] = sg && sg.p ? sg.p[a] : pAmp[a]; }
                var bw = cur.b || [60 + f0 * 0.2, 90 + f0 * 0.2, 130];
                var b1 = cur.wide ? 300 : bw[0];
                var f1 = cur.vow ? Math.max(F[0], f0 * 1.1) : F[0];
                [cas, casN].forEach(function (c) {
                    V.res(c[2], f1, b1, sr);
                    V.res(c[3], F[1], bw[1], sr);
                    V.res(c[4], F[2], bw[2], sr);
                    V.res(c[1], 270, 100, sr);
                });
                var nz = cur.nz || 270;
                this.anti(zero, nz, 100, sr);
                this.anti(zeroN, nz, 100, sr);
                var pf = [F[1], F[2], 3300 * fs, 3750 * fs, 4900 * fs];
                var pb = [250, 320, 350, 450, 900];
                for (var m = 0; m < 5; m++) { V.band(par[m], pf[m], pf[m] / pb[m], sr); }
                jit = jit * 0.97 + (Math.random() * 2 - 1) * 0.03;
            }

            var rt = t - plan.pre;
            var semi = -0.25 * Math.exp(-Math.max(0, rt) / 0.05) + jit * 0.08;
            semi += Math.min(1, Math.max(0, rt - 0.35) / 0.35) * (o.vd || 0.3) * 0.7 * Math.sin(6.2832 * (o.vr || 5.5) * t);
            if (this.speak) { semi = 3 - 6 * t / total; }
            var dp = f0 * Math.pow(2, semi / 12) / sr;
            ph += dp;
            if (ph >= 1) { ph -= 1; }
            var gl = ph < op ? 0.5 - 0.5 * Math.cos(3.1416 * ph / op) : (ph < op + cl ? Math.cos(1.5708 * (ph - op) / cl) : 0);
            var src = (gl - gp) / dp * 0.1;
            gp = gl;
            lp += tl * (src - lp);
            var nz1 = Math.random() * 2 - 1;
            var nz2 = Math.random() * 2 - 1;

            // voicing through the cascade
            var x = av * lp;
            x = this.zero(zero, V.step(cas[1], x));
            for (var c2 = 2; c2 < 7; c2++) { x = V.step(cas[c2], x); }

            // breath through a copy of the cascade, hiss through the parallel bank
            var y = ah * nz1 * 0.5 + av * nz1 * br * gl * 2;
            y = this.zero(zeroN, V.step(casN[1], y));
            for (var c3 = 2; c3 < 7; c3++) { y = V.step(casN[c3], y); }
            var air = (nz1 - hp) * this.air * av;
            hp = nz1;
            var hiss = pAmp[5] * nz2;
            for (var p2 = 0; p2 < 5; p2++) {
                var pr = par[p2];
                var o2 = pr.b0 * nz2 + pr.b2 * pr.x2 - pr.a1 * pr.y1 - pr.a2 * pr.y2;
                pr.x2 = pr.x1;
                pr.x1 = nz2;
                pr.y2 = pr.y1;
                pr.y1 = o2;
                hiss += o2 * pAmp[p2];
            }
            out[i] = x;
            noisy[i] = y + hiss * af * this.fric + air;
            if (sg && sg.vow && t > start + 0.03) {
                vSum += x * x;
                vCnt++;
            }
        }

        var vRef = vCnt ? Math.sqrt(vSum / vCnt) : 0.1;
        var last = 0;
        for (var n = 0; n < len; n++) {
            var v = out[n] + noisy[n] * vRef * this.mix;
            out[n] = v - this.pre * last;
            last = v;
            peak = Math.max(peak, Math.abs(out[n]));
        }
        var gain = peak > 0 ? 0.6 / peak : 0;
        var fade = Math.floor(sr * 0.03);
        for (var e = 0; e < len; e++) { out[e] *= gain * (e > len - fade ? (len - e) / fade : 1); }
        return { buf: buf, pre: plan.pre };
    },

    anti: function (z, f, bw, sr) {
        var c = -Math.exp(-6.2832 * bw / sr);
        var b = 2 * Math.exp(-3.1416 * bw / sr) * Math.cos(6.2832 * f / sr);
        var a = 1 - b - c;
        z.a = 1 / a;
        z.b = -b / a;
        z.c = -c / a;
    },

    zero: function (z, x) {
        var y = z.a * x + z.b * z.x1 + z.c * z.x2;
        z.x2 = z.x1;
        z.x1 = x;
        return y;
    },

    // Tuning: speak (falling speech pitch instead of singing), op / cl voice pulse shape, nas nasal loudness, tilt source brightness, pre and air extra treble, fric and mix hiss level.
    speak: false,
    op: 0.45,
    cl: 0.08,
    nas: 0.4,
    tilt: 1,
    pre: 0,
    air: 0,
    fric: 1.4,
    mix: 1
};
