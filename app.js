/*Imports */
import express from 'express';
import mongoose from 'mongoose';

import { ProductRouter } from './routes/productRoutes.js';
import { CategoryRouter } from './routes/categoryRoutes.js';

const app = express();

/*Conexao com o MongoDB*/
(async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://' +
        process.env.USERDB +
        ':' +
        process.env.PWDDB +
        '@cluster0.a3a31.mongodb.net/controle-estoque',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado no MongoDB');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

app.use(express.json());
app.use(CategoryRouter);
app.use(ProductRouter);

app.listen(process.env.PORT, () => console.log('Servidor em execucao'));
