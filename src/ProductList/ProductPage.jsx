// src/ProductList/ProductPage.jsx
import { useState, useMemo } from "react"
import './ProductPage.css';
import { getImageUrl } from "../Utils/Utils";

export default function ProductPage({ product, onAddToCart, onGoToCart, onCheckPincode }) {

    console.log(product, "__from produtpage2")
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || "")
    const [qty, setQty] = useState(0)
    const [pincode, setPincode] = useState("")
    const [pinResult, setPinResult] = useState(null)
    const [checkingPin, setCheckingPin] = useState(false)
    const [specExpanded, setSpecExpanded] = useState(false)
    console.log(product, "__product1")

    const images = useMemo(() => product.images || [], [product.images])
    const mainImage = getImageUrl(images[selectedImageIndex]) || "/placeholder.svg"

    const handleAddClick = async () => {
        if (qty === 0) {
            const newQty = 1
            setQty(newQty)
            if (onAddToCart) await onAddToCart(product.id, selectedVariant, newQty)
        } else {
            if (onGoToCart) onGoToCart()
        }
    }

    const increment = async () => {
        const newQty = Math.min(qty + 1, 99)
        setQty(newQty)
        if (onAddToCart) await onAddToCart(product.id, selectedVariant, newQty)
    }

    const decrement = async () => {
        const newQty = Math.max(qty - 1, 0)
        setQty(newQty)
        if (onAddToCart) await onAddToCart(product.id, selectedVariant, newQty)
    }

    const handleCheckPincode = async () => {
        const pin = (pincode || "").trim()
        if (!/^[1-9][0-9]{5}$/.test(pin)) {
            setPinResult({ message: "Please enter a valid 6-digit pincode." })
            return
        }
        setCheckingPin(true)
        try {
            if (onCheckPincode) {
                const res = await onCheckPincode(pin)
                setPinResult(res || { message: "Delivery info loaded." })
            } else {
                setPinResult({ eta: "2-4 days", cod: true, message: "Delivery available." })
            }
        } finally {
            setCheckingPin(false)
        }
    }

    const renderStars = (value) => {
        const stars = []
        const full = Math.floor(value)
        const hasHalf = value - full >= 0.5
        for (let i = 0; i < 5; i++) {
            if (i < full) stars.push(<Star key={i} variant="full" />)
            else if (i === full && hasHalf) stars.push(<Star key={i} variant="half" />)
            else stars.push(<Star key={i} variant="empty" />)
        }
        return stars
    }

    const collapsedSpecs = useMemo(() => (product.specs || []).slice(0, 6), [product.specs])
    const allSpecs = product.specs || []

    // =======================
    // Below this point, your UI JSX remains the same
    // =======================
    return (
        <div className="product-page">
            {/* LEFT: Gallery */}
            <aside className="product-left" aria-label="Product gallery">
                <div className="gallery">
                    <div className="thumbs">
                        {images.map((src, idx) => (
                            <button
                                key={src + idx}
                                type="button"
                                className={`thumb ${idx === selectedImageIndex ? "thumb--active" : ""}`}
                                onClick={() => setSelectedImageIndex(idx)}
                                aria-label={`Show image ${idx + 1}`}
                            >
                                <img src={getImageUrl(src) || "/placeholder.svg"} alt={`Thumbnail ${idx + 1}`} />
                            </button>
                        ))}
                    </div>
                    <div className="main-image">
                        <img src={mainImage || "/placeholder.svg"} alt={`${product.name} main`} />
                    </div>
                </div>
            </aside>

            {/* RIGHT: Scrollable details */}
            <main className="product-right">
                <header className="product-header">
                    <h1 className="product-title">{product.name}</h1>
                    <div className="rating-row">
                        <div className="stars" aria-label={`Rated ${product.rating} out of 5`}>
                            {renderStars(product.rating)}
                        </div>
                        <div className="rating-text">
                            {product.rating} • {product.totalReviews} reviews
                        </div>
                    </div>
                </header>

                <section className="pricing-row" aria-label="Pricing">
                    <div className="price">
                        <span className="price-currency">{product.currency}</span>
                        <span className="price-value">{product.price}</span>
                    </div>
                    <div className="mrp">
                        MRP:
                        <span className="mrp-value">
                            {product.currency}
                            {product.mrp}
                        </span>
                    </div>
                    <div className="you-save">
                        You save {product.currency}
                        {Math.max(product.mrp - product.price, 0)}
                    </div>
                </section>

                <section className="cart-controls" aria-label="Cart controls">
                    <button
                        type="button"
                        className={`btn btn-primary cart-btn ${qty > 0 ? "cart-btn--active" : ""}`}
                        onClick={handleAddClick}
                    >
                        <CartIcon />
                        {qty > 0
                            ? <span className="btn-text">Go to Cart</span>
                            : <span className="btn-text">ADD</span>
                        }
                    </button>

                    {qty > 0 && (
                        <div className="stepper" aria-label="Quantity selector">
                            <button type="button" className="stepper-btn" onClick={decrement} aria-label="Decrease quantity">
                                −
                            </button>
                            <div className="stepper-value" aria-live="polite" aria-atomic="true">
                                {qty}
                            </div>
                            <button type="button" className="stepper-btn" onClick={increment} aria-label="Increase quantity">
                                +
                            </button>
                        </div>
                    )}
                </section>

                <section className="variant-row" aria-label="Quantity selection">
                    <div className="section-label">Quantity</div>
                    <div className="variant-pills">
                        {(product.variants || []).map((v) => (
                            <button
                                key={v}
                                type="button"
                                className={`pill ${selectedVariant === v ? "pill--active" : ""}`}
                                onClick={() => setSelectedVariant(v)}
                                aria-pressed={selectedVariant === v}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="pincode-row" aria-label="Delivery check">
                    <div className="section-label">Delivery</div>
                    <div className="pincode-wrap">
                        <input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={6}
                            placeholder="Enter pincode"
                            className="pin-input"
                            value={pincode}
                            onChange={(e) => setPincode(e.target.value)}
                            aria-label="Enter 6-digit pincode"
                        />
                        <button className="btn btn-outline" type="button" onClick={handleCheckPincode} disabled={checkingPin}>
                            {checkingPin ? "Checking..." : "Check"}
                        </button>
                    </div>
                    <div className="pin-result" aria-live="polite" aria-atomic="true">
                        {pinResult?.message && <span>{pinResult.message}</span>}
                        {pinResult?.eta && <span> ETA: {pinResult.eta}</span>}
                        {typeof pinResult?.cod === "boolean" && <span> • COD: {pinResult.cod ? "Available" : "Unavailable"}</span>}
                    </div>
                </section>

                {product.notes?.length ? (
                    <section className="notes" aria-label="Important notes">
                        <div className="section-label">Important notes</div>
                        <ul>
                            {product.notes.map((n, i) => (
                                <li key={i}>{n}</li>
                            ))}
                        </ul>
                    </section>
                ) : null}

                {product.description ? (
                    <section className="description" aria-label="Description">
                        <div className="section-label">Description</div>
                        <p>{product.description}</p>
                    </section>
                ) : null}

                <section className="specs" aria-label="Specifications">
                    <div className="specs-header">
                        <div className="section-label">Specifications</div>
                        {allSpecs.length > 6 && (
                            <button type="button" className="btn btn-link" onClick={() => setSpecExpanded((s) => !s)}>
                                {specExpanded ? "Read less" : "Read more"}
                            </button>
                        )}
                    </div>
                    <dl className="spec-list">
                        {(specExpanded ? allSpecs : collapsedSpecs).map((s, idx) => (
                            <div className="spec-row" key={s.label + idx}>
                                <dt>{s.label}</dt>
                                <dd>{s.value}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

                {product.inTheBox?.length ? (
                    <section className="in-box" aria-label="In The Box">
                        <div className="section-label">In The Box</div>
                        <ul>
                            {product.inTheBox.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </section>
                ) : null}

                {product.general ? (
                    <section className="general" aria-label="General">
                        <div className="section-label">General</div>
                        <dl className="spec-list">
                            {Object.entries(product.general).map(([k, v]) => (
                                <div className="spec-row" key={k}>
                                    <dt>{k}</dt>
                                    <dd>{v}</dd>
                                </div>
                            ))}
                        </dl>
                    </section>
                ) : null}

                {product.legalDisclaimer ? (
                    <section className="legal" aria-label="Legal Disclaimer">
                        <div className="section-label">Legal Disclaimer</div>
                        <p className="muted">{product.legalDisclaimer}</p>
                    </section>
                ) : null}

                {product.reviews?.length ? (
                    <section className="reviews" aria-label="Customer reviews">
                        <div className="section-label">Reviews</div>
                        <ul className="review-list">
                            {product.reviews.map((r) => (
                                <li key={r.id} className="review-item">
                                    <div className="review-top">
                                        <strong>{r.user}</strong>
                                        <div className="stars xs">{renderStars(r.rating)}</div>
                                    </div>
                                    <p>{r.text}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                ) : null}
            </main>


        </div>
    )
}

function Star({ variant = "empty" }) {
    return (
        <svg
            className={`star star--${variant}`}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <linearGradient id="halfGrad">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                </linearGradient>
            </defs>
            <path
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.401 8.168L12 18.896l-7.335 3.869 1.401-8.168L.132 9.21l8.2-1.192L12 .587z"
                fill={variant === "full" ? "currentColor" : variant === "half" ? "url(#halfGrad)" : "none"}
                stroke="currentColor"
                strokeWidth="1.2"
            />
        </svg>
    )
}

function CartIcon() {
    return (
            <svg
                className="icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                fill="currentColor"
                style={{ width: '30px', height: '30px' }} 
            >
                <path
                    d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
          0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14.26l.03.01 
          10.26.01c.78 0 1.46-.45 1.79-1.11l2.96-6.02A1 1 0 0 0 21.26 6H6.21l-.94-2H2v2h2l3.6 
          7.59-1.35 2.44A2 2 0 0 0 6 18h12v-2H7.42a.25.25 0 0 1-.26-.25l.0-.01z"
                />


        </svg>
    )
}
