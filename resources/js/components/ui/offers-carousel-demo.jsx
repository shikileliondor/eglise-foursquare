import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const defaultImage = 'https://placehold.co/500x500/E7E8DF/6D6D63?text=Produit';

function formatPrice(price) {
    return `${Number(price).toFixed(2)} €`;
}

const OffersCarouselDemo = ({ products = [] }) => {
    const trackRef = React.useRef(null);

    const scroll = (direction) => {
        if (!trackRef.current) {
            return;
        }

        const amount = trackRef.current.clientWidth * 0.82;
        trackRef.current.scrollBy({
            left: direction === 'right' ? amount : -amount,
            behavior: 'smooth',
        });
    };

    if (products.length === 0) {
        return (
            <div className="rounded-2xl border border-[#d7dbe5] bg-white p-6 text-sm text-slate-500">
                Aucun produit disponible pour le moment.
            </div>
        );
    }

    return (
        <div className="relative rounded-2xl border border-[#d7dbe5] bg-white p-4 md:p-6">
            <div
                ref={trackRef}
                className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
                {products.map((product) => (
                    <article
                        key={product.id}
                        className="w-[230px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                    >
                        <img
                            src={product.image_url || defaultImage}
                            alt={product.name}
                            className="h-36 w-full object-cover"
                        />

                        <div className="space-y-2 p-4">
                            <p className="line-clamp-1 text-sm font-extrabold uppercase text-[#260d10]">{product.name}</p>
                            <p className="line-clamp-2 text-xs text-slate-600">
                                {product.description || 'Produit officiel Light Foursquare.'}
                            </p>
                            <p className="text-sm font-semibold text-slate-800">{formatPrice(product.base_price)}</p>
                            <p className="text-[11px] text-slate-500">
                                {product.variants_count > 0
                                    ? `${product.variants_count} variante(s) disponible(s)`
                                    : 'Stock standard'}
                            </p>
                            <a
                                href={`/shop/${product.slug}`}
                                className="inline-flex text-xs font-semibold text-[#5b4ab8] hover:underline"
                            >
                                Voir le produit →
                            </a>
                        </div>
                    </article>
                ))}
            </div>

            <button
                type="button"
                onClick={() => scroll('left')}
                className="absolute -left-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:flex"
                aria-label="Précédent"
            >
                <ChevronLeft className="h-4 w-4" />
            </button>
            <button
                type="button"
                onClick={() => scroll('right')}
                className="absolute -right-2 top-1/2 hidden -translate-y-1/2 rounded-full border border-slate-200 bg-white p-2 text-slate-700 shadow-sm md:flex"
                aria-label="Suivant"
            >
                <ChevronRight className="h-4 w-4" />
            </button>
        </div>
    );
};

export default OffersCarouselDemo;
