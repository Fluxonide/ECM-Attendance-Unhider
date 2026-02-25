// ==UserScript==
// @name         ECM Attendance Unhider - SMU/SMIT
// @namespace    https://greasyfork.org/users/ranit
// @version      1.0
// @description  Unhides the attendance and internal marks table on the eCampus Manager (ECM) student portal at ecm.smtech.in. The table is hidden off-screen by the ASP.NET ModalPopupExtender — this script fixes it.
// @author       Ranit
// @match        https://ecm.smtech.in/ecm/Students/index.aspx
// @match        http://ecm.smtech.in/ecm/Students/index.aspx
// @license      MIT

// @grant        none
// @run-at       document-end
// ==/UserScript==

setInterval(function(){
    // Fix the panel that gets position:fixed by ASP.NET ModalPopupExtender
    var p = document.querySelector('.panel-default');
    if (p) p.style.cssText = 'padding:10px; position:static!important; left:auto!important; top:auto!important; right:auto!important; width:100%!important;';

    // Make the 960px container table fill full width
    var t = document.querySelector('table[style*="960"]');
    if (t) t.style.cssText = 'width:100%!important; margin:20px 0!important;';

    // Make the attendance grid full width
    var g = document.getElementById('ctl00_ContentPlaceHolder1_gvRecord');
    if (g) g.style.cssText = 'width:100%!important;';
}, 200);
