while True:
    temp= str(input.temperature())

    if input.temperature() >= 25:
        basic.show_icon(IconNames.HAPPY)
        basic.show_string(temp)
    elif input.temperature() >= 15 and input.temperature() < 25:
        basic.show_icon(IconNames.SURPRISED)
        basic.show_string(temp)
    else:
        basic.show_icon(IconNames.SAD)
        basic.show_string(temp)
