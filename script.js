const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

const team = players;
const team1 = [...players]; // Creates a shallow copy of the players array
const cap1 = { ...person }; // Creates a shallow copy of the person object

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
