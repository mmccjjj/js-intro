function log(label, message){
    console.log(label,message);
    }


function ale(label, message){
    alert(label +" "+ message);
}

/* ale("ghet", "das?"); */

const zahl1= 10;
const zahl2= 5;
const summe= zahl1+ zahl2;
const differenz= zahl1- zahl2;
const produkt= zahl1* zahl2;
const quotient= zahl1/ zahl2;

const zahl3= 7;
const zahl4= 12;
const summe1= zahl3+ zahl4

log(summe);
log(differenz);
log(produkt);
log(quotient);
log(summe1);


let vorname= "John"
let nachname= "Doe"
let vollerName= vorname+ " "+ nachname;

let strasse= "Räffelstrasse";
let hausNr= "12";
let plz= "8045";
let ort= "Zürich";

let adresse= strasse+ " "+ hausNr+ " "+ plz+ " "+ ort;
log("Adresse:", adresse);
log("Voller Name:", vollerName);

let laengeDesVollenNames= vollerName.length;
log("Länge des vollen Namens:", laengeDesVollenNames);

var regnetEs= true;
var hatSchirm= false;

var kannRausGehen= regnetEs && hatSchirm
log("Kann rausgehen (UND):",kannRausGehen);

var wirdTrockenBleiben= regnetEs|| hatSchirm;
log("Wird trocken bleiben(ODER):", wirdTrockenBleiben);

var gegenteil= !regnetEs;
log("Gegenteil von regnetEs:", gegenteil);

/* let msg= "ES FUNKTIONIERT"
ale("YUHUU", msg) */
