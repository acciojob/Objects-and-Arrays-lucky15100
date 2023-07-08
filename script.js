let players = ['John', 'Mike', 'Sarah'];
let person = { name: 'Alice', age: 25 };

let team = players;
let team1 = [...players]; // Creates a shallow copy of the players array

let cap1 = { ...person }; // Creates a shallow copy of the person object
