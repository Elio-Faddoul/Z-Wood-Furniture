import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState(""); //size == type

  const fetchProductData = async () => {
    products.map((item) => {
      if (item.id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-2 transition-opacity ease-in duration-500 opacity-100">
      {/*  Product Data  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*  Product Images   */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow--y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>

        {/*   -------- Product Info ---------     */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="p-l">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Wood Type</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productData.id, size)} //size == type
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5"></hr>
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* -----Description & Review Section-----   */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            euismod nisl nec ligula feugiat, ac dapibus ligula vehicula. Nam
            auctor magna ut elit tristique, vel tempus neque auctor. Nullam eget
            magna at enim interdum efficitur. Integer ut volutpat est, non
            congue neque. Vivamus vehicula, nisl sed efficitur sodales, libero
            magna facilisis erat, et tincidunt risus risus non nunc. Nulla vitae
            magna non leo scelerisque tempor. Sed euismod odio libero, ac
            suscipit mi tempus in. Curabitur auctor orci sit amet ante
            sollicitudin auctor.
          </p>
          <p>
            Aliquam erat volutpat. Vestibulum ac purus enim. Morbi id velit ut
            arcu tincidunt condimentum. Vivamus nec ultricies nisi. In nec urna
            sit amet nulla tincidunt tempus. Phasellus in dui vulputate,
            accumsan augue sit amet, fermentum augue. Maecenas scelerisque nunc
            ut tortor tristique, ut tincidunt elit ullamcorper. Mauris nec orci
            vel lorem fermentum dapibus. Ut consectetur sapien nec enim
            volutpat, at volutpat velit vehicula. Fusce at sollicitudin odio,
            non scelerisque justo. Quisque vitae lorem sem. Fusce maximus
            tincidunt metus, eget fringilla ante finibus sit amet. Nam
            condimentum neque quis purus fermentum, ac malesuada libero varius.
          </p>
        </div>
      </div>

      {/* --------Display related products-------   */}

      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
