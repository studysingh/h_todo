import { useState } from "react";
import "./App.css";
import AddTodo from "./component/addTodo";
import Container from "./component/container";
import Header from "./component/header";
import TodoItemContainer from "./component/todoItemContainer";
import WelcomeMessage from "./component/welcome";

function App() {
  let [todoItem, setTodoItem] = useState([]);
  return (
    <Container>
      <Header></Header>
      <AddTodo todoItem={todoItem} setTodoItem={setTodoItem}></AddTodo>
      <WelcomeMessage todoItem={todoItem}></WelcomeMessage>
      <TodoItemContainer
        todoItem={todoItem}
        setTodoItem={setTodoItem}
      ></TodoItemContainer>
    </Container>
  );
}
export default App;
