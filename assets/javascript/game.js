var targetNumber = Math.floor(Math.random() * 100);
var counter = 0;
var win = 0;
var lose = 0;
$("#my-score").text(`Current score: ${counter}`);
$("#goal-number").text(`The TARGET is: ${targetNumber}`);
var scoreBoard = $("#scoreboard");
scoreBoard.text(`Win: ${win}    Lose: ${lose}`);
// var crystal1 = $("#img-1");
// var randomNumber1 = Math.floor(Math.random() * 100);
// crystal1.attr("value", )
// var crystal2 = $("#img-2");
// var crystal3 = $("#img-3");
// var crystal4 = $("#img-4");

for (let i = 1; i < 5; i++) {
    var randomValue = Math.floor(Math.random() * 13);
    $(`#img-${i}`).attr("value", randomValue);
}

$(".crystal-image").click(function() {

    var crystalValue = ($(this).attr("value"));
    crystalValue = parseInt(crystalValue);

    counter += crystalValue;

    if (counter === targetNumber) {
        win++;
        targetNumber = Math.floor(Math.random() * 100);
        for (let i = 1; i < 5; i++) {
            var randomValue = Math.floor(Math.random() * 13);
            $(`#img-${i}`).attr("value", randomValue);
        }
        counter = 0;
        scoreBoard.append(`Congrats! You won!`);

    } else if (counter > targetNumber) {
        lose++;
        targetNumber = Math.floor(Math.random() * 100);
        for (let i = 1; i < 5; i++) {
            var randomValue = Math.floor(Math.random() * 13);
            $(`#img-${i}`).attr("value", randomValue);
        }
        counter = 0;
        scoreBoard.append(`Ohh you lost!`);
    }

    scoreBoard.text(`Win: ${win}    Lose: ${lose}`);
    $("#my-score").text(`Current score: ${counter}`);
    $("#goal-number").text(`The TARGET is: ${targetNumber}`);


});