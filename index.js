// ==UserScript==
// @name         Open in New Tab
// @namespace    http://tampermonkey.net/
// @version      0.0.0
// @description  Always open a new tab
// @author       JackCodeTW
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
