var num = document.getElementById("num");
var result = document.getElementById("result");
var score = document.getElementById("score");
var finalscore = 10;
var random = Math.ceil(Math.random() * 10);

func = () => {
    var number = num.value
    if(number == random) {
        result.innerHTML = `You Guessed: ${random} is Right Number.`
        alert("WoW!. You Won...")
        alert(`${random} is Right Number, You 10 out of ${finalscore}`)
    }
    else {
        finalscore = finalscore-1
        result.innerHTML = `You Guessed: ${number} is Wrong Number.`
        score.innerHTML = `Your score is: ${finalscore}`
    }
}