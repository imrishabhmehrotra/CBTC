"use client";
import "@/app/globals.css";
import "materialize-css/dist/css/materialize.min.css";
export const TodoItem = ({ id, title, description, completed }) => {
  const createdDate = new Date(Date.now()).toLocaleString();

  const deleteHandler = (id) => {
    alert(`Deleting ${id} `);
  };

  return (
    <>
      <div class="card">
        <h3 class="card__title">{title}</h3>

        <p class="card__content">{description}</p>
        <div class="card__date">{createdDate}</div>
        <input type="checkbox" checked={completed} />
        <div class="card__arrow" onClick={() => deleteHandler(id)}>
          Remove
        </div>
      </div>
    </>
  );
};
