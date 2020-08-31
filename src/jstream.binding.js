/*!
* JStream Bindings
 */

import jstream from "./jstream.core.js";
import JStream from "./JStream/jstream.class.js";
(function () {

    JStream.prototype.call = function () {

        // Get elements bound to properties
        const bindings = {};
        Array.prototype.slice.call(document.querySelectorAll('[bind]'))
            .map(function (element) {
                const boundValue = element.getAttribute('bind');

                if (!bindings[boundValue]) {
                    bindings[boundValue] = {
                        boundValue: boundValue,
                        elements: []
                    }
                }

                bindings[boundValue].elements.push(element);
            });

        // Update DOM element bound when controller property is set
        const proxy = new Proxy(jstream.prototype.c_class.c, {
            set: function (target, prop, value) {
                const bind = bindings[prop];
                if (bind) {
                    bind.elements.forEach(function (element) {
                        if (element.tagName === 'INPUT') {
                            element.value = value;
                            element.setAttribute('value', value);
                        } else {
                            element.textContent = value;
                        }
                    });
                }
                return Reflect.set(target, prop, value);
            }
        });

        // Listen DOM element update to set the controller property
        Object.keys(bindings).forEach(function (boundValue) {
            const bind = bindings[boundValue];
            bind.elements.forEach(function (element) {
                element.addEventListener('input', function (event) {
                    proxy[bind.boundValue] = event.target.value;
                });
            })
        });

        Object.assign(proxy, jstream.prototype.c_class.c);
    }

})();
