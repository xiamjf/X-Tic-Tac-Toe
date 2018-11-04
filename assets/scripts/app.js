'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

// this notation means that the following will happen AFTER the page is loaded
// it is the same thing as $(document).ready(function() {...});

$(() => {
  // your JS code goes here
  // making the squares DO SOMETHING when clicked
  $('.square').on('click', function (event) {
    alert('add symbol here')
  })
})
