{
  Authorization: 'Bearer ' + store.user.token,
},
data: {
game: {
    cell: {
      index: parseInt(gameIndex),
      value: currentPlayer
    },
    over: store.over
}
}
