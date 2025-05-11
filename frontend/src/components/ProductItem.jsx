import { useContext } from "react";
import { ShopContext } from "../context/ShopContext"; // ✅ Correct context
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductItem = ({ id, image = [], name, price }) => {
  const { currency } = useContext(ShopContext);

  // Ensure that image array exists and has at least one item
  const imageUrl =
    image.length > 0 ? image[0] : "https://via.placeholder.com/150"; // Placeholder image

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={imageUrl}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

ProductItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductItem;
