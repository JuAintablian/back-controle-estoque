import express from 'express';
import { categoryModel } from '../models/category.js';

const app = express();

app.get('/category', async (req, res) => {
  const category = await categoryModel.find({});

  try {
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/category/:id', async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    if (!category) {
      res.status(404).send('Categoria nao encontrada');
      return
    }
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/category', async (req, res) => {
  const category = new categoryModel(req.body);

  try {
    await category.save();
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete('/category/:id', async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);

    if (!category) {
      res.status(404).send('Categoria nao encontrada');
    }
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

app.patch('/category/:id', async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

export { app as CategoryRouter };
