var game-mode = 0
var message-mode = 0
basic.showString("A = dot B = dash. Press the logo to enter game mode")

input.onButtonPressed(Button.AB, function() {
     var message-mode = 0
})

input.onLogoUp