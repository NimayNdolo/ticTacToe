const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

/* const newgame = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games',
    data: "game": {
      "cells": ["","","","","","","","",""],
      "over": false,
      "_id": "5e823ba98929cc4e95e2f5d9",
      "owner": "5e82311c8929cc4e95e2f5d8",
      "createdAt": "2020-03-30T18:34:17.772Z",
      "updatedAt": "2020-03-30T18:34:17.772Z",
      "__v": 0
    }
  })
}*/


module.exports = {
  signUp,
  signIn,
  signOut
  //newgame
}
