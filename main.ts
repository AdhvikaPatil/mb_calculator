input.onButtonPressed(Button.A, function () {
    A += 1
    if (A > 10) {
        A = 0
    }
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A * B)
})
input.onButtonPressed(Button.B, function () {
    B += 1
    if (B > 10) {
        B = 0
    }
    basic.showNumber(B)
})
let B = 0
let A = 0
A = 0
B = 0
basic.forever(function () {
	
})
