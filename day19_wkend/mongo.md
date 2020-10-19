### What is MongoDB

It is a terminal based database management system.

### What is a MongoDB Collection

A collection is a group of documents in the database.

### What is a Document and how do you use them in mongodb?

Documents are individual records inside of the database.

### What is the find() method used for?

It is to find the record by some parameter set.

### What is the .pretty used for?

.pretty is used to make the return value more readable.

### What is the difference between SQL databases and Mongodb

Mongodb is unstructured.

### How would you add a document in a mongodb database

```javascript
db.collectionName.insert({
  lotsOfKeys: "lotsOfValues",
});
```

### How would you use a projection?

To only return the data needed from the document and not the document in its entirety.

### How do you run a local instance of mongo

Enter into your terminal and type in the command:

-mongo

### How would you delete a document

```javascript
db.collectionName.remove({key: value})