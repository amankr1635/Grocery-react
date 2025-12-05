"use client"

/* eslint-disable react/prop-types */
// ProductPage.jsx
// Paste this component into your project and import the CSS:
// import './product-page.css'

// import { useMemo, useState } from "react"

// export default function ProductPage({
//   // You can pass real data via props or fetch in a parent.
//   // API-INTEGRATION: Prefer fetching in a parent and pass props down.
//   product = {
//     id: "sku_raw-peanut",
//     name: "Raw Peanut Whole",
//     rating: 4.3,
//     totalReviews: 128,
//     images: [
//       "/raw-peanut-main.jpg",
//       "/peanut-thumbnail-1.jpg",
//       "/peanut-thumbnail-2.jpg",
//       "/peanut-thumbnail-3.jpg",
//     ],
//     price: 199, // our price
//     mrp: 249, // crossed out
//     currency: "₹",
//     variants: ["250 g", "500 g", "1 kg"],
//     notes: ["Fresh crop, vacuum packed for extended freshness.", "No polish, whole kernels."],
//     description:
//       "Sourced from trusted farms, these raw whole peanuts are perfect for snacking, roasting, or cooking. Naturally protein-rich and versatile.",
//     specs: [
//       { label: "Brand", value: "Classic" },
//       { label: "Type", value: "Peanut" },
//       { label: "Quantity", value: "1 kg" },
//       { label: "Form", value: "Whole" },
//       { label: "FSSAI Number", value: "NA" },
//       { label: "Polished", value: "No" },
//       { label: "Organic", value: "No" },
//       { label: "Max Shelf Life", value: "4 Months" },
//       { label: "Nutrient Content", value: "NA" },
//       { label: "Model Name", value: "Raw Peanut Whole" },
//       { label: "Net Quantity", value: "1 kg" },
//       { label: "Ingredients", value: "NA" },
//       { label: "Pack of", value: "1" },
//     ],
//     inTheBox: ["1 x Raw Peanut Whole (1 kg)"],
//     general: {
//       Brand: "Classic",
//       Type: "Peanut",
//       Quantity: "1 kg",
//       Form: "Whole",
//       Organic: "No",
//       Polished: "No",
//       "Maximum Shelf Life": "4 Months",
//       "Net Quantity": "1 kg",
//       Ingredients: "Peanut",
//     },
//     legalDisclaimer:
//       "Images are for representation only. Actual product packaging and materials may contain more and/or different information than that shown.",
//     reviews: [
//       { id: 1, user: "Aarti", rating: 5, text: "Fresh and crunchy. Great for roasting!" },
//       { id: 2, user: "Rohit", rating: 4, text: "Good quality at this price." },
//     ],
//   },
//   // Callbacks for integration
//   onAddToCart, // (productId: string, variant: string, qty: number) => Promise<void> | void
//   onGoToCart, // () => void
//   onCheckPincode, // (pincode: string) => Promise<{ eta?: string, cod?: boolean, message?: string }>
// }) {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
//   const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || "")
//   const [qty, setQty] = useState(0) // 0 = not in cart yet
//   const [pincode, setPincode] = useState("")
//   const [pinResult, setPinResult] = useState(null)
//   const [checkingPin, setCheckingPin] = useState(false)
//   const [specExpanded, setSpecExpanded] = useState(false)

//   const images = useMemo(() => product.images || [], [product.images])
//   const mainImage = images[selectedImageIndex] || ""

//   const handleAddClick = async () => {
//     // First click: add with qty 1, reveal stepper, turn button into "Go to Cart"
//     if (qty === 0) {
//       const newQty = 1
//       setQty(newQty)
//       // API-INTEGRATION: Add to cart API call
//       if (onAddToCart) {
//         await onAddToCart(product.id, selectedVariant, newQty)
//       }
//     } else {
//       // Already added -> Go to cart
//       if (onGoToCart) onGoToCart()
//     }
//   }

//   const increment = async () => {
//     const newQty = Math.min(qty + 1, 99)
//     setQty(newQty)
//     // API-INTEGRATION: Update cart quantity
//     if (onAddToCart) {
//       await onAddToCart(product.id, selectedVariant, newQty)
//     }
//   }

//   const decrement = async () => {
//     const newQty = Math.max(qty - 1, 0)
//     setQty(newQty)
//     // API-INTEGRATION: Update cart quantity or remove if 0
//     if (onAddToCart) {
//       await onAddToCart(product.id, selectedVariant, newQty)
//     }
//   }

