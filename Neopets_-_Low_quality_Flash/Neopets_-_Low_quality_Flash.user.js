// ==UserScript==
// @name        Neopets - Low quality Flash
// @namespace   demeiz
// @author demeiz
// @email admin@captainmaxthecat.com
// @license GNU GPL
// @homepage  http://jarofgrease.captainmaxthecat.com
// @version 1
// @language en
// @include http://www.neopets.com/games/game.phtml?game_id=*&size=*&quality=*&play=true
// @grant GM_alert
// ==/UserScript==

var loc = document.location.href;

// if (loc.match([*]++quality=high[*]++/)){
	if (loc.match('/neopets\.com\/games\/game\.phtml\?game_id\=/\d*/&size\=regular&quality\=/(high)/&play\=true/')){
		loc.replace("neopets.com/games/game.phtml?game_id=/\$1/&size=regular&quality=low&play=true")
 }

// "matches": ["http://www.neopets.com/games/game.phtml?game_id=*&size=*&quality=*&play=true"]