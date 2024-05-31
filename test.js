function noteUmrechnen(numEingabefelder){

    for(let i= 1; i <= numEingabefelder; i++) {

    let noteElement = document.getElementById("note" + i);
    let ergebnisElement = document.getElementById("ergebnis"+ i);
    let noteWert = noteElement.valueAsNumber;
    let ergebnis = noteInBuchstabetest(noteWert);
    ergebnisElement.innerText= ergebnis;
    }
}


function noteInBuchstabetest(note){

let buchstabenNote

if (note >= 90) {
    buchstabenNote = "A";
}

else if (note < 90 && note >= 80) {
    buchstabenNote = "B";
}

else if (note < 80&& note >= 70) {
    buchstabenNote = "C";
}

else if (note < 70&& note >= 60) {
    buchstabenNote = "D";
}

else if (note >= 0) {
    buchstabenNote = "F";
}

else {
    buchstabenNote = null;
}
return buchstabenNote;
}