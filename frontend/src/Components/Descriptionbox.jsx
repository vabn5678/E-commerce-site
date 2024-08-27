import React from "react";
import "./Descriptionbox.css";

const Descriptionbox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>

            <div className="descriptionbox-description">
                <p>At Shopper, we believe shopping should be a delightful and hassle-free experience. Our e-commerce platform offers a vast selection of high-quality products, from the latest fashion trends to cutting-edge electronics, home essentials, and more. Whether you're looking for a stylish wardrobe update, the perfect gift, or practical solutions for your daily needs, ShopEasy has you covered.</p>
                <p>sign up for our newsletter to stay updated on the latest arrivals, exclusive offers, and special promotions. Follow us on social media to connect with other ShopEasy shoppers, share your experiences, and get inspired by our community.</p>
            </div>
        </div>
    )
}
export default Descriptionbox;