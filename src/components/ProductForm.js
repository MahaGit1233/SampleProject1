import React, { useState } from "react";

const ProductForm = (props) => {
    const [enteredId, setEnteredId] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredProduct, setEnteredProduct] = useState('');
    const [isValid, setIsValid] = useState(true);

    const idChangeHandler = (event) => {
        if (event.target.value > 0) {
            setIsValid(true);
        }
        setEnteredId(event.target.value);
    }

    const priceChangeHandler = (event) => {
        if (event.target.value > 0) {
            setIsValid(true);
        }
        setEnteredPrice(event.target.value);
    }

    const nameChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredProduct(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (enteredId <= 0 || enteredPrice <= 0 || enteredProduct.length === 0) {
            setIsValid(false);
            return;
        }
        props.onProductData(enteredId, enteredPrice, enteredProduct);
        setEnteredId('');
        setEnteredPrice('');
        setEnteredProduct('');
    }

    return (
        <form style={{ fontFamily: "Times New Roman" }} onSubmit={formSubmitHandler}>
            <div style={{ display: "flex", gap: "5px" }}>
                <label htmlFor="id">Product ID:</label>
                <input id="id" type="number" value={enteredId} onChange={idChangeHandler} />
                <label htmlFor="price">Selling Price:</label>
                <input id="price" type="number" value={enteredPrice} onChange={priceChangeHandler} />
                <label htmlFor="name">Product Name:</label>
                <input id="name" type="text" value={enteredProduct} onChange={nameChangeHandler} />
                <button type="submit">Add Product</button>
            </div>
            <h1>Products</h1>
        </form>
    )
}

export default ProductForm;