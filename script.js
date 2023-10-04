const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// 1.
const newInventors = inventors.filter(
  (inventor) => inventor.year < 1600 && inventor.year > 1499
);
console.log(newInventors);

// 2.
const firLasName = inventors.map((inventor) => {
  const newObj = { first: `${inventor.first}`, last: `${inventor.last}` };
  return newObj;
});
console.log(firLasName);

// 3.
const sortedInventors = inventors.sort((a, b) => a.year - b.year);
console.log(sortedInventors);

// 4.
console.log(inventors.find((name) => name.first === "Ada"));

// 5.
const totalYears = inventors.reduce((acc, num) => {
  acc = acc + num.passed - num.year;
  return acc;
}, 0);
console.log(totalYears);

const people = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// 6.

const newPeople = people.map((person) => {
  const word = person.split(",");
  const newWord = `${word[1]} ${word[0]}`;
  return newWord;
});
console.log(newPeople);

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// 7.
const newData = data.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(newData);

const devs = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

// 8.
const older19 = devs.some((dev) => {
  const theDate = new Date().getFullYear();
  if (theDate - dev.year > 18) {
    return true;
  }
});
console.log(older19);

// 9.

const everyDev = devs.every((dev) => new Date().getFullYear() - dev.year > 18);
console.log(everyDev);

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// 10.
const findId = comments.find((comment) => comment.id === 823423);
console.log(findId);

// 11.
const findIdx = comments.findIndex((comment) => comment.id === 123523);
console.log(findIdx);
