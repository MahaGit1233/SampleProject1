import React, { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import Products from "./components/Products";

function App() {
  const [product, setProduct] = useState([]);
  const [totalWorth, setTotalWorth] = useState(0);

  useEffect(() => {
    const storedProducts = [];
    let totalValue = 0;

    Object.keys(localStorage).forEach((key) => {
        const productDetails = JSON.parse(localStorage.getItem(key));
        if (productDetails && productDetails.id && productDetails.price) {
          storedProducts.push(productDetails);
          totalValue += parseFloat(productDetails.price);
      }
    });

    setProduct(storedProducts);
    setTotalWorth(totalValue);
  }, []);

  // useEffect(() => {
  //   const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  //   const storedWorth=parseFloat(localStorage.getItem("totalWorth")) || 0;

  //   setProduct(storedProducts);
  //   setTotalWorth(storedWorth);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("products", JSON.stringify(product));
  //   localStorage.setItem("totalWorth",totalWorth.toString());
  // }, [product,totalWorth]);

  const productDataHandler = (enteredId, enteredPrice, enteredProduct) => {
    const newProduct = {
      id: enteredId,
      price: parseFloat(enteredPrice),
      name: enteredProduct,
    };

    setProduct((prevProduct) => [...prevProduct,newProduct]);

    localStorage.setItem(enteredId,JSON.stringify(newProduct));

    setTotalWorth((prevPrice) => prevPrice + newProduct.price);
  }

  const deleteHandler = (productId) => {
    setProduct((prevProduct) => {
      const productTodel = prevProduct.find((product) => product.id === productId);
      const updatedProducts = prevProduct.filter((product) => product.id !== productId);

      if (productTodel) {
        localStorage.removeItem(productId);
        
        setTotalWorth((prevPrice) => prevPrice - parseFloat(productTodel.price));
      }

      return updatedProducts;
    })
  }

  return (
    <div>
      <div>
        <ProductForm onProductData={productDataHandler} />
        <Products product={product} onDelete={deleteHandler} />
      </div>
      <h3 style={{ fontFamily: "Times New Roman" }}>Total Value Worth of Products: Rs {totalWorth}</h3>
    </div>
  );
}

export default App;
