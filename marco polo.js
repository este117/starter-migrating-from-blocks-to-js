input.onButtonPressed(Button.A, () => {
    radio.sendString("Marco")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, () => {
    radio.sendString("Polo")
})
radio.setGroup(1)