//   const handleCheckPincode = async () => {
//     // Basic local validation, replace with backend logic if needed
//     const pin = (pincode || "").trim()
//     if (!/^[1-9][0-9]{5}$/.test(pin)) {
//       setPinResult({ message: "Please enter a valid 6-digit pincode." })
//       return
//     }
//     setCheckingPin(true)
//     try {
//       if (onCheckPincode) {
//         const res = await onCheckPincode(pin)
//         setPinResult(res || { message: "Delivery info loaded." })
//       } else {
//         // Mock result if no API provided
//         setPinResult({ eta: "2-4 days", cod: true, message: "Delivery available." })
//       }
//     } finally {
//       setCheckingPin(false)
//     }
//   }

//   const renderStars = (value) => {
//     const stars = []
//     const full = Math.floor(value)
//     const hasHalf = value - full >= 0.5
//     for (let i = 0; i < 5; i++) {
//       if (i < full) {
//         stars.push(<Star key={i} variant="full" />)
//       } else if (i === full && hasHalf) {
//         stars.push(<Star key={i} variant="half" />)
//       } else {
//         stars.push(<Star key={i} variant="empty" />)
//       }
//     }
//     return stars
//   }

//   const collapsedSpecs = useMemo(() => (product.specs || []).slice(0, 6), [product.specs])
//   const allSpecs = product.specs || []

//   return (
//     <div className="product-page">
//       {/* LEFT: Fixed gallery */}
//       <aside className="product-left" aria-label="Product gallery">
//         <div className="gallery">
//           <div className="thumbs">
//             {images.map((src, idx) => (
//               <button
//                 key={src + idx}
//                 type="button"
//                 className={`thumb ${idx === selectedImageIndex ? "thumb--active" : ""}`}
//                 onClick={() => setSelectedImageIndex(idx)}
//                 aria-label={`Show image ${idx + 1}`}
//               >
//                 <img src={src || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="main-image">
//             <img src={mainImage || "/placeholder.svg"} alt={`${product.name} main`} />
//           </div>
//         </div>
//       </aside>

//       {/* RIGHT: Scrollable details */}
//       <main className="product-right">
//         <header className="product-header">
//           <h1 className="product-title">{product.name}</h1>
//           <div className="rating-row">
//             <div className="stars" aria-label={`Rated ${product.rating} out of 5`}>
//               {renderStars(product.rating)}
//             </div>
//             <div className="rating-text">
//               {product.rating} • {product.totalReviews} reviews
//             </div>
//           </div>
//         </header>

//         <section className="pricing-row" aria-label="Pricing">
//           <div className="price">
//             <span className="price-currency">{product.currency}</span>
//             <span className="price-value">{product.price}</span>
//           </div>
//           <div className="mrp">
//             MRP:
//             <span className="mrp-value">
//               {product.currency}
//               {product.mrp}
//             </span>
//           </div>
//           <div className="you-save">
//             You save {product.currency}
//             {Math.max(product.mrp - product.price, 0)}
//           </div>
//         </section>

//         <section className="cart-controls" aria-label="Cart controls">
//           <button
//             type="button"
//             className={`btn btn-primary cart-btn ${qty > 0 ? "cart-btn--active" : ""}`}
//             onClick={handleAddClick}
//           >
//             <CartIcon />
//             {/* Show text only after first click (qty > 0) */}
//             {qty > 0 && <span className="btn-text">Go to Cart</span>}
//           </button>

//           {/* Stepper appears to the right once added */}
//           {qty > 0 && (
//             <div className="stepper" aria-label="Quantity selector">
//               <button type="button" className="stepper-btn" onClick={decrement} aria-label="Decrease quantity">
//                 −
//               </button>
//               <div className="stepper-value" aria-live="polite" aria-atomic="true">
//                 {qty}
//               </div>
//               <button type="button" className="stepper-btn" onClick={increment} aria-label="Increase quantity">
//                 +
//               </button>
//             </div>
//           )}
//         </section>

//         <section className="variant-row" aria-label="Quantity selection">
//           <div className="section-label">Quantity</div>
//           <div className="variant-pills">
//             {(product.variants || []).map((v) => (
//               <button
//                 key={v}
//                 type="button"
//                 className={`pill ${selectedVariant === v ? "pill--active" : ""}`}
//                 onClick={() => setSelectedVariant(v)}
//                 aria-pressed={selectedVariant === v}
//               >
//                 {v}
//               </button>
//             ))}
//           </div>
//         </section>

