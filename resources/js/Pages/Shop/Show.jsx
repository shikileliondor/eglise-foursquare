import PublicNavbar from '@/Components/PublicNavbar';
import { addCartItem } from '@/lib/cart';
import { Head, Link, router } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { useMemo, useState } from 'react';

const defaultImage = 'https://placehold.co/700x700/E7E8DF/6D6D63?text=Produit';

function formatPrice(value) {
    return `${Number(value).toFixed(2)} €`;
}

function buildWhatsAppUrl(phone, product, variant) {
    if (!phone) return null;

    const selectedVariantLabel = variant?.label ? ` (${variant.label})` : '';
    const message = `Bonjour, je souhaite commander ${product.name}${selectedVariantLabel}.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function ShopShow({ product, otherProducts = [], whatsappPhone = '' }) {
    const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id ?? null);

    const selectedVariant = useMemo(
        () => (product.variants ?? []).find((variant) => variant.id === selectedVariantId) ?? null,
        [product.variants, selectedVariantId],
    );

    const currentPrice = selectedVariant?.price ?? product.base_price;
    const whatsappUrl = buildWhatsAppUrl(whatsappPhone, product, selectedVariant);

    const handleAddToCart = async () => {
        await addCartItem({
            product_id: product.id,
            variant_id: selectedVariant?.id ?? null,
            quantity: 1,
        });
        router.visit(route('cart.index'));
    };

    return (
        <>
            <Head title={product.name} />

            <div className="min-h-screen overflow-x-hidden bg-[#f5f5f3] text-zinc-800">
                <PublicNavbar />

                <section className="mx-auto max-w-6xl px-4 pb-10 pt-24 sm:px-6 lg:px-8">
                    <div className="mb-8 flex items-center justify-between">
                        <Link href={route('shop.index')} className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                            <ChevronLeft className="h-4 w-4" />
                            Retour boutique
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 gap-6 rounded-3xl bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-8 lg:p-10">
                        <div className="rounded-3xl bg-[#e6e7de] p-4 sm:p-8">
                            <img src={product.image_url || defaultImage} alt={product.name} className="mx-auto w-full max-w-lg object-contain" />
                        </div>

                        <div>
                            <p className="text-sm font-bold uppercase tracking-wide text-[#bd7f6f]">{product.name}</p>
                            <h1 className="mt-2 text-2xl font-semibold leading-tight text-zinc-800 sm:text-3xl">{product.description || product.name}</h1>

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

                            <div className="mt-8 space-y-3">
                                <button
                                    type="button"
                                    onClick={handleAddToCart}
                                    className="w-full rounded-full border border-zinc-400 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-900 hover:text-white"
                                >
                                    Ajouter au panier
                                </button>

                                {whatsappUrl ? (
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex w-full items-center justify-center rounded-full border border-emerald-500 bg-emerald-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-emerald-600"
                                    >
                                        Commander sur WhatsApp
                                    </a>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    {otherProducts.length ? (
                        <div className="mt-12">
                            <h2 className="text-xl font-semibold text-zinc-800">Voir d&apos;autres produits</h2>
                            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {otherProducts.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={route('shop.show', item.slug)}
                                        className="rounded-2xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-400"
                                    >
                                        <img
                                            src={item.image_url || defaultImage}
                                            alt={item.name}
                                            className="h-44 w-full rounded-xl bg-[#e6e7de] object-contain p-2"
                                        />
                                        <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#bd7f6f]">{item.name}</p>
                                        <p className="mt-1 line-clamp-2 text-sm text-zinc-600">{item.description || item.name}</p>
                                        <p className="mt-2 text-base font-semibold text-zinc-700">{formatPrice(item.base_price)}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </section>
            </div>
        </>
    );
}
