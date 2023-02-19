import { OrderDTO, OrderItemDTO } from "../models/order";
import * as cartRepository from '../LocalStorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    console.log('passou aqui salvou');
    return cartRepository.save(cart);
}

export function getCart(): OrderDTO {
    return cartRepository.get();
}

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);
    if (!item) {
        cart.items.push(new OrderItemDTO(product.id, 1, product.name, product.price, product.imgUrl));
        cartRepository.save(cart);
    }
}

export function clearCart() {
    cartRepository.clear();
}

export function increaseItem(productId: number) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === productId);
    if (item) {
        item.quantity++;
        cartRepository.save(cart);
    }
}

export function decreaseItem(productId: number) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === productId);
    if (item) {
        item.quantity--;
        if (item.quantity < 1) {
            cart.items = cart.items.filter(x => x.productId !== productId);
        }
        cartRepository.save(cart);
    }
}