//         <section className="pincode-row" aria-label="Delivery check">
//           <div className="section-label">Delivery</div>
//           <div className="pincode-wrap">
//             <input
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               maxLength={6}
//               placeholder="Enter pincode"
//               className="pin-input"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               aria-label="Enter 6-digit pincode"
//             />
//             <button className="btn btn-outline" type="button" onClick={handleCheckPincode} disabled={checkingPin}>
//               {checkingPin ? "Checking..." : "Check"}
//             </button>
//           </div>
//           <div className="pin-result" aria-live="polite" aria-atomic="true">
//             {pinResult?.message && <span>{pinResult.message}</span>}
//             {pinResult?.eta && <span> ETA: {pinResult.eta}</span>}
//             {typeof pinResult?.cod === "boolean" && <span> • COD: {pinResult.cod ? "Available" : "Unavailable"}</span>}
//           </div>
//         </section>

//         {product.notes?.length ? (
//           <section className="notes" aria-label="Important notes">
//             <div className="section-label">Important notes</div>
//             <ul>
//               {product.notes.map((n, i) => (
//                 <li key={i}>{n}</li>
//               ))}
//             </ul>
//           </section>
//         ) : null}

//         {product.description ? (
//           <section className="description" aria-label="Description">
//             <div className="section-label">Description</div>
//             <p>{product.description}</p>
//           </section>
//         ) : null}

//         <section className="specs" aria-label="Specifications">
//           <div className="specs-header">
//             <div className="section-label">Specifications</div>
//             {allSpecs.length > 6 && (
//               <button type="button" className="btn btn-link" onClick={() => setSpecExpanded((s) => !s)}>
//                 {specExpanded ? "Read less" : "Read more"}
//               </button>
//             )}
//           </div>
//           <dl className="spec-list">
//             {(specExpanded ? allSpecs : collapsedSpecs).map((s, idx) => (
//               <div className="spec-row" key={s.label + idx}>
//                 <dt>{s.label}</dt>
//                 <dd>{s.value}</dd>
//               </div>
//             ))}
//           </dl>
//         </section>

//         {product.inTheBox?.length ? (
//           <section className="in-box" aria-label="In The Box">
//             <div className="section-label">In The Box</div>
//             <ul>
//               {product.inTheBox.map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>
//           </section>
//         ) : null}

//         {product.general ? (
//           <section className="general" aria-label="General">
//             <div className="section-label">General</div>
//             <dl className="spec-list">
//               {Object.entries(product.general).map(([k, v]) => (
//                 <div className="spec-row" key={k}>
//                   <dt>{k}</dt>
//                   <dd>{v}</dd>
//                 </div>
//               ))}
//             </dl>
//           </section>
//         ) : null}

//         {product.legalDisclaimer ? (
//           <section className="legal" aria-label="Legal Disclaimer">
//             <div className="section-label">Legal Disclaimer</div>
//             <p className="muted">{product.legalDisclaimer}</p>
//           </section>
//         ) : null}

//         {product.reviews?.length ? (
//           <section className="reviews" aria-label="Customer reviews">
//             <div className="section-label">Reviews</div>
//             <ul className="review-list">
//               {product.reviews.map((r) => (
//                 <li key={r.id} className="review-item">
//                   <div className="review-top">
//                     <strong>{r.user}</strong>
//                     <div className="stars xs">{renderStars(r.rating)}</div>
//                   </div>
//                   <p>{r.text}</p>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         ) : null}

//         {/* API-INTEGRATION:
//            - For server data, fetch in a parent component/page and pass props here.
//            - For cart, implement `onAddToCart(productId, variant, qty)` to sync with backend.
//            - For pincode, implement `onCheckPincode(pincode)` to return delivery info.
//         */}
//       </main>
//     </div>
//   )
// }



// function CartIcon() {
//   return (
//     <svg
//       className="icon"
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//       focusable="false"
//       fill="currentColor"
//     >
//       <path
//         d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
//       0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.03.01 
//       10.26.01c.78 0 1.46-.45 1.79-1.11l2.96-6.02A1 1 0 0 0 21.26 6H6.21l-.94-2H2v2h2l3.6 
//       7.59-1.35 2.44A2 2 0 0 0 6 18h12v-2H7.42a.25.25 0 0 1-.26-.25l.0-.01z"
//       />
//     </svg>
//   )
// }

