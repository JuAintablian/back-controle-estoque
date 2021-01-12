/*Imports */
import express from 'express';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger.js';

import { ProductRouter } from './routes/productRoutes.js';
import { CategoryRouter } from './routes/categoryRoutes.js';
import { OrderRouter } from './routes/orderRoutes.js';

import cors from 'cors'

const app = express();

// const swaggerUi = require(''),
//   swaggerDocument = require();

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
app.use(cors());
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(CategoryRouter);
app.use(ProductRouter);
app.use(OrderRouter);

app.listen(process.env.PORT, () => console.log('Servidor em execucao'));
