let Player1: game.LedSprite = null
let GameOn = false
let Hazards: game.LedSprite = null
let hazard2: game.LedSprite = null
let hazard3: game.LedSprite = null
let hazard4: game.LedSprite = null
let hazard5: game.LedSprite = null
input.onButtonPressed(Button.B, function () {
    if (Player1.get(LedSpriteProperty.X) < 4) {
        Player1.change(LedSpriteProperty.X, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    if (Player1.get(LedSpriteProperty.X) > 0) {
        Player1.change(LedSpriteProperty.X, -1)
    }
})
basic.forever(function () {
    game.setScore(0)
    Player1 = game.createSprite(2, 4)
    GameOn = true
    while (GameOn == true) {
        basic.pause(100)
    }
    game.addScore(game.score())
    game.gameOver()
})
basic.forever(function () {
    basic.pause(100)
    if (GameOn == true) {
        Hazards = game.createSprite(0, 0)
        basic.pause(Math.randomRange(0, 5000))
        while (GameOn == true) {
            if (Hazards.get(LedSpriteProperty.Y) == 4) {
                if (Player1.isTouching(Hazards)) {
                    GameOn = false
                } else {
                    game.setScore(game.score() + 1)
                    Hazards.set(LedSpriteProperty.Y, 0)
                    basic.pause(Math.randomRange(0, 5000))
                }
            } else {
                Hazards.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (GameOn == true) {
        hazard2 = game.createSprite(1, 0)
        basic.pause(Math.randomRange(0, 5000))
        while (GameOn == true) {
            if (hazard2.get(LedSpriteProperty.Y) == 4) {
                if (Player1.isTouching(hazard2)) {
                    GameOn = false
                } else {
                    game.setScore(game.score() + 1)
                    hazard2.set(LedSpriteProperty.Y, 0)
                    basic.pause(Math.randomRange(0, 5000))
                }
            } else {
                hazard2.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (GameOn == true) {
        hazard3 = game.createSprite(2, 0)
        basic.pause(Math.randomRange(0, 5000))
        while (GameOn == true) {
            if (hazard3.get(LedSpriteProperty.Y) == 4) {
                if (Player1.isTouching(hazard3)) {
                    GameOn = false
                } else {
                    game.setScore(game.score() + 1)
                    hazard3.set(LedSpriteProperty.Y, 0)
                    basic.pause(Math.randomRange(0, 5000))
                }
            } else {
                hazard3.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (GameOn == true) {
        hazard4 = game.createSprite(3, 0)
        basic.pause(Math.randomRange(0, 5000))
        while (GameOn == true) {
            if (hazard4.get(LedSpriteProperty.Y) == 4) {
                if (Player1.isTouching(hazard4)) {
                    GameOn = false
                } else {
                    game.setScore(game.score() + 1)
                    hazard4.set(LedSpriteProperty.Y, 0)
                    basic.pause(Math.randomRange(0, 5000))
                }
            } else {
                hazard4.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(100)
    if (GameOn == true) {
        hazard5 = game.createSprite(4, 0)
        basic.pause(Math.randomRange(0, 5000))
        while (GameOn == true) {
            if (hazard5.get(LedSpriteProperty.Y) == 4) {
                if (Player1.isTouching(hazard5)) {
                    GameOn = false
                } else {
                    game.setScore(game.score() + 1)
                    hazard5.set(LedSpriteProperty.Y, 0)
                    basic.pause(Math.randomRange(0, 5000))
                }
            } else {
                hazard5.change(LedSpriteProperty.Y, 1)
                basic.pause(500)
            }
        }
    }
})
