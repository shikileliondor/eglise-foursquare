import PublicNavbar from '@/Components/PublicNavbar'
import { HoverSliderDemo } from '@/components/ui/animated-slideshow-demo'
import { ExpandableGallery } from '@/components/ui/expandable-gallery'
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo'
import { MotionSection } from '@/components/ui/motion-section'
import { Link } from '@inertiajs/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { hoverLift, staggerContainer, staggerItem } from '@/lib/animations'
import {
    ArrowRight,
    ArrowDown,
    Megaphone,
    Send,
    BookOpen,
    CalendarDays,
    GraduationCap,
    Landmark,
    MonitorPlay,
    Trophy,
} from 'lucide-react'

// Les logos des ministères - on les garde simples
const ministryLogos = [
    { name: 'Foursquare', subtitle: 'Missions International', image: '/images/logo.png' },
    { name: 'Foursquare Jeunesse', subtitle: '', image: '/images/logojfci.jpg' },
    { name: 'Foursquare Compassion', subtitle: '', image: '/images/logolight.jpg' },
]

// Les cartes features - celles qu'on voit sur la page d'accueil
const featureCards = [
    {
        title: 'Catalogue\ndes publications',
        description: 'Retrouvez nos supports, brochures et documents officiels.',
        cta: 'Découvrir',
        icon: BookOpen,
        variant: 'dark',
        image: '/images/image 5.jpg',
        fallback: 'linear-gradient(135deg, #123b68 0%, #225ca3 55%, #fbb51b 100%)',
    },
    {
        title: 'Base de données\ndes enseignements',
        description: 'Accédez aux messages, formations et ressources spirituelles.',
        cta: 'Accéder',
        icon: MonitorPlay,
        variant: 'dark',
        image: '/images/image 2.jpg',
        fallback: 'linear-gradient(135deg, #0c2b4c 0%, #225ca3 62%, #fbb51b 100%)',
    },
    // ... le reste des cartes
]

