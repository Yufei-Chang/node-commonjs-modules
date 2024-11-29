const fullName = require('./names');
const finalName = fullName.userName('YuFei', 'Chang');

const { arrayHobbies } = require('./hobbies');

const finalHobbies = arrayHobbies('cards', 'figures', 'movies');

function megazord() {
    return {
        username: finalName,
        userhobbies: finalHobbies,
    }
}

console.log(megazord());