#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/games" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{}'
