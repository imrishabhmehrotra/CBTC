import React from "react";
import "@/app/globals.css";

export default function addToDoForm() {
  return (
    <>
      <center>
        <form className="form">
          <p className="form-title">Add Task</p>
          <div className="input-container">
            <input placeholder="Add Task" type="email" />
          </div>
          <div className="input-container">
            <input placeholder="Task Description" type="text" />
          </div>
          <button className="submit" type="submit">
            Add
          </button>
        </form>
      </center>
    </>
  );
}
