import React from 'react'
import { useState } from 'react';
import {useContext, createContext} from "react";
import CartItem from '../components/CartItem';
import { ShoppingCart } from '../components/ShoppingCart';
// import CartItem from './CartItem';
import {useLocalStorage} from '../hooks/useLocalStorage';

type ShoppingCartProviderProps = {
  children: React.ReactNode
}

type CartItem = {
  id: number
  quantity: number
}


type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)



export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export default function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
  const  [cartItems, setCartItems] = useLocalStorage<CartItem[]>( "shopping-cart" ,[])

  const [isOpen, setIsOpen] = useState(false)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  function getItemQuantity(id: number){
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id: number) {
    setCartItems(currenttItems => {
        if(currenttItems.find(item => item.id == id)?.quantity == null){
            return [...currenttItems, {id, quantity: 1}]
        } else {
            return currenttItems.map(item=>{
                if(item.id === id){
                    return{...item, quantity: item.quantity + 1}
                }
                else {
                    return item
                }
                
            } 
            ) 
        }
    })
  }

  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }



  return (
    <>
      <ShoppingCartContext.Provider value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}>
          {children}
          <ShoppingCart isOpen = {isOpen}/>
      </ShoppingCartContext.Provider>
    
    </>
    

  )
}
