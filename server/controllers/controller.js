const getInventory = (req, res, next) => {
  req.app
    .get("db")
    .get_inventory()
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};

const addProduct = (req, res, next) => {
  const { name, price, img } = req.body;
  req.app
    .get("db")
    .add_product([name, price, img])
    .then(response =>
      res.status(200).send(`Successfully added ${name} to the DataBase!`)
    )
    .catch(err => res.status(500).send(err));
};
const removeProduct = (req, res, next) => {
  req.app
    .get("db")
    .remove_product(req.params.id)
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};
const updateProduct = (req, res) => {
  const { editedName, editedPrice, editedImgUrl } = req.body;
  const { id } = req.params;
  console.log(id, editedName, editedPrice, editedImgUrl);
  req.app
    .get("db")
    .update_product([id, editedName, editedPrice, editedImgUrl])
    .then(response => res.status(200).send(response))
    .catch(err => res.status(500).send(err));
};
module.exports = {
  getInventory,
  addProduct,
  removeProduct,
  updateProduct
};
