import React from "react";
import ProductDisplay from "./ProductDisplay";

const Products = (props) => {
    let Delete = (<button onClick={props.onDelete}>Delete Product</button>);

    return (
        <ul>
            {props.product.map(adding => (
                <ProductDisplay key={adding.id} id={adding.id} onDelBtn={props.onDelete}>{adding.price} - {adding.name} {Delete}</ProductDisplay>
            ))}
        </ul>
    )
}

export default Products;