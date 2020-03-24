/*
 * Filename: analytics.js
 * Author: Olivier Sirol <czo@free.fr>
 * License: GPL-2.0
 * File Created: Mai 2016
 * Last Modified: Tuesday 24 March 2020, 01:17
 * Edit Time: 0:08:01
 * Description:
 * 
 * $Id: $
*/

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-1952014-8', 'auto');
ga('send', 'pageview');
