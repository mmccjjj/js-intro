function wochentage(day){


switch(day){
    case "montag":
        console.log("Heute ist Montag");
        break;

    case "dienstag":
        console.log("Heute ist Dienstag, Selbsstudium");
        break;
    
    case "mittwoch":
        console.log("Heute ist Mittwoch, starten wir ein neues Projekt");
    
    case "donnerstag":
        console.log("Heute ist Donnerstag, wir pushen sicher auf GItHub");
        break;

    case "freitag":"Hallo Ahmad"
        console.log("Heute ist Freitag, wir haben bald Wochenende");
        break;

    default: 
        console.log("Wochenende!");


}
}

let day= "Montag";
day= day.toLocaleLowerCase();

wochentage(day);





/* const name= "Antonio";
const lang= "en;"
let begruessung= "Hallon mein name ist ";
let begruessungDef= "Hallo, wer bist du? ";

if(lang === "en"){
    begruessung= "Hello, my name is";
    begruessungDef="Hell owho are you?";
}
else if (lang=== "sp"){
    begruessung= "Ola";
    begruessungDef= "Hola, quien eres?";
}


switch(name){
    case "Antonio":
    console.log(begruessung+ name);
    break;

    case "Phillip":
    console.log(begruessung+ name);
    break;

    case "Harry":
    console.log(begruessung+ name);
    break;

    case "Dani":
    console.log(begruessung+ name);
    break;

    case "Ahmad":
    console.log(begruessung+ name);
    break;

    default:
    console.log(begruessungDef+ name);
    break;


} */


/* -----------------------------------Geht Nicht---------------------------------------------- */

const nr= 100

switch(nr){
    case (nr> 100):
    console.log("Die zahl ist gross");
    break;

    case (nr>= 50):
    console.log("Die Zahl ist mittel");
    break;

    case (nr>= 0):
    console.log("Die Zahl ist klein");
    break;

    default:
    console.log("Die Zahl ist kleiner als 0");
    break;
}