import PublicNavbar from '@/Components/PublicNavbar';
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo';

const newsItems = [
    {
        title: '🎉 Convention Light Foursquare',
        description: 'Un moment puissant de louange, d’enseignement et d’unité entre les jeunes.',
        image: '/images/608543647_122273472410024944_8392459524320287299_n.jpg',
    },
    {
        title: '📖 Formation & Impact',
        description: 'Des enseignements pratiques pour équiper une génération solide dans la foi.',
        image: '/images/639079525_122280288938024944_3922748685152950688_n.jpg',
    },
    {
        title: '🎶 Worship & Adoration',
        description: 'Une atmosphère de feu où les jeunes expriment leur amour pour Dieu à travers la musique et la danse.',
        image: '/images/608520160_122273472464024944_5161898512522429836_n.jpg',
    },
];


const communityPhotos = [
    '/images/591992006_122268300422024944_1538269245198738579_n.jpg',
    '/images/585543874_122267074376024944_6091484358103050074_n.jpg',
    '/images/534914343_122251830626024944_7969414786307138774_n.jpg',
    '/images/626284850_122277919310024944_5243730919462778652_n.jpg',
];

const visionItems = [
    'Élever une génération enracinée en Christ',
    'Développer les dons et les talents des jeunes',
    'Créer une communauté unie et engagée',
    'Impacter l’église et la société par l’Évangile',
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

            <section className="bg-[#f4f4f4] pb-8 pt-16 md:pt-20">
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
                                src="/images/591992006_122268300422024944_1538269245198738579_n.jpg"
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

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">🌍 Notre vision</p>
                    <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl lg:text-5xl">
                        Light Foursquare existe pour
                    </h2>

                    <div className="mt-12 grid gap-0 border border-slate-200 md:grid-cols-2 xl:grid-cols-4">
                        {visionItems.map((vision) => (
                            <article key={vision} className="min-h-72 border-b border-slate-200 p-8 md:border-r xl:border-b-0">
                                <p className="text-3xl text-[#260d10]">→</p>
                                <p className="mt-8 text-3xl text-yellow-500">◉</p>
                                <p className="font-heading mt-6 text-2xl font-bold leading-snug text-[#260d10]">{vision}</p>
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
