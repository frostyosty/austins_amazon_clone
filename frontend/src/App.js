import React from 'react';
import data from './data';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';

function App() {

  //   const openMenu = () => {    document.querySelector(".sidebar").classList.add("open");
  // }
  // const closeMenu = () => {
  //   document.querySelector(".sidebar").classList.remove("open");
  // }
  return (
    <div className="grid-container">
      <header className="row">

        <div className="brand">
          <button onClick="openMenu()">
            &#9776;
          </button>
          <a className="brand" href="/">Austin's_Amazon_Clone</a>
        </div>
        <div className="header-links">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>

        </div>
      </header>
      {/* <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onclick="closeMenu()">x</button>
        <ul>
          <li>
            <a href="index.html">Watches</a>
          </li>
          <li>
            <a href="index.html">Bracelets</a>
          </li>
        </ul>
      </aside> */}

      <main>
        <div className="row center">
          {/* <Route path="/products/:id" component={ProductPage} />
          <Route path="/" exact={true} component={HomePage} /> */}
            {data.products.map((product) => (
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img className="medium"
                    src={product.image}
                    alt={product.name}
                    </a>
                  <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  <div className="rating">
                  <span><i class=fa fa-star"></i></span>
                <span><i class=fa fa-star"></i></span>
              <span><i class=fa fa-star"></i></span>
              <span><i class=fa fa-star"></i></span>
              <span><i class=fa fa-star-half-0"></i></span>
              </div>
              <div className="price">${product.price}</div>
                  {/* <div className="product">
                    <div className="product-name"><a href="product.html">{product.name}</a></div>
                    <div className="product-brand">{product.brand}</div>
                    <div className="product-price">${product.price}</div>
                    <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                  </div>
                </li>) */}
                </div>
                </div>
            ))}
      </div >
    </main>
    <footer className="row center">All Rights Reserved.</footer>
  </div >



//     <BrowserRouter>
//     <div classNameName="grid-container">
//     <header classNameName="header">
//       <div classNameName="brand">
//         <button onClick={openMenu}>
//           &#9776;
//         </button>
//         <a href="index.html">Austin's_Amazon_Clone</a>
//       </div>
//       <div classNameName="header-links">
//         <a href="cart.html">Cart</a>
//         <a href="signin.html">Sign In</a>

//       </div>
//     </header>
//     <aside classNameName="sidebar">
//       <h3>Shopping Categories</h3>
//       <button classNameName="sidebar-close-button" onClick={closeMenu}>x</button>
//       <ul>
//         <li>
//           <a href="index.html">Watches</a>
//         </li>
//         <li>
//           <a href="index.html">Bracelets</a>
//         </li>
//       </ul>
//     </aside>

//     <main className="main">
//       <div classNameName="content">
//         <Route path="/products/:id" component={ProductPage}/>
//         <Route path="/" exact={true} component={HomePage}/>
//         <ul classNameName="products">
//           {
//             data.products.map(product =>

//           <li>
//             <div className="product">
//               <img className="product-image" src={product.image} alt="product"></img>
//               <div className="product-name"><a href="product.html">{product.name}</a></div>
//               <div className="product-brand">{product.brand}</div>
//               <div className="product-price">${product.price}</div>
//               <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
//             </div>
//           </li>)
// }
//         </ul>
//       </div>
//     </main>
//     <footer className="footer">All Rights Reserved.</footer>
//   </div>
//  </BrowserRouter> 
 );
}

export default App;
