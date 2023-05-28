import React, { useState } from "react";
import styles from "./Todos.module.css";
import Button from "../Button/Button";
import { AiFillEdit, AiFillDelete, AiOutlineCheck } from "react-icons/ai";

function Todos({ todo, todos, updateTodos, id }) {
  const [checked, setchecked] = useState(todo.checked);

  const currTime = new Date().getTime();
  const deadline = new Date(todo.date).getTime();

  let classUpdFlag = styles.status_flag,
    classCont = styles.todo_container;
  if (todo.checked) {
    // console.log(2);
    classUpdFlag = `${classUpdFlag} ${styles.completed}`;
    classCont = `${classCont} ${styles.completed}`;
  } else if (currTime - deadline < 0) {
    // console.log(1);
    classUpdFlag = `${classUpdFlag} ${styles.pending}`;
    classCont = `${classCont} ${styles.pending}`;
  } else if (currTime - deadline >= 0) {
    // console.log(3);
    classUpdFlag = `${classUpdFlag} ${styles.missed}`;
    classCont = `${classCont} ${styles.missed}`;
  }

  function handleClickDelete(e) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    updateTodos(updatedTodos);
    if (updatedTodos.length === 0)
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }

  function handleClickCkecked(e) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, checked: !checked };
      return todo;
    });
    updateTodos(updatedTodos);
    setchecked(!checked);
  }

  return (
    <div className={classCont}>
      <h4 className={styles.todo_topic}>{todo.topic}</h4>
      <p className={styles.todo_desc}>{todo.description}</p>
      <p className={styles.todo_time}>
        {new Date(todo.date).toLocaleString("en-IN")}
      </p>
      <div className={classUpdFlag}>
        {todo.checked
          ? "Done"
          : currTime - deadline >= 0
          ? "Missed"
          : "Pending"}
      </div>
      <div className={styles.actions}>
        <p>Done</p>
        <div onClick={handleClickCkecked} className={styles.checked_status}>
          {checked && (
            <Button primary classNm={styles.check_todo_btn}>
              <AiOutlineCheck />
            </Button>
          )}
        </div>

        <Button classNm={styles.update_todo_btn}>
          <AiFillEdit />
        </Button>
        <Button onClick={handleClickDelete} classNm={styles.delete_todo_btn}>
          <AiFillDelete />
        </Button>
      </div>
    </div>
  );
}

export default Todos;
