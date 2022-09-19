input.onButtonPressed(Button.A, function () {
    if (_switch == 0) {
        Number_1 += 1
        basic.showNumber(Number_1)
        if (_switch == 1) {
            Number_1 += 1
        }
        basic.showNumber(0)
    }
})
let _switch = 0
let Number_1 = 0
Number_1 = 0
let Number_2 = 0
_switch = 0
basic.forever(function () {
	
})
