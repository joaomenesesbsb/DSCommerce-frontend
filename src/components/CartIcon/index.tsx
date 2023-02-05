import './styles.css'
import cartImg from '../../assets/cart.png';
import * as cartService from '../../services/cart-service';
import { useContext, useState } from 'react';
import { ContextCartCount } from '../../utils/context-cart';

export default function CartIcon() {

    const { contextCartCount } = useContext(ContextCartCount);

    return (
        <>
            <img src={cartImg} alt="cart" />
               {
                contextCartCount > 0 &&
                <div className="dsc-cart-count">{contextCartCount}</div>
               } 
        </>
    );
}