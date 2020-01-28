/* eslint-disable */
import { todosArray } from "./database.js"
import { emptyState, removeFromArray, todosRefresh, addNewTodoText, dispMsg } from "./utils.js"

const addTodo = () => {
  const $newTodoText = $('#addtodo-input-text').val();
  let $newTodoDate;

  if ($(`#addtodo-input-date`).val()) {
    $newTodoDate = $('#addtodo-input-date').val()
  } else {
    $newTodoDate = new Date();
  }

  const newTodo = {id: todosArray.length, name: $newTodoText, due: $newTodoDate, isDone: false}

  addNewTodoText($newTodoText, newTodo)
}

const toggleTodo = () => {
  let todoid = $(event.target).attr('data-check-id');
  if($(event.target).is(":checked")){
    todosArray[todoid].isDone = true;
    const randomNumber = Math.floor(Math.random() * 6);
    if(randomNumber === 0) {
      dispMsg('Ch-ch-ch-check');
    } else if (randomNumber === 1) {
      dispMsg('Niiice')
    } else if (randomNumber === 2) {
      dispMsg('Awesomesauce')
    } else if (randomNumber === 3) {
      dispMsg('Cool Beans')
    } else if (randomNumber === 4) {
      dispMsg('High Five')
    } else {
      dispMsg('Touchdown')
    }
  } else if($(event.target).is(":not(:checked)")){
    todosArray[todoid].isDone = false;
  }
}

const deleteTodo = () => {
  let todoid = +$(event.target).attr('data-id');
  removeFromArray(todosArray, todoid)
  todosRefresh(todosArray, '#todo-list')
  // const target = $(ev.target)
  // $(target).parent().remove();
  emptyState()
  dispMsg('Todo Deleted');
}

export { addTodo, toggleTodo, deleteTodo }