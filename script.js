let score = JSON.parse(localStorage.getItem('score'));
// console.log(score);

  if(!score){
    score = {
      wins : 0,
      losses : 0,
      ties : 0
    };
  }

  function comparMove(userMove){
    let move = computerMove();
    let result = '';
    if(userMove === 'rock'){
      if(move === 'scissor'){
        result = 'You Win.';
      }else if(move === 'rock'){
        result = 'Match Tie.';
      }else if(move === 'paper'){
        result = 'You Lose.';
      }
    }else if(userMove === 'paper'){
      if(move === 'scissor'){
        result = 'You Lose.';
      }else if(move === 'rock'){
        result = 'You Win.';
      }else if(move === 'paper'){
        result = 'Match Tie.';
      }
    }else if(userMove === 'scissor'){
      if(move === 'scissor'){
        result = 'Match Tie.';
      }else if(move === 'rock'){
        result = 'You Lose.';
      }else if(move === 'paper'){
        result = 'You Win.';
      }
    }

    document.getElementById('resultText').innerText = `${result} Computer selected ${move.charAt(0).toUpperCase() + move.slice(1)}. You selected ${userMove.charAt(0).toUpperCase() + userMove.slice(1)}.`;

    if(result === 'You Win.'){
      score.wins += 1;
    }else if(result === 'You Lose.'){
      score.losses += 1;
    }else if(result === 'Match Tie.'){
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.getElementById('matchScore').innerText = `Win: ${score.wins} Losses: ${score.losses} Ties: ${score.ties} Total Match: ${score.wins + score.losses + score.ties}`;
  }

 

  function computerMove(){
    let compNum = Math.floor(Math.random() *90) + 1;
    let computerSelect = '';
    if(compNum >= 1 && compNum <= 30){
      computerSelect = 'scissor';
    }else if(compNum >= 31 && compNum <= 60){
      computerSelect = 'rock';
    }else if(compNum >= 61 && compNum <= 90){
      computerSelect = 'paper'
    }
    return computerSelect;
  }


  function resetScore(){
    score.wins = 0,
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    document.getElementById('resultText').innerText = `Win: 0 Losses: 0 Ties: 0`;
    document.getElementById('matchScore').innerText = `Total Match: 0`;
  }