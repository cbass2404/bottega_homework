a_string = "I'm a potato right now, my eyes burn."
not_a_string = 8008


def string_checker(variable):
    return "I am a string" if type(variable) == str else "I am not a string"


print(string_checker(a_string))
print(string_checker(not_a_string))
