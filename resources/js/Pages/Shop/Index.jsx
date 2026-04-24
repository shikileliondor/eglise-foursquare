import PublicNavbar from '@/Components/PublicNavbar';
import { addCartItem } from '@/lib/cart';
import { Head, Link } from '@inertiajs/react';
import { Heart } from 'lucide-react';
import { useMemo } from 'react';

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
    const totalProducts = useMemo(() => products.length, [products]);

    const handleAddToCart = async (product) => {
        const firstVariant = (product.variants ?? []).find((variant) => variant.stock > 0);

        await addCartItem({
            product_id: product.id,
            variant_id: firstVariant?.id ?? null,
            quantity: 1,
        });
    };

    return (
        <>
            <Head title="Boutique" />
            <div className="min-h-screen bg-[#f5f5f3] font-sans text-zinc-800">
                <PublicNavbar />

                <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8">
                    <div className="mb-10 text-center">
                        <h1 className="font-heading text-4xl font-extrabold text-zinc-700 sm:text-5xl">Boutique Light</h1>
                        <p className="mx-auto mt-3 max-w-2xl text-xs text-zinc-500 sm:text-sm">
                          Retrouvez des articles Light Foursquare pour affirmer votre identité.
                        </p>
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                        <p className="text-sm text-zinc-500">Showing {totalProducts} products</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                        {products.map((product) => {
                            const minPrice = getMinPrice(product);
                            return (
                                <article key={product.id} className="group">
                                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[#e6e7de] p-3 sm:rounded-2xl sm:p-5">
                                        <img src={product.image_url || defaultImage} alt={product.name} className="h-full w-full object-contain transition duration-500 group-hover:scale-105" />
                                        <button type="button" className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-zinc-400 sm:right-3 sm:top-3 sm:h-8 sm:w-8">
                                            <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                        </button>
                                    </div>

                                    <div className="mt-3 sm:mt-4">
                                        <p className="text-xs font-bold uppercase tracking-wide text-[#bd7f6f]">{product.name}</p>
                                        <Link href={route('shop.show', product.slug)} className="mt-1 line-clamp-2 text-xs text-zinc-600 hover:underline sm:text-sm">
                                            {product.description || product.name}
                                        </Link>
                                        <p className="mt-2 text-base text-zinc-600 sm:mt-4 sm:text-lg">{formatPrice(minPrice)}</p>

                                        <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2">
                                            <button
                                                type="button"
                                                onClick={() => handleAddToCart(product)}
                                                className="w-full rounded-full border border-zinc-400 px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-900 hover:text-white sm:px-4 sm:py-2 sm:text-sm"
                                            >
                                                Ajouter au panier
                                            </button>

                                            <Link
                                                href={route('cart.index')}
                                                className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-zinc-600 transition hover:border-zinc-500 hover:text-zinc-900 sm:px-4 sm:py-2 sm:text-sm"
                                            >
                                                Voir panier
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

            </div>
        </>
    );
}
