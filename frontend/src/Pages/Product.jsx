import React, { useContext } from "react"
import { useEffect } from "react";
import { Shopcontext } from "../Context/Shopcontext"
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum";
import Productdisplay from "../Components/Productdisplay";
import Descriptionbox from "../Components/Descriptionbox";
import Relatedproducts from "../Components/Relatedproducts";

const Product = () => {

    const { all_product } = useContext(Shopcontext);
    const { product_Id } = useParams();

    useEffect(() => {
        console.log("all_product:", all_product);
        console.log("product_Id:", product_Id);
    }, [all_product, product_Id]);


    const product = all_product.find((e) => e.id === Number(product_Id));
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            <Breadcrum product={product} />
            <Productdisplay product={product} />
            <Descriptionbox />
            <Relatedproducts />
        </div>
    )
}
export default Product