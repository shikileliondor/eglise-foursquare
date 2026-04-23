import CartPanel from '@/Components/shop/CartPanel';
import PublicNavbar from '@/Components/PublicNavbar';
import { getCart, subscribeCart, upsertCartItem } from '@/lib/cart';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const defaultImage = 'https://placehold.co/700x700/E7E8DF/6D6D63?text=Produit';

function formatPrice(value) {
    return `${Number(value).toFixed(2)} €`;
}

export default function ShopShow({ product }) {
    const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? null);
    const [cartItems, setCartItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        setCartItems(getCart());

        return subscribeCart((items) => {
            setCartItems(items);
        });
    }, []);

    const selectedVariant = useMemo(
        () => (product.variants ?? []).find((variant) => variant.id === selectedVariantId) ?? null,
        [product.variants, selectedVariantId],
    );

    const currentPrice = selectedVariant?.price ?? product.base_price;
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    const handleAddToCart = () => {
        upsertCartItem({
            product_id: product.id,
            variant_id: selectedVariant?.id ?? null,
            variant_label: selectedVariant?.label ?? null,
            quantity: 1,
            unit_price: currentPrice,
            name: product.name,
            brand: product.name,
        });

        setIsCartOpen(true);
    };

    return (
        <>
            <Head title={product.name} />

            <div className="min-h-screen bg-[#f5f5f3] text-zinc-800">
                <PublicNavbar />

                <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                    <div className="mb-8 flex items-center justify-between">
                        <Link href={route('shop.index')} className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                            <ChevronLeft className="h-4 w-4" />
                            Retour boutique
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsCartOpen(true)}
                            className="relative inline-flex items-center gap-2 rounded-full border border-zinc-400 px-4 py-2 text-sm font-medium"
                        >
                            <ShoppingCart className="h-4 w-4" />
                            Panier
                            {cartCount > 0 ? <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white">{cartCount}</span> : null}
                        </button>
                    </div>

                    <div className="grid gap-8 rounded-3xl bg-white p-6 shadow-sm lg:grid-cols-2 lg:p-10">
                        <div className="rounded-3xl bg-[#e6e7de] p-8">
                            <img src={product.image_url || defaultImage} alt={product.name} className="mx-auto w-full max-w-lg object-contain" />
                        </div>

                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-[#bd7f6f]">{product.name}</p>
                            <h1 className="mt-2 text-3xl font-semibold text-zinc-800">{product.description || product.name}</h1>

                            <p className="mt-6 text-3xl font-bold text-zinc-700">{formatPrice(currentPrice)}</p>

                            {product.variants?.length ? (
                                <div className="mt-6 space-y-2">
                                    <p className="text-sm font-medium text-zinc-600">Choisissez une option</p>
                                    <div className="flex flex-wrap gap-3">
                                        {product.variants.map((variant) => (
                                            <button
                                                key={variant.id}
                                                type="button"
                                                onClick={() => setSelectedVariantId(variant.id)}
                                                className={`rounded-full border px-4 py-2 text-sm ${
                                                    variant.id === selectedVariantId
                                                        ? 'border-zinc-900 bg-zinc-900 text-white'
                                                        : 'border-zinc-300 text-zinc-700'
                                                }`}
                                            >
                                                {variant.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ) : null}

                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="mt-8 w-full rounded-full border border-zinc-400 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-900 hover:text-white"
                            >
                                Ajouter au panier
                            </button>
                        </div>
                    </div>
                </section>

                <CartPanel open={isCartOpen} onClose={() => setIsCartOpen(false)} items={cartItems} />
            </div>
        </>
    );
}
