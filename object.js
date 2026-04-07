const car = {
  name: "toyota",
  color: "blue",
  engine: "2 pung",
  start: () => {
    console.log("Drive now");
  },
  otherinfo: [5, 3, 4, 5, 7],
  isengineengaged: false,
};
//  console.log(car)
//  console.log(car.name, car.engine)
car.start();
console.log();

// template literals and string interpolation
// const name= ``;
let name1 = "Tola";
let name2 = "Ayomide";
// const name = name1 + "" + name2;
// const name = name1.concat("", name2,"", name3);
const names = `${name1} ${name2} ${name3}`;
console.log(names);

// DOM(Document Object Method)
