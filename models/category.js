import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

const categoryModel = mongoose.model('category', categorySchema, 'categories');

export { categoryModel };
