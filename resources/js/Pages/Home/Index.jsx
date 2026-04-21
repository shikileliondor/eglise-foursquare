import { Head, Link } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

const formatPrice = (price) =>
    new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'XOF',
        maximumFractionDigits: 0,
    }).format(price || 0);

const missionCards = [
    {
        title: 'Énergie collective',
        text: 'Un mouvement qui rassemble les jeunes autour d’une foi vivante, d’une créativité assumée et d’un impact concret.',
        image:
            'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80',
    },
    {
        title: 'Spiritualité moderne',
        text: 'Une expression contemporaine, esthétique et authentique de la lumière de Dieu dans la ville, la culture et les générations.',
        image:
            'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=80',
    },
];

export default function HomeIndex({ products = [], latestNews = [], convention = null }) {
    return (
        <PublicLayout>
            <Head title="Accueil" />

            <section className="relative isolate overflow-hidden bg-slate-50">
                <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-amber-300/30 blur-3xl" />
                <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-indigo-200/50 blur-3xl" />

                <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-14 pt-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-8 lg:px-8 lg:pb-20 lg:pt-24">
                    <div className="relative z-10 lg:col-span-6">
                        <p className="inline-flex rounded-full border border-slate-300/70 bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600">
                            {convention?.year ? `Light Convention ${convention.year}` : 'Light Convention'}
                        </p>

                        <h1 className="mt-6 max-w-2xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                            La lumière en mouvement.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Light Foursquare connecte foi, jeunesse et excellence créative pour vivre une convention immersive et commander les articles officiels via WhatsApp.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/convention"
                                className="inline-flex items-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                            >
                                Voir la convention
                            </Link>
                            <Link
                                href="/shop"
                                className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:border-slate-500"
                            >
                                Ouvrir la boutique
                            </Link>
                        </div>
                    </div>

                    <div className="relative z-10 lg:col-span-6">
                        <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4">
                            <div className="col-span-4 row-span-6 overflow-hidden rounded-[2rem] bg-slate-200">
                                <img
                                    src={convention?.poster || 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1200&q=80'}
                                    alt={convention?.title || 'Light Convention'}
                                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-2 row-span-3 overflow-hidden rounded-[1.5rem] bg-slate-100">
                                <img
                                    src="https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=700&q=80"
                                    alt="Communauté Light"
                                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                                />
                            </div>
                            <div className="col-span-2 row-span-3 rounded-[1.5rem] bg-gradient-to-br from-amber-300 via-amber-200 to-indigo-200 p-4 text-slate-900 shadow-xl shadow-amber-200/40">
                                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-700">Prochaine édition</p>
                                <p className="mt-3 text-xl font-black leading-tight">
                                    {convention?.title || 'Convention Light'}
                                </p>
                                <p className="mt-2 text-sm font-medium text-slate-700">
                                    {convention?.location || 'Abidjan'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
                <div className="lg:col-span-5">
                    <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 p-1">
                        <img
                            src="https://images.unsplash.com/photo-1509099863731-ef4bff19e808?auto=format&fit=crop&w=1100&q=80"
                            alt="Qui est Light"
                            className="h-full min-h-[320px] w-full rounded-[1.75rem] object-cover opacity-85"
                        />
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-300/80 blur-md" />
                    </div>
                </div>
                <div className="self-center lg:col-span-7 lg:pl-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Qui est Light</p>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                        Un mouvement de jeunesse, foi et création.
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700">
                        Light Foursquare est une plateforme vivante qui active les talents, crée des rassemblements marquants et traduit la spiritualité dans un langage visuel moderne, accessible et fort.
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 px-6 py-10 text-white sm:px-10 lg:px-14">
                    <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />
                    <div className="grid gap-8 lg:grid-cols-3 lg:items-end">
                        <div className="lg:col-span-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Convention</p>
                            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                                {convention?.title || 'Light Convention'}
                            </h2>
                            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                                Une expérience éditoriale, spirituelle et artistique où toute une génération se retrouve pour s’élever, se former et célébrer ensemble.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3 text-sm">
                                <span className="rounded-full border border-white/30 px-4 py-2">{convention?.start_date || 'Date à venir'}</span>
                                <span className="rounded-full border border-white/30 px-4 py-2">{convention?.location || 'Abidjan, Côte d’Ivoire'}</span>
                                <span className="rounded-full border border-white/30 px-4 py-2">Thème : Walk in Light</span>
                            </div>
                        </div>
                        <div className="lg:justify-self-end">
                            <Link
                                href="/convention"
                                className="inline-flex rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-200"
                            >
                                Réserver ma place
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Produits</p>
                        <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Boutique officielle</h2>
                    </div>
                    <Link href="/shop" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">Tout voir →</Link>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {products.length > 0 ? products.map((product) => (
                        <article
                            key={product.id}
                            className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={product.image_url || 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'}
                                    alt={product.name}
                                    className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-3 p-5">
                                <h3 className="text-lg font-extrabold text-slate-900">{product.name}</h3>
                                <p className="line-clamp-2 text-sm text-slate-600">{product.description}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <p className="text-base font-black text-slate-950">{formatPrice(product.base_price)}</p>
                                    <Link href={`/shop/${product.slug}`} className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700">
                                        Commander
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

            <section className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Communauté & mission</p>
                    <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Construire une génération alignée et lumineuse.</h2>
                </div>

                {missionCards.map((card, index) => (
                    <article key={card.title} className="grid items-center gap-6 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10">
                        <div className={`overflow-hidden rounded-[1.5rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                            <img src={card.image} alt={card.title} className="h-[280px] w-full object-cover transition duration-700 hover:scale-105" />
                        </div>
                        <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                            <h3 className="text-2xl font-black text-slate-950">{card.title}</h3>
                            <p className="mt-4 text-base leading-relaxed text-slate-700">{card.text}</p>
                        </div>
                    </article>
                ))}
            </section>

            <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <div className="mb-8 flex items-end justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">Contenu</p>
                        <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Actualités & ressources</h2>
                    </div>
                    <Link href="/news" className="text-sm font-semibold text-slate-700 transition hover:text-slate-950">Voir toutes les news →</Link>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                    {latestNews.length > 0 ? latestNews.map((item) => (
                        <article key={item.id} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="overflow-hidden">
                                <img
                                    src={item.image_url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80'}
                                    alt={item.title}
                                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="space-y-3 p-5">
                                <h3 className="line-clamp-2 text-lg font-bold text-slate-900">{item.title}</h3>
                                <Link href={`/news/${item.slug}`} className="inline-flex text-sm font-semibold text-slate-700 transition hover:text-slate-950">
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

            <section className="mx-auto w-full max-w-7xl px-4 pb-8 pt-4 sm:px-6 lg:px-8 lg:pb-12">
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-amber-200 via-white to-indigo-200 px-6 py-12 ring-1 ring-slate-200 sm:px-10">
                    <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-slate-900/10 blur-2xl" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">Rejoins le mouvement</p>
                    <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
                        Participe à la convention ou commande ton kit officiel maintenant.
                    </h2>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            href="/convention"
                            className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
                        >
                            Je m’inscris
                        </Link>
                        <a
                            href="https://wa.me/2250000000000"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-400"
                        >
                            Commander via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
