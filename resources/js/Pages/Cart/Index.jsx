import CartPanel from '@/Components/shop/CartPanel';
import PublicNavbar from '@/Components/PublicNavbar';
import { fetchCart, subscribeCart } from '@/lib/cart';
import { Head, router } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function CartIndex() {
    const [cart, setCart] = useState({ items: [], count: 0, total: 0 });

    useEffect(() => {
        fetchCart().then(setCart);

        return subscribeCart((nextCart) => {
            setCart(nextCart);
        });
    }, []);

    return (
        <>
            <Head title="Panier" />

            <div className="min-h-screen bg-[#f5f5f3] text-zinc-800">
                <PublicNavbar />
                <CartPanel open onClose={() => router.visit(route('shop.index'))} cart={cart} />
            </div>
        </>
    );
}
