import React, { Dispatch } from "react";
import Button from "./button";

type Props = {
  todo: string;
  setTodo: Dispatch<React.SetStateAction<string>>;
  addTodos: () => void;
};

const Input = ({ todo, setTodo, addTodos }: Props) => {
  return (
    <>
      <div className="drop-shadow-sm">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          className=" border-b rounded-bl-xl border-s px-2 p-1 "
        ></input>
        <Button onClick={addTodos} />
      </div>
    </>
  );
};

export default Input;
