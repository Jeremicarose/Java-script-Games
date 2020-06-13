
function ageInDays() {
    var yearBirth = prompt("When were you born : ")
    var age = (2020 - yearBirth) * 365;
    var h1 = document.createElement("h1");
    var textResult = document.createTextNode("You are " + age + " old in days");
    h1.setAttribute("id", "ageInDays");
    h1.appendChild(textResult);
    document.getElementById("result").appendChild(h1);
    hitSound6.play();
}
function restart() {
    document.getElementById("ageInDays").remove();
    hitSound5.play();
}

function cat() {
    var image = document.createElement("img");
    var div = document.getElementById("flexCat");
    image.src = "jere.jpg";
    image.height = "150";
    image.width = "150";
    div.appendChild(image);
}
function game(yourChoice) {
    var humanChoice, butChoice;
    humanChoice = yourChoice.id;
    butChoice = numberChoice(ranNum());
    result = decideWinner(humanChoice, butChoice);
    console.log(finalMessage());

    message = finalMessage(result);
    console.log(message);

    frontEnd(humanChoice, butChoice, message);
    hitSound5.play();

}

function ranNum() {
    return Math.floor((Math.random()) * 3);
}

function numberChoice(number) {
    return ["rock", "paper", "scissor"][number];
}

function decideWinner(yourChoice, compChoice) {
    var base = {
        'rock': { scissor: 1, rock: 0.5, paper: 0 },
        'scissor': { scissor: 0.5, rock: 0, paper: 1 },
        'paper': { scissor: 0, rock: 1, paper: 0.5 }
    }
    var yourScore = base[yourChoice][compChoice];
    var compScore = base[compChoice][yourChoice];
    return (yourScore, compScore);
}
function finalMessage(yourScore, compScore) {
    if (yourScore === 0) {
        return { 'message': 'You Lost!', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You Draw!', 'color': 'yellow' };
    } else {
        return { 'message': 'You Win!', 'color': 'blue' };
    }
}
function frontEnd(humanImageChoice, butImageChoice, finalMessage) {
    var imageBase = {

        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }
    console.log(imageBase);

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var butDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = `<img src = '${imageBase[humanImageChoice]}' height = 150 width = 150 style = 'box-shadow: 0px 10px 80px  blue;'>`
    messageDiv.innerHTML = `<h1 style = 'color:${finalMessage['color']};font-size: 60px; padding:30px;'>${finalMessage['message']}</h1>`
    butDiv.innerHTML = `<img src = '${imageBase[butImageChoice]}'height = 150 width = 150 style = 'box-shadow: 0px 10px 80px  red;'>`

    document.getElementById("flexImage").appendChild(humanDiv);
    document.getElementById("flexImage").appendChild(messageDiv);
    document.getElementById("flexImage").appendChild(butDiv);
}

var all_button = document.getElementsByTagName('button');
var copyAllBut = [];
for (let i = 0; i < all_button.length; i++) {
    copyAllBut.push(all_button[i].classList[1])
}
function buttonChange(butt) {
    if (butt.value === 'red') {
        buttonRed();
    }
    if (butt.value === 'green') {
        buttonGreen();
    }
    if (butt.value === 'blue') {
        buttonBlue();
    }
    if (butt.value === 'random') {
        buttonRandom();
    }
    if (butt.value === 'reset') {
        buttonReset();
    }
}
function buttonRed() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-danger');
    }
}
function buttonBlue() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-primary');
    }
}
function buttonGreen() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add('btn-success');
    }
}
function buttonRandom() {
    for (let i = 0; i < all_button.length; i++) {
        var choice = ['btn-primary', 'btn-success', 'btn-warning', 'btn-danger'];
        var randNums = Math.floor(Math.random() * 4)
        console.log(randNums);

        console.log(all_button[i].classList.remove(all_button[i].classList[1]));
        all_button[i].classList.remove(all_button[i].classList[1]);
        console.log(all_button[i].classList.add(choice[randNums]));
        all_button[i].classList.add(choice[randNums]);
    }
}
function buttonReset() {
    for (let i = 0; i < all_button.length; i++) {
        all_button[i].classList.remove(all_button[i].classList[1]);
        all_button[i].classList.add(copyAllBut[i]);
    }
}




