function FeuVert () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
}
function fleche () {
    while (state == 0) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            # . # . #
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
        basic.pause(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(50)
    }
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Sy")
})
function FeuRouge () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "F0") {
        FeuOrange()
        basic.pause(2000)
        FeuRouge()
        t = 20
        state = 1
    } else {
        if (receivedString == "Sy") {
            t = 9
            state = 1
        }
    }
})
function FeuOrange () {
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Orange))
    strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Orange))
}
function décompte () {
    basic.showNumber(t)
    basic.pause(1000)
    t += -1
    if (t == 5) {
        radio.sendString("F0")
    }
    if (t == 0) {
        state = 0
        FeuVert()
        fleche()
    }
}
let t = 0
let state = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P2, 5, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.showColor(neopixel.colors(NeoPixelColors.Black))
radio.setGroup(10)
state = 2
FeuRouge()
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (state == 1) {
        décompte()
    } else {
    	
    }
})
