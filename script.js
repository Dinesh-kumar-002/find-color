var display = document.querySelector('#display')
var display2 = document.querySelector('#display2')
var squares = document.querySelectorAll(".square");
var userModeLevel = document.querySelectorAll(".mode");
var container = document.querySelector('#containers');
var start = document.querySelector('#start');
var reset = document.querySelector('#reset');

//initializing numberOfBoxes to 3(_the minimum_)

var numberOfBoxes = 3;

//calling function when the page load

initial();

//initializing function
start.addEventListener('click', ()=>{
    initial();
    start.innerHTML='NEXT'
    display2.style.backgroundColor="transparent";
    display2.innerHTML="";
})
function initial() {
    var array = [];
    for (let z = 0; z < squares.length; z++) {
        if (z < numberOfBoxes) {
            squares[z].style.display = "block";
        } else {
            squares[z].style.display = "none";
        }
    }
    for (let i = 0; i < numberOfBoxes; i++) {
        if (array.length > numberOfBoxes - 1) {
            break;
        } else {
            array.push(generateColor());
            squares[i].style.backgroundColor = array[i];
        }
    }
    var randomColor = Math.floor(Math.random() * numberOfBoxes);
    botChoosedColor(array[randomColor])
    console.log(array[randomColor]);
    clickingBox();
}

// number of boxes to be set 

function boxSettings(num) {
    for (let z = 0; z < squares.length; z++) {
        if (z < num) {
            squares[z].style.display = "block";
        } else {
            squares[z].style.display = "none";
        }
    }
}

//level selection easy or moderare or hard

userModeLevel[2].addEventListener('click', () => {
    numberOfBoxes = 9;
    boxSettings(numberOfBoxes);
    initial();
})
userModeLevel[1].addEventListener('click', () => {
    numberOfBoxes = 6;
    boxSettings(numberOfBoxes);
    initial();
})
userModeLevel[0].addEventListener('click', () => {
    numberOfBoxes = 3;
    boxSettings(numberOfBoxes);
    initial();
})

//clicking box then call function

function clickingBox() {
    squares.forEach((square) => {
        square.addEventListener('click', () => {
            var userChoosedColor = square.style.backgroundColor;
            var trimmed = userChoosedColor.replaceAll(' ', '')
            console.log(trimmed);
            if (display.innerHTML === trimmed) {
                console.log("correct");
                displayResult("correct");
                display2.style.backgroundColor = "rgb(159, 255, 159)";
                squares.forEach((value) => {
                    var elem = display.innerHTML;
                    value.style.backgroundColor = elem.replaceAll(' ', '')
                })
                // displayResult("");
                // display2.style.backgroundColor = "transparent";
                // setTimeout(() => {
                //     initial();
                //     displayResult("");
                //     display2.style.backgroundColor = "transparent";
                // }, 0);
            } else {
                console.log("wrong");
                displayResult("wrong");
                square.style.backgroundColor = "white"
                display2.style.backgroundColor = "rgb(255, 195, 195)";
            }
        })
    })
}

//function to random displaying color to be found 

function botChoosedColor(disp) {
    display.innerHTML = disp
}

//generate random color

function generateColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

//function to displaying result in result box 

function displayResult(summa) {
    display2.innerHTML = summa;
}