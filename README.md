# Songboard

A music maker in one HTML page. Place synthesized instruments on an endless board,
type lyrics onto Vox notes, and export songs as tiny text or as a Khan Academy
Processing.js program.

## Files

- `index.html` - the whole app: instruments, editor, player and exporters. Works offline. On Khan Academy it also reads its own original copy from this repo, since KA rewrites the code it runs.
- `js/voice.js` - the singing voices (Vox, Bright Vox, Vox HD, Bright Vox HD). The page loads it
  from next to itself first, then from jsDelivr (this repo), and still works without it.
- `js/voice-hd.js` - the HD voices' own synthesizer (clearer consonants).
- `js/voice-dict.js` - the pronunciation dictionary the HD voices read from.
- `tools/voice-test.html` - sing any text with all four voices side by side.
- `tools/build-dict.js` - rebuilds `voice-dict.js` from a fresh copy of CMUdict.
- `songs/` - example song text and a ready-made Khan Academy program.

## Hosting the voice

In `index.html`, the voice loads from this repo through jsDelivr:

    https://cdn.jsdelivr.net/gh/SwankyMan88/Music-Maker-for-KA@v3/js/voice.js

It points at the `v3` tag. After changing the voice files, push a new tag (`v2`, ...) and update the
link in `index.html`, since jsDelivr caches files for a while.

## Credits

SFX engine by SwankyMan, IIFE by LemonTurtle, AudioContext by Squishy.

Pronunciations come from the CMU Pronouncing Dictionary (https://github.com/cmusphinx/cmudict),
Copyright (C) 1993-2015 Carnegie Mellon University. Its license is kept at the top of `js/voice-dict.js`.
