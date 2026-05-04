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
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(92,45,145,0.08),transparent_26%),radial-gradient(circle_at_88%_60%,rgba(205,23,37,0.08),transparent_28%)]" />
    <div className="absolute inset-x-0 bottom-0 h-[210px] bg-gradient-to-t from-[#dfe2e8]/75 to-transparent" />

    <div className="absolute -right-24 top-8 hidden h-[350px] w-[350px] rounded-full border-[16px] border-white bg-[#CD1725] lg:block" />
    <div className="absolute -right-28 top-[260px] hidden h-[350px] w-[350px] rounded-full border-[16px] border-white bg-[#005AA9] lg:block" />
    <div className="absolute -right-24 bottom-[-80px] hidden h-[350px] w-[350px] rounded-full border-[16px] border-white bg-[#FFD23F] lg:block" />
    <div className="absolute -right-32 bottom-[-240px] hidden h-[350px] w-[350px] rounded-full border-[16px] border-white bg-[#5B2C83] lg:block" />

    <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-12 md:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:py-14">
        {/* Texte gauche */}
        <MotionSection delay={0.15}>
            <div className="max-w-[600px]">
                {/* Logo */}
                <div className="mb-8 flex items-start gap-4">
                    <img
                        src="/images/logo.png"
                        alt="Logo Église Évangélique Foursquare Côte d’Ivoire"
                        className="h-32 w-auto object-contain"
                    />
                </div>

                {/* Titre */}
                <h1 className="text-[44px] font-black leading-[1.02] tracking-[-0.045em] text-black md:text-[62px] lg:text-[74px]">
                    Convention Nationale
                    <br />
                    2026
                    <br />
                    <span className="text-[#CD1725]">
                        de l’Église Foursquare
                    </span>
                    <br />
                    <span className="text-[#5B2C83]">
                        Côte d’Ivoire
                    </span>
                </h1>

                {/* Mini ligne couleurs */}
                <div className="mt-6 flex items-center gap-2">
                    <span className="h-[4px] w-12 bg-[#CD1725]" />
                    <span className="h-[4px] w-12 bg-[#005AA9]" />
                    <span className="h-[4px] w-12 bg-[#FFD23F]" />
                    <span className="h-[4px] w-12 bg-[#5B2C83]" />
                </div>

                <p className="mt-7 max-w-[520px] text-[15px] font-medium leading-7 text-[#102033]/75 md:text-[17px]">
                    Un temps de louange, de prière, de formation
                    <br className="hidden sm:block" />
                    et d’envoi en mission pour impacter notre nation.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-7">
                    <a
                        href="/communiques/convention-nationale-2026"
                        className="inline-flex items-center gap-4 rounded-xl bg-[#CD1725] px-7 py-4 text-sm font-black text-white shadow-[0_16px_40px_rgba(205,23,37,0.28)] transition hover:-translate-y-0.5 hover:bg-[#b91322]"
                    >
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/70 text-[11px]">
                            ▣
                        </span>
                        Lire le communiqué
                        <span className="text-xl">→</span>
                    </a>

                    <a
                        href="/inscription"
                        className="inline-flex items-center gap-4 border-b-2 border-[#5B2C83] pb-2 text-[15px] font-black text-[#06233F] transition hover:text-[#CD1725]"
                    >
                        S’inscrire
                        <span className="text-xl text-[#CD1725]">→</span>
                    </a>
                </div>
            </div>
        </MotionSection>

        {/* Visuel droite */}
        <MotionSection delay={0.25}>
            <div className="relative hidden min-h-[640px] items-center justify-center lg:flex">
                {/* Points décoratifs */}
                <div className="absolute right-[160px] top-[52px] z-0 grid grid-cols-10 gap-3">
                    {Array.from({ length: 50 }).map((_, index) => (
                        <span
                            key={index}
                            className="h-1 w-1 rounded-full bg-[#5B2C83]/45"
                        />
                    ))}
                </div>

                {/* Image haut centre */}
                <div className="absolute left-[138px] top-0 z-10 h-[305px] w-[360px] overflow-hidden rounded-[34px] border-[6px] border-white shadow-[0_24px_70px_rgba(6,35,63,0.16)]">
                    <img
                        src="/images/image 5.jpg"
                        alt="Culte Foursquare"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Image droite haut */}
                <div className="absolute right-[12px] top-[106px] z-10 h-[270px] w-[285px] overflow-hidden rounded-[34px] border-[6px] border-white shadow-[0_24px_70px_rgba(6,35,63,0.16)]">
                    <img
                        src="/images/image 2.jpg"
                        alt="Étude biblique Foursquare"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Image centre bas */}
                <div className="absolute bottom-[88px] left-[60px] z-10 h-[295px] w-[500px] overflow-hidden rounded-[34px] border-[6px] border-white shadow-[0_24px_70px_rgba(6,35,63,0.16)]">
                    <img
                        src="/images/image 6.jpg"
                        alt="Assemblée Foursquare"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Image droite bas */}
                <div className="absolute bottom-[14px] right-[6px] z-10 h-[330px] w-[290px] overflow-hidden rounded-[34px] border-[6px] border-white shadow-[0_24px_70px_rgba(6,35,63,0.16)]">
                    <img
                        src="/images/image 1.jpg"
                        alt="Prière et communion"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Carte Convention */}
                <div className="absolute left-[0px] top-[150px] z-30 w-[280px] rounded-[24px] bg-white px-7 py-6 shadow-[0_20px_55px_rgba(6,35,63,0.16)]">
                    <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full text-[#5B2C83]">
                        <span className="text-2xl">♙</span>
                    </div>
                    <p className="text-sm font-black text-[#5B2C83]">
                        Convention 2026
                    </p>
                    <p className="mt-2 text-[13px] font-medium leading-6 text-[#102033]/70">
                        Un rassemblement national pour l’Église.
                    </p>
                </div>

                {/* Carte 100% */}
                <div className="absolute right-[75px] top-[58px] z-30 rounded-[20px] bg-white px-6 py-5 shadow-[0_20px_55px_rgba(6,35,63,0.16)]">
                    <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#CD1725] text-sm font-black text-[#CD1725]">
                            ✓
                        </span>
                        <div>
                            <p className="text-base font-black text-[#06233F]">
                                100%
                            </p>
                            <p className="text-xs font-medium text-[#102033]/60">
                                Foi & Mission
                            </p>
                        </div>
                    </div>
                </div>

                {/* Carte date */}
                <div className="absolute bottom-[38px] left-[310px] z-30 w-[250px] rounded-[24px] bg-white px-6 py-5 shadow-[0_20px_55px_rgba(6,35,63,0.16)]">
                    <div className="flex items-start gap-4">
                        <span className="mt-1 text-2xl text-[#CD1725]">▣</span>
                        <div>
                            <p className="text-base font-black text-[#5B2C83]">
                                2–7 Août 2026
                            </p>
                            <p className="mt-1 text-sm font-medium leading-5 text-[#102033]/70">
                                Abidjan,
                                <br />
                                Côte d’Ivoire
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MotionSection>
    </div>

    {/* Ligne bas Foursquare */}
    <div className="relative h-2 bg-gradient-to-r from-[#CD1725] via-[#005AA9] via-[#FFD23F] to-[#5B2C83]" />
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
