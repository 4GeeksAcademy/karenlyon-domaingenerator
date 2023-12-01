/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  console.log("Hello Rigo from the console!");
};

let pronouns = ["the", "our", "an", "some"];
let adjs = ["great", "big", "small", "beauty"];
let nouns = ["jogger", "racoon", "mouse", "queen"];
let exts = [".com", ".es", ".us", ".net"];

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      for (let ext of exts) {
        console.log(`${pronoun}${adj}${noun}${ext}`);
      }
    }
  }
}