// function Star({ variant = "empty" }) {
//   // full, half, empty
//   return (
//     <svg
//       className={`star star--${variant}`}
//       width="18"
//       height="18"
//       viewBox="0 0 24 24"
//       aria-hidden="true"
//       focusable="false"
//     >
//       <defs>
//         <linearGradient id="halfGrad">
//           <stop offset="50%" stopColor="currentColor" />
//           <stop offset="50%" stopColor="transparent" />
//         </linearGradient>
//       </defs>
//       <path
//         d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192L12 .587z"
//         fill={variant === "full" ? "currentColor" : variant === "half" ? "url(#halfGrad)" : "none"}
//         stroke="currentColor"
//         strokeWidth="1.2"
//       />
//     </svg>
//   )
// }

// import { useMemo, useState, useEffect } from "react"
// import { useParams } from "react-router-dom"
// import axios from "axios"

// export default function ProductPage({
//   productId, // Pass the product id to fetch from API
//   onAddToCart,
//   onGoToCart,
//   onCheckPincode,
// }) {
// export default function ProductPage() {
//   const { id } = useParams()
//   const [product, setProduct] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   const [selectedImageIndex, setSelectedImageIndex] = useState(0)
//   const [selectedVariant, setSelectedVariant] = useState("")
//   const [qty, setQty] = useState(0)
//   const [pincode, setPincode] = useState("")
//   const [pinResult, setPinResult] = useState(null)
//   const [checkingPin, setCheckingPin] = useState(false)
//   const [specExpanded, setSpecExpanded] = useState(false)
// console.log(" i m in productpage")
//   // Fetch product from API
//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true)
//       console.log(loading,"__loading")
//       try {
//         const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
//         const data = res.data

//         // Normalize missing keys with "NA" or sensible defaults
//         const normalized = {
//           id: data.id || "NA",
//           name: data.name || "NA",
//           rating: data.rating ?? 0,
//           totalReviews: data.totalReviews ?? 0,
//           images: data.images?.length ? data.images : ["/placeholder.svg"],
//           price: data.price ?? 0,
//           mrp: data.mrp ?? 0,
//           currency: data.currency || "₹",
//           variants: data.variants?.length ? data.variants : ["NA"],
//           notes: data.notes?.length ? data.notes : [],
//           description: data.description || "NA",
//           specs: data.specs?.length
//             ? data.specs.map((s) => ({ label: s.label || "NA", value: s.value || "NA" }))
//             : [],
//           inTheBox: data.inTheBox?.length ? data.inTheBox : [],
//           general: data.general || {},
//           legalDisclaimer: data.legalDisclaimer || "NA",
//           reviews: data.reviews?.length
//             ? data.reviews.map((r) => ({
//                 id: r.id || Math.random(),
//                 user: r.user || "NA",
//                 rating: r.rating ?? 0,
//                 text: r.text || "NA",
//               }))
//             : [],
//         }

//         setProduct(normalized)
//         setSelectedVariant(normalized.variants[0] || "NA")
//       } catch (err) {
//         console.error(err)
//         setError("Failed to load product.")
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (id) fetchProduct()
//   }, [id])

//   const images = useMemo(() => product?.images || [], [product?.images])
//   const mainImage = images[selectedImageIndex] || "/placeholder.svg"

//   const handleAddClick = async () => {
//     if (!product) return
//     if (qty === 0) {
//       const newQty = 1
//       setQty(newQty)
//       if (onAddToCart) await onAddToCart(product.id, selectedVariant, newQty)
//     } else {
//       if (onGoToCart) onGoToCart()
//     }
//   }

//   const increment = async () => {
//     if (!product) return
//     const newQty = Math.min(qty + 1, 99)
//     setQty(newQty)
//     if (onAddToCart) await onAddToCart(product.id, selectedVariant, newQty)
//   }

//   const decrement = async () => {
//     if (!product) return
//     const newQty = Math.max(qty - 1, 0)
//     setQty(newQty)
//     if (onAddToCart) await onAddToCart(product.id, selectedVariant, newQty)
//   }

