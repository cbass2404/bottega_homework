# Guide to Git
### How do you create a local repository?

```javascript
git init
```

### What is github?

An online UI to more easily navigate and share repositoris among a team.

### How would you push a git repo to git hub?

```javascript
git add .
git commit -m "message"
git push
```

### What are the steps to make a git commit?

```javascript
git commit -m "say what you did, what you changed and how you changed it"
```

### How would you hide files from git?

```javascript
create a file named:
    .gitignore
Add the file name or folder to the .gitignore file
```

### Why would you want to hide files from git?

So it does not pollute your repository with things you only use locally.

### What does git pull do?

Pulls the most current data from the repository.

### What is the purpose of git branches?

To work away from the functioning main file for debugging and updating.

### How would you push a git branch to github?

```javascript
git add .
git commit -m "comment here"
git push // copy and paste the stream
```

### Explain how to merge a remote branch.

```javascript
Go to the branch you are merging to,
type:
    git merge branchName
```

### What is git rebase?

It resets your code to the current update.

### What is git stash?

it hides the file so you can move to another branch without commiting it

### What is the difference between git fetch and git pull?

One grabs and merges the data, the other just imports the data

### What is a merge conflict?

When there are updates on both the local and online version and you must choose between them.

### How can a merge conflict occur?

Unresolved multiple changes in the same spot.
