import PublicNavbar from '@/Components/PublicNavbar';
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

const visionItems = [
    {
        tag: 'Former',
        title: 'Élever une génération enracinée en Christ',
        description: 'Accompagner chaque jeune dans une foi profonde, authentique et durable.',
        icon: '🌱',
    },
    {
        tag: 'Équiper',
        title: 'Développer les dons et les talents des jeunes',
        description: 'Révéler les potentiels et former des serviteurs utiles pour le Royaume.',
        icon: '✨',
    },
    {
        tag: 'Unir',
        title: 'Créer une communauté unie et engagée',
        description: 'Bâtir une famille spirituelle soudée, active et remplie d’amour fraternel.',
        icon: '🤝',
    },
    {
        tag: 'Impacter',
        title: 'Impacter l’église et la société par l’Évangile',
        description: 'Porter la lumière de Christ dans nos écoles, quartiers et environnements.',
        icon: '🌍',
    },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">🌍 Notre vision</p>
                    <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl lg:text-5xl">
                        Light Foursquare existe pour
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                        Former une jeunesse enracinée en Christ, équipée pour servir et prête à transformer sa génération.
                    </p>

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {visionItems.map((vision) => (
                            <article
                                key={vision.title}
                                className="group min-h-80 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#d0b15d] hover:shadow-[0_20px_38px_rgba(15,23,42,0.12)]"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex rounded-full border border-[#d9c386] bg-[#fff9e8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#725c1f]">
                                        {vision.tag}
                                    </span>
                                    <span className="text-2xl">{vision.icon}</span>
                                </div>
                                <p className="mt-8 text-2xl text-[#260d10] transition duration-300 group-hover:translate-x-1">→</p>
                                <p className="font-heading mt-5 text-2xl font-bold leading-snug text-[#260d10]">{vision.title}</p>
                                <p className="mt-4 text-sm leading-6 text-slate-600">{vision.description}</p>
                            </article>
                        ))}
                    </div>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">🛍️ Boutique Light (optionnel)</p>
                    <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">
                        🎁 Produits & accessoires chrétiens
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-[1.05rem]">
                        Retrouvez des articles conçus pour accompagner votre marche avec Christ et afficher votre
                        identité en tant que jeune Light Foursquare.
                    </p>
                    <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-700 md:text-[1.05rem]">
                        ⭐ Offres spéciales : Réductions sur les événements, packs conventions et produits exclusifs
                        Light Foursquare.
                    </p>

                    <a
                        href="#"
                        className="mt-8 inline-flex items-center gap-3 text-base font-semibold text-black transition hover:text-[#5b4ab8] md:text-lg"
                    >
                        👉 Voir la boutique <span className="text-xl text-[#6a58c7]">→</span>
                    </a>

                    <div className="mt-10">
                        <OffersCarouselDemo />
                    </div>
                </div>
            </section>
        </div>
    );
}
