pull_n_peel = "twizzlers are a kind of string if you get the right kind."
def_not_a_string = 123421


def capitalize_string(v):
    return v.capitalize() if type(v) == str else print(f"Target: {type(v)}")


print(capitalize_string(pull_n_peel))
print(capitalize_string(def_not_a_string))
