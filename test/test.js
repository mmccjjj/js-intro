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

else if (note >= 80) {
    buchstabenNote = "B";
}

else if (note >= 70) {
    buchstabenNote = "C";
}

else if (note >= 60) {
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

var slider = document.getElementById("schiere");
var output = document.getElementById("demo");
output.innerHTML = slider.value+ "°C";

slider.oninput = function() {
  output.innerHTML = this.value+ "°C";
}

const schiere = document.getElementById("schiere");
const hot = document.getElementById("hot");
const nice = document.getElementById("nice");
const cold = document.getElementById("cold");

function wetter(){
    const value = schiere.value;

    if (value>= 26){
        hot.style.display= "block";
        nice.style.display= "none";
        cold.style.display= "none";
    }

    else if (value>= 10){
        hot.style.display= "none";
        nice.style.display= "block";
        cold.style.display= "none";
    }

    else {
        hot.style.display= "none";
        nice.style.display= "none";
        cold.style.display= "block"; 
    }
}

schiere.addEventListener('input', wetter);