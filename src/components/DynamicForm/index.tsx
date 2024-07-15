import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const dynamicSchema = yup.object({
  data: yup.array().of(
    yup.object().shape({
      text: yup.string().required(),
    })
  ),
});
export default function DynamicForm() {
  const { control, register, handleSubmit } = useForm({
    resolver: yupResolver(dynamicSchema),
    defaultValues: {
      data: [{ text: "" }],
    },
  });
  const { fields, append, insert } = useFieldArray({
    control,
    name: "data",
  });
  return (
    <div>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        {fields.map((fields, index) => (
          <div key={fields.id}>
            <input className="border p-2" {...register(`data.${index}.text`)} />
          </div>
        ))}

        <button
          type="submit"
          className={`rounded bg-black py-2 px-4 text-white hover:bg-black/80 focus:bg-black/90`}
        >
          Submit Input
        </button>
      </form>

      <button
        className={`rounded bg-black py-2 px-4 text-white hover:bg-black/80 focus:bg-black/90`}
        onClick={() => insert(0, { text: "" })}
      >
        Add Input
      </button>
    </div>
  );
}
