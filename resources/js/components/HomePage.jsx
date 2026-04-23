import DemoFloatingHeader from '@/components/ui/demo-floating-header';

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
            <section className="mx-auto max-w-6xl px-6 py-8 md:py-10">
                <DemoFloatingHeader />
            </section>

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
        </div>
    );
}
