## Steps to creating and populating a MongoDB:
- Open the terminal and type:
```
mongo
```

- Created the new database by using the command:
```
use coolNewDataBase
```

- I entered the following command to set up a user account:
```
db.createUser({
    user: 'cbass2404',
    pwd: 'spiffypassword',
    customData: { startDate: new Date() },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})
```

- I entered the following command to populate 6 new documents:
```
db.books.insertMany([
    {
        "name": "Confident Ruby",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Avdi Grimm"}
        ]
    },
    {
        "name": "The War of Art",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Steven Pressfield"}
        ]
    },
    {
        "name": "Blink",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Malcolm Gladwell"}
        ]
    },
    {
        "name": "The Way of Kings",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Brandon Sanderson"}
        ]
    },
    {
        "name": "The Blade Itself",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Joe Abercrombie"}
        ]
    },
    {
        "name": "Baptism of Fire",
        "publishedDate": new Date(),
        "authors": [
            {"name": "Andrzej Sapkowski"}
        ]
    }
])
```

- Afterwards, I deleted the third document with the following command:
```
db.books.remove({name: "Blink"})
```

- Then the following command to remove the fifth:
```
db.books.remove({name: "The Blade Itself"})
```

- Afterwards, to verify the remaining collection I used the command:
```
db.books.find().pretty()
```
- Thus ended the mongo journey...