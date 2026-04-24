import PublicNavbar from '@/Components/PublicNavbar';
import { HoverSliderDemo } from '@/components/ui/animated-slideshow-demo';
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo';

const newsItems = [
    {
        title: '🎉 Convention Light Foursquare',
        description: 'Un moment puissant de louange, d’enseignement et d’unité entre les jeunes.',
        image: '/images/Convention 2025.jpg',
    },
    {
        title: '📖 Formation & Impact',
        description: 'Des enseignements pratiques pour équiper une génération solide dans la foi.',
        image: '/images/Programme 1.jpg',
    },
    {
        title: '🎶 Worship & Adoration',
        description: 'Une atmosphère de feu où les jeunes expriment leur amour pour Dieu à travers la musique et la danse.',
        image: '/images/Programme 2.jpg',
    },
];


const communityPhotos = [
    '/images/image 6.jpg',
    '/images/image 2.jpg',
    '/images/image 3.jpg',
    '/images/image 4.jpg',
];

const legendsSpotlight = [
    {
        name: 'Sarah N.',
        role: 'Worship',
        image: '/images/image 1.jpg',
        className: 'md:col-span-3 md:row-span-2',
    },
    {
        name: 'Jordan K.',
        role: 'Media',
        image: '/images/image 2.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        name: 'Grace M.',
        role: 'Com',
        image: '/images/image 3.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        name: 'David T.',
        role: 'Intercession',
        image: '/images/image 4.jpg',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        name: 'Naomi L.',
        role: 'Events',
        image: '/images/image 5.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        name: 'Joel P.',
        role: 'Accueil',
        image: '/images/image 6.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
];

export default function HomePage({ products = [] }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

            <section className="relative overflow-hidden bg-[#f89b21] pb-12 pt-8 text-[#f6efb6] md:pb-16 md:pt-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(38,13,16,0.72),transparent_42%),radial-gradient(circle_at_70%_100%,rgba(18,6,8,0.82),transparent_48%)]" />
                <div className="relative mx-auto grid max-w-7xl gap-8 px-4 md:px-6 xl:grid-cols-[0.95fr_1.3fr]">
                    <div className="flex flex-col justify-end">
                        <p className="font-heading text-3xl font-extrabold uppercase leading-none md:text-5xl">
                            Meet your legend
                        </p>
                        <p className="mt-5 max-w-md text-sm font-semibold uppercase tracking-wide text-[#ffd177] md:text-base">
                            Nous mettons en lumière les talents Light Foursquare pour une nouvelle génération qui
                            impacte.
                        </p>
                    </div>

                    <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-6">
                        {legendsSpotlight.map((legend) => (
                            <article
                                key={legend.name}
                                className={`group relative overflow-hidden border border-[#9d4a11] bg-[#3a1811]/80 ${legend.className}`}
                            >
                                <img
                                    src={legend.image}
                                    alt={legend.name}
                                    className="h-full w-full object-cover opacity-75 sepia transition duration-300 group-hover:scale-105 group-hover:opacity-95"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2a0d0a]/85 via-transparent to-transparent" />
                                <div className="absolute bottom-3 left-3">
                                    <span className="inline-flex bg-[#2e130d]/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#f6efb6]">
                                        {legend.role}
                                    </span>
                                    <p className="mt-1 text-sm font-bold uppercase leading-tight text-[#fff7c2] md:text-base">
                                        {legend.name}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f4f4] pb-8 pt-8 md:pt-12">
                <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
                    <div className="relative mx-auto w-full max-w-[520px]">
                        <div className="absolute left-0 top-14 h-[80%] w-[82%] bg-[#ded7bf]" />
                        <div
                            className="absolute right-0 top-0 h-64 w-72 bg-gradient-to-b from-[#eb7036] via-[#f4d767] to-[#e9ca64]"
                            style={{
                                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%)',
                            }}
                        />
                        <div
                            className="relative mx-auto aspect-[4/5] w-[78%] overflow-hidden"
                            style={{
                                clipPath:
                                    'polygon(28% 3%, 78% 0%, 98% 20%, 91% 66%, 57% 95%, 25% 88%, 8% 63%, 0% 47%, 8% 29%)',
                            }}
                        >
                            <img
                                src="/images/izo pro.jpg"
                                alt="Membres en communion"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <h1 className="font-heading text-3xl font-extrabold leading-[1.15] text-black md:text-4xl lg:text-[2.65rem]">
                            Nouveau dans Light Foursquare ?<br />
                            Bienvenue dans la famille !
                        </h1>
                        <p className="mt-6 text-base leading-7 text-black/85 md:text-lg">
                            Light Foursquare est un mouvement de jeunes chrétiens engagés, appelés à grandir ensemble
                            dans la foi, à servir avec passion et à impacter leur génération pour Christ. Ici, chaque
                            talent compte, chaque appel est important, et chaque jeune a une place dans le plan de
                            Dieu.
                        </p>
                        <p className="text-spiritual mt-4 text-[1.05rem] leading-7 text-black/85">
                            Dieu t’a-t-il donné une passion, un don ou une vision ? Alors cette maison est aussi la
                            tienne.
                        </p>

                        <a
                            href="#"
                            className="group mt-10 inline-flex flex-col text-base font-semibold text-black transition hover:text-[#5b4ab8] md:text-lg"
                        >
                            <span className="inline-flex items-center gap-3">
                                👉 Rejoins le mouvement Light Foursquare
                                <span className="text-xl text-[#6a58c7] transition group-hover:translate-x-1">→</span>
                            </span>
                            <span className="mt-3 h-[3px] w-full bg-gradient-to-r from-[#1f4b84] via-[#c2a43f] to-[#6a58c7]" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f4f4] py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-[#260d10] md:text-4xl">
                        🔥 Actualités
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {newsItems.map((item) => (
                            <article key={item.title} className="group">
                                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-heading mt-5 text-xl font-bold leading-snug text-[#260d10] md:text-2xl">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-[0.98rem] leading-7 text-slate-700">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <HoverSliderDemo />
                </div>
            </section>

            <section className="bg-[#f4f4f4] py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">📸 Moments Light</p>
                    <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">
                        Nos derniers souvenirs en images
                    </h2>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {communityPhotos.map((photo, index) => (
                            <article key={photo} className="overflow-hidden rounded-2xl bg-white shadow-md">
                                <img
                                    src={photo}
                                    alt={`Moment Light Foursquare ${index + 1}`}
                                    className="h-64 w-full object-cover transition duration-300 hover:scale-105"
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">🛍️ Boutique Light</p>
                    <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">
                        Collection Foursquare
                    </h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                        Les produits affichés ici viennent directement de la boutique (seeders inclus) : design
                        épuré, infos claires, navigation en slide.
                    </p>

                    <a
                        href="/shop"
                        className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-black transition hover:text-[#5b4ab8] md:text-lg"
                    >
                        👉 Voir la boutique <span className="text-xl text-[#6a58c7]">→</span>
                    </a>

                    <div className="mt-8">
                        <OffersCarouselDemo products={products} />
                    </div>
                </div>
            </section>
        </div>
    );
}
