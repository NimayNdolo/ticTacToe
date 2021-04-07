'use strict'

const events = require('./auth/events')

$(() => {
  $('#signOut').hide()
  $('#game-board').hide()
  $('#newGame').hide()
  $('#newGame').on('click', events.onNewGame)
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('click', events.onSignOut)
})
