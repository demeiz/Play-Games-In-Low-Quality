// ==UserScript==
// @name        Neopets Flash Game Auto-Low Quality
// @namespace   Jarofgrease.captainmaxthecat.com
// @description Automatically sets the quality for flash games to low in the settings
// @author 		Demeiz
// @email 		admin@captainmaxthecat.com
// @homepage	http://www.captainmaxthecat.com
// @version		1.0
// @language	en
// @match       http://www.neopets.com/games/game.phtml?game_id=*
// @require		http://code.jquery.com/jquery-latest.min.js
// @grant		none
// ==/UserScript==

$("input:hidden#sel_qual_dd").val("low");