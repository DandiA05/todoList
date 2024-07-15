"use client";
import { store } from "@/store";
import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";

export default function Container({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}
