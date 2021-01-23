function readingList(books) {
  // Write your code here...
  let content = document.getElementById("content");
  let h1 = document.createElement("h1");
  h1.innerHTML = `Booklist`;
  content.appendChild(h1);

  let ul = document.createElement("ul");
  ul.style.listStyleType = "none";
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.style.padding = "30px";
  ul.style.width = "100%";

  for (let i = 0; i < books.length; i++) {
    let list = document.createElement("li");
    list.style.listStyleType = "none";
    list.style.padding = "10px";
    list.style.margin = "15px";
    list.style.width = "25%";
  }

  if (books[i].alreadyRead === true) {
    list.style.backgroundColor = "green";
  } else {
    list.style.backgroundColor = "red";
  }

  let bookP = document.createElement("p");
  bookP.innerHTML = `${books[i].title} - ${books[i].author}`;
  list.appendChild(bookP);

  let coverImage = document.createElement("img");
  coverImage.src = books[i].coverImage;
  coverImage.style.width = "60%";

  list.appendChild(coverImage);
  ul.appendChild(list);
  content.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverImage: "https://miro.medium.com/max/1200/1*Qo27inBKBKY4Q4Pgk5KkbQ.png",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverImage: "https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg",
  },
];

readingList(books);
