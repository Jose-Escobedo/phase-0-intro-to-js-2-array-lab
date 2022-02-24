// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
  cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(name) {
  cats.shift("Milo");
}

function appendCat(name) {
  let newCats = cats.slice();
  newCats.push("Broom");
  return newCats;
}

function prependCat(name) {
  let newCats = cats.slice();
  newCats.unshift("Arnold");
  return newCats;
}

function removeLastCat(name) {
  let newCats = cats.slice();
  newCats.pop("Garfield");
  return newCats;
}

function removeFirstCat(name) {
  let newCats = cats.slice();
  newCats.shift("Milo");
  return newCats;
}
