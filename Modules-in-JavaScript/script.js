//IFFE
let fightModule = (function () {
    let harry = "Potter";
    let valdemort = "He who must not be named"

    function fight(char1, char2) {
        let attack1 = Math.floor(Math.random() * char1.length);
        let attack2 = Math.floor(Math.random() * char1.length);

        return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;

    }
    return {
        fight: fight
    }
})()

//CommonJS and AMD
//OBS: to use modules on web without NODE, use:
//Browserify to bundle te code


//CommonJS
let module1 = require("module1")
let module2 = require("module2")

function fight() {
    //do sometihng....
}

module1.exports = {
    fight: fight
}

//AMD
define(['module1', 'module2'],
    function (module1Import, module2Import) {
        let module1 = module1Import
        let module2 = module2Import

        function dance() {

        }

        return {
            dance: dance
        }
    }
)