import React from "react";

const ProductDisplay = (props) => {

    const delHandler = () => {
        props.onDelBtn(props.id);
    }

    return (
        <li onClick={delHandler} style={{ fontFamily: "Times New Roman" }}>{props.children}</li>
    )
}

export default ProductDisplay;