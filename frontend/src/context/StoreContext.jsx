import { createContext, useEffect } from "react";
// import React from "react";
// import { food_list } from "../assets/assets";
export const StoreContext = createContext(null);
import { useState } from "react";
import axios from "axios";

const StoreContextProvider = (props) => {
    
    const [cartItems,setCartItems] = useState({});
    const url = "http://localhost:4000";

    const [token,setToken] = useState("");
    const [food_list , setFoodList] = useState([])

    const addToCart = async (itemId) => {
          if(!cartItems[itemId]){
             setCartItems((prev) => ({...prev,[itemId] : 1}))
          }else{
             setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
          }
          if(token){
            await axios.post(url+"/api/cart/add", {itemId},{headers : {token}})
          }
    }

    const removeFromCart = async(itemId) => {
        setCartItems((prev) => ({...prev,[itemId] : prev[itemId] - 1
        }));
        if(token){
            await axios.post(url + "/api/cart/remove",{itemId},{headers : {token}});
        }
    }


    // useEffect(() => {
    //     console.log(cartItems)
    // },[cartItems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price*cartItems[item];
            }
           
        }
        return totalAmount;
    }

    const fetchFoodList = async () => {
        const response = await axios.get(url + "/api/food/list");
        setFoodList(response.data.data);

    }

    const loadCartData = async(token) => {
        const response = await axios.post(url + "/api/cart/get", {},{headers : {token}});
        setCartItems(response.data.cartData);
    }

    const totalCount = () => {

        let totalCnt= 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0){
                totalCnt += cartItems[item];
            }
           
        }
        return totalCnt;

    }

    useEffect( () => {
        
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
            } 
            //  await loadCartData(localStorage.getItem("token"));
           
        }

        loadData();
       
    },[])



    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        totalCount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
