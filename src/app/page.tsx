"use client";
import CardTodo from "@/components/CardTodo";
import InputText from "@/components/InputText";
import { useRef, useState } from "react";

export default function Home() {
  const [list, setList] = useState<any>([]);
  const [todo, setTodo] = useState<any>({
    name: "",
    describe: "",
    flagDone: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setList([...list, todo]);
  };

  const handleDelete = (index: any) => {
    const newTask = list;
    newTask.splice(index, 1);

    setList([...newTask]);
  };

  const handleCheck = (index: any) => {
    const newTask = list;
    newTask[index].flagDone = !newTask[index].flagDone;
    setList([...newTask]);
  };

  return (
    <div>
      <form className="flex flex-col mb-6" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-row justify-between">
          <h1>To Do List Dengan React</h1>
          <button type="submit">Tambah</button>
        </div>
        <InputText
          label="name"
          onChange={(e: any) => setTodo({ ...todo, name: e.target.value })}
        />
        <InputText
          label="describe"
          onChange={(e) => setTodo({ ...todo, describe: e.target.value })}
        />
      </form>

      {list?.map((item: any, index: any) => (
        <CardTodo
          key={index}
          item={item}
          index={index}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </div>
  );
}
