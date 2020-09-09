/*!
* JStream Bindings
 */

import jstream from "./jstream.js";
import JStream from "./JStream/jstream.class.js";

(function () {

    JStream.prototype.call = function () {

        _handleLoops();

        // // Get elements bound to properties
        // const bindings = {};
        // Array.prototype.slice.call(document.querySelectorAll('[bind]'))
        //     .map(function (element) {
        //         const boundValue = element.getAttribute('bind');
        //
        //         if (!bindings[boundValue]) {
        //             bindings[boundValue] = {
        //                 boundValue: boundValue,
        //                 elements: []
        //             }
        //         }
        //
        //         bindings[boundValue].elements.push(element);
        //     });
        //
        // // Update DOM element bound when controller property is set
        // const proxy = new Proxy(jstream.prototype.c_class.c, {
        //     set: function (target, prop, value) {
        //         const bind = bindings[prop];
        //         if (bind) {
        //             bind.elements.forEach(function (element) {
        //                 if (element.tagName === 'INPUT') {
        //                     element.value = value;
        //                     element.setAttribute('value', value);
        //                 } else {
        //                     element.textContent = value;
        //                 }
        //             });
        //         }
        //         return Reflect.set(target, prop, value);
        //     }
        // });
        //
        // // Listen DOM element update to set the controller property
        // Object.keys(bindings).forEach(function (boundValue) {
        //     const bind = bindings[boundValue];
        //     bind.elements.forEach(function (element) {
        //         element.addEventListener('input', function (event) {
        //             proxy[bind.boundValue] = event.target.value;
        //         });
        //     })
        // });
        //
        // Object.assign(proxy, jstream.prototype.c_class.c);
    }

    // function _handleLoops() {
    //     const templates = jstream.find('jstream-item-template');
    //
    //     templates.forEach((elem) => {
    //         const parent = elem.parentElement;
    //         elem.querySelectorAll('[for]')
    //             .forEach((loop_def) => {
    //
    //                 const items = jstream.prototype.c_class.c[loop_def.getAttribute('for').split(':')[1]];
    //                 if (!items) {
    //                     return;
    //                 }
    //
    //                 for (const [identifier, _item] of Object.entries(items)) {
    //
    //                     if (!_item) {
    //                         continue
    //                     }
    //
    //                     const _search = loop_def.getAttribute('for').split(':')[0];
    //
    //                     let _inner = loop_def.outerHTML;
    //
    //                     const re = new RegExp(`{(${_search}.*?)}`, 'g');
    //
    //                     for (let match of _inner.match(re)) {
    //                         let replacement;
    //                         if (typeof _item !== 'object') {
    //                             replacement = _item;
    //                         } else {
    //                             const seLem = match.replace(/[{}]+/g, '').split('.');
    //                             let foundObj = _item;
    //                             for (let i = 1; i < seLem.length; i++) {
    //                                 foundObj = foundObj[seLem[i]];
    //                             }
    //                             replacement = seLem.length > 1 ? foundObj : identifier;
    //                         }
    //
    //                         _inner = _inner
    //                             .replace(new RegExp(`{${_search}.*?}`),
    //                                 replacement);
    //                     }
    //                     parent.innerHTML += _inner;
    //                 }
    //             });
    //     });
    // }

    function _handleLoops() {
        jstream.find("jstream-item-template").forEach(e => {
            const t = e.parentElement;
            e.querySelectorAll("[for]").forEach(e => {
                const o = jstream.prototype.c_class.c[e.getAttribute("for").split(":")[1]];
                if (o) for (const [r, n] of Object.entries(o)) {
                    if (!n) continue;
                    const o = e.getAttribute("for").split(":")[0];
                    let l = e.outerHTML;
                    const c = new RegExp(`{(${o}.*?)}`, "g");
                    for (let e of l.match(c)) {
                        let t;
                        if ("object" != typeof n) t = n; else {
                            const o = e.replace(/[{}]+/g, "").split(".");
                            let l = n;
                            for (let e = 1; e < o.length; e++) l = l[o[e]];
                            t = o.length > 1 ? l : r
                        }
                        l = l.replace(new RegExp(`{${o}.*?}`), t)
                    }
                    t.innerHTML += l
                }
            })
        })
    }

})();
