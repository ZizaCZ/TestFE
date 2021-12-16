let hash = [];
let tags = "";
let safe = [];
list = [];
hash = window.location.hash = "#tags=red,blue,purple";

function removeobj(i) {
    if (document.getElementById("js" + i) != null) {
        let objrem = document.getElementById("js" + i);
        objrem.remove();
    }
}

function Info() {
    document.getElementById("demo").innerHTML =
        "The Hash of this page is:<br>" + hash;
    console.log(list);
}
Info();

function Add() {

    hash = window.location.hash = hash + "," + document.getElementById("inputs").value;
    for (i = 0; i < 10; i++) {
        if (document.getElementById("js" + i) == null) {
            load();
            Info();
        } else {
            removeobj(i);
        }
    }
}


function load() {
    const alphabet = ["a", "A", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "G", "g", "H", "h", "I", "i", "J", "j", "K ", "k", "L", "l", "M", "m", "N", "n", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "T", "t", "U", "u", "V", "v", "W ", "w", "X", "x", "Y", "y", "Z", "z"];
    let x = 0;
    console.log(hash);
    for (i = 5; i < hash.length + 1; i++) {
        if (!alphabet.includes(hash[i])) {
            let ul = document.createElement("ul");
            ul.setAttribute("id", "js" + x);
            ul.setAttribute("onClick", "removeobj(" + x + ")");
            ul.innerHTML = tags;
            console.log(i);
            document.body.appendChild(ul);
            safe = tags;
            tags = [];
            x += 1;
            console.log("tohle je X: " + x);
        } else {
            tags += "" + hash[i];
            console.log("tohle jsou tagy: " + tags);
        }
    }
}
load();

function Hide() {
    let Burgr = document.getElementById("Burgr");
    let Tortilla = document.getElementById("Tortilla");
    if (Tortilla.style.display === "none") {
        Tortilla.style.display = "block";
    } else {
        Tortilla.style.display = "none";
    }
    if (Burgr.style.display == "none") {
        Burgr.style.display = "block";
    } else {
        Burgr.style.display = "none";
    }
}