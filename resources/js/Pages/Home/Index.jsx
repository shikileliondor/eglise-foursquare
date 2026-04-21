import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

const formatPrice = (price) =>
    new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        maximumFractionDigits: 0,
    }).format(price || 0);

export default function HomeIndex({ products = [], latestNews = [], convention = null }) {
    return (
        <PublicLayout>
            <Head title="Home" />

            <section className="relative overflow-hidden bg-amber-300">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_40%)]" />
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
                    <div className="relative z-10">
                        <p className="inline-flex rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                            {convention?.year ? `Édition ${convention.year}` : 'Light Convention'}
                        </p>
                        <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                            Une expérience spirituelle et créative qui rassemble la jeunesse.
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-800 sm:text-lg">
                            Light Foursquare connecte vision, foi et excellence. Découvrez le mouvement,
                            la convention et les articles officiels disponibles à la commande WhatsApp.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link href="/convention" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
                                Voir la convention
                            </Link>
                            <Link href="/shop" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 ring-1 ring-slate-300 transition hover:bg-slate-100">
                                Découvrir la boutique
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10">
                        <div className="rounded-3xl bg-white/75 p-4 shadow-2xl shadow-amber-900/20 backdrop-blur">
                            <img
                                src={convention?.poster || 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80'}
                                alt={convention?.title || 'Convention Light'}
                                className="h-[420px] w-full rounded-2xl object-cover"
                            />
                            <div className="mt-4 rounded-2xl bg-slate-950 p-4 text-white">
                                <p className="text-xs uppercase tracking-[0.18em] text-amber-300">Prochaine convention</p>
                                <h3 className="mt-1 text-xl font-extrabold">{convention?.title || 'Light Convention'}</h3>
                                <p className="mt-1 text-sm text-slate-300">{convention?.location || 'Abidjan, Côte d’Ivoire'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid gap-8 lg:grid-cols-3">
                    {[
                        ['Vision claire', 'Présenter Light avec un message fort, inspirant et accessible.'],
                        ['Convention premium', 'Créer un événement moderne, jeune et spirituellement impactant.'],
                        ['Commande simple', 'Acheter les articles via WhatsApp en quelques clics, sans friction.'],
                    ].map(([title, text]) => (
                        <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                            <h3 className="text-xl font-extrabold text-slate-900">{title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-500">Boutique</p>
                        <h2 className="mt-2 text-3xl font-black text-slate-900">Produits en vedette</h2>
                    </div>
                    <Link href="/shop" className="text-sm font-semibold text-slate-700 hover:text-slate-900">Tout voir →</Link>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {products.length > 0 ? products.map((product) => (
                        <article key={product.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                            <img
                                src={product.image_url || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'}
                                alt={product.name}
                                className="h-56 w-full object-cover"
                            />
                            <div className="space-y-3 p-5">
                                <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                                <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
                                <div className="flex items-center justify-between">
                                    <p className="text-base font-extrabold text-slate-950">{formatPrice(product.base_price)}</p>
                                    <Link href={`/shop/${product.slug}`} className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-700">
                                        Voir
                                    </Link>
                                </div>
                            </div>
                        </article>
                    )) : (
                        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500 sm:col-span-2 lg:col-span-3">
                            Les produits seront affichés ici dès leur publication.
                        </p>
                    )}
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-6 flex items-end justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-500">Actualités</p>
                        <h2 className="mt-2 text-3xl font-black text-slate-900">Restez informé</h2>
                    </div>
                    <Link href="/news" className="text-sm font-semibold text-slate-700 hover:text-slate-900">Voir toutes les news →</Link>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                    {latestNews.length > 0 ? latestNews.map((item) => (
                        <article key={item.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                            <img
                                src={item.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'}
                                alt={item.title}
                                className="h-44 w-full object-cover"
                            />
                            <div className="p-5">
                                <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{item.title}</h3>
                                <Link href={`/news/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-slate-700 hover:text-slate-900">
                                    Lire l&apos;article →
                                </Link>
                            </div>
                        </article>
                    )) : (
                        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500 md:col-span-3">
                            Les actualités récentes seront affichées ici.
                        </p>
                    )}
                </div>
            </section>
        </PublicLayout>
    );
}
