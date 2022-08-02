// Packages set to require and import
// BROKEN - Need to figure out how to call the import while calling requires
//     Add type: "module" to package.json for imports
import { franc } from "franc";
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];

// Setting franc to input
const langCode = franc(input);

if (langCode === "und") {
  console.log("Sorry, couldn't figure it out! Try a larger text sample.".red);
} else {
  // Setting langs to grab the code and the language input using franc
  const language = langs.where("3", langCode);
  // Printing the language name set to colors package
  console.log(`Our best guess is: ${language.name.green}`);
}