//   const handleCheckPincode = async () => {
//     const pin = (pincode || "").trim()
//     if (!/^[1-9][0-9]{5}$/.test(pin)) {
//       setPinResult({ message: "Please enter a valid 6-digit pincode." })
//       return
//     }
//     setCheckingPin(true)
//     try {
//       if (onCheckPincode) {
//         const res = await onCheckPincode(pin)
//         setPinResult(res || { message: "Delivery info loaded." })
//       } else {
//         setPinResult({ eta: "2-4 days", cod: true, message: "Delivery available." })
//       }
//     } finally {
//       setCheckingPin(false)
//     }
//   }

//   const renderStars = (value) => {
//     const stars = []
//     const full = Math.floor(value)
//     const hasHalf = value - full >= 0.5
//     for (let i = 0; i < 5; i++) {
//       if (i < full) stars.push(<Star key={i} variant="full" />)
//       else if (i === full && hasHalf) stars.push(<Star key={i} variant="half" />)
//       else stars.push(<Star key={i} variant="empty" />)
//     }
//     return stars
//   }

//     const collapsedSpecs = useMemo(() => (product.specs || []).slice(0, 6), [product.specs])
//     const allSpecs = product.specs || []

//   if (loading) return <div>Loading product...</div>
//   if (error) return <div>{error}</div>
//   if (!product) return null

//   return (
//     <div className="product-page">
//       {/* LEFT: Fixed gallery */}
//       <aside className="product-left" aria-label="Product gallery">
//         <div className="gallery">
//           <div className="thumbs">
//             {images.map((src, idx) => (
//               <button
//                 key={src + idx}
//                 type="button"
//                 className={`thumb ${idx === selectedImageIndex ? "thumb--active" : ""}`}
//                 onClick={() => setSelectedImageIndex(idx)}
//                 aria-label={`Show image ${idx + 1}`}
//               >
//                 <img src={src || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} />
//               </button>
//             ))}
//           </div>
//           <div className="main-image">
//             <img src={mainImage || "/placeholder.svg"} alt={`${product.name} main`} />
//           </div>
//         </div>
//       </aside>

//       {/* RIGHT: Scrollable details */}
//       <main className="product-right">
//         <header className="product-header">
//           <h1 className="product-title">{product.name}</h1>
//           <div className="rating-row">
//             <div className="stars" aria-label={`Rated ${product.rating} out of 5`}>
//               {renderStars(product.rating)}
//             </div>
//             <div className="rating-text">
//               {product.rating} • {product.totalReviews} reviews
//             </div>
//           </div>
//         </header>

//         <section className="pricing-row" aria-label="Pricing">
//           <div className="price">
//             <span className="price-currency">{product.currency}</span>
//             <span className="price-value">{product.price}</span>
//           </div>
//           <div className="mrp">
//             MRP:
//             <span className="mrp-value">
//               {product.currency}
//               {product.mrp}
//             </span>
//           </div>
//           <div className="you-save">
//             You save {product.currency}
//             {Math.max(product.mrp - product.price, 0)}
//           </div>
//         </section>

//         <section className="cart-controls" aria-label="Cart controls">
//           <button
//             type="button"
//             className={`btn btn-primary cart-btn ${qty > 0 ? "cart-btn--active" : ""}`}
//             onClick={handleAddClick}
//           >
//             <CartIcon />
//             {qty > 0 && <span className="btn-text">Go to Cart</span>}
//           </button>

//           {qty > 0 && (
//             <div className="stepper" aria-label="Quantity selector">
//               <button type="button" className="stepper-btn" onClick={decrement} aria-label="Decrease quantity">
//                 −
//               </button>
//               <div className="stepper-value" aria-live="polite" aria-atomic="true">
//                 {qty}
//               </div>
//               <button type="button" className="stepper-btn" onClick={increment} aria-label="Increase quantity">
//                 +
//               </button>
//             </div>
//           )}
//         </section>

//         <section className="variant-row" aria-label="Quantity selection">
//           <div className="section-label">Quantity</div>
//           <div className="variant-pills">
//             {(product.variants || []).map((v) => (
//               <button
//                 key={v}
//                 type="button"
//                 className={`pill ${selectedVariant === v ? "pill--active" : ""}`}
//                 onClick={() => setSelectedVariant(v)}
//                 aria-pressed={selectedVariant === v}
//               >
//                 {v}
//               </button>
//             ))}
//           </div>
//         </section>

