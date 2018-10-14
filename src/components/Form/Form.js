import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageInput: "",
      productNameInput: "",
      priceInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
  }
  handleChange(key, value) {
    console.log(key, value);
    this.setState({ [key]: value });
  }
  clearInputFields() {
    console.log("Cancel Clicked");
    this.setState({
      imageInput: "",
      productNameInput: "",
      priceInput: ""
    });
  }
  render() {
    return (
      <div className="formBox">
        <form>
          <img
            src="http://www.lboro.ac.uk/media/wwwlboroacuk/external/content/research/sti/slide1.png"
            alt="default"
          />
          <br />
          <input
            type="text"
            placeholder="Image URL"
            onChange={e => this.handleChange("imageInput", e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Product Name"
            onChange={e =>
              this.handleChange("productNameInput", e.target.value)
            }
          />
          <br />
          <input
            type="number"
            placeholder="Price"
            onChange={e => this.handleChange("priceInput", e.target.value)}
          />
          <br />
          <button
            type="reset"
            onClick={() => {
              this.clearInputFields();
            }}
          >
            Cancel
          </button>
          <button
            onClick={() =>
              this.props.addProduct(
                this.state.productNameInput,
                this.state.priceInput,
                this.state.imageInput
              )
            }
          >
            Add to Inventory
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
