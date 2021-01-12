import express from 'express';
import { orderModel } from '../models/order.js';

const app = express();

app.get('/order', async (req, res) => {
  const order = await orderModel.find({});

  try {
    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/order/:id', async (req, res) => {
  try {
    const order = await orderModel.findById(req.params.id);
    if (!order) {
      res.status(404).send('Venda nao encontrada');
      return
    }
    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/order/period', async (req, res) => {
  try {
    const order = await orderModel.findById({ "orderDate" : { "$gte" : ISODate("2021-01-09") } });
    if (!order) {
      res.status(404).send('Venda nao encontrada');
      return
    }
    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/order', async (req, res) => {
  const order = new orderModel(req.body);

  try {
    await order.save();
    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/order/:id', async (req, res) => {
  try {
    const order = await orderModel.findByIdAndDelete(req.params.id);

    if (!order) {
      res.status(404).send('Venda nao encontrada');
    }

    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/order/:id', async (req, res) => {
  try {
    const order = await orderModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(order);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as OrderRouter };
