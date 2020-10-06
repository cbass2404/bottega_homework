const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts");
let titleList = [];

postsPromise
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      titleList.push(item.title);
    });
  })
  .catch((err) => {
    document.body.innerHTML = err;
  });

setTimeout(function() {document.body.innerHTML = titleList.join("<br>")}, 1000);
