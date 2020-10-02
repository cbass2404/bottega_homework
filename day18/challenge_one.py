from random import randint


def hex_generator():
    hex_list = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    hex_color = ['#']
    while len(hex_color) <= 6:
        hex_color.append(hex_list[randint(0, 15)])
    return ''.join(map(str, hex_color))


print(hex_generator())
