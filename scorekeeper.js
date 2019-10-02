let PlayersTie = 0
let PlayerBWins = 0
let PlayerAWins = 0
input.onButtonPressed(Button.A, () => {
    PlayerAWins += 1
    basic.showLeds(`
       . # # # .
       . # . # .
       . # # # .
       . # . # .
       . # . # .
       `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, () => {
    PlayerBWins += 1
    basic.showLeds(`
       . # # . .
       . # . # .
       . # # # .
       . # . # .
       . # # . .
       `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, () => {
    PlayersTie += 1
    basic.showLeds(`
       . # # # .
       . . # . .
       . . # . .
       . . # . .
       . . # . .
       `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, () => {
    basic.showString("Wins:")
    basic.showLeds(`
       . # # # .
       . # . # .
       . # # # .
       . # . # .
       . # . # .
       `)
    basic.showNumber(PlayerAWins)
    basic.pause(1000)
    basic.showLeds(`
       . # # . .
       . # . # .
       . # # # .
       . # . # .
       . # # . .
       `)
    basic.showNumber(PlayerBWins)
    basic.pause(1000)
    basic.showString("Ties:")
    basic.showNumber(PlayersTie)
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, () => {
    basic.showString("Total rounds played:")
    basic.showNumber(PlayerAWins + PlayerBWins + PlayersTie)
})
PlayerAWins = 0
PlayerBWins = 0
PlayersTie = 0
