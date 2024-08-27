import React, { useContext } from "react"
import "./CSS/Shopcategory.css";
import { Shopcontext } from "../Context/Shopcontext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item";
const Shopcategory = (props) => {

    const { all_product } = useContext(Shopcontext);

    if (!all_product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="error" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="error" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, i) => {
                    if (props.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                    else {
                        return null;
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">Explore More</div>
        </div>
    )
}
export default Shopcategory