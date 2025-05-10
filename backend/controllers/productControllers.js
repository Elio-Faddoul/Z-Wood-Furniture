// ----- new code for image server upload : -----
import productModel from "../models/productModel.js";

// Define your server's base URL here; ensure it's correct based on your development or production environment
const BASE_URL = "http://localhost:4000"; // Change this accordingly if deployed

// function for add product
const addProduct = async (req, res) => {
  try {
    console.log(req.body); // Logs the body of the request to the console
    console.log(req.files); // Logs the files received in the request to the console
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    //--------old way for public url----------
    // Convert image files into public paths
    //const imagesUrl = images.map((file) => `/images/${file.filename}`);
    //-------------new way for full url-------------
    // Convert image files into public full URLs
    const imagesUrl = images.map(
      (file) => `${BASE_URL}/images/${file.filename}`
    );

    const product = new productModel({
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes), // assuming sizes is sent as a stringified array
      image: imagesUrl,
      date: Date.now(),
    });

    await product.save();

    //res.json({ success: true, product });
    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
/*const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}; */

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});

    const normalizedProducts = products.map((p) => ({
      ...p._doc, // Get the plain object from Mongoose
      id: p._id, // Add an `id` field for frontend use
    }));

    res.json({ success: true, products: normalizedProducts });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for removing product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { listProducts, addProduct, removeProduct, singleProduct };

/* old code for cloudinary upload 
import { v2 as cloudinary } from "cloudinary";

// function for add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (item) => item != undefined
    );

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      })
    );

    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(imagesUrl);

    res.json({});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// function for list product
const listProducts = async (req, res) => {};

// function for removing product
const removeProduct = async (req, res) => {};

// function for single product info
const singleProduct = async (req, res) => {};

export { listProducts, addProduct, removeProduct, singleProduct };

*/
