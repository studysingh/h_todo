import TodoItem from "./todoItem";

let TodoItemContainer = ({ todoItem, setTodoItem }) => {
  let deleteItem = (itemName, itemDate) => {
    let newTodoItem = todoItem.filter(
      (item) => !(item.todo === itemName && item.date === itemDate)
    );
    setTodoItem(newTodoItem);
  };

  return (
    <div className="todoContainer">
      {todoItem.map((item) => {
        return (
          <TodoItem
            item={item}
            deleteItem={deleteItem}
            key={item.todo}
          ></TodoItem>
        );
      })}
    </div>
  );
};
export default TodoItemContainer;
