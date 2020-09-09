/*!
* JStream Bindings
 */

import jstream from "./jstream.js";
import JStream from "./JStream/jstream.class.js";

(function () {

    JStream.prototype.call = function () {
        _handleLoops();
    }

    function _handleLoops() {
        jstream.find("jstream-item-template").forEach(template => {

            const parent = template.parentElement;

            template.querySelectorAll("[for]").forEach(elem => {

                const items = jstream.prototype.c_class.c[elem.getAttribute("for").split(":")[1]];

                if (items) for (const [identifier, _item] of Object.entries(items)) {

                    if (!_item) continue;

                    const _search = elem.getAttribute("for").split(":")[0];
                    let _outer = elem.outerHTML;
                    const r = new RegExp(`{(${_search}.*?)}`, "g");

                    for (let match of _outer.match(r)) {

                        let t;

                        if ("object" != typeof _item) t = _item; else {

                            const o = match.replace(/[{}]+/g, "").split(".");
                            let l = _item;
                            for (let i = 1; i < o.length; i++) l = l[o[i]];
                            t = o.length > 1 ? l : identifier
                        }

                        _outer = _outer.replace(new RegExp(`{${_search}.*?}`), t)
                    }

                    parent.innerHTML += _outer
                }
            })
        })
    }

})();
