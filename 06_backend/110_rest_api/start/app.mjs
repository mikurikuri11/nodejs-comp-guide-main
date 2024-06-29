import express from 'express';

const PORT = 8080;
const app = express();

app.use(express.json());

const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

app.get('/products', function (req, res) {
  res.json(products);
});

app.post('/create-product', function (req, res) {
  const newProduct = req.body;
  products.push(newProduct);
  console.log(products);
  res.json(newProduct);
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
