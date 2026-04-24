import PublicNavbar from '@/Components/PublicNavbar';
import { HoverSliderDemo } from '@/components/ui/animated-slideshow-demo';
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo';
import { Link } from '@inertiajs/react';


const communityPhotos = [
    '/images/image 6.jpg',
    '/images/image 2.jpg',
    '/images/image 3.jpg',
    '/images/image 4.jpg',
];

const legendsSpotlight = [
    {
        // name: 'Sarah N.',
        role: 'Worship',
        image: '/images/image 1.jpg',
        className: 'md:col-span-3 md:row-span-2',
    },
    {
        // name: 'Jordan K.',
        role: 'Media',
        image: '/images/image 7.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        // name: 'Grace M.',
        role: 'Com',
        image: '/images/image 3.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        // name: 'David T.',
        role: 'Intercession',
        image: '/images/image 4.jpg',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        // name: 'Naomi L.',
        role: 'Events',
        image: '/images/image 5.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        // name: 'Joel P.',
        role: 'Accueil',
        image: '/images/image 6.jpg',
        className: 'md:col-span-2 md:row-span-1',
    },
];

const fallbackNewsImage = 'https://placehold.co/1200x700/E7E8DF/6D6D63?text=Actualite';

function formatDate(dateString) {
    if (!dateString) {
        return 'Date à confirmer';
    }

    return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

export default function HomePage({ products = [], latestNews = [] }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

           <section className="relative overflow-hidden bg-white pb-16 pt-12 md:pb-20 md:pt-16">
  {/* Ligne décorative top */}
  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#c96442] via-[#f89b21] to-transparent" />

  <div className="relative mx-auto max-w-7xl px-4 md:px-6">

    {/* Header */}
    <div className="mb-10 flex items-end justify-between border-b border-black/8 pb-8">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#c96442]">
          — Light Foursquare
        </p>
        <h2 className="font-heading text-4xl font-black uppercase leading-[0.92] tracking-tight text-slate-900 md:text-6xl">
          Living God's <br />
          <span className="text-[#c96442]">Holy Truth</span>
        </h2>
      </div>
      <p className="hidden max-w-[240px] text-right text-sm leading-7 text-slate-400 md:block">
        {/* Nous mettons en lumière les talents Light Foursquare pour une nouvelle génération qui impacte.
         */}Light Foursquare au service d'une génération qui impacte.
      </p>
    </div>

    {/* Bento grid */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(2, 200px)',
        gap: '8px',
      }}
    >
      {/* Grande — col 1-5, row 1-2 */}
      <article className="group relative overflow-hidden bg-slate-100" style={{ gridColumn: '1 / 6', gridRow: '1 / 3' }}>
        <img src="/images/image 1.jpg" alt=" N." className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-5 left-5">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Worship</span>
          <p className="text-lg font-black uppercase text-white"></p>
        </div>
        <span className="absolute right-4 top-4 text-[10px] font-bold text-white/25">01</span>
      </article>

      {/* col 6-9, row 1 */}
      <article className="group relative overflow-hidden bg-slate-100" style={{ gridColumn: '6 / 9', gridRow: '1 / 2' }}>
        <img src="/images/image 9.jpg" alt="Jordan K." className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Media</span>
          <p className="text-sm font-black uppercase text-white"></p>
        </div>
        <span className="absolute right-3 top-3 text-[10px] font-bold text-white/25">02</span>
      </article>

      {/* col 9-13, row 1 */}
      <article className="group relative overflow-hidden bg-slate-100" style={{ gridColumn: '9 / 13', gridRow: '1 / 2' }}>
        <img src="/images/image 3.jpg" alt="Grace M." className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Com</span>
          <p className="text-sm font-black uppercase text-white"></p>
        </div>
        <span className="absolute right-3 top-3 text-[10px] font-bold text-white/25">03</span>
      </article>

      {/* col 6-8, row 2 */}
      <article className="group relative overflow-hidden bg-slate-100" style={{ gridColumn: '6 / 8', gridRow: '2 / 3' }}>
        <img src="/images/image 4.jpg" alt="David T." className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Intercession</span>
          <p className="text-sm font-black uppercase text-white"></p>
        </div>
        <span className="absolute right-3 top-3 text-[10px] font-bold text-white/25">04</span>
      </article>

      {/* col 8-10, row 2 */}
      <article className="group relative overflow-hidden bg-slate-100" style={{ gridColumn: '8 / 10', gridRow: '2 / 3' }}>
        <img src="/images/image 5.jpg" alt="Naomi L." className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Events</span>
          <p className="text-sm font-black uppercase text-white"></p>
        </div>
        <span className="absolute right-3 top-3 text-[10px] font-bold text-white/25">05</span>
      </article>

      {/* col 10-13, row 2 */}
      <article className="group relative overflow-hidden bg-slate-100" style={{ gridColumn: '10 / 13', gridRow: '2 / 3' }}>
        <img src="/images/image 6.jpg" alt="Joel P." className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="mb-1 block text-[9px] font-bold uppercase tracking-[0.25em] text-white/60">Accueil</span>
          <p className="text-sm font-black uppercase text-white"></p>
        </div>
        <span className="absolute right-3 top-3 text-[10px] font-bold text-white/25">06</span>
      </article>
    </div>

    {/* Footer stats */}
    <div className="mt-8 flex items-center justify-between border-t border-black/8 pt-6">
      <div className="flex items-center gap-8">
        {/* <div>
          <p className="text-2xl font-black text-slate-900">6+</p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400">Équipes</p>
        </div>
        <div className="h-8 w-px bg-slate-200" />
        <div>
          <p className="text-2xl font-black text-slate-900">100+</p>
          <p className="text-[10px] uppercase tracking-widest text-slate-400">Membres</p>
        </div> */}
      </div>
      <a href="#" className="group flex items-center gap-3 border border-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-900 transition hover:bg-slate-900 hover:text-white">
        Rejoindre <span className="transition group-hover:translate-x-1">→</span>
      </a>
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
                            {/* Nouveau dans Light Foursquare ?<br /> */}
                            Bienvenue dans la famille  Light !
                        </h1>
                        <p className="mt-6 text-base leading-7 text-black/85 md:text-lg">
                           Light Foursquare rassemble les jeunes chrétiens appelés à grandir dans la foi, servir avec passion et impacter leur génération pour Christ.
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
                                 Rejoins le mouvement Light Foursquare
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
                         Actualités
                    </h2>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {latestNews.map((item) => (
                            <Link
                                key={item.id}
                                href={route('news.show', item.slug)}
                                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                                    <img
                                        src={item.image_url || fallbackNewsImage}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                                        {formatDate(item.published_at)}
                                    </p>
                                    <h3 className="font-heading mt-3 text-xl font-bold leading-snug text-[#260d10] md:text-2xl">
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 inline-flex items-center text-sm font-semibold text-[#5b4ab8]">
                                        Lire l&apos;actualité <span className="ml-2 text-base">→</span>
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {latestNews.length === 0 ? (
                        <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
                            Aucune actualité publiée pour le moment.
                        </div>
                    ) : null}
                </div>
            </section>

            <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <HoverSliderDemo />
                </div>
            </section>

            <section className="bg-[#f4f4f4] py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]"> Moments Light</p>
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
                        Voir la boutique <span className="text-xl text-[#6a58c7]">→</span>
                    </a>

                    <div className="mt-8">
                        <OffersCarouselDemo products={products} />
                    </div>
                </div>
            </section>
        </div>
    );
}
