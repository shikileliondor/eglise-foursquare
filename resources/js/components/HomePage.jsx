import PublicNavbar from '@/Components/PublicNavbar'
import { HoverSliderDemo } from '@/components/ui/animated-slideshow-demo'
import { ExpandableGallery } from '@/components/ui/expandable-gallery'
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo'
import { MotionSection } from '@/components/ui/motion-section'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { hoverLift, staggerContainer, staggerItem } from '@/lib/animations'

const communityPhotos = [
    '/images/image 6.jpg',
    '/images/image 2.jpg',
    '/images/image 3.jpg',
    '/images/image 4.jpg',
]

// const fallbackNewsImage = 'https://placehold.co/1200x700/E7E8DF/6D6D63?text=Actualite'

function formatDate(dateString) {
    if (!dateString) return 'Date à confirmer'
    return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}

export default function HomePage({ products = [], latestNews = [] }) {
    const [activeNewsIndex, setActiveNewsIndex] = useState(0)

    const goToPreviousNews = () => {
        setActiveNewsIndex((currentIndex) =>
            currentIndex === 0 ? latestNews.length - 1 : currentIndex - 1
        )
    }

    const goToNextNews = () => {
        setActiveNewsIndex((currentIndex) =>
            currentIndex === latestNews.length - 1 ? 0 : currentIndex + 1
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

            {/* ─── HERO ─── */}
<section className="relative overflow-hidden bg-white">
    {/* Fond blanc premium + lumière dorée */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(244,183,57,0.20),transparent_28%),linear-gradient(110deg,#ffffff_0%,#ffffff_58%,#F8F4EC_100%)]" />

    {/* Arcs dorés discrets derrière la carte */}
    <div className="pointer-events-none absolute right-[-120px] top-[-180px] h-[620px] w-[620px] rounded-full border border-[#F4B739]/20" />
    <div className="pointer-events-none absolute right-[-80px] top-[-140px] h-[540px] w-[540px] rounded-full border border-[#F4B739]/15" />
    <div className="pointer-events-none absolute right-[-40px] top-[-100px] h-[460px] w-[460px] rounded-full border border-[#F4B739]/10" />

    {/* Silhouette urbaine très discrète */}
    <div
        className="absolute bottom-0 right-0 h-[190px] w-[70%] opacity-[0.16]"
        style={{
            backgroundImage: "url('/images/hero-city.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
        }}
    />

    <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <MotionSection delay={0.15}>
            <div className="max-w-[720px]">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#C58A12] md:text-sm">
                    Église Foursquare Côte d’Ivoire
                </p>

                <div className="mb-9 h-[3px] w-16 bg-[#F4B739]" />

                <h1 className="font-serif text-[42px] font-bold leading-[1.03] tracking-[-0.045em] text-[#06233F] md:text-[62px] lg:text-[76px]">
                    Convention Nationale 2026
                    <br />
                    <span className="text-[#D49A19]">
                        de l’Église Foursquare
                    </span>
                    <br />
                    <span className="text-[#D49A19]">
                        Côte d’Ivoire
                    </span>
                </h1>

                <p className="mt-8 max-w-[640px] text-[17px] font-medium leading-8 text-[#102033]/75 md:text-[20px]">
                    Un temps de louange, de prière, de formation
                    <br className="hidden sm:block" />
                    et d’envoi en mission pour impacter notre nation.
                </p>

                <a
                    href="/communiques/convention-nationale-2026"
                    className="mt-9 inline-flex items-center gap-5 border-b-2 border-[#F4B739] pb-2 font-serif text-[20px] font-bold text-[#06233F] transition hover:text-[#C58A12]"
                >
                    Lire le communiqué
                    <span className="text-3xl font-light text-[#D49A19]">→</span>
                </a>

                <div className="mt-12 flex items-center gap-4">
                    <span className="h-4 w-4 rounded-full bg-[#F4B739]" />
                    <span className="h-4 w-4 rounded-full bg-[#06233F]/14" />
                    <span className="h-4 w-4 rounded-full bg-[#06233F]/14" />
                    <span className="h-4 w-4 rounded-full bg-[#06233F]/14" />
                </div>
            </div>
        </MotionSection>

        <MotionSection delay={0.25}>
            <div className="relative hidden min-h-[430px] items-center justify-center lg:flex">
                <div className="absolute h-[360px] w-[360px] rounded-full bg-[#F4B739]/20 blur-3xl" />

                <img
                    src="/images/afiche.jpg"
                    alt="Côte d’Ivoire - Église Foursquare"
                    className="relative z-10 w-[420px] max-w-full object-contain drop-shadow-[0_35px_65px_rgba(180,120,20,0.28)] xl:w-[500px]"
                />
            </div>
        </MotionSection>
    </div>

    {/* Ligne or en bas */}
    <div className="relative h-2 bg-[#F4B739]" />
</section>

            {/* ─── BIENVENUE ─── */}
            <MotionSection>
                <section className="bg-[#f4f4f4] pb-8 pt-8 md:pt-12">
                    <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-2">
                        <div className="relative mx-auto w-full max-w-[520px]">
                            <div className="absolute left-0 top-14 h-[80%] w-[82%] bg-[#ded7bf]" />
                            <div
                                className="absolute right-0 top-0 h-64 w-72 bg-gradient-to-b from-[#eb7036] via-[#f4d767] to-[#e9ca64] [clip-path:polygon(20%_0%,100%_0%,100%_100%,0%_100%,0%_30%)]"
                            />
                            <div
                                className="relative mx-auto aspect-[4/5] w-[78%] overflow-hidden [clip-path:polygon(28%_3%,78%_0%,98%_20%,91%_66%,57%_95%,25%_88%,8%_63%,0%_47%,8%_29%)]"
                            >
                                <img src="/images/izo pro.jpg" alt="Membres en communion" className="h-full w-full object-cover" />
                            </div>
                        </div>
                        <div className="max-w-xl">
                            <h1 className="font-heading text-3xl font-extrabold leading-[1.15] text-black md:text-4xl lg:text-[2.65rem]">
                                Bienvenue dans la famille Light !
                            </h1>
                            <p className="mt-6 text-base leading-7 text-black/85 md:text-lg">
                                Light Foursquare rassemble les jeunes chrétiens appelés à grandir dans la foi, servir avec passion et impacter leur génération pour Christ.
                            </p>
                            <p className="mt-4 text-[1.05rem] leading-7 text-black/85">
                                Dieu t'a-t-il donné une passion, un don ou une vision ? Alors cette maison est aussi la tienne.
                            </p>
                            <Link href={route('about')} className="group mt-10 inline-flex flex-col text-base font-semibold text-black transition hover:text-[#5b4ab8] md:text-lg">
                                <span className="inline-flex items-center gap-3">
                                    Rejoins le mouvement Light Foursquare
                                    <span className="text-xl text-[#6a58c7] transition group-hover:translate-x-1">→</span>
                                </span>
                                <span className="mt-3 h-[3px] w-full bg-gradient-to-r from-[#1f4b84] via-[#c2a43f] to-[#6a58c7]" />
                            </Link>
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* ─── ACTUALITÉS ─── */}
            <MotionSection>
                <section className="bg-[#f4f4f4] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-[#260d10] md:text-4xl">
                            Actualités
                        </h2>

                        {latestNews.length === 0 ? (
                            <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
                                Aucune actualité publiée pour le moment.
                            </div>
                        ) : (
                            <>
                                <div className="mt-10 md:hidden">
                                    <div className="overflow-hidden rounded-2xl">
                                        <div
                                            className="flex transition-transform duration-300 ease-out"
                                            style={{ transform: `translateX(-${activeNewsIndex * 100}%)` }}
                                        >
                                            {latestNews.map((item) => (
                                                <div key={item.id} className="w-full shrink-0">
                                                    <Link
                                                        href={route('news.show', item.slug)}
                                                        className="group block overflow-hidden rounded-2xl bg-white shadow-sm"
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
                                                            <h3 className="font-heading mt-3 text-xl font-bold leading-snug text-[#260d10]">
                                                                {item.title}
                                                            </h3>
                                                            <p className="mt-4 inline-flex items-center text-sm font-semibold text-[#5b4ab8]">
                                                                Lire l&apos;actualité <span className="ml-2 text-base">→</span>
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {latestNews.length > 1 && (
                                        <div className="mt-5 flex items-center justify-between gap-4">
                                            <button
                                                type="button"
                                                onClick={goToPreviousNews}
                                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#260d10]/20 bg-white text-xl text-[#260d10] transition hover:border-[#260d10] hover:bg-[#260d10] hover:text-white"
                                                aria-label="Actualité précédente"
                                            >
                                                ←
                                            </button>

                                            <div className="flex items-center gap-2">
                                                {latestNews.map((item, index) => (
                                                    <span
                                                        key={item.id}
                                                        className={`h-2.5 w-2.5 rounded-full transition ${
                                                            index === activeNewsIndex ? 'bg-[#260d10]' : 'bg-[#260d10]/20'
                                                        }`}
                                                    />
                                                ))}
                                            </div>

                                            <button
                                                type="button"
                                                onClick={goToNextNews}
                                                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#260d10]/20 bg-white text-xl text-[#260d10] transition hover:border-[#260d10] hover:bg-[#260d10] hover:text-white"
                                                aria-label="Actualité suivante"
                                            >
                                                →
                                            </button>
                                        </div>
                                    )}
                                </div>

                                <motion.div
                                    className="mt-10 hidden gap-8 md:grid md:grid-cols-2 xl:grid-cols-3"
                                    variants={staggerContainer}
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true, margin: '-60px' }}
                                >
                                    {latestNews.map((item, index) => (
                                        <motion.div
                                            key={item.id}
                                            variants={staggerItem}
                                            {...hoverLift}
                                            className={`max-w-[22rem] ${
                                                index % 2 === 0 ? 'mr-auto' : 'ml-auto'
                                            } md:max-w-none md:mx-0`}
                                        >
                                            <Link
                                                href={route('news.show', item.slug)}
                                                className="group block overflow-hidden rounded-2xl bg-white shadow-sm"
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
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </>
                        )}
                    </div>
                </section>
            </MotionSection>

            {/* ─── HOVER SLIDER ─── */}
            <MotionSection>
                <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <HoverSliderDemo />
                    </div>
                </section>
            </MotionSection>

            {/* ─── MOMENTS LIGHT ─── */}
            <MotionSection>
                <section className="bg-[#f4f4f4] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">Moments Light</p>
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">
                            Nos derniers souvenirs
                        </h2>
                        <motion.div
                            className="mt-10"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            <motion.div variants={staggerItem} {...hoverLift}>
                                <ExpandableGallery images={communityPhotos} />
                            </motion.div>
                        </motion.div>
                    </div>
                </section>
            </MotionSection>

            {/* ─── BOUTIQUE ─── */}
            <MotionSection>
                <section className="bg-slate-50 py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        {/* <p className="text-xs font-semibold uppercase tracking-[0.9em] text-[#260d10]"> Boutique Light</p> */}
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">
                            Boutique Light
                        </h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                            Retrouvez des articles exclusifs Light Foursquare pour affirmer votre identité en tant que jeune chrétien engagé.
                        </p>
                        <Link href={route('shop.index')} className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-black transition hover:text-[#5b4ab8] md:text-lg">
                            Voir la boutique <span className="text-xl text-[#6a58c7]">→</span>
                        </Link>
                        <div className="mt-8">
                            <OffersCarouselDemo products={products} />
                        </div>
                    </div>
                </section>
            </MotionSection>

        </div>
    )
}
