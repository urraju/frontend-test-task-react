const Modal = ({
  showModal,
  totalPrice,
  cart,
  totalQuantity,
  setShowModal,
}) => {
  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-11/12 max-w-3xl p-8 bg-white shadow-lg rounded-[20px]">
            {/* Modal Header */}
            <h2 className="text-[22px] font-bold mb-4 text-[#364A63]">
              Your Cart
            </h2>

            {/* Table Structure */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 font-normal text-[#8091A7]">Item</th>
                    <th className="p-2 font-normal text-[#8091A7]">Color</th>
                    <th className="p-2 font-normal text-[#8091A7]">Size</th>
                    <th className="p-2 font-normal text-[#8091A7] text-center">
                      Qnt
                    </th>
                    <th className="p-2 font-normal text-[#8091A7] text-right">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="flex items-center p-2 space-x-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-10 h-10 rounded"
                        />
                        <span className="text-gray-700">{item.name}</span>
                      </td>
                      <td className="p-2 text-gray-600 capitalize">
                        {item.color}
                      </td>
                      <td className="p-2 font-semibold text-gray-700">
                        {item.size}
                      </td>
                      <td className="p-2 text-center text-gray-700">
                        {item.quantity}
                      </td>
                      <td className="p-2 font-semibold text-right text-gray-800">
                        ${item.price.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total Section */}
            <div className="flex items-center justify-between pt-6">
              <p className="text-[18px] font-bold">Total</p>
              <div className="flex items-center gap-[60px]">
                <p className="text-[16px] font-medium">
                  <span className="text-gray-800">{totalQuantity}</span>
                </p>
                <p className="text-lg font-semibold">
                  <span className="text-gray-800">
                    ${totalPrice.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end mt-6 space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 font-semibold text-gray-800 border border-gray-400 rounded hover:bg-gray-100"
              >
                Continue Shopping
              </button>
              <button className="bg-[#816BFF] text-white px-4 py-2 rounded hover:bg-[#6e5cd7]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
