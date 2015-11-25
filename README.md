# Overview

A way to manage and review my opening repertoire.

I'm hosting it here: (http://chess-endgames.rhcloud.com)

# Installation and setup

* Install node `brew install node`
* Run tests `npm test`
* Start `npm start`

# TODO

Add content

# PGN4WEB Modifications

* put `fonts/*.css` in the application /css directory, which means paths need to be fixed up in that css
* do not clean the `+` from the movetext (see the `CleanMove` function)
* allow HTML (e.g. anchor tags) in the movetext (no-op `simpleHtmlentities` function)
* put sub-variations on their own lines (see `variationTextFromId` function)

