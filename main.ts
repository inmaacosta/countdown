let tempo = 1000
basic.showNumber(5)
basic.pause(tempo)
basic.showNumber(4)
basic.pause(tempo)
basic.showNumber(3)
basic.pause(tempo)
basic.showNumber(2)
basic.pause(tempo)
basic.showNumber(1)
basic.pause(tempo)
for (let index = 0; index < 3; index++) {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        `)
    basic.pause(tempo)
    basic.clearScreen()
    basic.pause(tempo)
}
