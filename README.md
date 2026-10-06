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
- `js/page.js` - `index.html` published as a script, made with `tools/build-page.js`. Copies running on Khan Academy load it for exports and the full window. Rebuild it before tagging a release.
- `songs/` - song text and a ready-made Khan Academy program for every song in the page. Mountain King Speedrun, Jingle Bells, Korobeiniki and Flight of the Bumblebee are public domain melodies, the rest are original.

## Hosting the voice

In `index.html`, the voice loads from this repo through jsDelivr:

    https://cdn.jsdelivr.net/gh/SwankyMan88/Music-Maker-for-KA@v32/js/voice.js

It points at a release tag. After changing the voice files or the app, rebuild `js/page.js`, push a new tag and update the
link in `index.html`, since jsDelivr caches files for a while.

## Credits

SFX engine by SwankyMan, IIFE by LemonTurtle, AudioContext by Squishy.

Pronunciations come from the CMU Pronouncing Dictionary (https://github.com/cmusphinx/cmudict),
Copyright (C) 1993-2015 Carnegie Mellon University. Its license is kept at the top of `js/voice-dict.js`.

## Controls

- Left click adds a note, drag a note to move it, drag its right edge to stretch it, click a note twice to edit it (lyrics for voices, loudness for the rest).
- Right click deletes. The middle button drags the view in any direction. The wheel zooms (Alt + wheel changes note height).
- Drag on the ruler to pick a section to copy, paste, duplicate, delete or loop.
- Click a track header (Ctrl or Shift for more) and use Ctrl+C / Ctrl+V to copy whole tracks. Drag the ⠿ grip to reorder tracks.
- Drag from a note's output dot (right) to a later note to make it slide in. Click the line to set the slide time and shape, right click it to remove it.
- The ✎ button on a track opens its sound effects, voice settings and the instrument's raw data.
- The Acoustic group has instruments modelled on real ones: grand piano, nylon and steel guitar, upright bass, violin, cello, string section, trumpet, French horn, clarinet, oboe, choir, timpani and an acoustic drum kit. Switch a track's instrument to try them; songs keep their own instruments.
- On phones: one finger edits, two fingers move and pinch to zoom, and Delete mode turns taps into deletes.
