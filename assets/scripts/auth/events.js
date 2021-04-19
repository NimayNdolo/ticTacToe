const store = require('../store')

const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}

const onCellClick = function (event) {
  event.preventDefault()
  api.playerTurn()
    .then(ui.onCellClickSuccess)
    .catch(ui.onError)
}

const winSituations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const checkForWinner = function () {
  const gameCells = store.game.cells
  for (let i = 0; i < winSituations.length; i++) {
    const [a, b, c] = winSituations[i]
    if (gameCells[a] !== '' && gameCells[a] === gameCells[b] && gameCells[a] === gameCells[c]) {
      console.log('WE HAVE A WINNER!')
      // console.log('this is gameCells[a]\n', gameCells[a])
      // console.log('this is gameCells[b]\n', gameCells[b])
      // console.log('this is gameCells[c]\n', gameCells[c])
      return true
    } else {
      console.log('no win')
      return false
    }
  }
}

// const gameOver = function (event) {
//   const noCell = $(event.target).data('')
//   if (checkForWinner() === true) {
//     noCell.text('')
//     api.playerTurn(noCell, checkForWinner())
//       .then(ui.onCheckForWinner)
//       .catch(ui.onError)
//   }
// }

const onPlayerTurn = function (event) {
  console.log('this is the game obj', store.game)
  const index = $(event.target).data('cell-index')
  console.log('this is the current index', index)
  const cell = $(event.target)
  if (cell.text() === '') {
    cell.text(store.currentPlayer)
    store.game.cells[index] = store.currentPlayer
    checkForWinner()
    api.playerTurn(index, store.currentPlayer, checkForWinner())
      .then(ui.onPlayerTurnSuccess)
      .catch(ui.onError)
  } else {
    $('#player-alert').text('Space is occupied. Click elsewhere.')
  }
}

// const gameTie = function () {
//   if (!checkForWinner()) {
//     return $('#player-alert').text('Issa Tic Tacc Tie.')
//   }
// }

/* const gameTie = function () {
  if (xWin === false && oWin === false) {
    store.over = true
    return $('#player-alert').text('A tie! You both won/lost. Take it how you will!')
  }
} */

// const xWin = function (event) {
//   if (winSituations[0] === 'X') {
//     store.over = true
//     return $('#player-alert').text('Congrats! X won!')
//   } else if (winSituations[1] === 'X') {
//     store.over = true
//     return $('#player-alert').text('You did it! YOU GOT THE GAME')
//   } else if (winSituations[2] === 'X') {
//     store.over = true
//     return $('#player-alert').text('X TEAM for LIFE!! Win!!')
//   } else if (winSituations[3] === 'X') {
//     store.over = true
//     return $('#player-alert').text('Nice! What a win!')
//   } else if (winSituations[4] === 'X') {
//     store.over = true
//     return $('#player-alert').text('Yee yeeee! Winny win winnn!')
//   } else if (winSituations[5] === 'X') {
//     store.over = true
//     return $('#player-alert').text('Call you Tic Tacc Teaux Jesus. You Won!')
//   } else if (winSituations[6] === 'X') {
//     store.over = true
//     return $('#player-alert').text('W-I-N!')
//   } else if (winSituations[7] === 'X') {
//     store.over = true
//     return $('#player-alert').text('Yo X, you just WON!')
//   } else if (winSituations[8] === 'X') {
//     store.over = true
//     return $('#player-alert').text('Yippee for X! A win!')
//   } else {
//     store.over = true
//     return $('#player-alert').text('X lost.')
//   }
// }
//
// const oWin = function (event) {
//   if (winSituations[0] === 'O') {
//     store.over = true
//     return $('#player-alert').text('MVP moves over here for O! You Won!')
//   } else if (winSituations[1] === 'O') {
//     store.over = true
//     return $('#player-alert').text('O wins! You deserve happiness and a Sprite!')
//   } else if (winSituations[2] === 'O') {
//     store.over = true
//     return $('#player-alert').text('Bacc slapps for you fam! O wins!')
//   } else if (winSituations[3] === 'O') {
//     store.over = true
//     return $('#player-alert').text('O wins! Take ya cake n run!!')
//   } else if (winSituations[4] === 'O') {
//     store.over = true
//     return $('#player-alert').text('What a winning move. O won!')
//   } else if (winSituations[5] === 'O') {
//     store.over = true
//     return $('#player-alert').text('A winna! O is a winna!')
//   } else if (winSituations[6] === 'O') {
//     store.over = true
//     return $('#player-alert').text('Yay, O! You won!')
//   } else if (winSituations[7] === 'O') {
//     store.over = true
//     return $('#player-alert').text('Getchyoself a red steak, O! You won!')
//   } else if (winSituations[8] === 'O') {
//     store.over = true
//     return $('#player-alert').text('Yippity yip, O! What a winny day for you! You Won!')
//   } else {
//     store.over = true
//     return $('#player-alert').text('O lost.')
//   }
// }

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  onNewGame,
  onCellClick,
  onPlayerTurn,
  // gameTie,
  // gameOver,
  checkForWinner
}
