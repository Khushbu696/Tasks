let products = []; // in-memory storage

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  product
    ? res.json(product)
    : res.status(404).json({ error: 'Product not found' });
};

exports.createProduct = (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const { name, price, description } = req.body;
  products[index] = { id, name, price, description };
  res.json(products[index]);
};

exports.patchProduct = (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });

  Object.assign(product, req.body);
  res.json(product);
};

exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  const removed = products.splice(index, 1)[0];
  res.json({ message: 'Product deleted', product: removed });
};
