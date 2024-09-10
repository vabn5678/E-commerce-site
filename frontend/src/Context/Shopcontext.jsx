import React, { createContext, useEffect, useState } from "react";


export const Shopcontext = createContext(null);



const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopcontextProvider = (props) => {

    const [all_product, setAll_product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());


    useEffect(() => {
        fetch('https://e-commerce-site-backend-ym9n.onrender.com/getallproducts')
            .then((response) => response.json())
            .then((data) => setAll_product(data))

        if (localStorage.getItem('auth-token')) {
            fetch("https://e-commerce-site-backend-ym9n.onrender.com/getcart", {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json())
                .then((data) => setCartItems(data));
        }
    }, [])
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch("https://e-commerce-site-backend-ym9n.onrender.com/addtocart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }


    const removefromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch("https://e-commerce-site-backend-ym9n.onrender.com/removefromcart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        }
    }


    const gettotalcartamount = () => {

        let totalamount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalamount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalamount;
    }

    const counttotalcartitems = () => {
        let totalcartitem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalcartitem += cartItems[item];
            }
        }
        return totalcartitem;
    }

    const contextValue = { all_product, cartItems, addToCart, removefromCart, gettotalcartamount, counttotalcartitems };


    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )


}



export default ShopcontextProvider;
