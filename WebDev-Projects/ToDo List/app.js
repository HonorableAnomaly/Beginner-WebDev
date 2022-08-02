let input = prompt('What would you like to do?');
const todos = ['Buy handpan', 'Find car title'];
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('***************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('***************');
  } else if (input === 'new') {
      const newTodo = prompt('What todo would you like to add?');
      todos.push(newTodo);
      console.log(`${newTodo} has been added to your list!`);
  } else if (input === 'delete') {
      const index = parseInt(prompt('What is the index of the ToDo you wish to remove?'));
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`${deleted[0]} was deleted from your list.`);
        } else {
          console.log('Unknown index.');
        }
  }
  input = prompt('What would you like to do?');
}
console.log('The app has been closed.');
