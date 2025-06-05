// Copyright (c) 2025 domenic dangelo All rights reserved
//
// Created by: domenic dangelo
// Created on: June 2025
// This file contains the JS functions for index.html

'use strict'

let timeLeft = 5
let clickCount = 0
let countdownInterval = null
let gameActive = false

const button = document.getElementById('click-button')
button.onclick = start

function start () {
  clickCount = 0
  timeLeft = 5
  gameActive = true

  document.getElementById('clicks').innerHTML = 'Clicks: ' + clickCount
  document.getElementById('countdown').innerHTML = timeLeft
  document.getElementById('answer').innerHTML = ''
  const button = document.getElementById('click-button')
  button.innerHTML = 'Click!'
  button.onclick = countClick

  countdownInterval = setInterval(function () {
    timeLeft--
    document.getElementById('countdown').innerHTML = timeLeft

    if (timeLeft <= 0) {
      clearInterval(countdownInterval)
      gameActive = false
      button.onclick = null

      const cps = (clickCount / 5).toFixed(1)
      document.getElementById('answer').innerHTML = '<p>Your CPS: ' + cps + '</p>'
      button.innerHTML = 'Please wait 5 seconds to restart'

      setTimeout(function () {
        button.innerHTML = 'Restart'
        button.onclick = start
      }, 5000)
    }
  }, 1000)
}

function countClick () {
  if (!gameActive) return
  clickCount++
  document.getElementById('clicks').innerHTML = 'Clicks: ' + clickCount
}
