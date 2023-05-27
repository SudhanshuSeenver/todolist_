import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Todos from "../Todos/Todos";
import Button from "../Button/Button";
import { IoMdAdd } from "react-icons/io";

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TODO</h1>
      <main className={styles.main_section}>
        {todos.map((todo) => (
          <Todos todo={todo} />
        ))}
        <Todos />
        <Todos />
        <Todos />
        <Todos />
        <Todos />
        <Todos />
        <Todos />
      </main>
      <Button primary classNm={styles.add_todo_btn}>
        <IoMdAdd />
      </Button>
    </div>
  );
}

export default Home;
