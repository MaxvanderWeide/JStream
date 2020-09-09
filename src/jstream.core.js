/*!
* JStream core
 */
import JStream from "./JStream/jstream.class.js"

const version = "0.0.1",
    jstream = function (_c_class) {
        if (!_c_class || typeof _c_class === 'function') {
            console.error(`Can't initialize stream without class definition`)
        }
        jstream.prototype.c_class = new JStream(_c_class)
        jstream.prototype.c_class.init()
        return jstream.prototype.c_class;
    };


jstream.fn = jstream.prototype = {

    jstream: version,

    constructor: jstream,
};

JStream.prototype.init = function () {
    jstream.prototype.c_class.call();
}

export default jstream;
