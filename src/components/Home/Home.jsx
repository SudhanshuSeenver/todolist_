import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Todos from "../Todos/Todos";
import Button from "../Button/Button";
import { IoMdAdd } from "react-icons/io";
import Modal from "../Modal/Modal";
import { RiCloseFill } from "react-icons/ri";

function Home() {
  const [todos, setTodos] = useState([]);
  const [showModal, setShoeModal] = useState(false);
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");

  const demoTodos = [
    {
      topic: "Zedd labz Assignment",
      desc: "Make a todo app and weather app with given functionalities in doc",
      date: "2023-05-27T17:00",
      id: "id2342342342",
      checked: true,
    },
  ];

  function handleClickAdd(e) {
    if (topic && date && desc) {
      const uniqId = "id" + new Date().getTime();
      setTodos([
        ...todos,
        { topic, date, description: desc, id: uniqId, checked: false },
      ]);
      closeModal(e);
      setDate("");
      setTopic("");
      setDesc("");
    } else {
      alert("****Please fill all the fields****");
    }
  }

  function closeModal(e) {
    setShoeModal(false);
  }
  function openModal() {
    setShoeModal(true);
  }

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) setTodos(JSON.parse(data));
  }, []);

  function handleChangeTopic(e) {
    setTopic(e.target.value);
  }
  function handleChangeDate(e) {
    setDate(e.target.value);
  }
  function handleChangeDesc(e) {
    setDesc(e.target.value);
  }

  useEffect(() => {
    if (todos.length) localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>TODO</h1>
      <main className={styles.main_section}>
        {todos.map((todo) => {
          return (
            <Todos
              key={todo.id}
              todos={todos}
              updateTodos={setTodos}
              todo={todo}
              id={todo.id}
            />
          );
        })}
      </main>
      <Button onClick={openModal} primary classNm={styles.add_todo_btn}>
        <IoMdAdd />
      </Button>
      {showModal && (
        <Modal closeModal={closeModal} panelClasses={styles.panelClasses}>
          <div className={styles.addTodo_form}>
            <h3 className={styles.modal_heading}>New Todo</h3>
            <input
              className={styles.addTodo_input}
              type="text"
              value={topic}
              onChange={handleChangeTopic}
              placeholder="Topic"
            />
            <input
              value={date}
              className={styles.addTodo_input}
              type="datetime-local"
              onChange={handleChangeDate}
            />
            <textarea
              className={styles.addTodo_input}
              type="text"
              value={desc}
              onChange={handleChangeDesc}
              placeholder="Description(20-50 words)"
            />
            <Button
              onClick={handleClickAdd}
              classNm={styles.addbtntodo_form}
              secondary
            >
              Add
            </Button>
            <Button onClick={closeModal} classNm={styles.closebtntodo_form}>
              <RiCloseFill className={styles.closeIcon} />
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Home;
