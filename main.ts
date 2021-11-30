let démarrage = false
let seconds = 0
let Pulsations = 0
input.onButtonPressed(Button.A, function () {
    démarrage = false
    seconds = 15
    basic.showNumber(seconds)
})
input.onButtonPressed(Button.B, function () {
    démarrage = true
    while (seconds > 0) {
        basic.pause(1000)
        seconds += -1
    }
    démarrage = false
})
basic.forever(function () {
    if (seconds > 0 && démarrage == true) {
        Pulsations = pins.analogReadPin(AnalogPin.P2)
        led.plotBarGraph(
        Pulsations,
        1023
        )
    }
})
