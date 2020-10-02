'''
 Complex users dictionary playground
- Using the users array listed below write the following lines of code
  - Write a line of code that prints the first users name
  - Write a line of code that prints the first users email
  - Write a line of code that prints the second users street address
  - Write a line of code that prints the first users address latitude
  - Write a line of code that prints the second users company name
  - Write a line of code that updates the first users city address to "Lehi"
  - Write a line of code that removes the second users company catch phrase
  - Extra Credit:
    - Using a for loop, print all the users names to the console
'''

users = [
   {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
   
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
]

print(users[0]['name'])
print(users[0]['email'])
print(users[1]['address']['street'])
print(users[0]['address']['geo']['lat'])
print(users[1]['company']['name'])
users[0]['address']['city'] = 'Lehi'
print(users[0]['address']['city'])
(users[1]['company']).pop('catchPhrase')
print(users[1]['company'])

for user in users:
    print(user['name'])