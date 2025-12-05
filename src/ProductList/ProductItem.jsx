// import React from "react";
import { Link } from "react-router-dom";
import product1 from '../images/category-baby-care.jpg'
import product2 from '../images/category-atta-rice-dal.jpg'
import product3 from '../images/category-bakery-biscuits.jpg'
import product4 from '../images/category-chicken-meat-fish.jpg'
import product5 from '../images/category-cleaning-essentials.jpg'
import product6 from '../images/category-dairy-bread-eggs.jpg'
import product7 from '../images/category-instant-food.jpg'
import product8 from '../images/category-pet-care.jpg'
import product9 from '../images/category-snack-munchies.jpg'
import product10 from '../images/category-tea-coffee-drinks.jpg'
import Swal from 'sweetalert2';

// const ProductItem = () => {





//   const handleAddClick = () => {
//     Swal.fire({
//       icon: 'success',
//       title: 'Added to Cart',
//       text: "Product has been added to your cart!",
//       showConfirmButton: true,
//       timer: 3000,
//     });
//   };
//   return (
//     <div>
//       {/* Popular Products Start*/}
//       <section className="my-lg-14 my-8">
//         <div className="container">
//           <div className="row">
//             <div className="col-12 mb-6">
//             <div className="section-head text-center mt-8" >
//               <h3 className='h3style' data-title="Popular Products">Popular Products</h3>
//               <div className="wt-separator bg-primarys">
//               </div>
//               <div className="wt-separator2 bg-primarys">
//               </div>
//               {/* <p>Connecting with entrepreneurs online, is just a few clicks away.</p> */}
//             </div>
//             </div>
//           </div>
//           <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative ">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Sale</span>
//                     </div>
//                     <Link href="#!">
//                       {" "}
//                       <img
//                         src={product1}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid "
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Haldiram's Sev Bhujia
//                     </Link>
//                   </h2>
//                   <div>
//                     <small className="text-warning">
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5(149)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$18</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $24
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-success">14%</span>
//                     </div>
//                     <Link href="#!">
//                       <img
//                         src={product2}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Bakery &amp; Biscuits</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       NutriChoice Digestive{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (25)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$24</span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product3}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Bakery &amp; Biscuits</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Cadbury 5 Star Chocolate
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                     </small>{" "}
//                     <span className="text-muted small">5 (469)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$32</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $35
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product4}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Hot</span>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Onion Flavour Potato
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                       <i className="bi bi-star" />
//                     </small>{" "}
//                     <span className="text-muted small">3.5 (456)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$3</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $5
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product5}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Instant Food</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Salted Instant Popcorn{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (39)</span>
//                   </div>
//                   <div className="d-flex justify-content-between mt-4">
//                     <div>
//                       <span className="text-dark">$13</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $18
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative ">
//                     <div className=" position-absolute top-0 start-0">
//                       <span className="badge bg-danger">Sale</span>
//                     </div>
//                     <Link href="#!">
//                       {" "}
//                       <img
//                         src={product6}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Dairy, Bread &amp; Eggs</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Blueberry Greek Yogurt
//                     </Link>
//                   </h2>
//                   <div>
//                     <small className="text-warning">
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (189)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$18</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $24
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product7}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Dairy, Bread &amp; Eggs</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Britannia Cheese Slices
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                     </small>{" "}
//                     <span className="text-muted small">5 (345)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$24</span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product8}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Instant Food</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Kellogg's Original Cereals
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4 (90)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$32</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $35
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product9}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Snack &amp; Munchies</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Slurrp Millet Chocolate{" "}
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                     </small>{" "}
//                     <span className="text-muted small">4.5 (67)</span>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div>
//                       <span className="text-dark">$3</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $5
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col fade-zoom">
//               <div className="card card-product">
//                 <div className="card-body">
//                   <div className="text-center position-relative">
//                     {" "}
//                     <Link href="#!">
//                       <img
//                         src={product10}
//                         alt="Grocery Ecommerce Template"
//                         className="mb-3 img-fluid"
//                       />
//                     </Link>
//                     <div className="card-product-action">
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="modal"
//                         data-bs-target="#quickViewModal"
//                       >
//                         <i
//                           className="bi bi-eye"
//                           data-bs-toggle="tooltip"
//                           data-bs-html="true"
//                           title="Quick View"
//                         />
//                       </Link>
//                       <Link
//                         href="#"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Wishlist"
//                       >
//                         <i className="bi bi-heart" />
//                       </Link>
//                       <Link
//                         href="#!"
//                         className="btn-action"
//                         data-bs-toggle="tooltip"
//                         data-bs-html="true"
//                         title="Compare"
//                       >
//                         <i className="bi bi-arrow-left-right" />
//                       </Link>
//                     </div>
//                   </div>
//                   <div className="text-small mb-1">
//                     <Link href="#!" className="text-decoration-none text-muted">
//                       <small>Dairy, Bread &amp; Eggs</small>
//                     </Link>
//                   </div>
//                   <h2 className="fs-6">
//                     <Link
//                       href="#!"
//                       className="text-inherit text-decoration-none"
//                     >
//                       Amul Butter - 500 g
//                     </Link>
//                   </h2>
//                   <div className="text-warning">
//                     <small>
//                       {" "}
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-fill" />
//                       <i className="bi bi-star-half" />
//                       <i className="bi bi-star" />
//                     </small>{" "}
//                     <span className="text-muted small">3.5 (89)</span>
//                   </div>
//                   <div className="d-flex justify-content-between mt-4">
//                     <div>
//                       <span className="text-dark">$13</span>{" "}
//                       <span className="text-decoration-line-through text-muted">
//                         $18
//                       </span>
//                     </div>
//                     <div>
//                      <Link href="#!" className="btn btn-primary btn-sm  "onClick={handleAddClick}>
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width={16}
//                           height={16}
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth={2}
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           className="feather feather-plus"
//                         >
//                           <line x1={12} y1={5} x2={12} y2={19} />
//                           <line x1={5} y1={12} x2={19} y2={12} />
//                         </svg>{" "}
//                         Add
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Popular Products End*/}
//     </div>
//   );
// };

