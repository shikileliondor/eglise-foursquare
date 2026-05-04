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
    {/* Bannière 16:9 sans texte */}
   <div
    className="absolute inset-0"
    style={{
        backgroundImage: "url('/images/bannière.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        backgroundRepeat: 'no-repeat',
    }}
/>

    {/* Voile léger pour garder le texte lisible */}
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/15" />

    {/* Contenu */}
    <div className="relative mx-auto grid min-h-[460px] max-w-7xl items-center px-4 py-12 md:px-6 lg:py-14">
        <MotionSection delay={0.15}>
            <div className="max-w-[560px]">
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C58A12] md:text-xs">
                    Église Foursquare Côte d’Ivoire
                </p>

                <div className="mb-6 h-[2px] w-12 bg-[#F4B739]" />

                <h1 className="font-serif text-[32px] font-bold leading-[1.08] tracking-[-0.035em] text-[#06233F] md:text-[44px] lg:text-[52px]">
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

                <p className="mt-5 max-w-[460px] text-[14px] font-medium leading-7 text-[#102033]/70 md:text-[16px]">
                    Un temps de louange, de prière, de formation
                    <br className="hidden sm:block" />
                    et d’envoi en mission pour impacter notre nation.
                </p>

                <a
                    href="/communiques/convention-nationale-2026"
                    className="mt-6 inline-flex items-center gap-3 border-b-2 border-[#F4B739] pb-1.5 font-serif text-[16px] font-bold text-[#06233F] transition hover:text-[#C58A12] md:text-[18px]"
                >
                    Lire le communiqué
                    <span className="text-2xl font-light text-[#D49A19]">→</span>
                </a>
            </div>
        </MotionSection>
    </div>

    {/* Ligne or en bas */}
    <div className="relative h-2 bg-[#F4B739]" />
</section>

            {/* ─── BIENVENUE ─── */}
 <MotionSection>
    <section className="bg-[#F8F4EC] py-8 md:py-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-[1.55fr_0.85fr]">
            {/* Bloc actualités */}
            <div className="overflow-hidden rounded-sm border border-[#06233F]/10 bg-white shadow-[0_16px_45px_rgba(6,35,63,0.07)]">
                {/* Tabs */}
                <div className="flex items-center border-b border-[#06233F]/10 px-5">
                    {['Actualités', 'Publications', 'Événements', 'Espace presse'].map((tab, index) => (
                        <button
                            key={tab}
                            type="button"
                            className={`relative px-4 py-4 text-xs font-bold ${
                                index === 0
                                    ? 'text-[#06233F]'
                                    : 'text-[#06233F]/65 hover:text-[#06233F]'
                            }`}
                        >
                            {tab}

                            {index === 0 && (
                                <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-[#F4B739]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Liste */}
                <div className="divide-y divide-[#06233F]/10 px-5">
                    {[
                        {
                            day: '10',
                            month: 'MAI 2026',
                            title: 'Avis d’appel aux églises pour la Convention Nationale 2026',
                            desc: 'Date limite d’inscription : 30 juin 2026',
                        },
                        {
                            day: '03',
                            month: 'MAI 2026',
                            title: 'Formation des responsables : Leadership et intégrité',
                            desc: 'Du 15 au 17 mai 2026 à Abidjan',
                        },
                        {
                            day: '26',
                            month: 'AVR. 2026',
                            title: 'Campagne nationale de prière et de jeûne',
                            desc: 'Du 1er au 31 mai 2026 — Un mois pour notre nation',
                        },
                        {
                            day: '18',
                            month: 'AVR. 2026',
                            title: "Nouvelles implantations d’églises en 2026",
                            desc: '5 nouvelles œuvres lancées en Côte d’Ivoire',
                        },
                    ].map((item) => (
                        <a
                            key={item.title}
                            href="/actualites"
                            className="group grid grid-cols-[58px_1fr_20px] items-center gap-4 py-4"
                        >
                            <div className="text-center">
                                <div className="font-serif text-2xl font-bold leading-none text-[#06233F]">
                                    {item.day}
                                </div>
                                <div className="mt-1 text-[9px] font-bold uppercase tracking-wide text-[#06233F]/55">
                                    {item.month}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-black leading-snug text-[#06233F] transition group-hover:text-[#C58A12] md:text-sm">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-[#06233F]/55">
                                    {item.desc}
                                </p>
                            </div>

                            <span className="text-lg text-[#06233F]/45 transition group-hover:translate-x-1 group-hover:text-[#C58A12]">
                                ›
                            </span>
                        </a>
                    ))}
                </div>

                <div className="border-t border-[#06233F]/10 px-5 py-4">
                    <a
                        href="/actualites"
                        className="inline-flex items-center gap-2 text-xs font-bold text-[#C58A12] hover:text-[#06233F]"
                    >
                        Voir toutes les actualités
                        <span>→</span>
                    </a>
                </div>
            </div>

            {/* Message du président */}
            <div className="overflow-hidden rounded-sm border border-[#06233F]/10 bg-white shadow-[0_16px_45px_rgba(6,35,63,0.07)]">
                <div className="px-5 pt-5 text-center">
                    <h2 className="text-xs font-black text-[#06233F]">
                        Message du Président national
                    </h2>
                </div>

                <div className="relative mx-auto mt-4 flex h-[240px] items-end justify-center px-5">
                    <div className="absolute bottom-0 h-[190px] w-[190px] rounded-full bg-[#F8F4EC]" />

                    <img
                        src="/images/president-national.png"
                        alt="Président national de l'Église Foursquare Côte d'Ivoire"
                        className="relative z-10 h-[225px] w-auto object-contain"
                    />
                </div>

                <div className="bg-[#06233F] px-6 py-5 text-white">
                    <div className="text-3xl font-serif leading-none text-[#F4B739]">“</div>

                    <p className="-mt-2 text-[13px] font-bold leading-5">
                        Bâtissons des églises fortes, des familles transformées
                        et des vies qui impactent leur génération.
                    </p>

                    <div className="mt-4">
                        <p className="text-xs font-black uppercase text-[#F4B739]">
                            Pasteur Jean-Marc Kouassi
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-white/75">
                            Président National
                        </p>
                    </div>
                </div>
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
