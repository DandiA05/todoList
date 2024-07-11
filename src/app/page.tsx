"use client";
import { useState } from "react";

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

  return (
    <div className="flex min-h-screen flex-col p-24">
      <form className="flex flex-col mb-6" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <h1>To Do List Dengan React</h1>
          <button type="submit">Tambah</button>
        </div>
        <span>name : </span>
        <input
          name="name"
          className="border"
          onChange={(e) => setTodo({ ...todo, name: e.target.value })}
        />
        <span>describe : </span>
        <input
          name="describe"
          className="border"
          onChange={(e) => setTodo({ ...todo, describe: e.target.value })}
        />
      </form>

      {list?.map((item: any, index: any) => (
        <div
          key={index}
          className="flex flex-row justify-between w-72 border p-3 items-center mb-2"
        >
          <div>
            <p>{item?.name}</p>
            <p>{item?.describe}</p>
          </div>
          <div className="flex gap-4">
            <button onClick={() => handleDelete(index)}>Hapus</button>
            <button>Done</button>
          </div>
        </div>
      ))}
    </div>
  );
}
