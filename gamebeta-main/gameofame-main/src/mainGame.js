let hintTaken = 0;
let level = 1;
let score = 0;
let levelPrev = 0;
let photos = [
    "game_fame_personalities/bill_gates.jpg",
    "game_fame_personalities/narendra_modi.jpg",
    "game_fame_personalities/shah_rukh_khan.jpg",
    "game_fame_personalities/indira_gandhi.jpg",
    "game_fame_personalities/indra_nooyi.jpg",
    "game_fame_personalities/kalpana_chawala.jpg",
    "game_fame_personalities/mirabai_chanu.jpg",
    "game_fame_personalities/dwayne_johnson.jpg"
];


let hints = [
    ["HOW TO AVOID A CLIMATE DISASTER", "William Henry", " NET WORTH = 37th richest country of the World"],
    ["14", "Jyotipunj", "Waah kya scene hai"],
    ["Ordre des Arts et des Lettres", "David Letterman", "Kolkata Knight Riders"],
    ["31/10/1984", "Woman of the Millenium", " Bell Bottom"],
    ["IIM Calcutta", "The World's 100 Most Powerful Women", "Pesico and Amazon"],
    ["Punjab Engineering College", "STS 107", "MetSat-1"],
    ["Anaheim, 48", "Mei Iklaba Thamoi", "Dhyan Chand Khel Ratna Award"],
    ["Criminology and Physiology major", "igneous, sedimentary and metamorphic ", "Flex Kavana"]
];

let answer = [
    "Bill Gates", "Narendra Modi",
    "Shahrukh Khan", "Indira Gandhi",
    "Indra Nooyi", "Kalpana Chawla",
    "Mirabai Chanu", "Dwayne Johnson"
]

function scoreKeeper() {
    var scoreKeeping = document.createElement("button");
    scoreKeeping.innerHTML = score;
    scoreKeeping.style.left = "800px";
    scoreKeeping.style.backgroundColor = "red";
    scoreKeeping.style.top = "230px";
    scoreKeeping.style.borderRadius = "25px";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(scoreKeeping);

    scoreKeeping.addEventListener("click", function() {
        alert(hints[level - 1][0]);
        hintTaken = 1;
        layerIt(hintTaken);
    })
}

function levelChanger() {
    var levelChange = document.getElementById("levelIt")
    levelChange / appendChild(level);
}

function hintProducer() {
    //Button 1
    var button1 = document.createElement("button");
    button1.innerHTML = "Click for Hint 1";
    button1.style.left = "14%";
    button1.style.backgroundColor = "red";
    button1.style.top = "30%";
    button1.style.borderRadius = "25px";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button1);

    button1.addEventListener("click", function() {
        alert(hints[level - 1][0]);
        hintTaken = 1;
        layerIt(hintTaken);
    });

    //Button 2
    var button2 = document.createElement("button");
    button2.innerHTML = "Click for Hint 2";
    button2.style.left = "14%";
    button2.style.top = "50% ";
    button2.style.borderRadius = "25px";
    button2.style.backgroundColor = "blue";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button2);

    button2.addEventListener("click", function() {
        alert(hints[level - 1][1]);
        hintTaken = 2;
        layerIt(hintTaken);
    });

    //Button 3
    var button3 = document.createElement("button");
    button3.innerHTML = "Click for Hint 3";
    button3.style.left = "14%";
    button3.style.top = "70%";
    button3.style.backgroundColor = "yellow";
    button3.style.borderRadius = "25px";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button3);

    button3.addEventListener("click", function() {
        alert(hints[level - 1][2]);
        hintTaken = 3;
        layerIt(hintTaken);

    });
}

function answers() {
    var ans1 = window.prompt("Enter your answer - ");

    if (ans1.toLowerCase == answer[level - 1].toLowerCase) {
        level++;
        imageDeveloper(level);
        layerIt(0);
        if (hintTaken == 1) { score += 50; }
        if (hintTaken == 2) { score += 30; }
        if (hintTaken == 3) { score += 10; }
        alert("Correct Answer");
        hintTaken = 0;
        const elementScore = document.getElementById("scoreIt");
        elementScore.innerHTML = "Score:" + score;
        const elementLevel = document.getElementById("levelIt");
        elementLevel.innerHTML = "Level:" + level;

        return 1;
    } else {
        alert("Your answer is incorrect");
        return 0;
    }
}

function answerButton() {
    var ansButton = document.createElement("button");
    ansButton.innerHTML = "Answer";
    ansButton.style.left = "70%";
    ansButton.style.top = "50%";
    ansButton.style.backgroundColor = "green";
    ansButton.style.borderRadius = "50px";
    ansButton.style.zIndex = 20;
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(ansButton);

    ansButton.addEventListener("click", function() {
        answers();
    })
}


function imageDeveloper(indexing) {
    switch (indexing) {
        case 1:
            {
                document.getElementById("try").src = "game_fame_personalities/bill_gates.jpg";
                break;
            }
        case 2:
            {
                document.getElementById("try").src = "game_fame_personalities/narendra_modi.jpg";
                break;
            }
        case 3:
            {
                document.getElementById("try").src = "game_fame_personalities/shah_rukh_khan.jpg";
                break;
            }
        case 4:
            {
                document.getElementById("try").src = "game_fame_personalities/indira_gandhi.jpg";
                break;
            }
        case 5:
            {
                document.getElementById("try").src = "game_fame_personalities/indra_nooyi.jpg";
                break;
            }
        case 6:
            {
                document.getElementById("try").src = "game_fame_personalities/kalpana_chawala.jpg";
                break;
            }

        case 7:
            {
                document.getElementById("try").src = "game_fame_personalities/mirabai_chanu.jpg"
                break;
            }

        case 8:
            {
                document.getElementById("try").src = "game_fame_personalities/dwayne_johnson.jpg";
                break;

            }
            layerIt(0);
    }
}

function layerIt(hint) {
    let canvasSquares = document.getElementById("layering");
    let sctx = canvasSquares.getContext("2d");

    sctx.clearRect(0, 0, 405, 405);

    for (let i = 0; i < 15; i++) {
        for (let j = 0; j < 15; j++) {
            if (j == 0 || i == 0 || i == j || i + j == 14 || i == 14 || j == 14)
                sctx.fillStyle = "grey";
            else if (i > 0 && i % 2 == 1 && i < 14 && j % 2 == 0) {

                if (hint < 2)
                    sctx.fillStyle = "blue";
                else
                    continue;
            } else if (i > 0 && i % 2 == 0 && i < 14 && j % 2 == 1) {
                if (hint < 1)
                    sctx.fillStyle = "red";
                else
                    continue;
            } else {
                if (hint < 3)
                    sctx.fillStyle = "yellow";
                else
                    continue;
            }
            console.log("successful");
            console.log(score);
            console.log(level);
            console.log(hintTaken);
            sctx.fillRect(i * 27, j * 27, 27, 27);
        }

    }
}
layerIt(hintTaken);
answerButton();
hintProducer();