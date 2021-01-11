import express from 'express';
import { productModel } from '../models/product.js';

const app = express();

app.get('/product', async (req, res) => {
  const product = await productModel.find({});

  try {
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/product/repo', async (req, res) => {
  const product = await productModel.find({ quantity: { $lt: req.body.qtd } });

  try {
    res.send({
      list: product,
      total: product.length
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/product/:id', async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    if (!product) {
      res.status(404).send('Produto nao encontrado');
      return
    }
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/product', async (req, res) => {
  const product = new productModel(req.body);

  try {
    await product.save();
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/product/:id', async (req, res) => {
  try {
    const product = await productModel.findByIdAndDelete(req.params.id);

    if (!product) {
      res.status(404).send('Produto nao encontrado');
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/product/:id', async (req, res) => {
  try {
    const product = await productModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as ProductRouter };
