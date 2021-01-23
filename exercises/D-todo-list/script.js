function todoList(todos) {
  // Write your code here...

  let content = document.getElementById("content");
  let ul = document.createElement("ul");

  todos.forEach((element) => {
    let li = document.createElement("li");
    li.innerHTML = element.todo;
    li.addEventListener("click", (event) => {
      if (event.target.style.textDecoration === "line-through") {
        event.target.style.textDecoration = "none";
      } else {
        event.target.style.textDecoration = "line-through";
      }
    });

    ul.appendChild(li);
  });

  content.appendChild(ul);
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
