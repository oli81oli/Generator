// const add = document.querySelector('.test');
// add.innerHTML = 'hello'
// const users = [
//     { name: 'Nymphadora Tonks', time: 9 },
//     { name: 'Cedric Diggory', time: 28 },
//     { name: 'Cho Chang', time: 35 },
//     { name: 'Luna Lovegood', time: 45 },
//     { name: 'Gregory Goyle', time: 56 }
// ];
// const [a] = users;
// console.log(users)

// const marks = [5, 4, 6, 7, 9];
// const inflatedMarks = marks.map((mark) => mark+1);
// console.log(inflatedMarks)

// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const welcomeNames = names.map(name => 'welcome' + ' ' + name);
// console.log(welcomeNames)
const users = [
    { name: 'María', isPremium: false },
    { name: 'Lucía', isPremium: true },
    { name: 'Susana', isPremium: true },
    { name: 'Rocío', isPremium: false },
    { name: 'Inmaculada', isPremium: false }
];

const premiumUsers = users.map(user => {
    if (user.isPremium) {
        return `Welcome ${user.name}`
    }

    return `Caca ${user.name}`
})

const feed = async () => {
    const pets = ['cat', 'dog', 'bird'];

    for (let pet of pets) {
        await feedPet(pet)
    }
}

const premiumUsers = users.map(user => user.isPremium ? `Welcome ${user.name}` : `Caca ${user.name}`)
console.log(premiumUsers)