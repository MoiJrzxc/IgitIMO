import React, { useState } from "react";
import "../styles/style.css";

const CheckoutModal = ({ items, onClose, onCheckoutComplete }) => {
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    street: "",
    postalCode: "",
    city: "",
  });

  const [showReceipt, setShowReceipt] = useState(false);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const subtotal = items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  const handleOrder = () => {
    // Required field validation
    if (
      !address.fullName ||
      !address.phone ||
      !address.street ||
      !address.postalCode ||
      !address.city
    ) {
      alert("Please fill in all shipping fields.");
      return;
    }

    // Show receipt first
    setShowReceipt(true);
  };

  const handleCloseReceipt = () => {
    setShowReceipt(false);

    // Now clear cart (remove checked-out items)
    if (onCheckoutComplete) {
      onCheckoutComplete(items);
    }

    // Close modal
    onClose();
  };

  return (
    <>
      {/* MAIN CHECKOUT POPUP */}
      {!showReceipt && (
        <div className="modal-overlay">
          <div className="modal-box">
            <button className="close-modal" onClick={onClose}>×</button>
            <h4 className="popup-title mb-3">Checkout</h4>

            <div className="modal-content-scroll">
              {items.map((item) => (
                <div className="order-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p className="mb-0">{item.name}</p>
                    <small>₱{item.price} × {item.quantity}</small>
                  </div>
                </div>
              ))}

              <h5 className="mb-2" style={{ marginTop: "1rem" }}>Shipping Address</h5>

              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={address.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Street, Barangay"
                name="street"
                value={address.street}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Postal Code"
                name="postalCode"
                value={address.postalCode}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="City, Province"
                name="city"
                value={address.city}
                onChange={handleChange}
              />
            </div>

            <div className="popup-actions">
              <span className="fw-bold">Total: ₱{subtotal}</span>
              <button className="confirm-btn" onClick={handleOrder}>
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}

      {/* RECEIPT POPUP */}
      {showReceipt && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h4 className="popup-title">Order Receipt</h4>

            <p><strong>Name:</strong> {address.fullName}</p>
            <p><strong>Phone:</strong> {address.phone}</p>
            <p>
              <strong>Address:</strong> {address.street}, {address.city},{" "}
              {address.postalCode}
            </p>

            <hr />

            {items.map((item) => (
              <p key={item.id}>
                {item.name} — ₱{item.price} × {item.quantity}
              </p>
            ))}

            <hr />

            <h5>Total: ₱{subtotal}</h5>

            <div className="popup-actions">
              <button className="confirm-btn" onClick={handleCloseReceipt}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;
