import axios from 'axios';

const CART_EVENT = 'lf-cart-updated';

function emitCart(cart) {
    window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: cart }));
}

export async function fetchCart() {
    const { data } = await axios.get('/cart/summary');
    emitCart(data);

    return data;
}

export async function addCartItem(payload) {
    const { data } = await axios.post('/cart/items', payload);
    emitCart(data);

    return data;
}

export async function updateCartItemQuantity(cartItemId, quantity) {
    const { data } = await axios.patch(`/cart/items/${cartItemId}`, { quantity });
    emitCart(data);

    return data;
}

export async function removeCartItem(cartItemId) {
    const { data } = await axios.delete(`/cart/items/${cartItemId}`);
    emitCart(data);

    return data;
}

export async function clearCart() {
    const { data } = await axios.delete('/cart/items');
    emitCart(data);

    return data;
}

export function subscribeCart(listener) {
    if (typeof window === 'undefined') return () => {};

    const handler = (event) => listener(event.detail);
    window.addEventListener(CART_EVENT, handler);

    return () => window.removeEventListener(CART_EVENT, handler);
}
