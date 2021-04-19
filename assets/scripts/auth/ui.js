
const store = require('./../store')

const switchPlayer = function () {
  // store.currentPlayer = store.currentPlayer === 'X' ? 'O' : 'X'
  if (store.currentPlayer === 'X') {
    store.currentPlayer = 'O'
  } else {
    store.currentPlayer = 'X'
  }
}

const onSignUpSuccess = function () {
  $('#signUp-success').text("Welcome! You're signed up!")
  $('#signUp-success-message').addClass('success')

  setTimeout(() => {
    $('#signUp-success-message').text('')
    $('#signUp-success-message').removeClass('success')
  }, 5000)

  $('#signUp').trigger('reset')
  $('#signUp').hide()
}

const onSignInSuccess = function (responseData) {
  $('#signIn-success').text('Signed In!')
  $('#signIn-success-message').addClass('success')

  setTimeout(() => {
    $('#signIn-success-message').text('')
    $('#signIn-success-message').removeClass('success')
  }, 5000)

  store.user = responseData.user
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
  $('#signOut').show()
  $('#newGame').show()

  // setTimeout(() =>
  //   $('#signIn-success').text('Signed In!'),
  // $('#signIn-success-message').removeClass('success')
  // , 5000)
}

const onSignOutSuccess = function () {
  $('#signOut-success').text('Signed out!')
  $('#signOut-success-message').addClass('success')
  $('form').trigger('reset')
  $('#game-board').hide()
  $('#signIn').show()
  $('#signUp').show()
  $('#signOut-success').text('Signed out!').show()
  $('#signOut-success-message').addClass('success')
}

const onError = function () {
  $('#error-message').text('Please try again.')
  $('#error-message').addClass('failure')
  $('form').trigger('reset')
  $('#newGame').hide()
}

const onNewGameSuccess = function (response) {
  store.game = response.game
  store.currentPlayer = 'X'
  $('#game-board').show()
  $('#player-alert').text('Ready to Play?')
  $('#signIn-success').hide()
  $('#signUp-success').hide()
  $('#error-message').hide()
  $('.grid-box').empty()
}

// const onCellClickSuccess = function (response) {
//   store.game = response.game
//   $('#player-alert').text("O's turn!")
// }

const onNewGameFailure = function (response) {
  console.log(response)
  $('#error-message').text('New game failure')
  $('#error-message').addClass('failure')
  $('form').trigger('reset')
  $('#newGame').hide()
}

const onPlayerTurnSuccess = function (response) {
  store.game = response.game
  switchPlayer()
  // send message to user that its the other player's turn (store.currentPlayer)
}

// const onCheckForWinner = function (response) {
//   store.game = response.game
//   store.currentPlayer = ''
//   $('.grid-box').empty()
// }

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onError,
  onNewGameSuccess,
  onNewGameFailure,
  onPlayerTurnSuccess
  // onCellClickSuccess
}
