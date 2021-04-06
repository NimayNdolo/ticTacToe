
const onSignUpSuccess = function () {
  $('#signUp-success').text("Welcome! You're signed up!")
  $('#signUp-success-message').addClass('success')
  $('#signUp').trigger('reset')
  $('#signUp').hide()
}

const onSignInSuccess = function () {
  $('#signIn-success').text('Signed in successfully!')
  $('#signIn-success-message').addClass('success')
  $('#signIn-success').text('Signed In!')
  $('#signIn').trigger('reset')
  $('#signIn').hide()
  $('#signUp').hide()
}

const onSignOutSuccess = function () {
  $('#signOut-success').text('Signed out!')
  $('#signOut-success-message').addClass('success')
  $('form').trigger('reset')
}

const onError = function () {
  $('#error-message').text('Please try again.')
  $('#error-message').addClass('failure')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onError
}
