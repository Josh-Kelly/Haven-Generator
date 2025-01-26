// Function to generate a random name
function generateName() {
  // Example lists of names
  const firstName = [
    "Steam",
    "Grub",
    "Knuckle",
    "Mammoth",
    "Pale",
    "Raven",
    "Rust",
    "Slate",
    "Stone",
    "Storm",
    "Thorn",
    "Tusk",
    "Wolf",
    "Wool",
    "Worm",
    "Wren",
    "Yew",
    "Roost",
    "Rust",
    "Spider",
    "Surgeon",
    "Turnip",
  ];
  const secondName = [
    "falls",
    "light",
    "warren",
    "bone",
    "point",
    "chase",
    "feather",
    "roost",
    "kennel",
    "field",
    "gulch",
    "rest",
    "hall",
    "seed",
    "brook",
    "vale",
    "wood",
    "grove",
    "ridge",
    "hollow",
  ];

  const randomIndexA = Math.floor(Math.random() * firstName.length);
  const randomIndexB = Math.floor(Math.random() * secondName.length);

  const part1 = firstName[randomIndexA];
  const part2 = secondName[randomIndexB];

  const randomName = `${part1}${part2}`;

  document.getElementById("havenName").innerHTML = randomName;
}
