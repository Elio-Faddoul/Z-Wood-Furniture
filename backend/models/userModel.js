import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    cartData: { type: Object, default: {} }, //when creating a data with an empty object will not be read by mongodb
  },
  { minimize: false }
); //to create the cartData using the empty object

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
