'use strict'

const events = require('./auth/events')

$(() => {
  $('#signOut').hide()
  $('.circle').show()
  $('#game-board').hide()
  $('#newGame').hide()
  $('#newGame2').hide()
  $('#newGame').on('click', events.onNewGame)
  $('#newGame2').on('click', events.onNewGame)
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('click', events.onSignOut)
  $('#game-board').on('click', events.onPlayerTurn)
})
