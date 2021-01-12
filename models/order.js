import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  products: [
    {
      name: {
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
      },
    }
  ],
  total: {
    type: Number,
    required: true,
    validate(value) {
      if (value < 0) throw new Error('Valor negativo para total');
    },
  },
  paymentForm: {
    type: String,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const orderModel = mongoose.model('order', orderSchema, 'orders');

export { orderModel };
