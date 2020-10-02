'''
Phonebook
- Create a Dictionary called "phonebook"
- Create 3 items with the key as a persons name, and the value as a phone number.
- Write a line of code that adds a new user and phone number
- Write a line of code that updates the phone number of someone that already exists in your phone book dictionary.
- Write a line of code that gets a phone number for someone in your collection by using the get method, with a fallback
- Write a line of code that removes a person from your phonebook
'''

phonebook = {
    'steve': '555-5551',
    'mary': '555-5552',
    'sue': '555-5553',
}

copy_phonebook = phonebook

copy_phonebook['bob'] = '555-5554'

print(copy_phonebook)

copy_phonebook['mary'] = '555-5555'

print(copy_phonebook)

print(copy_phonebook.get('mary', 'Invalid query'))
print(copy_phonebook.get('alan', 'Invalid query'))

copy_phonebook.pop('sue')

print(copy_phonebook)