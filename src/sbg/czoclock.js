/*
 * Filename: czoclock.js
 * Author: Olivier Sirol <czo@free.fr>
 * License: GPL-2.0
 * File Created: January 2019
 * Last Modified: mardi 24 mars 2020, 02:00
 * Edit Time: 0:21:05
 * Description:
 * 
 * $Id: $
*/

$(document).ready(function () {
    var now = new Date();
    var day = Math.floor(now.getTime() / 1000 / 60 / 60 / 24);
    /* console.log(day); */
    var imgName = (day % 98) + 1;
    $(".intro").css("background-image", "url(sbg/wal/" + imgName + ".jpg)");
    olddisptime = '';

    function updateClock() {
        var dow_fr = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
        var month_fr = new Array("janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre");

        /* if (!document.getElementById) return; */

        now = new Date();
        hours = now.getHours();
        mins = now.getMinutes();
        secs = now.getSeconds();
        day = dow_fr[now.getDay()] + " " + now.getDate() + " " + month_fr[now.getMonth()];

        if (hours < 10) hours = "0" + hours;
        if (mins < 10) mins = "0" + mins;
        if (secs < 10) secs = "0" + secs;
        disptime = hours + ":" + mins;
        // console.log(disptime);

        if (disptime != olddisptime) {
            $('#czotime').text(disptime);
            $('#czodate').text(day);
            olddisptime = disptime;
        }

        // call this function again in 1000ms
        setTimeout(updateClock, 1000);
    }
    updateClock();

});



