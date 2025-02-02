"use client";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addTodo, deleteTodo, updateFlagDone } from "@/store/todo";
import CardTodo from "@/components/CardTodo";
import DynamicForm from "@/components/DynamicForm";

const todoSchema = yup.object({
  name: yup.string().required(),
});
export default function Page() {
  const dispatch = useDispatch();

  const { register, handleSubmit, resetField } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const { listTodo, form } = useSelector((state: RootState) => state.todo);

  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(addTodo(data));
    resetField("name");
  };

  const handleDelete = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleCheck = (index: number) => {
    dispatch(updateFlagDone(index));
  };

  return (
    <div>
      {/* <form
        className="flex flex-col mb-6 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-row justify-between">
          <h1>To Do List</h1>
          <Button type="submit">Tambah</Button>
        </div>
        <input
          {...register("name")}
          name="name"
          className="border p-2"
          type="text"
        />
      </form>

      <div className="grid md:grid-cols-2 gap-4">
        {listTodo?.map((item: any, index: any) => (
          <CardTodo
            key={index}
            item={item}
            index={index}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        ))}
      </div> */}
      <DynamicForm />
    </div>
  );
}
