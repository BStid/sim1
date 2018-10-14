import React from "react";
import "./Product.css";
import EditBox from "../Dashboard/EditBox";

export default function Product(props) {
  return (
    <div className="product">
      <img className="productImage" src={props.img} alt="Product" />
      <p className="productText">
        {props.name}
        <br />${props.price}
      </p>
      <br />
      <button onClick={() => props.displayEditBox()}>Edit</button>
      <br />
      <button onClick={() => props.removeProduct(props.id)}>Delete</button>
      <EditBox
        className={props.editBoxClassName}
        id={props.id}
        pressEdit={props.pressEdit}
        editedName={props.editedName}
        editedPrice={props.editedPrice}
        editedImgUrl={props.editedImgUrl}
        handleChange={props.handleChange}
        editProduct={props.editProduct}
      />
    </div>
  );
}
