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
<section className="relative overflow-hidden bg-[#f9fafc]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(92,45,145,0.055),transparent_24%),radial-gradient(circle_at_88%_60%,rgba(205,23,37,0.055),transparent_26%)]" />
    <div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-t from-[#dfe2e8]/55 to-transparent" />

    {/* Formes couleurs Foursquare */}
    <div className="absolute -right-14 top-6 hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#CD1725] lg:block" />
    <div className="absolute -right-14 top-[165px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#005AA9] lg:block" />
    <div className="absolute -right-14 top-[324px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#FFD23F] lg:block" />
    <div className="absolute -right-14 top-[483px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#5B2C83] lg:block" />

    <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-start gap-8 px-4 py-10 md:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:py-12">
        {/* Texte gauche */}
        <MotionSection delay={0.15}>
            <div className="max-w-[660px] pt-0 lg:pt-0">
                {/* Logo */}
                <div className="mb-7 flex items-start">
                    <img
                        src="/images/logo.png"
                        alt="Logo Église Évangélique Foursquare Côte d’Ivoire"
                        className="h-28 w-auto object-contain"
                    />
                </div>

                {/* Titre */}
                <h1 className="max-w-[660px] text-left text-[30px] font-black leading-[1.06] tracking-[-0.025em] text-black md:text-[38px] lg:text-[44px]">
                    <span className="block whitespace-nowrap">
                        Convention Nationale
                    </span>
                    <span className="block">
                        2026
                    </span>
                    <span className="block whitespace-nowrap text-[#CD1725]">
                        de l’Église Foursquare
                    </span>
                    <span className="block text-[#5B2C83]">
                        Côte d’Ivoire
                    </span>
                </h1>

                {/* Mini ligne couleurs */}
                <div className="mt-5 flex items-center gap-1.5">
                    <span className="h-[3px] w-9 bg-[#CD1725]" />
                    <span className="h-[3px] w-9 bg-[#005AA9]" />
                    <span className="h-[3px] w-9 bg-[#FFD23F]" />
                    <span className="h-[3px] w-9 bg-[#5B2C83]" />
                </div>

                <p className="mt-6 max-w-[500px] text-left text-[14px] font-medium leading-7 text-[#102033]/75 md:text-[15px]">
                    Un temps de louange, de prière, de formation
                    <br className="hidden sm:block" />
                    et d’envoi en mission pour impacter notre nation.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                    <a
                        href="/communiques/convention-nationale-2026"
                        className="inline-flex items-center gap-3 rounded-xl bg-[#CD1725] px-5 py-3 text-[13px] font-black text-white shadow-[0_14px_34px_rgba(205,23,37,0.24)] transition hover:-translate-y-0.5 hover:bg-[#b91322]"
                    >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/70 text-[10px]">
                            ▣
                        </span>
                        Lire le communiqué
                        <span className="text-base">→</span>
                    </a>

                    <a
                        href="/inscription"
                        className="inline-flex items-center gap-3 border-b-2 border-[#5B2C83] pb-2 text-[13px] font-black text-[#06233F] transition hover:text-[#CD1725]"
                    >
                        S’inscrire
                        <span className="text-base text-[#CD1725]">→</span>
                    </a>
                </div>
            </div>
        </MotionSection>

        {/* Visuel droite */}
        <MotionSection delay={0.25}>
            <div className="relative hidden min-h-[620px] lg:block">
                {/* Contexte visuel subtil */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-[#5B2C83]/5 to-[#CD1725]/5 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-l from-[#06233F]/5 to-transparent blur-2xl" />
                </div>

                {/* Points décoratifs */}
                <div className="absolute right-[105px] top-[16px] z-0 grid grid-cols-10 gap-2.5">
                    {Array.from({ length: 50 }).map((_, i) => (
                        <span
                            key={i}
                            className="h-1 w-1 rounded-full bg-[#5B2C83]/20"
                        />
                    ))}
                </div>

                {/* Image 1 — haut gauche */}
                <div className="group absolute left-[30px] top-[0px] z-10 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]">
                    <img
                        src="/images/image 5.jpg"
                        alt="Culte Foursquare"
                        className="h-full w-full object-cover object-[50%_22%] transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Image 2 — haut droite */}
                <div className="group absolute right-[30px] top-[0px] z-20 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]">
                    <img
                        src="/images/image 3.jpg"
                        alt="Étude biblique"
                        className="h-full w-full object-cover object-[50%_28%] transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Image 3 — bas gauche */}
                <div className="group absolute left-[30px] top-[280px] z-10 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]">
                    <img
                        src="/images/image 6.jpg"
                        alt="Assemblée Foursquare"
                        className="h-full w-full object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Image 4 — bas droite */}
                <div className="group absolute right-[30px] top-[280px] z-30 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]">
                    <img
                        src="/images/image 1.jpg"
                        alt="Prière et communion"
                        className="h-full w-full object-cover object-[50%_32%] transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Carte Convention */}
                {/* <div className="absolute left-[255px] top-[230px] z-40 w-[195px] rounded-[18px] bg-white px-5 py-4 shadow-[0_14px_36px_rgba(6,35,63,0.14)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(91,44,131,0.15)]">
                    <div className="mb-2 text-xl text-[#5B2C83]">♙</div>
                    <p className="text-xs font-black text-[#5B2C83]">
                        Convention 2026
                    </p>
                    <p className="mt-1 text-[11px] font-medium leading-5 text-[#102033]/70">
                        Un rassemblement national pour l'Église.
                    </p>
                </div> */}

                {/* Carte 100% */}
                {/* <div className="absolute left-[320px] top-[42px] z-40 rounded-[16px] bg-white px-5 py-3 shadow-[0_14px_36px_rgba(6,35,63,0.14)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(205,23,37,0.15)]">
                    <div className="flex items-center gap-3">
                        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#CD1725] text-xs font-black text-[#CD1725]">
                            ✓
                        </span>
                        <div>
                            <p className="text-sm font-black text-[#06233F]">
                                100%
                            </p>
                            <p className="text-[11px] font-medium text-[#102033]/60">
                                Foi & Mission
                            </p>
                        </div>
                    </div>
                </div> */}

                {/* Carte Date */}
                {/* <div className="absolute left-[315px] bottom-[5px] z-40 w-[200px] rounded-[18px] bg-white px-5 py-4 shadow-[0_14px_36px_rgba(6,35,63,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(91,44,131,0.15)]">
                    <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 text-lg text-[#CD1725]">
                            ▣
                        </span>
                        <div>
                            <p className="text-sm font-black text-[#5B2C83]">
                                2–7 Août 2026
                            </p>
                            <p className="mt-1 text-xs font-medium leading-5 text-[#102033]/70">
                                Abidjan,
                                <br />
                                Côte d'Ivoire
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </MotionSection>
    </div>

    {/* Ligne bas Foursquare */}
    <div className="relative h-2 bg-gradient-to-r from-[#CD1725] via-[#005AA9] via-[#FFD23F] to-[#5B2C83]" />
</section>

            {/* ─── BIENVENUE ─── */}
                <MotionSection>
    <section className="relative overflow-hidden bg-[#f9fafc] py-8 md:py-10">
        {/* Décor léger */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(205,23,37,0.04),transparent_26%),radial-gradient(circle_at_92%_18%,rgba(91,44,131,0.05),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-[1.55fr_0.85fr]">
            {/* Bloc actualités */}
            <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(6,35,63,0.08)]">
                {/* Header tabs */}
                <div className="flex items-center border-b border-black/5 px-5">
                    {['Actualités', 'Publications', 'Événements', 'Espace presse'].map((tab, index) => (
                        <button
                            key={tab}
                            type="button"
                            className={`relative px-4 py-4 text-xs font-black transition ${
                                index === 0
                                    ? 'text-[#CD1725]'
                                    : 'text-[#07172F]/55 hover:text-[#5B2C83]'
                            }`}
                        >
                            {tab}

                            {index === 0 && (
                                <span className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-[#CD1725] via-[#005AA9] to-[#FFD23F]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Liste */}
                <div className="divide-y divide-black/5 px-5">
                    {[
                        {
                            day: '10',
                            month: 'MAI 2026',
                            color: '#CD1725',
                            title: 'Avis d’appel aux églises pour la Convention Nationale 2026',
                            desc: 'Date limite d’inscription : 30 juin 2026',
                        },
                        {
                            day: '03',
                            month: 'MAI 2026',
                            color: '#005AA9',
                            title: 'Formation des responsables : Leadership et intégrité',
                            desc: 'Du 15 au 17 mai 2026 à Abidjan',
                        },
                        {
                            day: '26',
                            month: 'AVR. 2026',
                            color: '#FFD23F',
                            title: 'Campagne nationale de prière et de jeûne',
                            desc: 'Du 1er au 31 mai 2026 — Un mois pour notre nation',
                        },
                        {
                            day: '18',
                            month: 'AVR. 2026',
                            color: '#5B2C83',
                            title: "Nouvelles implantations d’églises en 2026",
                            desc: '5 nouvelles œuvres lancées en Côte d’Ivoire',
                        },
                    ].map((item) => (
                        <a
                            key={item.title}
                            href="/actualites"
                            className="group grid grid-cols-[58px_1fr_22px] items-center gap-4 py-4"
                        >
                            <div className="text-center">
                                <div
                                    className="font-serif text-2xl font-black leading-none"
                                    style={{ color: item.color }}
                                >
                                    {item.day}
                                </div>
                                <div className="mt-1 text-[9px] font-black uppercase tracking-wide text-[#07172F]/45">
                                    {item.month}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[13px] font-black leading-snug text-[#07172F] transition group-hover:text-[#CD1725] md:text-sm">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-xs font-medium text-[#07172F]/55">
                                    {item.desc}
                                </p>
                            </div>

                            <span className="text-xl text-[#07172F]/35 transition group-hover:translate-x-1 group-hover:text-[#5B2C83]">
                                ›
                            </span>
                        </a>
                    ))}
                </div>

                <div className="border-t border-black/5 px-5 py-4">
                    <a
                        href="/actualites"
                        className="inline-flex items-center gap-2 text-xs font-black text-[#CD1725] transition hover:text-[#5B2C83]"
                    >
                        Voir toutes les actualités
                        <span>→</span>
                    </a>
                </div>
            </div>

            {/* Message du président */}
            <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(6,35,63,0.08)]">
                <div className="px-5 pt-5 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#CD1725]">
                        Président national
                    </p>
                    {/* <h2 className="mt-1 text-sm font-black text-[#07172F]">
                        Message du Président national
                    </h2> */}
                </div>

                <div className="relative mx-auto mt-4 flex h-[230px] items-end justify-center px-5">
                    <div className="absolute bottom-0 h-[185px] w-[185px] rounded-full bg-gradient-to-br from-[#CD1725]/10 via-[#FFD23F]/20 to-[#5B2C83]/10" />

                    <img
                        src="/images/image 5.jpg"
                        alt="Président national de l'Église Foursquare Côte d'Ivoire"
                        className="relative z-10 h-[220px] w-auto object-contain"
                    />
                </div>

                <div className="bg-[#07172F] px-6 py-5 text-white">
                    <div className="flex items-center gap-1">
                        <span className="h-1.5 w-8 rounded-full bg-[#CD1725]" />
                        <span className="h-1.5 w-8 rounded-full bg-[#005AA9]" />
                        <span className="h-1.5 w-8 rounded-full bg-[#FFD23F]" />
                        <span className="h-1.5 w-8 rounded-full bg-[#5B2C83]" />
                    </div>

                    <div className="mt-4 text-3xl font-serif leading-none text-[#FFD23F]">“</div>

                    <p className="-mt-2 text-[13px] font-bold leading-5 text-white/95">
                        Bâtissons des églises fortes, des familles transformées
                        et des vies qui impactent leur génération.
                    </p>

                    <div className="mt-4">
                        <p className="text-xs font-black uppercase text-[#FFD23F]">
                            Reverend Docteur Apotre Gnepe Marius
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-white/70">
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
