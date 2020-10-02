sentence = 'The quick brown fox jumps over the lazy dog'

# sentence = 'T'

if len(sentence) < 2:
    print('Empty String')
else:
    print(sentence[0:2] + sentence[-2:])