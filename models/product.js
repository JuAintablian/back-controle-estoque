import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    //Valida se p valor inserida e' menor que zero
    validate(value) {
      if (value < 0) throw new Error('Valor negativo para preço');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const productModel = mongoose.model('product', productSchema, 'products');

export { productModel };
