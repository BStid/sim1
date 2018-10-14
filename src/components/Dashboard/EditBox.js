import React from "react";

export default function EditBox(props) {
  return (
    <div className="outerEdit">
      <input
        placeholder="Edit Product Name..."
        type="text"
        className={props.className}
        //   onKeyDown={event => props.pressEdit(event, props.id, props.comment)}
        onChange={event => props.handleChange(event.target.value, "editedName")}
      />
      <br />
      <input
        placeholder="Edit Price..."
        type="number"
        className={props.className}
        //   onKeyDown={event => props.pressEdit(event, props.id, props.comment)}
        onChange={event =>
          props.handleChange(event.target.value, "editedPrice")
        }
      />
      <br />
      <input
        placeholder="Edit Image URL..."
        type="text"
        className={props.className}
        //   onKeyDown={event => props.pressEdit(event, props.id, props.comment)}
        onChange={event =>
          props.handleChange(event.target.value, "editedImgUrl")
        }
      />
      <br />
      <button
        onClick={() =>
          props.editProduct(
            props.id,
            props.editedName,
            props.editedPrice,
            props.editedImgUrl
          )
        }
      >
        Save Changes
      </button>
    </div>
  );
}
