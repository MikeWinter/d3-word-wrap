# d3-word-wrap

Wrap text within a bounding box.

## Installing

If you use NPM, `npm install d3-word-wrap`. Otherwise, download the
[latest release](https://github.com/MikeWinter/d3-word-wrap/releases/latest).

## API Reference

<a id="word-wrap" href="#word-wrap">#</a> **wordWrap**([*width*], [*height*])

Returns a word wrapper, optionally configured with the given `width` and `height` bounds.


<a id="wrap-call" href="#wrap-call">#</a> *wrap*(*selection*)

Applies the word wrapper to the given `selection`.


<a id="wrap-width" href="#wrap-width">#</a> *wrap*.**width**([*width*])

If this method is called with an argument, the width bound is set to the value `width` and this
word wrapper (`wrap`) is returned. Otherwise, this method returns the current width bound.


<a id="wrap-height" href="#wrap-height">#</a> *wrap*.**height**([*height*])

If this method is called with an argument, the height bound is set to the value `height` and this
word wrapper (`wrap`) is returned. Otherwise, this method returns the current height bound.
