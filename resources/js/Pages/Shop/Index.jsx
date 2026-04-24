import CartPanel from '@/Components/shop/CartPanel';
import PublicNavbar from '@/Components/PublicNavbar';
import { addCartItem, fetchCart, subscribeCart } from '@/lib/cart';
import { Head, Link } from '@inertiajs/react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const defaultImage = 'https://placehold.co/500x500/E7E8DF/6D6D63?text=Produit';

function formatPrice(value) {
    return `${Number(value).toFixed(2)} €`;
}

function getMinPrice(product) {
    const variants = product.variants ?? [];
    const prices = [product.base_price, ...variants.map((variant) => variant.price ?? product.base_price)];
    return Math.min(...prices.map((price) => Number(price)));
}

export default function ShopIndex({ products }) {
    const [cart, setCart] = useState({ items: [], count: 0, total: 0 });
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        fetchCart().then(setCart);

        return subscribeCart((nextCart) => {
            setCart(nextCart);
        });
    }, []);

    const totalProducts = useMemo(() => products.length, [products]);

    const handleAddToCart = async (product) => {
        const firstVariant = (product.variants ?? []).find((variant) => variant.stock > 0);

        await addCartItem({
            product_id: product.id,
            variant_id: firstVariant?.id ?? null,
            quantity: 1,
        });

        setIsCartOpen(true);
    };

    return (
        <>
            <Head title="Boutique" />
            <div className="min-h-screen bg-[#f5f5f3] text-zinc-800">
                <PublicNavbar />

                <section className="mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
                    <div className="mb-10 text-center">
                        <h1 className="font-serif text-5xl font-semibold text-zinc-700">Elevare Exclusive</h1>
                        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-500">
                            Découvrez notre sélection premium, inspirée du design partagé, avec options de panier et commande rapide.
                        </p>
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                        <p className="text-sm text-zinc-500">Showing {totalProducts} products</p>
                        <button
                            type="button"
                            onClick={() => setIsCartOpen(true)}
                            className="relative inline-flex items-center gap-2 rounded-full border border-zinc-400 px-4 py-2 text-sm font-medium"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Panier
                            {cart.count > 0 ? <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white">{cart.count}</span> : null}
                        </button>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((product) => {
                            const minPrice = getMinPrice(product);
                            const hasVariants = (product.variants ?? []).length > 0;

                            return (
                                <article key={product.id} className="group">
                                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-[#e6e7de] p-5">
                                        <img src={product.image_url || defaultImage} alt={product.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
                                        <button type="button" className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-zinc-400">
                                            <Heart className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        <p className="text-xs font-bold uppercase tracking-wide text-[#bd7f6f]">{product.name}</p>
                                        <Link href={route('shop.show', product.slug)} className="mt-1 line-clamp-2 text-sm text-zinc-600 hover:underline">
                                            {product.description || product.name}
                                        </Link>
                                        <p className="mt-4 text-lg text-zinc-600">{formatPrice(minPrice)}</p>

                                        {hasVariants ? (
                                            <Link
                                                href={route('shop.show', product.slug)}
                                                className="mt-3 inline-flex w-full items-center justify-center rounded-full border border-zinc-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-zinc-700"
                                            >
                                                Choisir options
                                            </Link>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={() => handleAddToCart(product)}
                                                className="mt-3 w-full rounded-full border border-zinc-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-900 hover:text-white"
                                            >
                                                Add to cart
                                            </button>
                                        )}
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <CartPanel open={isCartOpen} onClose={() => setIsCartOpen(false)} cart={cart} />
            </div>
        </>
    );
}