// export default ProductItem;



import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductItem = () => {
  const [products, setProducts] = useState([]);

  // Get product image URL from backend
  const getImageUrl = (product) => {
    const baseUrl = process.env.REACT_APP_IMAGE_URL;
    if (product.photo && Array.isArray(product.photo) && product.photo.length > 0) {
      return `${baseUrl}/${product.photo[0]}`;
    }
    return "/assets/images/thumbs/default.png";
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/products/`)
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);
  const handleAddClick = () => {
    Swal.fire({
      icon: "success",
      title: "Added to Cart",
      text: "Product has been added to your cart!",
      showConfirmButton: true,
      timer: 3000,
    });
  };

  return (
    <section className="my-lg-14 my-8">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-6">
            <div className="section-head text-center mt-8">
              <h3 className="h3style" data-title="Popular Products">Popular Products</h3>
              <div className="wt-separator bg-primarys"></div>
              <div className="wt-separator2 bg-primarys"></div>
            </div>
          </div>
        </div>
        <div className="row g-4 row-cols-lg-5 row-cols-2 row-cols-md-3">
          {products.map((product, idx) => (
            <Link to={`/products/${product.id}`} className="text-decoration-none" >
            <div className="col fade-zoom" key={idx}>
              <div className="card card-product">
                <div className="card-body">
                  <div className="text-center position-relative">
                    {product.badge && (
                      <div className="position-absolute top-0 start-0">
                        <span className={`badge bg-${product.badgeColor || "primary"}`}>
                          {product.badge}
                        </span>
                      </div>
                    )}
                    {/* <Link href="#!">
                      <img
                        src={getImageUrl(product)}
                        alt={product.name}
                        className="mb-3 img-fluid"
                      />
                    </Link> */}
                    <div className="product-image-wrapper mb-3">
                      <Link href="#!">
                        <img
                          src={getImageUrl(product)}
                          alt={product.name}
                          className="product-image"
                        />
                      </Link>
                    </div>

                    <div className="card-product-action">
                      <Link href="#!" className="btn-action" data-bs-toggle="modal" data-bs-target="#quickViewModal">
                        <i className="bi bi-eye" title="Quick View" />
                      </Link>
                      <Link href="#!" className="btn-action" title="Wishlist">
                        <i className="bi bi-heart" />
                      </Link>
                      <Link href="#!" className="btn-action" title="Compare">
                        <i className="bi bi-arrow-left-right" />
                      </Link>
                    </div>
                  </div>
                  <div className="text-small mb-1">
                    <Link href="#!" className="text-decoration-none text-muted">
                      <small>{product.category || "No Category"}</small>
                    </Link>
                  </div>
                  <h2 className="fs-6">
                    <Link href="#!" className="text-inherit text-decoration-none">
                      {product.name}
                    </Link>
                  </h2>
                  <div className="text-warning">
                    <small>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <i
                          key={i}
                          className={`bi ${
                            i < Math.floor(product.rating || 0)
                              ? "bi-star-fill"
                              : i < (product.rating || 0)
                              ? "bi-star-half"
                              : "bi-star"
                          }`}
                        />
                      ))}
                    </small>{" "}
                    <span className="text-muted small">
                      {product.rating || 0} ({product.reviews || 0})
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span className="text-dark">₹{product.sellPrice}</span>{" "}
                      {product.purchasePrice && (
                        <span className="text-decoration-line-through text-muted">
                          ₹{product.purchasePrice}
                        </span>
                      )}
                    </div>
                    <div>
                      <Link href="#!" className="btn btn-primary btn-sm" onClick={handleAddClick}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-plus"
                        >
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>{" "}
                        Add
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>

          ))}
          {products.length === 0 && (
            <div className="text-center col-12">
              <p>No products found.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductItem;
