import React from "react";
import Form from "../components/addToDoForm";
import { TodoItem } from "../components/ServerComponents";
export default function Home() {
  return (
    <>
      <Form />
      <section className="todoContainer">
        <TodoItem
          id={"sample1"}
          completed={true}
          title={"sample Task"}
          description={"Sample Description"}
        />
      </section>
    </>
  );
}
