import React, { useState } from "react";
import purple from "./assets/purple.png";
import black from "./assets/black.png";
import blue from "./assets/blue.png";
import cyan from "./assets/cyan.png";
// review image
import star__1 from "./assets/review/star-1.png";
import star__2 from "./assets/review/star-2.png";
import star__3 from "./assets/review/star-3.png";
import Modal from "./components/Modal";
import toast from "react-hot-toast";

const images = {
  purple,
  cyan,
  blue,
  black,
};

const colorStyles = {
  purple: "#816BFF",
  cyan: "#1FCEC9",
  blue: "#4B97D3",
  black: "#3B4747",
};
function App() {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedSize, setSelectedSize] = useState("S");
  const [quantity, setQuantity] = useState(1);
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  // Function to change thumbnail

  const changeThumbnail = (color) => {
    setSelectedColor(color); // Set the active color
  };

  // Function to add item to the cart
  const addToCart = () => {
    const price = getPriceBySize(selectedSize);
    const newItem = {
      name: "classNamey Modern Smart Watch",
      image: images[selectedColor],
      color: selectedColor,
      size: selectedSize,
      quantity,
      price: price * quantity,
    };
    setCart([...cart, newItem]);
    setQuantity(1);
    toast.success("Add to card succussfully");
  };

  // Function to update quantity
  const updateQuantity = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const addToWishlist = () => {
    console.log("Added to Wishlist");
    toast.success("Item added to your Wishlist!");
  };

  // Total price and quantity
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const getPriceBySize = (size) => {
    switch (size) {
      case "S":
        return 69;
      case "M":
        return 79;
      case "L":
        return 89;
      case "XL":
        return 99;
      default:
        return 79;
    }
  };

  return (
    <div className="h-screen p-2 bg-white md:p-0">
      {/* Product Section */}
      <div className="container py-10 mx-auto">
        <div className="container flex items-center flex-col lg:flex-row max-h-[720px] justify-center md:gap-10   ">
          {/* Thumbnail */}
          <div className="lg:flex-1">
            <img
              src={images[selectedColor]}
              alt="Product Thumbnail"
              className="lg:w-[630px] w-full md:h-[731px] h-auto rounded"
            />
          </div>

          {/* Product Details */}
          <div className="lg:flex-1">
            <h1 className="text-[40px] font-bold text-[#364A63] mb-3">
              Classy Modern Smart Watch
            </h1>

            {/* <!-- review  --> */}
            <div class="flex items-center gap-[4.5px]">
              <div class="flex items-center">
                <img src={star__1} alt="review star" />
                <img src={star__1} alt="review star" />
                <img src={star__1} alt="review star" />
              </div>
              <img src={star__2} alt="review star" />
              <img src={star__3} alt="review star" />
              <div class="ml-2">
                <p class="text-[#8091A7]">(2 Reviews)</p>
              </div>
            </div>

            {/* Price */}
            <div class="text-gray-600 mb-4 pt-4 flex items-center gap-2">
              <span class="line-through text-[20px] text-[#8091A7]">
                $99.00
              </span>
              <span class="text-[#6576FF] text-[24px] font-bold">
                ${getPriceBySize(selectedSize)}
              </span>
            </div>
            {/* description  */}
            <p class="mb-4 text-[18px] text-[#8091A7] leading-relaxed">
              I must explain to you how all this mistaken idea of denoun cing
              ple praising pain was born and I will give you a complete account
              of the system, and expound the actual teaching.
            </p>

            {/* <!-- type  --> */}
            <div class="flex gap-[43px] items-center">
              <div>
                <p class="text-[#8091A7]">Type</p>
                <h1 class="text-[#364A63] font-bold text-[16px]">Watch</h1>
              </div>
              <div>
                <p class="text-[#8091A7]">Model Number</p>
                <h1 class="text-[#364A63] font-bold text-[16px]">
                  Forerunner 290XT
                </h1>
              </div>
            </div>

            {/* Band Color */}
            <div className="mb-4 pt-[20px]">
              <p className="font-bold text-[#364A63] text-[18px]">Band Color</p>
              <div className="flex mt-2 space-x-4">
                {Object.keys(images).map((color) => (
                  <div
                    key={color}
                    onClick={() => changeThumbnail(color)}
                    className={`w-6 h-6 rounded-full cursor-pointer flex items-center justify-center`}
                    style={{
                      border:
                        selectedColor === color
                          ? `2px solid ${colorStyles[color]} `
                          : "none",
                    }}
                  >
                    <button
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: colorStyles[color],
                      }}
                    ></button>
                  </div>
                ))}
              </div>
            </div>

            {/* Wrist Size */}
            <div className="mb-4">
              <p className="font-bold text-[#364A63] text-lg">Wrist Size</p>
              <div className="flex gap-3 mt-[10px]">
                {["S $69", "M $79", "L $89", "XL $99"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`border px-5 py-2 rounded font-bold ${
                      size === selectedSize
                        ? "border-[#816BFF] text-[#816BFF]"
                        : "border-gray-300 text-[#8091A7]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center mt-4 space-x-4">
              {/* Quantity Selector */}
              <div className="flex overflow-hidden border rounded">
                <button
                  onClick={() => updateQuantity(-1)}
                  className="flex items-center justify-center w-8 px-6 py-1 text-xl text-gray-500 bg-gray-100 border-r"
                >
                  &#8722;
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-0 focus:outline-none"
                />
                <button
                  onClick={() => updateQuantity(1)}
                  className="flex items-center justify-center w-8 px-6 py-1 text-xl text-gray-500 bg-gray-100 border-l"
                >
                  &#43;
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="bg-[#816BFF] text-white px-6 py-2 rounded font-semibold hover:bg-[#6e5cd7] transition duration-300"
              >
                Add to Cart
              </button>

              {/* Wishlist Icon */}
              <button
                onClick={addToWishlist}
                className="text-[#6576FF] text-4xl hover:text-[#6e5cd7] transition duration-300"
              >
                &#9825;
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Checkout */}
      {cart.length > 0 && (
        <div className="flex items-center justify-center w-full mt-6">
          <button
            onClick={() => setShowModal(true)} // Correct React event
            className="font-bold bg-[#FFBB5A] text-[#364A63] px-6 py-2 rounded-full shadow cursor-pointer flex items-center"
          >
            Checkout
            <span className="py-[2px] px-3 ml-3 rounded-md bg-white text-[#364A63]">
              {totalQuantity}
            </span>
          </button>
        </div>
      )}
      {/* modal  */}
      <Modal
        showModal={showModal}
        totalQuantity={totalQuantity}
        setShowModal={setShowModal}
        totalPrice={totalPrice}
        cart={cart}
      />
    </div>
  );
}

export default App;
