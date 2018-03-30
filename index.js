function canCardBeLegallyPlayed(cardToBePlayed, cardOnTopOfDeck){
  const isSameColor = cardToBePlayed.color === cardOnTopOfDeck.symbol;
  const isSameSymbol = cardToBePlayed.symbol === cardOnTopOfDeck.symbol ;
  const isBlackBonusCard = cardToBePlayed.color === 'black' ;

  return isSameColor || isSameSymbol || isBlackBonusCard ;
}
