// if else Shortcut

if (true) {
  ("truthy");
} else {
  ("falsy");
}

// ist dasselbe wie hier

// if dann..    else dann...
true ? truthy : "falsy";

// auch in einer variable kann man es speichern
const ergebnis = true ? truthy : "falsy";



// guard operator
// wenn es false ist dann prüft es nicht weiter
let message1 = false && 'hallo';
console.log(message);
// wenn es true ist dann pruft es weiter
let message2= true && 'hallo';
console.log(message);
//----------------------------------------