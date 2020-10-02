string_of_words = 'green-red-black-white'


def split_alpha(string):
    return '-'.join(map(str, sorted(string.split('-'))))


print(split_alpha(string_of_words))
