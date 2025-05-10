import { useContext, useEffect, useState, useCallback } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState(products);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevent");

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((sc) => sc !== value)
        : [...prev, value]
    );
  };

  const applyFilter = useCallback(() => {
    let filtered = [...products];

    // If there is a search term, filter products by the name
    if (search) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    // Apply subCategory filter
    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(filtered);
  }, [products, search, category, subCategory]);

  const sortProduct = useCallback(() => {
    setFilterProducts((prevProducts) => {
      const sortedProducts = [...prevProducts];
      switch (sortType) {
        case "low-hight":
          sortedProducts.sort((a, b) => a.price - b.price);
          break;
        case "hight-low":
          sortedProducts.sort((a, b) => b.price - a.price);
          break;
        default:
          return sortedProducts; // Default, no sorting
      }
      return sortedProducts;
    });
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [applyFilter, search, showSearch, products]);

  useEffect(() => {
    sortProduct();
  }, [sortProduct]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*   Filter Options   */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>
        {/*  Category Filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          {[
            "Living Room",
            "Dining Room",
            "Bedroom",
            "Office",
            "Outdoor",
            "Decor",
          ].map((cat) => (
            <label key={cat} className="flex gap-2">
              <input type="checkbox" value={cat} onChange={toggleCategory} />
              {cat}
            </label>
          ))}
        </div>

        {/*   SubCategory Filter    */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          {[
            "Table",
            "Chair",
            "Cabinet",
            "Shelf",
            "Bench",
            "Bed",
            "Desk",
            "Stand",
            "Frame",
            "Organizer",
            "Stool",
            "Console",
          ].map((type) => (
            <label key={type} className="flex gap-2">
              <input
                type="checkbox"
                value={type}
                onChange={toggleSubCategory}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      {/*  Right Side   */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevent">Sort by : Relevent</option>
            <option value="low-hight">Sort by : Low to High</option>
            <option value="hight-low">Sort by : High to Low</option>
          </select>
        </div>

        {/*   Map Products   */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item.id}
              //id={item.id || item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