//         <section className="pincode-row" aria-label="Delivery check">
//           <div className="section-label">Delivery</div>
//           <div className="pincode-wrap">
//             <input
//               type="text"
//               inputMode="numeric"
//               pattern="[0-9]*"
//               maxLength={6}
//               placeholder="Enter pincode"
//               className="pin-input"
//               value={pincode}
//               onChange={(e) => setPincode(e.target.value)}
//               aria-label="Enter 6-digit pincode"
//             />
//             <button className="btn btn-outline" type="button" onClick={handleCheckPincode} disabled={checkingPin}>
//               {checkingPin ? "Checking..." : "Check"}
//             </button>
//           </div>
//           <div className="pin-result" aria-live="polite" aria-atomic="true">
//             {pinResult?.message && <span>{pinResult.message}</span>}
//             {pinResult?.eta && <span> ETA: {pinResult.eta}</span>}
//             {typeof pinResult?.cod === "boolean" && <span> • COD: {pinResult.cod ? "Available" : "Unavailable"}</span>}
//           </div>
//         </section>

//         {product.notes?.length > 0 && (
//           <section className="notes" aria-label="Important notes">
//             <div className="section-label">Important notes</div>
//             <ul>{product.notes.map((n, i) => <li key={i}>{n}</li>)}</ul>
//           </section>
//         )}

//         {product.description && (
//           <section className="description" aria-label="Description">
//             <div className="section-label">Description</div>
//             <p>{product.description}</p>
//           </section>
//         )}

//         <section className="specs" aria-label="Specifications">
//           <div className="specs-header">
//             <div className="section-label">Specifications</div>
//             {allSpecs.length > 6 && (
//               <button type="button" className="btn btn-link" onClick={() => setSpecExpanded((s) => !s)}>
//                 {specExpanded ? "Read less" : "Read more"}
//               </button>
//             )}
//           </div>
//           <dl className="spec-list">
//             {(specExpanded ? allSpecs : collapsedSpecs).map((s, idx) => (
//               <div className="spec-row" key={s.label + idx}>
//                 <dt>{s.label}</dt>
//                 <dd>{s.value}</dd>
//               </div>
//             ))}
//           </dl>
//         </section>

//         {product.inTheBox?.length > 0 && (
//           <section className="in-box" aria-label="In The Box">
//             <div className="section-label">In The Box</div>
//             <ul>{product.inTheBox.map((item, i) => <li key={i}>{item}</li>)}</ul>
//           </section>
//         )}

//         {product.general && Object.keys(product.general).length > 0 && (
//           <section className="general" aria-label="General">
//             <div className="section-label">General</div>
//             <dl className="spec-list">
//               {Object.entries(product.general).map(([k, v]) => (
//                 <div className="spec-row" key={k}>
//                   <dt>{k}</dt>
//                   <dd>{v}</dd>
//                 </div>
//               ))}
//             </dl>
//           </section>
//         )}

//         {product.legalDisclaimer && (
//           <section className="legal" aria-label="Legal Disclaimer">
//             <div className="section-label">Legal Disclaimer</div>
//             <p className="muted">{product.legalDisclaimer}</p>
//           </section>
//         )}

//         {product.reviews?.length > 0 && (
//           <section className="reviews" aria-label="Customer reviews">
//             <div className="section-label">Reviews</div>
//             <ul className="review-list">
//               {product.reviews.map((r) => (
//                 <li key={r.id} className="review-item">
//                   <div className="review-top">
//                     <strong>{r.user}</strong>
//                     <div className="stars xs">{renderStars(r.rating)}</div>
//                   </div>
//                   <p>{r.text}</p>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}
//       </main>
//     </div>
//   )
// }

// // Cart icon
// function CartIcon() {
//   return (
//     <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.03.01 10.26.01c.78 0 1.46-.45 1.79-1.11l2.96-6.02A1 1 0 0 0 21.26 6H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44A2 2 0 0 0 6 18h12v-2H7.42a.25.25 0 0 1-.26-.25l.0-.01z"/>
//     </svg>
//   )
// }

// // Star component
// function Star({ variant = "empty" }) {
//   return (
//     <svg className={`star star--${variant}`} width="18" height="18" viewBox="0 0 24 24">
//       <defs>
//         <linearGradient id="halfGrad">
//           <stop offset="50%" stopColor="currentColor" />
//           <stop offset="50%" stopColor="transparent" />
//         </linearGradient>
//       </defs>
//       <path
//         d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192L12 .587z"
//         fill={variant === "full" ? "currentColor" : variant === "half" ? "url(#halfGrad)" : "none"}
//         stroke="currentColor"
//         strokeWidth="1.2"
//       />
//     </svg>
//   )
// }

