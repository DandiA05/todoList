"use client";
import Button from "@/components/Button";
import CardTodo from "@/components/CardTodo";
import InputText from "@/components/InputText";
import { RootState } from "@/store";
import { addTodo, deleteTodo, setText, updateFlagDone } from "@/store/todo";
import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function todoRedux() {
  const dispatch = useDispatch();

  const { listTodo, form } = useSelector((state: RootState) => state.todo);

  const [list, setList] = useState<any>([]);
  const [todo, setTodo] = useState<any>({
    name: "",
    describe: "",
    flagDone: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo(form));
    // setList([...list, todo]);
  };

  const handleDelete = (index: number) => {
    // const newTask = list;
    // newTask.splice(index, 1);

    // setList([...newTask]);
    dispatch(deleteTodo(index));
  };

  const handleCheck = (index: number) => {
    // const newTask = list;
    // newTask[index].flagDone = !newTask[index].flagDone;
    // setList([...newTask]);

    dispatch(updateFlagDone(index));
  };

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    dispatch(setText(e.currentTarget.value));
  };

  return (
    <div>
      <form className="flex flex-col mb-6" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <h1>To Do List Dengan React</h1>
          <Button type="submit">Tambah</Button>
        </div>
        <InputText
          label="name"
          name="name"
          value={form.name}
          // onChange={(e: any) => setTodo({ ...todo, name: e.target.value })}
          onChange={handleOnChange}
        />
      </form>

      {/* {list?.map((item: any, index: any) => (
        <CardTodo
          key={index}
          item={item}
          index={index}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))} */}
      <div className="grid md:grid-cols-2 gap-4">
        {listTodo.map((item: any, index: any) => (
          <CardTodo
            key={index}
            item={item}
            index={index}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </div>
    </div>
  );
}
