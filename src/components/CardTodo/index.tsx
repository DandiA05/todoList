import React from "react";

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
    <div className="flex flex-row justify-between w-72 border p-3 items-center mb-2">
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
        <button onClick={() => handleDelete(index)}>Hapus</button>
        <input
          type="checkbox"
          value={item?.flagDone}
          onChange={() => handleCheck(index)}
        />
      </div>
    </div>
  );
}
