def letter_changer(var_name) :
    change_target = var_name[0]
    new_var = var_name.replace(var_name[0], '$')
    print(var_name[0] + new_var[1:])

string_of_words = 'peter piper picked a peck of pickled peppers.'
another_string_of_words = 'she sells seashells by the seashore'

letter_changer(string_of_words)
letter_changer(another_string_of_words)