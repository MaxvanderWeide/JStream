import jstream from "../src/jstream.js";

class stat {
    constructor() {
        this.message = 'hey';
        this.starfish = 'starfish'
    }
}

jstream(new stat());

jstream.find('#click')[0].addEventListener('click', function () {
    jstream.find('h1')[0].css({color: 'red'});
    console.log(jstream.find('h1')[0].css().color);
})
