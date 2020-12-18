const fs = require("fs");
const { report } = require("process");

const Todo = require("./app");
const command = process.argv[2];

if (command == "add") {
  let title = process.argv[4];

  Todo.create(title);
  console.log(`Added todo: ${title}`);
}
if (command == "ls") {
  const db = Todo.list();
  for (let i = db.length - 1; i >= 0; i--) {
    console.log("[" + i + "]", db[i].title);
  }
}

if (command == "show") {
  let index = process.argv[4];
  console.log(Todo.show(index));
}
if (command == "del") {
  let index = process.argv[4];

  Todo.remove(index);
}
if (command == "done") {
  let index = process.argv[4];
  Todo.toggle(index);
 
}

if (command == "report") {
  let index = process.argv[4];
  console.log(`Pending : ${index} Completed : 2`);
}

//   function keyHelp(){
const keywords = [
  '  node todo.js add --title "todo item"   # Add a new todo',
  " ./todo ls                               # Show remaining todos",
  "  node todo del --index NUMBER           # Delete a todo",
  "  node todo.js done --index NUMBER       # Complete a todo",
  " ./todo help                             # Show usage",
  " ./todo report                           # Statistics",
];

if (command == "help") {
  console.log(keywords.join("\r\n"));
}
