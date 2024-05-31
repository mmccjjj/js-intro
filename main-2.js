function log(label, message){
    console.log(label,message);
    }

function ale(label, message){
    alert(label +" "+ message);
    }
/* 
    function printInParagraph(id,label,message){
        let element = document.getElementById(id);
        element.innerText = label + " " + message;
        
    } */


    function printInParagraph(id, message){
        let element = document.getElementById(id);
        element.innerText = message;
        
    }





    /* ------------------------------------------------------------------------------------ */


function morningroputine(){
    console.log("Wake up");
    console.log("Have breakfast");
    console.log("Brush teeth");
}

morningroputine();


function randomNumber(id){
printInParagraph(id,"Zufallszahl", Math.floor(Math.random()*100)+1);
}


/* randomNumber("print-paragraph");
randomNumber("test");
randomNumber("test2"); */


function forretsGump(){
    console.log("Live is like a box of chocolats");
}


forretsGump();

function collectCoins(coinAmount) {
    console.log("Mario has now " + coinAmount + " coins!");

}

collectCoins(5);

collectCoins(100);

function birtDay(name){
    console.log("Happy Birthday "+ name);
}

birtDay("Chris");

function fairWell(name){
    console.log("Live long and prosper "+ name);
}

fairWell("Bob");
fairWell("Brandon");

function order(id, food, drink){
    let begrüssung= "Guten Tag, ";
    let bestellung= begrüssung+ "Ich möchte gerne ";

    if(food&& drink){
        bestellung = bestellung+ "einmal "+ food+ "zum essen und einmal "+ drink+ "zum trinken bestellen";
    }

    else if(food){
        bestellung = bestellung+ "nur einmal "+ food+ "zum essen bestellen";
    }

    else if(drink){    let sideName = "Mufasa";
    let sideRole = "Simba's father";
    let supportName = "Nala";
    let supportRole = "Simba's best friend";
}

    
}

order("test","burger", "cola ");
order("test2","burger ");


function nameAndAge(name, age){
    console.log(name+ " is "+ age+ " years old");
}

nameAndAge("Alex", 25);








/* printCharInfo(name, role);
printCharInfo(sideName, sideRole);
printCharInfo(supportName,supportRole); */

function printCharInfo(name, role){
    console.log(name + " is "+ role + " in 'The Lion King'");
    
}


function printLion(id, name, role){
    
    if (!name){
        name = "Simba";
    }

    if (!role){
        role = "the main character";
    }

    let text = name + " is "+ role + " in 'The Lion King'";

    printInParagraph(id,text);
}



function noteInBuchstabe(id, note){

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

    /* printInParagraph(id, buchstabenNote); */

}



function wettervorhersage(id, temperatur){


    if (temperatur > 25) {
        wetter = "warm";
    }

    else if (temperatur >= 10) {
        wetter = "angenehm";
    }

    else if (temperatur < 10) {
        wetter = "kalt";
    }
    
    else {
        wetter = null;
    }

    printInParagraph(id, wetter);

}
