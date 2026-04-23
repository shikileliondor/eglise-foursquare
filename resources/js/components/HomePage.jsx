import PublicNavbar from '@/Components/PublicNavbar';
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo';

const newsItems = [
    {
        title: 'MASA Scène décalée — Un succès total et éclatant !',
        image: '/images/banniere.png',
    },
    {
        title: 'MASA Festival — Conte : Flopy Mendosa ressuscite trois figures historiques du continent africain',
        image: '/images/banniere.png',
    },
    {
        title: 'Khoudia TOURE, danseuse-chorégraphe sénégalaise : “Óró est un spectacle basé sur la parole”',
        image: '/images/banniere.png',
    },
];

const missions = [
    'Soutenir la création et la production de spectacles de qualité.',
    'Renforcer la mobilité artistique et la diffusion des œuvres.',
    'Former les artistes aux métiers du spectacle vivant.',
    'Structurer durablement les arts de la scène en Afrique.',
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

            {/* <section className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-16 md:pb-20">
                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Welcome to Light Foursquare</h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">Youth movement of Foursquare Church</p>
                <button
                    type="button"
                    className="mt-8 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
                >
                    Discover the Convention
                </button>
            </section> */}

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
                                src="/images/banniere.png"
                                alt="Membres de Foursquare en échange"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <h2 className="text-5xl font-black leading-[1.1] text-black md:text-6xl">
                            Nouveau sur Foursquare ?<br />
                            Nous sommes prêts
                            <br />à vous aider !
                        </h2>
                        <p className="mt-8 text-2xl leading-relaxed text-black/90">
                            Foursquare est composé d’un groupe dynamique de leaders servant ensemble, grandissant
                            ensemble et utilisant les dons que Dieu leur a donnés de multiples façons. Dieu vous a-t-il
                            donné une passion ou un objectif ? Alors, nous avons une place pour vous !
                        </p>

                        <a
                            href="#"
                            className="group mt-12 inline-flex flex-col text-xl font-bold text-black transition hover:text-[#5b4ab8]"
                        >
                            <span className="inline-flex items-center gap-3">
                                Impliquez-vous dans Foursquare
                                <span className="text-2xl text-[#6a58c7] transition group-hover:translate-x-1">→</span>
                            </span>
                            <span className="mt-3 h-[3px] w-full bg-gradient-to-r from-[#1f4b84] via-[#c2a43f] to-[#6a58c7]" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="bg-[#f4f4f4] py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <h2 className="text-4xl font-black uppercase tracking-tight text-[#260d10] md:text-5xl">Actualités</h2>

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
                                <h3 className="mt-5 text-3xl font-extrabold leading-tight text-[#260d10]">{item.title}</h3>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#260d10]">Nos missions</p>
                    <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#260d10] md:text-6xl">
                        Marché des arts du spectacle
                    </h2>
                    <p className="mt-5 max-w-3xl text-lg text-slate-600">
                        Le Marché des Arts du Spectacle Africain d’Abidjan (MASA) est une organisation dédiée au
                        développement des artistes et à leur ouverture aux marchés internationaux.
                    </p>

                    <div className="mt-12 grid gap-0 border border-slate-200 md:grid-cols-2 xl:grid-cols-4">
                        {missions.map((mission) => (
                            <article key={mission} className="min-h-72 border-b border-slate-200 p-8 md:border-r xl:border-b-0">
                                <p className="text-4xl text-[#260d10]">→</p>
                                <p className="mt-10 text-4xl text-yellow-500">◉</p>
                                <p className="mt-8 text-3xl font-extrabold leading-tight text-[#260d10]">{mission}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#260d10]">Boutique</p>
                    <h2 className="mt-4 text-4xl font-black uppercase leading-tight text-[#260d10] md:text-5xl">
                        Offres recommandées
                    </h2>
                    <p className="mt-5 max-w-3xl text-lg text-slate-600">
                        Découvrez des hébergements partenaires après la section de nos missions pour préparer votre séjour.
                    </p>

                    <div className="mt-10">
                        <OffersCarouselDemo />
                    </div>
                </div>
            </section>
        </div>
    );
}
