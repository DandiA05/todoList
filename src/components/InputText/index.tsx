import React, { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputText: React.FC<InputTextProps> = ({ label, ...props }) => {
  return (
    <div className="flex flex-col">
      <span>{label} : </span>
      <input name="describe" className="border p-2" {...props} />
    </div>
  );
};

export default InputText;
