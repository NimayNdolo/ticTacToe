'use strict'

const events = require('./auth/events')

$(() => {
  $('#signUp').on('submit', events.onSignUp)
  $('#signIn').on('submit', events.onSignIn)
  $('#signOut').on('submit', events.onSignOut)
})
