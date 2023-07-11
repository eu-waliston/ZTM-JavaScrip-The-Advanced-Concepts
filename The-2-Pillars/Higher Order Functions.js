//Normal Function
/*
    function letAdminLogin() {
        let array = [];
        for(let i = 0; i < 10000000; i++) {
            array.push(i)
        }

        return console.log("Access Granted to Admin");

    }

    function letEvaLogin() {
        let array = [];
        for(let i = 0; i < 10000000; i++) {
            array.push(i)
        }

        return console.log("Access Granted to Eva");

    }

    letAdminLogin()
    letEvaLogin()

*/

//Functions Calling another functions
/*
    const giveAccessTo = (name) => {
    console.log(`Access Granted to ${name}`);
    };

    function letUserLogin(user) {
    let array = [];
    for (let i = 0; i < 10000000; i++) {
        array.push(i);
    }

    return giveAccessTo(user);
    }

    letUserLogin("Waliston");

*/

//Higher Order Functions
/*
    function giveAccessTo(name) {
    console.log(`Access Greanted to: ${name}`);
    }

    function sing(person) {
    return console.log(`LA LA LA my name is ${person.name}`);
    }

    function Auth(verify) {
    let array = [];
    for (let i = 0; i < verify; i++) {
        array.push(i);
    }
    return giveAccessTo(person.name);
    }

    function letPerson(person, fn) {
    if (person.level === "admin") {
        return fn(person);
    } else if (person.level === "user") {
        return fn(person);
    }
    }

    letPerson(
    {
        level: "user",
        name: "Time",
    },
    sing
    );
*/
