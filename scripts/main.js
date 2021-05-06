



let suit = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let cardDeck = []


let dealButton = document.getElementById('deal-button');
let hitButton = document.getElementById('hit-button');
let standButton = document.getElementById('stand-button');

let dealerHandContainer = document.getElementById('dealer-hand');
let playerHandContainer = document.getElementById('player-hand');

let playerHand = [];
let dealerHand = [];

let dealerHandNode = document.getElementById('dealer-hand')
let playerHandNode = document.getElementById('player-hand')

let playerPoints = document.getElementById('player-points')
let dealerPoints = document.getElementById('dealer-points')






function createCardObj(points, suit){
  let imageURL ="";

  let card = {
    points: points,
    suit: suit
  }

  if(points > 1 && points <=10){
    imageURL = `images/${points}_of_${suit}.png`

  }

  switch(card.points){
        case 1:
          imageURL = `images/ace_of_${suit}.png`
          break;
        case 11:
          card.point = 10;
          imageURL = `images/jack_of_${suit}.png`
          break;
        case 12:
          card.point = 10;
          imageURL = `images/ace_of_${suit}.png`
          break;
        case 13:
          card.points = 10;
          imageURL = `images/ace_of_${suit}.png`
          break;
          
  }


  card.imageURL = imageURL;

  return card;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

function calculateHand(hand){
  let points = 0;
  let hasAce = false;

  hand.forEach(card =>{
    if(card.points == 1){
      hasAce = true;
    }
    points += card.points;
  })
  
  if(hasAce == true && points + 10 <= 21){
    points = points + 10;
  }
  
  return points
}


function displayPlayerCards(){
  let htmlFragment = "";

  playerHand.forEach(card =>{
    let img = `<img src="${card.imageURL}">`
    htmlFragment += img;
  })

  playerHandNode.innHTML = htmlFragment;
  let points = calculateHand(playerHand);
  playerPoints.innerHTML = points.toString();

}

function displayDealerCards(){
  let htmlFragment = "";

  dealerHand.forEach(card =>{
    let img = `<img src="${card.imageURL}">`
    htmlFragment += img;
  })

  dealerHandNode.innHTML = htmlFragment;
  let points = calculateHand(dealerHand);
  dealerPoints.innerHTML = points.toString();

}


function displayDealerCards(){
  let points = calculatedHand(dealerHand);

  while(points < 17){
    dealerHand.push(cardDeck.pop())
  }
}


dealButton.addEventListener('click', ()=>{
  cardDeck = [];
  createDeck();
  

})
hitButton.addEventListener('click', ()=>{

})
standButton.addEventListener('click', ()=>{

})


function createDeck(){
  suit.forEach(suit=>{
    for(let points = 1; points <=13; points++){

      cardDeck.push(createCardObj(points, suit))

    }
  })
}





createDeck();

playerHand.push(cardDeck.pop())
dealerHand.push(cardDeck.pop())
  
  





   