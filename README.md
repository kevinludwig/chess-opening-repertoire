# Overview

A way to manage and review my opening repertoire.

I'm hosting it here: (http://chess-endgames.rhcloud.com)

# Installation and setup

* Install node `brew install node`
* Run tests `npm test`
* Start `npm start`

# TODO

QGA early deviations
Dutch Lenningrad (find resource on main line)
Dutch Stonewall (find resource on main line)
Dutch Classical

Vienna Game
Blackmar-Diemer Gambit
Stonewall
Scotch game (find resource)

# NAG symbols reference

* $1 strong move
* $2 mistake
* $3 very good move
* $4 blunder
* $5 interesting move
* $6 questionable move
* $10 equal position
* $13 unclear position
* $14 small white advantage
* $15 small black advantage
* $16 clear white advantage
* $17 clear black advantage
* $18 decisive white advantage
* $19 decisive black advantage
* $36 white has initiative
* $37 black has initiative
* $40 white has attack
* $41 black has attack
* $42 insufficent compensation for white
* $43 insufficient compensation for black
* $44 white has compensation
* $45 black has compensation
* $132 white has counterplay
* $133 black has counterplay

# PGN4WEB Modifications

* put `fonts/*.css` in the application /css directory, which means paths need to be fixed up in that css
* do not clean the `+` from the movetext (see the `CleanMove` function)
* allow HTML (e.g. anchor tags) in the movetext (no-op `simpleHtmlentities` function)
* put sub-variations on their own lines (see `variationTextFromId` function)

