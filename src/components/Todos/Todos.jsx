import React from "react";
import styles from "./Todos.module.css";
import Button from "../Button/Button";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function Todos({ todo, completed, pending, missed }) {
  console.log(todo);
  return (
    <div className={styles.todo_container}>
      <h4 className={styles.todo_topic}>{todo.topic}</h4>
      <p className={styles.todo_desc}>{todo.description}</p>
      <p className={styles.todo_time}>{todo.date}</p>
      <div>flag status</div>
      <div className={styles.actions}>
        <Button classNm={styles.update_todo_btn}>
          <AiFillEdit />
        </Button>
        <Button classNm={styles.delete_todo_btn}>
          <AiFillDelete />
        </Button>
      </div>
    </div>
  );
}

export default Todos;
