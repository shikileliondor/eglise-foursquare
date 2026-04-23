const CART_STORAGE_KEY = 'lf_cart_v1';
const CART_EVENT = 'lf-cart-updated';

function safeParse(value) {
    try {
        return JSON.parse(value);
    } catch {
        return [];
    }
}

export function getCart() {
    if (typeof window === 'undefined') return [];

    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return [];

    const parsed = safeParse(stored);
    return Array.isArray(parsed) ? parsed : [];
}

export function saveCart(items) {
    if (typeof window === 'undefined') return;

    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    window.dispatchEvent(new CustomEvent(CART_EVENT, { detail: items }));
}

export function upsertCartItem(item) {
    const currentItems = getCart();
    const itemKey = `${item.product_id}:${item.variant_id ?? 'base'}`;

    const existingIndex = currentItems.findIndex(
        (currentItem) => `${currentItem.product_id}:${currentItem.variant_id ?? 'base'}` === itemKey,
    );

    if (existingIndex === -1) {
        saveCart([...currentItems, item]);
        return;
    }

    const nextItems = [...currentItems];
    nextItems[existingIndex] = {
        ...nextItems[existingIndex],
        quantity: nextItems[existingIndex].quantity + item.quantity,
    };

    saveCart(nextItems);
}

export function updateCartQuantity(productId, variantId, quantity) {
    const currentItems = getCart();

    const nextItems = currentItems
        .map((item) => {
            if (item.product_id === productId && (item.variant_id ?? null) === (variantId ?? null)) {
                return {
                    ...item,
                    quantity,
                };
            }

            return item;
        })
        .filter((item) => item.quantity > 0);

    saveCart(nextItems);
}

export function removeCartItem(productId, variantId) {
    const currentItems = getCart();
    saveCart(currentItems.filter((item) => !(item.product_id === productId && (item.variant_id ?? null) === (variantId ?? null))));
}

export function clearCart() {
    saveCart([]);
}

export function subscribeCart(listener) {
    if (typeof window === 'undefined') return () => {};

    const handler = (event) => listener(event.detail ?? getCart());
    window.addEventListener(CART_EVENT, handler);

    return () => {
        window.removeEventListener(CART_EVENT, handler);
    };
}
