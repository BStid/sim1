import React, { Component } from "react";
import "./Dashboard.css";
import Product from "../Product/Product";
import axios from "axios";
import Form from "../Form/Form";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [],
      editActive: false,
      editBoxClassName: "editBoxHidden",
      editedName: "",
      editedPrice: "",
      editedImgUrl: ""
    };
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.displayEditBox = this.displayEditBox.bind(this);
    this.pressEdit = this.pressEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get("http://localhost:3007/api/inventory").then(response => {
      console.log(response.data);
      this.setState({ inventory: response.data });
    });
  }
  removeProduct(id) {
    console.log("Deleting....");
    axios.delete("http://localhost:3007/api/delete/" + id).then(response => {
      this.setState({ inventory: response.data });
    });
  }
  addProduct(name, price, img) {
    console.log("Adding to List...");
    axios
      .post(`http://localhost:3007/api/product`, {
        name,
        price,
        img
      })
      .then(response => {
        this.setState({ inventory: response.data });
      })
      .catch(err => console.log(err));
  }

  editProduct(id, editedName, editedPrice, editedImgUrl) {
    console.log("editProduct:", id, editedName, editedPrice, editedImgUrl);
    axios
      .put(`http://localhost:3007/api/edit/${id}`, {
        editedName,
        editedPrice,
        editedImgUrl
      })
      .then(response => {
        console.log(response.data);
        this.setState({ inventory: response.data });
      });
  }
  pressEdit(eventKey, id, comment) {
    if (eventKey.keyCode === 13) {
      this.editMessage(id, comment);
    }
  }
  handleChange(value, key) {
    this.setState({ [key]: value });
  }
  displayEditBox() {
    if (this.state.editActive === false) {
      console.log("The Button Has Been Pressed!");
      this.setState({ editActive: true, editBoxClassName: "editBox" });
    }
  }
  render() {
    let displayDashboard = this.state.inventory.map((value, index) => {
      // console.log(value.img);
      return (
        <Product
          img={value.products_img}
          price={value.products_price}
          name={value.products_name}
          key={index}
          removeProduct={this.removeProduct}
          id={value.id}
          editBoxClassName={this.state.editBoxClassName}
          editProduct={this.editProduct}
          displayEditBox={this.displayEditBox}
          pressEdit={this.pressEdit}
          editedName={this.state.editedName}
          editedPrice={this.state.editedPrice}
          editedImgUrl={this.state.editedImgUrl}
          handleChange={this.handleChange}
        />
      );
    });
    return <div>{displayDashboard}</div>;
  }
}

export default Dashboard;
