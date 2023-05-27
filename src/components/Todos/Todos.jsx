import React from "react";
import styles from "./Todos.module.css";
import Button from "../Button/Button";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function Todos({ todo }) {
  return (
    <div className={styles.todo_container}>
      <h4 className={styles.todo_topic}>topic</h4>
      <p className={styles.todo_desc}>description in 50 to 100 words words</p>
      <p className={styles.todo_time}>time</p>
      <div>flag status</div>
      <div className={styles.actions}>
        <Button classNm={styles.update_todo_btn}><AiFillEdit  /></Button>
        <Button classNm={styles.delete_todo_btn}><AiFillDelete /></Button>
      </div>
    </div>
  );
}

export default Todos;
