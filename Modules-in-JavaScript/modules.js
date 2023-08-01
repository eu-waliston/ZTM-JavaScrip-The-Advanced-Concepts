const harry = 'Sr. Potter';
const valdemort = 'Hw who must not be named';

export function fight(char1, char2) {
    const attack1 = Math.floot(Math.random * char1.lenght)
    const attack2 = Math.floot(Math.random * char2.lenght)

    return attack1 > attack2 ? `${char1} Wins!` : `${char2} Wins!`
}