// Photos de la communauté
const communityPhotos = [
    '/images/image 6.jpg',
    '/images/image 2.jpg',
    '/images/image 3.jpg',
    '/images/image 4.jpg',
]

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
    const [isConventionModalOpen, setIsConventionModalOpen] = useState(true)

    useEffect(() => {
        if (!isConventionModalOpen) return

        const previousOverflow = document.body.style.overflow
        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setIsConventionModalOpen(false)
        }

        document.body.style.overflow = 'hidden'
        window.addEventListener('keydown', closeOnEscape)

        return () => {
            document.body.style.overflow = previousOverflow
            window.removeEventListener('keydown', closeOnEscape)
        }
    }, [isConventionModalOpen])

    // Navigation des actualités
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

    // Animations basiques
    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
    }

    const imageCascade = {
        hidden: (index = 0) => ({
            opacity: 0,
            x: index % 2 === 0 ? -70 : 70,
            y: 46,
            scale: 0.82,
            rotate: index % 2 === 0 ? -5 : 5,
            filter: 'blur(8px)',
        }),
        visible: (index = 0) => ({
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotate: 0,
            filter: 'blur(0px)',
            transition: {
                delay: 0.35 + index * 0.18,
                duration: 0.85,
                type: 'spring',
                stiffness: 92,
                damping: 13,
            },
        }),
    }

    return (
        <div className="min-h-screen bg-[#F7F7F5] text-[#123B68]">
            <PublicNavbar />

            <AnimatePresence>
                {isConventionModalOpen && (
                    <motion.div
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07172F]/75 p-4 backdrop-blur-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.28 }}
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) setIsConventionModalOpen(false)
                        }}
                    >
                        <motion.div
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="convention-modal-title"
                            initial={{ opacity: 0, y: 45, scale: 0.92 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 24, scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 125, damping: 16 }}
                            className="convention-pattern relative grid max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[28px] border-4 border-white bg-white shadow-[0_35px_100px_rgba(0,0,0,0.38)] lg:grid-cols-[1fr_250px] lg:overflow-hidden"
                        >
                            <button
                                type="button"
                                onClick={() => setIsConventionModalOpen(false)}
                                aria-label="Fermer la fenêtre"
                                className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-xl font-bold text-[#123B68] shadow-lg transition hover:rotate-90 hover:bg-[#FBB51B]"
                            >
                                ×
                            </button>

                            <div className="relative flex flex-col items-center px-5 py-7 text-center sm:px-10 sm:py-9">
                                <img
                                    src="/images/logo.png"
                                    alt="Église Évangélique Foursquare Côte d’Ivoire"
                                    className="h-16 w-auto object-contain sm:h-20"
                                />
                                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#123B68]/60 sm:text-xs">
                                    Église Évangélique Internationale Foursquare CI
                                </p>

                                <div className="mt-6">
                                    <p className="text-2xl font-black uppercase leading-none tracking-[-0.04em] text-[#225CA3] sm:text-4xl">
                                        Convention Nationale
                                    </p>
                                    <p className="mt-1 text-xl font-medium text-[#225CA3] sm:text-2xl">édition 2026</p>
                                </div>

                                <div className="hero-theme-glow mt-5 inline-flex flex-col items-center">
                                    <span className="relative z-10 -mb-1 rounded-sm bg-[#225CA3] px-3 py-0.5 text-[10px] font-bold italic leading-none text-white">
                                        thème
                                    </span>
                                    <div className="rounded-sm bg-[#225CA3] px-5 py-2.5 shadow-[0_12px_28px_rgba(34,92,163,0.22)]">
                                        <p id="convention-modal-title" className="text-lg font-black uppercase leading-none text-[#FBB51B] sm:text-2xl">
                                            La pluie en abondance
                                        </p>
                                        <p className="mt-1 text-[9px] font-semibold italic text-white/85">Zacharie 10:1</p>
                                    </div>
                                </div>

                                <p className="mt-5 max-w-xl text-sm font-medium leading-6 text-[#33475B] sm:text-base">
                                    Un rendez-vous de louange, de prière, de formation et d’envoi en mission pour impacter notre nation.
                                </p>

                                <a
                                    href="/communiques/convention-nationale-2026"
                                    className="hero-cta-shine mt-6 inline-flex min-w-[190px] items-center justify-center gap-3 rounded-xl bg-[#225CA3] px-7 py-3 text-sm font-black text-white shadow-[0_14px_32px_rgba(34,92,163,0.28)] transition hover:-translate-y-1 hover:bg-[#123B68]"
                                >
                                    Participer <span className="text-lg text-[#FBB51B]">→</span>
                                </a>
                            </div>

                            <div className="relative flex min-h-[180px] items-center justify-center overflow-hidden bg-[#225CA3] px-6 py-8 text-white lg:min-h-full">
                                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[28px] border-white/10" />
                                <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#FBB51B]" />
                                <div className="relative z-10 text-center">
                                    <p className="text-[64px] font-black leading-[0.72] tracking-[-0.08em] sm:text-[76px]">12</p>
                                    <span className="my-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FBB51B] text-xs font-black text-[#225CA3]">AU</span>
                                    <p className="text-[64px] font-black leading-[0.72] tracking-[-0.08em] sm:text-[76px]">16</p>
                                    <p className="mt-5 text-lg font-black uppercase leading-none text-[#FBB51B]">Août 2026</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* HERO - La grosse section du haut avec les images qui bougent */}
            <section className="convention-pattern relative overflow-hidden">
                {/* Les petites formes décoratives */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_34%,rgba(18,59,104,0.045),transparent_27%),radial-gradient(circle_at_76%_18%,rgba(34,92,163,0.055),transparent_28%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-t from-[#dfe2e8]/55 to-transparent" />

                {/* Les ronds colorés Foursquare */}
                <div className="hero-color-orb absolute -right-14 top-6 hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#CD1725] lg:block" />
                <div className="hero-color-orb hero-color-orb-delay-1 absolute -right-14 top-[165px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#005AA9] lg:block" />
                <div className="hero-color-orb hero-color-orb-delay-2 absolute -right-14 top-[324px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#FFD23F] lg:block" />
                <div className="hero-color-orb hero-color-orb-delay-3 absolute -right-14 top-[483px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#5B2C83] lg:block" />

                <div className="relative mx-auto grid min-h-[calc(100svh-89px)] max-w-[1540px] items-center gap-6 px-5 py-4 sm:px-7 md:px-8 lg:min-h-[630px] lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-8 lg:px-6 lg:py-6">
                    
                    {/* Partie gauche - le texte */}
                    <MotionSection delay={0.15}>
                        <div className="mx-auto flex w-full max-w-[660px] flex-col justify-center py-3 lg:mx-0 lg:block lg:py-0">
                            {/* Logo */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.05 }}
                                className="mb-3 hidden items-start lg:flex"
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="Logo Église Évangélique Foursquare Côte d’Ivoire"
                                    className="hero-logo-float h-16 w-auto object-contain xl:h-20"
                                />
                            </motion.div>

                            {/* <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-4 hidden w-fit items-center gap-2 rounded-full border border-[#225CA3]/10 bg-white/80 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.13em] text-[#123B68]/65 shadow-sm backdrop-blur-sm lg:inline-flex"
                            >
                                <CalendarDays className="h-3.5 w-3.5 text-[#FBB51B]" />
                                12 — 16 août 2026
                            </motion.div> */}

                            {/* Gros titre - Convention 2026 */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.6, delay: 0.14 }}
                                className="max-w-[660px]"
                            >
                                <div className="flex items-end gap-4">
                                    <h1 className="w-fit text-left text-[clamp(25px,7.7vw,34px)] font-black leading-[1.04] tracking-[-0.038em] text-[#123B68] md:text-[34px] lg:text-[38px] xl:text-[42px]">
                                        <span className="block whitespace-nowrap">Convention Nationale</span>
                                        <span className="block whitespace-nowrap">2026</span>
                                        <span className="mt-1.5 block w-full text-center text-[1.08em] tracking-[-0.025em] text-[#225CA3] lg:hidden">2026</span>
                                    </h1>
                                    {/* <div className="hidden min-w-[96px] -rotate-2 rounded-2xl bg-[#225CA3] px-4 py-3 text-center shadow-[0_14px_30px_rgba(34,92,163,0.20)] lg:block xl:min-w-[108px]">
                                        <span className="block text-[9px] font-black uppercase tracking-[0.18em] text-white/60">Édition</span>
                                        <span className="mt-1 block text-3xl font-black leading-none tracking-[-0.06em] text-[#FBB51B] xl:text-4xl">2026</span>
                                    </div> */}
                                </div>
                                <div className="mt-3 border-l-[3px] border-[#FBB51B] pl-3 lg:mt-4">
                                    <p className="whitespace-nowrap text-[clamp(21px,6.5vw,29px)] font-extrabold leading-none tracking-[-0.035em] text-[#172B3E] lg:text-[27px] xl:text-[30px]">
                                        Église Foursquare
                                    </p>
                                    <p className="mt-1.5 text-[clamp(21px,6.5vw,29px)] font-black leading-none tracking-[-0.035em] text-[#225CA3] lg:text-[27px] xl:text-[30px]">
                                        Côte d’Ivoire
                                    </p>
                                </div>
                            </motion.div>

                            {/* Les petites barres de couleur */}
                            <div className="mt-3.5 flex items-center gap-1.5">
                                <span className="hero-color-line h-[3px] w-14 rounded-full bg-[#225CA3]" />
                                <span className="hero-color-line h-[3px] w-7 rounded-full bg-[#FBB51B]" />
                            </div>

                            {/* Thème officiel de la convention */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.19 }}
                                className="hero-theme-glow mx-auto mt-4 inline-flex w-fit flex-col items-start lg:mx-0 lg:mt-5"
                            >
                                <span className="relative z-10 ml-5 -mb-1 rounded-sm bg-[#FBB51B] px-3 py-0.5 text-[10px] font-black italic leading-none text-[#123B68] shadow-sm">
                                    thème
                                </span>
                                <div className="rounded-sm border border-white bg-[#225CA3] px-4 py-2 shadow-[0_10px_24px_rgba(18,59,104,0.16)] sm:px-5">
                                    <p className="text-[15px] font-black uppercase leading-none tracking-[-0.025em] text-[#FBB51B] sm:text-[18px]">
                                        La pluie en abondance
                                    </p>
                                    <p className="mt-1 text-center text-[8px] font-semibold italic leading-none text-white/90">
                                        Zacharie 10:1
                                    </p>
                                </div>
                            </motion.div>

                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.22 }}
                                className="mt-4 max-w-[500px] border-l-[3px] border-[#225CA3]/35 pl-4 text-left text-[13px] font-medium leading-6 text-[#33475B]/85 md:text-[14px] lg:mt-5"
                            >
                                Un temps de louange, de prière, de formation
                                <br className="hidden sm:block" />
                                et d’envoi en mission pour impacter notre nation.
                            </motion.p>

                            {/* Boutons d'action */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.3 }}
                                className="mt-5 flex w-full flex-wrap items-center gap-3 sm:gap-4 lg:mt-6 lg:w-auto lg:gap-5"
                            >
                                <a
                                    href="/communiques/convention-nationale-2026"
                                    className="hero-cta-shine inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-[#225CA3] px-6 py-3 text-[12px] font-black text-white shadow-[0_14px_30px_rgba(34,92,163,0.24)] transition hover:-translate-y-1 hover:bg-[#123B68] hover:shadow-[0_16px_32px_rgba(18,59,104,0.28)] sm:w-auto"
                                >
                                    <span className="inline-flex h-5 w-5 items-center justify-center "></span>
                                    S’inscrire
                                    <span className="text-base text-[#FBB51B]">→</span>
                                </a>

                                <Link
                                    href={route('shop.index')}
                                    className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-xl border border-[#225CA3]/35 bg-white px-6 py-3 text-[12px] font-black text-[#225CA3] shadow-[0_12px_26px_rgba(18,59,104,0.10)] transition hover:-translate-y-1 hover:border-[#225CA3] hover:bg-[#F7FAFD] hover:shadow-[0_16px_30px_rgba(18,59,104,0.16)] sm:w-auto"
                                >
                                    Boutique officielle
                                    <span className="text-base text-[#FBB51B]">→</span>
                                </Link>

                                {/* <a
                                    href="/inscription"
                                    className="inline-flex w-full items-center justify-center gap-3 border-b-2 border-[#5B2C83] pb-2 text-[13px] font-black text-[#06233F] transition hover:text-[#CD1725] sm:w-auto"
                                >
                                   S’inscrire 
                                    <span className="text-base text-[#CD1725]">→</span>
                                </a> */}
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.42 }}
                                className="mt-4 grid grid-cols-[1fr_auto] items-center gap-3 rounded-2xl border border-[#225CA3]/10 bg-white/75 p-3 shadow-[0_12px_32px_rgba(18,59,104,0.08)] backdrop-blur-sm lg:hidden"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#225CA3]/10 text-[#225CA3]">
                                        <CalendarDays className="h-5 w-5" />
                                    </span>
                                    {/* <div>
                                        <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#123B68]/45">Rendez-vous</p>
                                        <p className="mt-0.5 text-[13px] font-black text-[#123B68]">12 — 16 août 2026</p>
                                    </div> */}
                                </div>
                                <span className="rounded-full bg-[#FBB51B]/15 px-3 py-1.5 text-[10px] font-black uppercase text-[#B97800]">5 jours</span>
                            </motion.div>

                            <motion.a
                                href="#actualites"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="mx-auto mt-3 hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#123B68]/45 min-[390px]:inline-flex lg:hidden"
                            >
                                Découvrir la convention
                                <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[#FBB51B]" />
                            </motion.a>

                            {/* Image pour mobile */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={0}
                                className="hidden"
                            >
                                <img
                                    src="/images/image 5.jpg"
                                    alt="Culte Foursquare"
                                    className="hero-image-motion h-[270px] w-full object-cover object-[50%_30%]"
                                />
                            </motion.div>
                        </div>
                    </MotionSection>

                    {/* Partie droite - les 4 images qui s'empilent */}
                    <MotionSection delay={0.25}>
                        <div className="relative hidden min-h-[600px] lg:block">
                            {/* Contexte visuel - juste des dégradés pour faire joli */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-[#5B2C83]/5 to-[#CD1725]/5 blur-3xl" />
                                <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gradient-to-l from-[#06233F]/5 to-transparent blur-2xl" />
                            </div>

                            {/* Les petits points décoratifs */}
                            <div className="absolute right-[105px] top-[16px] z-0 grid grid-cols-10 gap-2.5">
                                {Array.from({ length: 50 }).map((_, i) => (
                                    <span key={i} className="h-1 w-1 rounded-full bg-[#5B2C83]/20" />
                                ))}
                            </div>

                            {/* Image 1 - en haut à gauche */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={0}
                                className="group absolute left-0 top-0 z-10 aspect-[1.38/1] w-[calc(50%-8px)] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0_22px_48px_rgba(6,35,63,0.16)] transition-all duration-500 hover:z-40 hover:scale-[1.035] hover:-rotate-1"
                            >
                                <img
                                    src="/images/image 4.jpg"
                                    alt="Culte Foursquare"
                                    className="hero-image-motion h-full w-full object-cover object-[50%_22%]"
                                />
                            </motion.div>

                            {/* Image 2 - en haut à droite */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={1}
                                className="group absolute right-0 top-0 z-20 aspect-[1.38/1] w-[calc(50%-8px)] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0_22px_48px_rgba(6,35,63,0.16)] transition-all duration-500 hover:z-40 hover:scale-[1.035] hover:rotate-1"
                            >
                                <img
                                    src="/images/image 3.jpg"
                                    alt="Étude biblique"
                                    className="hero-image-motion hero-image-motion-delay-1 h-full w-full object-cover object-[50%_28%]"
                                />
                            </motion.div>

                            {/* Image 3 - en bas à gauche */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={2}
                                className="group absolute left-0 top-[282px] z-10 aspect-[1.38/1] w-[calc(50%-8px)] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0_22px_48px_rgba(6,35,63,0.16)] transition-all duration-500 hover:z-40 hover:scale-[1.035] hover:rotate-1"
                            >
                                <img
                                    src="/images/image 6.jpg"
                                    alt="Assemblée Foursquare"
                                    className="hero-image-motion hero-image-motion-delay-2 h-full w-full object-cover object-[50%_35%]"
                                />
                            </motion.div>

                            {/* Image 4 - en bas à droite */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={3}
                                className="group absolute right-0 top-[282px] z-30 aspect-[1.38/1] w-[calc(50%-8px)] overflow-hidden rounded-[28px] border-[5px] border-white shadow-[0_22px_48px_rgba(6,35,63,0.16)] transition-all duration-500 hover:z-40 hover:scale-[1.035] hover:-rotate-1"
                            >
                                <img
                                    src="/images/image 2.jpg"
                                    alt="Prière et communion"
                                    className="hero-image-motion hero-image-motion-delay-3 h-full w-full object-cover object-[50%_32%]"
                                />
                            </motion.div>
                        </div>
                    </MotionSection>
                </div>

                {/* La petite bande colorée tout en bas */}
                <div className="relative h-2 bg-gradient-to-r from-[#CD1725] via-[#005AA9] via-[#FFD23F] to-[#5B2C83]" />
            </section>

            {/* SECTION BIENVENUE - avec les actualités et le message du président */}
            <MotionSection>
                <section id="actualites" className="relative overflow-hidden bg-[#F7F7F5] py-8 md:py-10">
                    <div className="relative mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-[1.55fr_0.85fr]">
                        
                        {/* Bloc des actualités */}
                        <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(6,35,63,0.08)]">
                            {/* Les onglets */}
                            <div className="flex items-center border-b border-black/5 px-5">
                                {['Actualités', 'Publications', 'Événements', 'Espace presse'].map((tab, index) => (
                                    <button
                                        key={tab}
                                        type="button"
                                        className={`relative px-4 py-4 text-xs font-black transition ${
                                            index === 0 ? 'text-[#225CA3]' : 'text-[#123B68]/55 hover:text-[#225CA3]'
                                        }`}
                                    >
                                        {tab}
                                        {index === 0 && (
                                            <span className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-[#225CA3] to-[#FBB51B]" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* La liste des actualités */}
                            <div className="divide-y divide-black/5 px-5">
                                {[
                                    { day: '10', month: 'MAI 2026', color: '#225CA3', title: 'Avis d’appel aux églises pour la Convention Nationale 2026', desc: 'Date limite d’inscription : 30 juin 2026' },
                                    { day: '03', month: 'MAI 2026', color: '#FBB51B', title: 'Formation des responsables : Leadership et intégrité', desc: 'Du 15 au 17 mai 2026 à Abidjan' },
                                    { day: '26', month: 'AVR. 2026', color: '#225CA3', title: 'Campagne nationale de prière et de jeûne', desc: 'Du 1er au 31 mai 2026 — Un mois pour notre nation' },
                                    { day: '18', month: 'AVR. 2026', color: '#FBB51B', title: "Nouvelles implantations d’églises en 2026", desc: '5 nouvelles œuvres lancées en Côte d’Ivoire' },
                                ].map((item) => (
                                    <a key={item.title} href="/actualites" className="group grid grid-cols-[58px_1fr_22px] items-center gap-4 py-4">
                                        <div className="text-center">
                                            <div className="font-serif text-2xl font-black leading-none" style={{ color: item.color }}>{item.day}</div>
                                            <div className="mt-1 text-[9px] font-black uppercase tracking-wide text-[#07172F]/45">{item.month}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-[13px] font-black leading-snug text-[#123B68] transition group-hover:text-[#225CA3] md:text-sm">{item.title}</h3>
                                            <p className="mt-1 text-xs font-medium text-[#07172F]/55">{item.desc}</p>
                                        </div>
                                        <span className="text-xl text-[#07172F]/35 transition group-hover:translate-x-1 group-hover:text-[#5B2C83]">›</span>
                                    </a>
                                ))}
                            </div>

                            <div className="border-t border-black/5 px-5 py-4">
                                <a href="/actualites" className="inline-flex items-center gap-2 text-xs font-black text-[#225CA3] transition hover:text-[#FBB51B]">
                                    Voir toutes les actualités <span>→</span>
                                </a>
                            </div>
                        </div>

                        {/* Message du président national */}
                        <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(6,35,63,0.08)]">
                            <div className="px-5 pt-5 text-center">
                                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#225CA3]">Président national</p>
                            </div>

                            <div className="relative mx-auto mt-4 flex h-[230px] items-end justify-center px-5">
                                <div className="absolute bottom-0 h-[185px] w-[185px] rounded-full bg-gradient-to-br from-[#225CA3]/10 via-[#FBB51B]/25 to-[#225CA3]/10" />
                                <img src="/images/image 5.jpg" alt="Président national" className="relative z-10 h-[220px] w-auto object-contain" />
                            </div>

                            <div className="bg-[#123B68] px-6 py-5 text-white">
                                <div className="flex items-center gap-1">
                                    <span className="h-1.5 w-12 rounded-full bg-[#225CA3]" />
                                    <span className="h-1.5 w-12 rounded-full bg-[#FBB51B]" />
                                </div>
                                <div className="mt-4 text-3xl font-serif leading-none text-[#FFD23F]">“</div>
                                <p className="-mt-2 text-[13px] font-bold leading-5 text-white/95">
                                    Bâtissons des églises fortes, des familles transformées et des vies qui impactent leur génération.
                                </p>
                                <div className="mt-4">
                                    <p className="text-xs font-black uppercase text-[#FFD23F]">Reverend Docteur Apotre Gnepe Marius</p>
                                    <p className="mt-1 text-[11px] font-medium text-white/70">Président National</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* SECTION CHIFFRES & AGENDA */}
            <MotionSection>
                <section className="bg-[#EEF3F8] py-8 md:py-10">
                    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-3">
                        
                        {/* Les chiffres clés */}
                        <div className="rounded-md border border-[#225CA3]/10 bg-white p-6 shadow-[0_12px_35px_rgba(18,59,104,0.06)]">
                            <h2 className="mb-6 text-base font-black text-[#06233F]">Chiffres clés</h2>
                            <div className="space-y-5">
                                {[
                                    { icon: '⌂', value: '512', label: 'Églises locales' },
                                    { icon: '♙', value: '48', label: 'Districts' },
                                    { icon: '♧', value: '12 450', label: 'Membres' },
                                    { icon: '✦', value: '320', label: 'Missionnaires' },
                                    { icon: '♙', value: '45', label: 'Œuvres sociales' },
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-5">
                                        <span className="flex h-7 w-7 shrink-0 items-center justify-center text-2xl leading-none text-[#06233F]/80">{item.icon}</span>
                                        <p className="text-[14px] font-medium text-[#2B2B2B]">
                                            <span className="mr-1 font-black text-[#2B2B2B]">{item.value}</span>
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Prochains rendez-vous */}
                        <div className="rounded-md border border-[#225CA3]/10 bg-white p-6 shadow-[0_12px_35px_rgba(18,59,104,0.06)]">
                            <h2 className="mb-6 text-base font-black text-[#06233F]">Prochains rendez-vous</h2>
                            <div className="space-y-5">
                                {[
                                    { day: '15', month: 'MAI', title: 'Formation des responsables', desc: '15 – 17 mai 2026 | Abidjan' },
                                    { day: '01', month: 'JUIN', title: 'Convention Nationale 2026', desc: '1er – 7 juin 2026 | Yamoussoukro' },
                                    { day: '20', month: 'JUIN', title: 'Journée des Enfants Foursquare', desc: "20 juin 2026 | Partout en Côte d’Ivoire" },
                                ].map((event) => (
                                    <a key={event.title} href="/evenements" className="group flex items-start gap-4">
                                        <div className="flex h-[52px] w-[52px] shrink-0 flex-col items-center justify-center rounded-md border-2 border-[#E7B84D] bg-white text-center">
                                            <span className="text-lg font-black leading-none text-[#225CA3]">{event.day}</span>
                                            <span className="mt-1 text-[9px] font-black uppercase text-[#06233F]/55">{event.month}</span>
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-[14px] font-black leading-snug text-[#123B68] transition group-hover:text-[#225CA3]">{event.title}</h3>
                                            <p className="mt-1 text-xs font-medium text-[#06233F]/55">{event.desc}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <a href="/evenements" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#225CA3] transition hover:text-[#FBB51B]">
                                Voir tous les événements <span>→</span>
                            </a>
                        </div>

                        {/* Liens utiles */}
                        <div className="rounded-md border border-[#225CA3]/10 bg-white p-6 shadow-[0_12px_35px_rgba(18,59,104,0.06)]">
                            <h2 className="mb-6 text-base font-black text-[#06233F]">Voir aussi</h2>
                            <div className="space-y-1">
                                {[
                                    { label: 'Devenir membre', href: '/nous-rejoindre' },
                                    { label: 'Trouver une église', href: '/eglises-locales' },
                                    { label: 'Faire un don', href: '/nous-soutenir' },
                                    { label: 'Boutique & ressources', href: '/ressources/boutique' },
                                ].map((link) => (
                                    <a key={link.label} href={link.href} className="group flex items-center justify-between py-2.5 text-[14px] font-medium text-[#2B2B2B] transition hover:text-[#C58A12]">
                                        <span>{link.label}</span>
                                        <span className="text-xl leading-none text-[#2B2B2B]/75 transition group-hover:translate-x-1 group-hover:text-[#C58A12]">›</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* SLIDER ANIMÉ - le composant HoverSlider */}
            <MotionSection>
                <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <HoverSliderDemo />
                    </div>
                </section>
            </MotionSection>

            {/* NOS ESPACES À DÉCOUVRIR - les grandes cartes images */}
            <MotionSection>
                <section className="bg-[#F7F7F5] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FBB51B]">Moments Light</p>
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#123B68] md:text-4xl">Nos espaces à découvrir</h2>

                        <motion.div
                            className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
                            variants={staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: '-60px' }}
                        >
                            {featureCards.map((card) => {
                                const Icon = card.icon
                                return (
                                    <motion.article
                                        key={card.title}
                                        variants={staggerItem}
                                        {...hoverLift}
                                        className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/80 bg-[#123B68] shadow-sm"
                                    >
                                        <div className="absolute inset-0" style={{ background: card.fallback }} />
                                        <img
                                            src={card.image}
                                            alt=""
                                            aria-hidden="true"
                                            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black/25" />
                                        <div className={
                                            card.variant === 'gold'
                                                ? 'absolute inset-0 bg-gradient-to-t from-[#2b1304]/95 via-[#5c340d]/55 to-transparent'
                                                : card.variant === 'light'
                                                ? 'absolute inset-0 bg-gradient-to-t from-[#2b1304]/88 via-[#7a4a12]/45 to-transparent'
                                                : 'absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent'
                                        } />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/10 to-transparent" />
                                        <div className="absolute inset-0 flex flex-col justify-end p-6">
                                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#f2b233] shadow-md">
                                                <Icon size={24} strokeWidth={2.1} />
                                            </div>
                                            <h3 className="whitespace-pre-line font-heading text-2xl font-extrabold leading-[1.05] text-white drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]">{card.title}</h3>
                                            <p className="mt-3 max-w-[92%] text-sm font-medium leading-snug text-white/95 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]">{card.description}</p>
                                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f2b233] drop-shadow-[0_2px_6px_rgba(0,0,0,0.65)] transition-all duration-300 group-hover:translate-x-1">
                                                {card.cta} <span aria-hidden="true">→</span>
                                            </span>
                                        </div>
                                    </motion.article>
                                )
                            })}
                        </motion.div>
                    </div>
                </section>
            </MotionSection>
             {/* BOUTIQUE */}
            <MotionSection>
                <section className="bg-slate-50 py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#123B68] md:text-4xl">foursquare gi</h2>
                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                            Retrouvez des articles exclusifs Light Foursquare pour affirmer votre identité en tant que jeune chrétien engagé.
                        </p>
                        <Link href={route('shop.index')} className="mt-6 inline-flex items-center gap-3 text-base font-semibold text-[#123B68] transition hover:text-[#225CA3] md:text-lg">
                            Voir la boutique <span className="text-xl text-[#FBB51B]">→</span>
                        </Link>
                        <div className="mt-8">
                            <OffersCarouselDemo products={products} />
                        </div>
                    </div>
                </section>
            </MotionSection>

            {/* PIED DE PAGE - AVIS OFFICIEL + MINISTÈRES */}
            <MotionSection>
                <section className="bg-[#F7F7F5] pb-12">
                    <div className="mx-auto max-w-6xl px-6">
                        {/* Bande jaune d'avis officiel */}
                        {/* <motion.div
                            variants={staggerItem}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: '-60px' }}
                            className="flex flex-col gap-5 rounded-sm border border-[#eadfce] bg-[#fbf7ef] px-6 py-6 shadow-sm md:flex-row md:items-center md:justify-between md:px-8"
                        >
                            <div className="flex items-start gap-5">
                                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#062b49] text-white shadow-sm">
                                    <Megaphone size={34} strokeWidth={1.8} />
                                </div>
                                <div>
                                    <h3 className="font-heading text-3xl font-extrabold leading-none text-[#082b49]">Avis officiel</h3>
                                    <p className="mt-2 max-w-2xl text-sm font-medium leading-snug text-[#260d10] md:text-base">
                                        Ouverture des inscriptions pour la Convention Nationale 2026.<br />
                                        Inscrivez votre église avant le 30 juin 2026.
                                    </p>
                                </div>
                            </div>
                            <a href="#" className="inline-flex items-center justify-center gap-3 border border-[#082b49] px-7 py-3 text-sm font-bold text-[#082b49] transition duration-300 hover:bg-[#082b49] hover:text-white">
                                Lire l’avis complet <ArrowRight size={18} />
                            </a>
                        </motion.div> */}

                        {/* Les logos des ministères */}
                        <div className="mt-10 text-center">
                            <div className="inline-flex flex-col items-center">
                                <h2 className="text-sm font-extrabold uppercase tracking-wide text-[#123B68]">Nos ministères & structures</h2>
                                <span className="mt-2 h-[2px] w-10 bg-[#f2b233]" />
                            </div>
                            <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-7 md:grid-cols-3 lg:grid-cols-6">
                                {ministryLogos.map((item) => (
                                    <div key={item.name} className="flex min-h-[58px] items-center justify-center">
                                        <img src={item.image} alt={item.name} className="max-h-16 max-w-[150px] object-contain" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="mt-10 bg-[#E8EFF7] py-7">
                        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 lg:flex-row lg:items-center lg:justify-between">
                            <form className="flex w-full max-w-3xl flex-col bg-white shadow-sm sm:flex-row">
                                <label htmlFor="newsletter-email" className="flex min-h-[58px] items-center border-b border-[#e7dfd4] px-6 text-sm font-bold text-[#260d10] sm:w-[310px] sm:border-b-0 sm:border-r">
                                    Recevoir les actualités de l’Église
                                </label>
                                <div className="flex flex-1 items-center">
                                    <input
                                        id="newsletter-email"
                                        type="email"
                                        placeholder="Votre e-mail"
                                        className="h-[58px] flex-1 border-none bg-white px-6 text-sm text-[#260d10] outline-none placeholder:text-[#7b7166] focus:ring-0"
                                    />
                                    <button type="submit" aria-label="S’inscrire à la newsletter" className="flex h-[58px] w-16 items-center justify-center text-[#260d10] transition duration-300 hover:bg-[#f2b233] hover:text-white">
                                        <Send size={20} />
                                    </button>
                                </div>
                            </form>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                                <span className="text-sm font-semibold text-[#260d10]">Plus d’informations ?</span>
                                <a href="#contact" className="inline-flex min-h-[54px] items-center justify-center bg-[#FBB51B] px-10 text-sm font-extrabold uppercase text-[#123B68] transition duration-300 hover:bg-[#225CA3] hover:text-white">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </MotionSection>

           
        </div>
    )
}
