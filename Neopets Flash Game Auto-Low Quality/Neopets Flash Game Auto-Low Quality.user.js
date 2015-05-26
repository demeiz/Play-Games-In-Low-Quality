// ==UserScript==
// @name        Neopets Flash Game Auto-Low Quality
// @namespace   Jarofgrease.captainmaxthecat.com
// @description Automatically sets the quality for flash games to low in the settings
// @author 	Demeiz
// @email 	admin@captainmaxthecat.com
// @homepage	http://www.captainmaxthecat.com
// @version	0.2
// @language	en
// @include     *neopets.com/games/game.phtml?game_id=*
// @exclude     *neopets.com/games/game.phtml?game_id=*&size=regular&quality=low&play=true
// @require	http://code.jquery.com/jquery-latest.min.js
// @grant	none
// ==/UserScript==

// set the hidden game quality value as low
$("input:hidden#sel_qual_dd").val("low");
// current issue with this method is that the menu is no longer accessible.