// <ProductPage
//   productId="sku_raw-peanut"
//   onAddToCart={async (id, variant, qty) => {
//     await axios.post("/cart", { id, variant, qty })
//   }}
//   onGoToCart={() => console.log("Go to cart")}
//   onCheckPincode={async (pin) => {
//     const res = await axios.get(`/delivery/${pin}`)
//     return res.data
//   }}
// /> 


// src/ProductList/ProductDetail.jsx
import { useParams } from "react-router-dom"
import ProductPage from "./ProductPage"
import axios from "axios"
import { useState, useEffect } from "react"

export default function ProductDetail() {
  const { id } = useParams() // get :id from route
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  // Fetch product from API
  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return
      setLoading(true)
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products/${id}`)
        const data = res.data.data
        console.log(data, "__datqa from rhee")
        // Normalize missing keys
        // const normalized = {
        //   id: data.id || "NA",
        //   name: data.name || "NA",
        //   rating: data.rating ?? 0,
        //   totalReviews: data.totalReviews ?? 0,
        //   images: data.photo?.length ? data.photo : ["/placeholder.svg"],
        //   price: data.sellPrice ?? 0,
        //   mrp: data.mrp ?? 0,
        //   currency: data.currency || "₹",
        //   variants: data.stocks?.length ? data.stocks.map(s => s.variant) : ["NA"],
        //   notes: data.notes?.length ? data.notes : [],
        //   description: data.description || "NA",
        //   specs: data.specs?.length
        //     ? data.specs.map((s) => ({ label: s.label || "NA", value: s.value || "NA" }))
        //     : [],
        //   inTheBox: data.inTheBox?.length ? data.inTheBox : [],
        //   general: data.general || {},
        //   legalDisclaimer: data.legalDisclaimer || "NA",
        //   reviews: data.reviews?.length
        //     ? data.reviews.map((r) => ({
        //         id: r.id || Math.random(),
        //         user: r.user || "NA",
        //         rating: r.rating ?? 0,
        //         text: r.text || "NA",
        //       }))
        //     : [],
        // }
        const normalized = {
          id: data.id || "NA",
          name: data.name || "NA",
          rating: data.rating ?? 0,
          totalReviews: data.totalReviews ?? 0,
          images: data.photo?.length ? data.photo : ["/placeholder.svg"],
          price: data.stocks?.[0]?.sellingPrice ?? 0,
          mrp: data.stocks?.[0]?.mrp ?? 0,
          currency: "₹",
          // Extract variants from stocks
          variants: data.stocks?.length ? data.stocks.map(s => s.variant) : ["NA"],
          notes: data.notes?.length ? data.notes : [],
          description: data.description || "NA",
          specs: data.specs?.length
            ? data.specs.map(s => ({ label: s.label || "NA", value: s.value || "NA" }))
            : [],
          inTheBox: data.inTheBox?.length ? data.inTheBox : [],
          general: data.general || {},
          legalDisclaimer: data.legalDisclaimer || "NA",
          reviews: data.reviews?.length
            ? data.reviews.map(r => ({
              id: r.id || Math.random(),
              user: r.user || "NA",
              rating: r.rating ?? 0,
              text: r.text || "NA",
            }))
            : [],
          // optional: keep stocks if you need full info
          stocks: data.stocks || []
        };

        setProduct(normalized)
      } catch (err) {
        console.error(err)
        setError("Failed to load product")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])
  console.log(product, "__0000product")

  // Cart handlers
  const handleAddToCart = async (productId, variant, qty) => {
    await axios.post(`${process.env.REACT_APP_BASE_URL}/cart/create`, { id: productId, variant, qty })
  }

  const handleGoToCart = () => {
    console.log("Go to cart")
  }

  const handleCheckPincode = async (pin) => {
    const res = await axios.get(`/delivery/${pin}`)
    return res.data
  }

  if (loading) return <div>Loading product...</div>
  if (error) return <div>{error}</div>
  if (!product) return null
  return (
    <ProductPage
      product={product}
      onAddToCart={handleAddToCart}
      onGoToCart={handleGoToCart}
      onCheckPincode={handleCheckPincode}
    />
  )
}
