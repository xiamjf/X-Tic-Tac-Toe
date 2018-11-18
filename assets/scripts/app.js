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
  // Gameplay should only work when the board is PLAYABLE
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
      alert('Game Over! Issa Tie')
      // this is what happens when a square is empty
      // player 1 goes and then switches to player 2
    } else {
      if (player === 1) {
        currentSquare.addClass('letter-x')
        if (checkWin('letter-x')) {
          alert('Good job Player ' + player + ', you won!')
        } else {
          player = 2
        }
      } else {
        currentSquare.addClass('letter-o')
        if (checkWin('letter-o')) {
          alert('Good job Player ' + player + ', you won!')
        } else {
          player = 1
        }
      }
    }
  })

  // this function is placed above the line that switches to the next player
  // before going on to the next move, check if the game has been won
  // I would mark the boards as won if the setup matched one of the 16 win setups
  // (there are 8 ways for either player to win [=- ||| or /\])
  // but let's see how they do it

  /*
  They're doing it the same way as me! However since we've already split the
  player into variables, we just need to check 8 board setups
  */
  // I am confused as to whether my logic is correct
  // I believe passing in player as an argument would also make sense, since
  // player 1 is always X and player 2 is always O
  // But I guess it is a function of the letter or symbol, this function
  // depends on a winning set of symbols not a winning set of player moves,
  // although these are essentially the same thing here, it is not as clear

  const checkWin = function (letter) {
    if ($('#sq1').hasClass(letter) && $('#sq2').hasClass(letter) && $('#sq3').hasClass(letter)) {
      return true
    } else if ($('#sq4').hasClass(letter) && $('#sq5').hasClass(letter) && $('#sq6').hasClass(letter)) {
      return true
    } else if ($('#sq7').hasClass(letter) && $('#sq8').hasClass(letter) && $('#sq9').hasClass(letter)) {
      return true
    } else if ($('#sq1').hasClass(letter) && $('#sq4').hasClass(letter) && $('#sq7').hasClass(letter)) {
      return true
    } else if ($('#sq2').hasClass(letter) && $('#sq5').hasClass(letter) && $('#sq8').hasClass(letter)) {
      return true
    } else if ($('#sq3').hasClass(letter) && $('#sq6').hasClass(letter) && $('#sq9').hasClass(letter)) {
      return true
    } else if ($('#sq1').hasClass(letter) && $('#sq5').hasClass(letter) && $('#sq9').hasClass(letter)) {
      return true
    } else if ($('#sq3').hasClass(letter) && $('#sq5').hasClass(letter) && $('#sq7').hasClass(letter)) {
      return true
    } else {
      return false
    }
  }
})
