import React from "react";
import Button from "../Button";

export default function CardTodo({
  item,
  index,
  handleDelete,
  handleCheck,
}: {
  item: any;
  index: any;
  handleDelete: any;
  handleCheck: any;
}) {
  return (
    <div className="flex flex-row justify-between  border p-3 items-center mb-2">
      <div>
        <p
          className={`font-bold text-[20px] ${
            item?.flagDone ? `line-through` : ``
          }`}
        >
          {item?.name}
        </p>
        <p className={`${item?.flagDone ? `line-through` : ``}`}>
          {item?.describe}
        </p>
      </div>
      <div className="flex gap-4">
        <input
          type="checkbox"
          value={item?.flagDone}
          onChange={() => handleCheck(index)}
        />
        <Button onClick={() => handleDelete(index)}>Hapus</Button>
      </div>
    </div>
  );
}
