def string_sorter(string):
    alpha_list = []
    for L in string:
        if L.isalpha():
            alpha_list.append(L.lower())
        else:
            pass
    return ''.join(map(str, sorted(alpha_list)))


print(string_sorter("Hello, I like # @ pie \n peaches2404."))
