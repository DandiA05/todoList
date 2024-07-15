"use client";
import Button from "@/components/Button";
import CardTodo from "@/components/CardTodo";
import InputText from "@/components/InputText";
import { RootState } from "@/store";
import { addTodo, deleteTodo, setText, updateFlagDone } from "@/store/todo";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

const todoSchema = yup.object({
  name: yup.string().required("Wajib diisi"),
});

export default function PostestDay2() {
  const dispatch = useDispatch();
  const { listTodo } = useSelector((state: RootState) => state.todo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(todoSchema),
  });

  const onSubmit = (data: any) => {
    //   data.preventDefault();
    console.log(data);
    dispatch(addTodo(data));
  };

  const handleDelete = (index: number) => {
    dispatch(deleteTodo(index));
  };

  const handleCheck = (index: number) => {
    dispatch(updateFlagDone(index));
  };

  return (
    <div>
      <form className="flex flex-col mb-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-between">
          <h1>To Do List Dengan React</h1>
          <Button type="submit">Tambah</Button>
        </div>
        <input
          className={`${
            errors.name ? "border-red-500 focus-visible:border-red-500" : ""
          } border p-2`}
          {...register("name")}
          placeholder="Name"
        />
        <p>{errors.name?.message}</p>
      </form>

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
