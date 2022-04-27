let temp: string;
while (true) {
    temp = "" + input.temperature()
    if (input.temperature() >= 25) {
        basic.showIcon(IconNames.Happy)
        basic.showString(temp)
    } else if (input.temperature() >= 15 && input.temperature() < 25) {
        basic.showIcon(IconNames.Surprised)
        basic.showString(temp)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.showString(temp)
    }
    
}
