import styles from "./todoItem.module.css";
let TodoItem = ({ item, deleteItem }) => {



  return (
    <div className={styles.container}>
      <span className={styles.todoArea}>{item.todo}</span>
      <span className={styles.todoDate}>{item.date}</span>
      <button
        className="btn btn-danger"
        onClick={() => deleteItem(item.todo, item.date)}
      >
        Delete
      </button>
    </div>
  );
};
export default TodoItem;
