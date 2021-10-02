const players = ['Alan', 'Sigmund', 'Arthur', 'Omar'];

const team = players;

console.log(players, team);

const team2 = players.slice();

const team3 = [].concat(players);

const team4 = [...players];
team4[3] = 'heeee hawww';
console.log(team4);

const team5 = Array.from(players);

const person = {
  name: ' Alan Turing',
  age: 80,
};

const cap2 = Object.assign({}, person, { number: 99, age: 12 });
console.log(cap2);

const alan = {
  name: 'Alan',
  age: 100,
  social: {
    twitter: '@alanturing',
    facebook: 'alanturing.developer',
  },
};

console.clear();
console.log(alan);

const dev = Object.assign({}, alan);

const dev2 = JSON.parse(JSON.stringify(alan));
