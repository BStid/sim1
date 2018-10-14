require("dotenv").config();
const express = require("express");
const json = require("body-parser");
const massive = require("massive");
const cors = require("cors");
const {
  getInventory,
  addProduct,
  removeProduct,
  updateProduct
} = require("./controllers/controller");

const port = 3007;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    // dbInstance
    //   .create_products_table()
    //   .then(resonse => {
    //     console.log(response);
    //   })
    //   .catch(e => console.log(e));
  })
  .catch(error => {
    console.log(error);
  });

app.get("/api/inventory", getInventory);
app.post("/api/product", addProduct);
app.delete("/api/delete/:id", removeProduct);
app.put("/api/edit/:id", updateProduct);

app.listen(port, () => console.log(`Server Listening on port ${port}`));
