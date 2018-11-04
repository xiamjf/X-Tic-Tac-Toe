'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// this notation means that the following will happen AFTER the page is loaded
// it is the same thing as $(document).ready(function() {...});

$(() => {
  // your JS code goes here

  // Okurrrrr. So, this variable will allow for either an X or an O to pop up depending on the player
  // either player 1 or player 2
  // whether the X or O shows up will be determined by the class that this variable
  // indicates to the square
  let player = 1
  // making the squares DO SOMETHING when clicked
  $('.square').on('click', function (event) {
    // alert('add symbol here')
    // this makes sure that we are selecting the right square so that we can
    // and an X or an O to it
    const currentSquare = $(this)
    console.log(currentSquare)
    // the logic will be to add a class to the square that has been clicked
    // the class added will be an X or an O depending on the player
    // Check if a box already has a class added (which means it has been clicked)
    if (currentSquare.hasClass('letter-x') || currentSquare.hasClass('letter-o')) {
      alert('BOOP! Square selected. Try another square')
    } else {
      // this is what happens when a square is empty
      // player 1 goes and then switches to player 2
      if (player === 1) {
        currentSquare.addClass('letter-x')
        player = 2
      } else {
        currentSquare.addClass('letter-o')
        player = 1
      }
    }
  })
})
