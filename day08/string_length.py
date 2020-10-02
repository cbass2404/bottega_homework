sentence = 'The quick brown fox jumps over the lazy dog'

if type(sentence) == str:
    print(len(sentence))
elif type(sentence) != str:
    print(type(sentence))
else:
    print('Empty String')