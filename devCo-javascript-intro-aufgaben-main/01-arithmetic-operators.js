/* ===================================================================================================
 Ü1 | Grundlegende Berechnungen
--------------------------------------------------------------------------------------------------- */

let zahl1 = 10;
let zahl2 = 5;

// Eine Addition
let summe = zahl1+ zahl2;


// Eine Subtraktion
let differenz= zahl1- zahl2;

// Eine Multiplikation
let produkt= zahl1* zahl2;

// Eine Division
let quotient= zahl1/ zahl2;

// Ein Modulo
let rest= zahl1% zahl2;

/* ===================================================================================================
 Ü2 | Inkrement und Dekrement
--------------------------------------------------------------------------------------------------- */

// Inkrementiere die Zahl um 1
let inkrement = 10;
inkrement = ++inkrement;

// Dekrementiere die Zahl um 1
let dekrement = 10;
dekrement = --dekrement;

/* ===================================================================================================
 Ü3 | Restwert berechnen
--------------------------------------------------------------------------------------------------- */

// Berechne den Restwert
/*
    Beschreibung:
    Der Modulo Operator (%) gibt den Restwert einer Division zurück. Verwende den Modulo Operator, um den Restwert der Division von zahlModulo1 durch zahlModulo2 zu berechnen.
*/

let zahlModulo1 = 13;
let zahlModulo2 = 4;

let restwertModulo= zahlModulo1% zahlModulo2;

/* ===================================================================================================
 Ü4 | Durchschnitt berechnen
--------------------------------------------------------------------------------------------------- */

let note1 = 4;
let note2 = 5;
let note3 = 6;
let note4 = 5;

// Summiere alle Noten
let summeNoten= note1+ note2+ note3+ note4;

// Berechne den Durchschnitt (Dividiere die Summe der Noten durch die Anzahl der Noten (4))
let durchschnitt= summeNoten/ 4;

/* ===================================================================================================
 Ü5 | Geschwindigkeit berechnen
--------------------------------------------------------------------------------------------------- */

let strecke = 240; // in Kilometer
let zeit = 2; // in Stunden

// Berechne die Geschwindigkeit Strecke durch Zeit
let geschwindigkeit= strecke/ zeit;

/* ===================================================================================================
 Ü6 | Klammerberechnung um die erreichte Punktzahl in Prozent auszurechnen
--------------------------------------------------------------------------------------------------- */

let punkte = 150;
let maxPunkte = 200;

// Berechne die erreichte Punktzahl in Prozent, die ersten beiden Variablen dividierst du in einer Klammer und multiplizierst das Ergebnis mit 100
let prozent= (punkte/ maxPunkte)* 100;

/* ===================================================================================================
END of working area, please write your code above this area to avoid potential conflicts
=================================================================================================== */

function checkResult(test, prefix, result) {
  if (test === result) {
    console.log(`✅ - ${prefix} Das Resultat ${test} ist korrekt`);
  } else {
    console.log(
      `❌ - ${prefix} Resultat ${test} ist falsch, erwartet war ${result}`
    );
  }
}

console.log("\n", "*** Ü1 | Grundlegende Berechnungen ***", "\n");
checkResult(summe, "Summe: ", 15);
checkResult(differenz, "Differenz: ", 5);
checkResult(produkt, "Produkt: ", 50);
checkResult(quotient, "Quotient: ", 2);
checkResult(rest, "Rest: ", 0);

console.log("\n", "*** Ü2 | Inkrement und Dekrement ***", "\n");
checkResult(inkrement, "Inkrement: ", 11);
checkResult(dekrement, "Dekrement: ", 9);

console.log("\n", "*** Ü3 | Restwert berechnen ***", "\n");
checkResult(restwertModulo, "Restwert Modulo: ", 1);

console.log("\n", "*** Ü4 | Durchschnitt berechnen ***", "\n");
checkResult(summeNoten, "Summe Noten: ", 20);
checkResult(durchschnitt, "Durchschnitt: ", 5);

console.log("\n", "*** Ü5 | Geschwindigkeit berechnen ***", "\n");
checkResult(geschwindigkeit, "Geschwindigkeit: ", 120);

console.log(
  "\n",
  "*** Ü6 | Klammerberechnung um die erreichte Punktzahl in Prozent auszurechnen ***",
  "\n"
);
checkResult(prozent, "Prozent: ", 75);
