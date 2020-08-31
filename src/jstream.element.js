/*!
* JStream Selector
 */

import jstream from "./jstream.core.js";

(function () {

    function find(selector) {
        if (selector) {
            const elem = document.querySelectorAll(selector);

            if (elem.length < 1) {
                console.warn(`No elements found using ${selector}`);
                return null;
            }

            return elem;
        }
    }

    HTMLElement.prototype.css = function (style) {
        if (!style) {
            return getComputedStyle(this);
        }

        for (const [key, value] of Object.entries(style)) {
            this.style[key] = value;
        }

        return this;
    }


    jstream.find = find;

})();
