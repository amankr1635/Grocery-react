// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { getImageUrl } from "../Utils/Utils"; // adjust path as needed

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${id}`);
//         const productData = res.data.data;
//         setProduct(productData);
//         setSelectedImage(productData.photo[0]); // Default to first image
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching product", err);
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <p>Loading...</p>;
//   if (!product) return <p>Product not found</p>;

//   return (
//     <div className="container py-4">
//       <div className="row">
//         {/* Left: Images */}
//         <div className="col-md-6">
//           <img
//             src={getImageUrl(selectedImage)}
//             alt="Main Product"
//             className="img-fluid rounded mb-3 border"
//              style={{
//                 maxWidth: "100%",
//                 width: "400px",
//                 height: "400px",
//                 objectFit: "contain",
//                 }}
//           />
//           <div className="d-flex gap-2 flex-wrap">
//             {product.photo.map((img, idx) => (
//               <img
//                 key={idx}
//                 src={getImageUrl(img)}
//                 alt={`Thumb ${idx}`}
//                 className={`img-thumbnail ${img === selectedImage ? "border-primary" : ""}`}
//                 style={{ width: "80px", height: "80px", objectFit: "cover", cursor: "pointer" }}
//                 onClick={() => setSelectedImage(img)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Right: Details */}
//         <div className="col-md-6">
//           <h2>{product.name}</h2>
//           <p className="text-muted">{product.category}</p>
//           <h4 className="text-success">₹{product.sellPrice}</h4>
//           <p>{product.description}</p>
//           <p><strong>Stock:</strong> {product.stock}</p>
//           <button className="btn btn-primary mt-3">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getImageUrl } from "../Utils/Utils";
import "./ProductDetails.css"; // make sure to create this file

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllThumbs, setShowAllThumbs] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [selectedWeight, setSelectedWeight] = useState("1 kg");
  const [pincode, setPincode] = useState("");
  const [deliveryMsg, setDeliveryMsg] = useState("");
  const [addedToCart, setAddedToCart] = useState(false);
  const [quantity, setQuantity] = useState(1);

const handleAddToCart = () => {
    if (quantity === 0) setQuantity(1);
    // Call API to add to cart here if needed
  };

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => {
      const newQty = prev - 1;
      return newQty >= 0 ? newQty : 0;
    });


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${id}`);
        const productData = res.data.data;
        setProduct(productData);
        setSelectedImage(productData.photo[0]);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product", err);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);
  const handlePincodeCheck = () => {
    if (!pincode) return setDeliveryMsg("Please enter a valid pincode.");
    // Just a placeholder for now — you can connect your delivery API
    setDeliveryMsg("Delivery available in your area ✅");
  };
  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!product) return <p className="text-center mt-5">Product not found</p>;

  // Limit visible thumbnails unless expanded
  const visiblePhotos = showAllThumbs ? product.photo : product.photo.slice(0, 5);

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        marginTop: "40px",
        marginLeft:"75px",
        maxWidth: "1200px",
      }}
      >
      {/* ---------- LEFT SECTION ---------- */}
      <div
        style={{
          position: "sticky",
          // top: "20px",
          flex: "0 0 45%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          {/* Thumbnail Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
              maxHeight: "400px",
              overflow: "hidden",
            }}
          >
            {visiblePhotos.map((img, idx) => (
              <img
                key={idx}
                src={getImageUrl(img)}
                alt={`Thumb ${idx}`}
                onClick={() => setSelectedImage(img)}
                style={{
                  width: "60px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  cursor: "pointer",
                  border:
                    img === selectedImage
                      ? "2px solid #28a745"
                      : "1px solid #ddd",
                  transition: "transform 0.2s ease-in-out",
                }}
              />
            ))}
            {product.photo.length > 5 && (
              <button
                onClick={() => setShowAllThumbs(!showAllThumbs)}
                className="btn btn-sm btn-outline-secondary"
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  padding: "2px 8px",
                }}
              >
                {showAllThumbs ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          {/* Main Image */}
          <div className="zoom-container">
            <img
              src={getImageUrl(selectedImage)}
              alt="Main Product"
              className="zoom-image"
            />
          </div>
        </div>

        {/* Buttons */}
        {/* <div style={{ display: "flex", gap: "10px", marginTop: "20px", alignItems:"left" }}>
          <button className="btn btn-success px-4 py-2">Add to Cart</button>
        </div> */}
        {/* Add to Cart Button or Counter */}
     {/* Add to Cart + Counter */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Button */}
        <button
          className={`btn ${quantity > 0 ? "btn-primary" : "btn-success"}`}
          onClick={handleAddToCart}
          style={{ minWidth: "120px" }}
        >
          {quantity > 0 ? "Go to Cart" : "Add to Cart"}
        </button>

        {/* Counter appears only when quantity > 0 */}
        {quantity > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #ddd",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <button
              className="btn btn-outline-secondary"
              style={{ padding: "4px 10px" }}
              onClick={handleDecrement}
            >
              -
            </button>
            <span style={{ padding: "0 12px" }}>{quantity}</span>
            <button
              className="btn btn-outline-secondary"
              style={{ padding: "4px 10px" }}
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        )}
        </div>
      </div>

      <div
        style={{
          flex: "1",
          overflowY: "auto",
          maxHeight: "90vh",
          paddingRight: "10px",
        }}
      >
        {/* 1. Product Name */}
        <h2 style={{ fontWeight: "bold" }}>{product.name}</h2>

        {/* 2. Price + Rating */}
        <div style={{ marginBottom: "15px" }}>
          <h4 style={{ color: "#28a745", display: "inline-block" }}>
            ₹{product.sellPrice}
          </h4>
          <span style={{ marginLeft: "15px", color: "#ffb400" }}>★ 4.3</span>
        </div>

        {/* 3. Delivery Check */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          <h6>Delivery</h6>
          <div style={{ display: "flex", gap: "10px" }}>
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              style={{
                flex: 1,
                padding: "6px 10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button className="btn btn-outline-primary" onClick={handlePincodeCheck}>
              Check
            </button>
          </div>
          {deliveryMsg && (
            <p style={{ marginTop: "8px", color: "#555" }}>{deliveryMsg}</p>
          )}
        </div>

        {/* 4. Quantity Selection */}
        <div style={{ marginBottom: "20px" }}>
          <h6>Quantity</h6>
          <div style={{ display: "flex", gap: "10px" }}>
            {["250g", "500g", "1 kg"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedWeight(size)}
                className={`btn ${selectedWeight === size ? "btn-primary" : "btn-outline-secondary"
                  }`}
              >
                {size}
              </button>
            ))}
          </div>
          <small className="text-muted d-block mt-2">
            Note: Prices may vary with weight selection.
          </small>
        </div>

        {/* 5. Description */}
        <div style={{ marginBottom: "20px" }}>
          <h5>Description</h5>
          <p style={{ color: "#555" }}>{product.description}</p>
        </div>

        {/* 6. Specifications (Collapsible) */}
        <div style={{ marginBottom: "20px" }}>
          <h5>Specifications</h5>
          {!expanded ? (
            <button
              className="btn btn-link p-0"
              onClick={() => setExpanded(true)}
            >
              Read more ▼
            </button>
          ) : (
            <div>
              <table className="table table-bordered mt-2">
                <tbody>
                  <tr>
                    <td>Pack of</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td>Classic</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>Peanut</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>1 kg</td>
                  </tr>
                  <tr>
                    <td>Organic</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Model Name</td>
                    <td>Raw Peanut Whole</td>
                  </tr>
                  <tr>
                    <td>Legal Disclaimer</td>
                    <td>
                      Flipkart endeavours to ensure accurate information.
                      Always read the label carefully before use.
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                className="btn btn-link p-0"
                onClick={() => setExpanded(false)}
              >
                Read less ▲
              </button>
            </div>
          )}
        </div>

        {/* 7. Reviews & Ratings */}
        <div style={{ marginBottom: "20px" }}>
          <h5>Ratings & Reviews</h5>
          <p>⭐ 4.3 / 5 based on 124 reviews</p>
          <div>
            <p>"Good quality product!" - Ramesh</p>
            <p>"Value for money!" - Neha</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
