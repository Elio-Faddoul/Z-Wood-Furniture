import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, //name is required or it will not be saved in this database
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Date, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema); // when the model is already available then that model will be used or we create the model

export default productModel;
