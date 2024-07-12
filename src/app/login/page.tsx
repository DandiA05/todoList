import InputText from "@/components/InputText";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="font-bold text-3xl">Ini Login</h1>
      <InputText label="Username" />
      <Link href={"/"}>Masuk</Link>
    </div>
  );
}

export default page;
