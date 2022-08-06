input.onButtonPressed(Button.A, function () {
    if (auxiliarglobal == 1) {
        auxiliar = numero
        numero = 0
        auxiliarglobal = 2
    }
    numero = numero - 1
    basic.showNumber(numero)
})
input.onButtonPressed(Button.AB, function () {
    if (auxiliarglobal == 0) {
        auxiliarglobal = 1
    }
    if (auxiliarglobal == 1) {
        operacao += 1
        if (operacao == 1) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # . .
                `)
            basic.pause(200)
            basic.clearScreen()
        } else {
            if (operacao == 2) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                basic.pause(200)
                basic.clearScreen()
            } else {
                if (operacao == 3) {
                    basic.showLeds(`
                        # . . . #
                        . # . # .
                        . . # . .
                        . # . # .
                        # . . . #
                        `)
                    basic.pause(200)
                    basic.clearScreen()
                } else {
                    if (operacao == 4) {
                        basic.showLeds(`
                            . . # . .
                            . . . . .
                            # # # # #
                            . . . . .
                            . . # . .
                            `)
                        basic.pause(200)
                        basic.clearScreen()
                    } else {
                        operacao = 1
                        basic.showLeds(`
                            . . # . .
                            . . # . .
                            # # # # #
                            . . # . .
                            . . # . .
                            `)
                        basic.pause(200)
                        basic.clearScreen()
                    }
                }
            }
        }
    }
    if (auxiliarglobal == 2) {
        if (operacao == 1) {
            basic.showNumber(auxiliar + numero)
        } else {
            if (operacao == 2) {
                basic.showNumber(auxiliar - numero)
            } else {
                if (operacao == 3) {
                    basic.showNumber(auxiliar * numero)
                } else {
                    basic.showNumber(auxiliar / numero)
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (auxiliarglobal == 1) {
        auxiliar = numero
        numero = 0
        auxiliarglobal = 2
    }
    numero = numero + 1
    basic.showNumber(numero)
})
let auxiliar = 0
let numero = 0
let operacao = 0
let auxiliarglobal = 0
auxiliarglobal = 0
operacao = 0
numero = 0
auxiliar = 0
