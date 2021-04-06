
const onSignUpSuccess = function () {
  $('#signUp-success').text("Welcome! You're signed up!")
  $('#signUp-success-message').addClass('success')
  $('#signUp').trigger('reset')
  $('#signUp').hide()

  setTimeout(() =>
    $('#signUp-success-message').text(''),
  $('#signUp-success-message').removeClass('success')
  , 5000)
}

const onSignInSuccess = function () {
  $('#signIn-success').text('Signed In!')
  $('#signIn-success-message').addClass('success')
  $('#game-board').show()
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
  $('#signOut').show()
  $('#newGame').show()

  setTimeout(() =>
    $('#signIn-success').text('Signed In!'),
  $('#signIn-success-message').removeClass('success')
  , 5000)
}

const onSignOutSuccess = function () {
  $('#signOut-success').text('Signed out!')
  $('#signOut-success-message').addClass('success')
  $('form').trigger('reset')
  $('#game-board').hide()
}

const onError = function () {
  $('#error-message').text('Please try again.')
  $('#error-message').addClass('failure')
  $('form').trigger('reset')
  $('#newGame').hide()
}

const onNewGameSuccess = function () {

}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onError,
  onNewGameSuccess
}
