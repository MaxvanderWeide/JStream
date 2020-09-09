/*!
* JStream Import
 */

import {template_files, component_location} from "../../scripts/jstream.config.js";
import jstream from "./jstream.core.js";

(function () {

    function load(l) {
        fetch(`${component_location}${template_files[l.getAttribute('template')].location}`).then(res => {
            return res.text();
        }).then((text) => {
            l.innerHTML = text;
        })
        return true;
    }

    function loadAll() {
        document.querySelectorAll('jstream-template').forEach((elem) => {
            if (!load(elem)) return false;
        });
        return true;
    }

    HTMLElement.prototype.load = function () {
        if (this.tagName !== 'jstream-template') return false;
        return load(this);
    };

    jstream.load = loadAll;

})();
