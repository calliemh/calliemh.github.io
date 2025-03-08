"use strict";

const imgArray = document.querySelectorAll("img");
for (let index = 0; index < imgArray.length; index++) {
    const element = imgArray[index];
    element.addEventListener("click", selectThrow);

}




function selectThrow(event) {
    let currImg = event.currentTarget;

    if (currImg.classList.contains("player-not-selected")) {
        currImg.style.border = "5px solid green";
        currImg.classList.replace("player-not-selected", "player-selected");

        //Embed another if statement to stop from second select


        deactvQuestion();

        randThrow();


        //counter for no. presents opened
        //let count = parseInt(document.querySelector("#score").textContent);
        //count = count+1;

        //change display to show you've opened another present, but not all are opened yet
        //document.querySelector("#score").textContent=count;

        //Next we need a different text for if all images open
        //put them in an array and if array = 5, then change entire paragraph
        //so it's an if/else

    }
}

function deactvQuestion() {
    document.getElementById('pc-question')
        .classList.replace("pc-active", "pc-inactive");
    let question = document.getElementById('pc-question')
        .className;
    document.getElementById('pc-question')
        .innerHTML = "<img src=\"rock.PNG\">"
        + question;
}

function randThrow() {
    //const randIndex = Math.floor(Math.random() * arr.length);
    //return imgArray[randIndex];

    var a = Math.floor(Math.random() * imgArray.length);

    if (a.className === "pc-rock") {
        a.classList.replace("pc-rock", "pc-active");
    }
    else if (a.className === "pc-paper") {
        a.classList.replace("pc-paper", "pc-active");
    }
    else if (a.className === "pc-scissors") {
        a.classList.replace("pc-scissors", "pc-active");
    }
    else {
        a.classList.replace("pc-inactive", "pc-active");
    }



}