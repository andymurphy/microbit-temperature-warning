
// Set the brightness and declare the temp variable
led.setBrightness(123)
let temp = 0

basic.forever(() => {
    // Take off 3 to allow or the sensor being on the processor. Experiment with this!
	temp = input.temperature() - 3 
    basic.showString("" + temp + "C")
    basic.pause(1000)
    if (temp < 13) {
        for (let i = 0; i < 8; i++) {
            basic.showLeds(`
                . # . # .
                # # . # #
                . . # . .
                # # . # #
                . # . # .
                `)
            basic.pause(200)
            basic.clearScreen()
            basic.pause(200)
        }
    }
