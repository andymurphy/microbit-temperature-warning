

Skip to JavaScript editor

Select Language
High Contrast On



Projects

Share

Blocks

JavaScript




Simulator











Explorer

Basic
Input
Music
Led
Radio
Loops
Logic
Variables
Math

Advanced


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
2
1









































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












No Results









Download
Type a name for your project













