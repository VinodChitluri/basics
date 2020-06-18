function rps(yourchoice) {

    var humanchoice, botchoice;
    humanchoice = yourchoice.id;
    botchoice = numberToChoice(random());
    results = decideWinner(humanchoice, botchoice);
    msgclr = finalMessage(results);
    rpsfrontend(humanchoice, botchoice, msgclr);

}

function random() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

function decideWinner(yourchoice, computerchoice) {
    var resultnum = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'scissor': 0, 'rock': 1, 'paper': 0.5 },
        'scissor': { 'scissor': 0.5, 'rock': 0, 'paper': 1 },
    };
    var yourscore = resultnum[yourchoice][computerchoice];
    var computerscore = resultnum[computerchoice][yourchoice];

    return [yourscore, computerscore];
}

function finalMessage([yourscore, computerscore]) {
    if (yourscore === 0) {
        return { 'message': 'You Lost', 'color': 'red' }
    }
    else if (yourscore === 0.5) {
        return { 'message': 'You Tied', 'color': 'yellow' }
    }
    else {
        return { 'message': 'You Won', 'color': 'green' }
    }
}

function rpsfrontend(yourchoice, computerchoice, textclr) {

    var imgdata = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humandiv = document.createElement('div');
    var msgdiv = document.createElement('div');
    var botdiv = document.createElement('div');

    humandiv.innerHTML = "<img src='" + imgdata[yourchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 54, 233, 1);' >"
    botdiv.innerHTML = "<img src='" + imgdata[computerchoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 33, 24, 1);' >"

    msgdiv.innerHTML = "<h1 style='color: " + textclr['color'] + ";font-size:60px; padding:30px;" + "' >" + textclr['message'] + "</h1>"

    var flexdiv = document.getElementById('flex-box-id');
    flexdiv.appendChild(humandiv);
    flexdiv.appendChild(msgdiv)
    flexdiv.appendChild(botdiv);

}