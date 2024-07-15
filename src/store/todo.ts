import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  listTodo: any[];
  form: {
    name: string;
    describe: string;
    flagDone: boolean;
  };
}

const initialState: CounterState = {
  listTodo: [],
  form: {
    name: "",
    describe: "",
    flagDone: false,
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state: any, action) => {
      state.listTodo = [...state.listTodo, action.payload];
    },
    deleteTodo: (state, action: PayloadAction<any>) => {
      state.listTodo = state.listTodo.filter(
        (item: any, index: any) => index !== action.payload
      );
    },
    setText: (state, action: PayloadAction<string>) => {
      state.form = {
        ...state.form,
        name: action.payload,
        describe: action.payload,
        flagDone: false,
      };
    },
    updateFlagDone: (state, action: PayloadAction<any>) => {
      state.listTodo[action.payload].flagDone =
        !state.listTodo[action.payload].flagDone;
    },
  },
});

export const { addTodo, deleteTodo, setText, updateFlagDone } =
  todoSlice.actions;

export default todoSlice.reducer;
