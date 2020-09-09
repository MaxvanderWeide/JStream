/*!
* JStream Selector
 */

import jstream from "./jstream.core.js";

(function () {

    function find(n) {
        if (n) {
            const e = document.querySelectorAll(n);
            return e.length < 1 ? (console.warn(`No elements found using ${n}`), null) : e
        }
    }

    HTMLElement.prototype.css = function (t) {
        if (!t) return getComputedStyle(this);
        for (const [e, s] of Object.entries(t)) this.style[e] = s;
        return this
    };


    jstream.find = find;

})();
