// ==UserScript==
// @name         Open in New Tab
// @namespace    https://greasyfork.org/en/scripts/514528-open-in-new-tab
// @version      0.0.1
// @description  Always open a new tab
// @author       IlyaLiao
// @license      MIT
// @match        https://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function () {
  'use strict'

  function externalize() {
    document.querySelectorAll('a')
      .forEach((r) => {
        if (!r.hasAttribute('target')) {
          r.setAttribute('target', '_blank')
        }
      })
  }

  ////////////////////////////////////////

  function run() {
    externalize()
  }

  run()
})()
