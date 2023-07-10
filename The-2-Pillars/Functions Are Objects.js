// Functions are Objects...

function one() {
    return console.log(1);
}

one();


const obj = {
    two() {
        return console.log(2);
    }
}

obj.two()


function three() {
    return console.log(3);
}

three.call()

const four = new Function('return console.log(4)');

four()


function wwohoo(){
    console.log('woohoooo');
}

wwohoo.yell = 'ahhhhhhhhh'

