import PublicNavbar from '@/Components/PublicNavbar'
import { HoverSliderDemo } from '@/components/ui/animated-slideshow-demo'
import { ExpandableGallery } from '@/components/ui/expandable-gallery'
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo'
import { MotionSection } from '@/components/ui/motion-section'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { hoverLift, staggerContainer, staggerItem } from '@/lib/animations'
import {
    ArrowRight,
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
        fallback: 'linear-gradient(135deg, #2b1711 0%, #6b3f1d 45%, #d8a64a 100%)',
    },
    {
        title: 'Base de données\ndes enseignements',
        description: 'Accédez aux messages, formations et ressources spirituelles.',
        cta: 'Accéder',
        icon: MonitorPlay,
        variant: 'dark',
        image: '/images/image 2.jpg',
        fallback: 'linear-gradient(135deg, #061b2d 0%, #173d5d 45%, #8b6b3a 100%)',
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
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: (index = 0) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 0.2 + index * 0.12, duration: 0.55 },
        }),
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

            {/* HERO - La grosse section du haut avec les images qui bougent */}
            <section className="relative overflow-hidden bg-[#f9fafc]">
                {/* Les petites formes décoratives */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(92,45,145,0.055),transparent_24%),radial-gradient(circle_at_88%_60%,rgba(205,23,37,0.055),transparent_26%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[145px] bg-gradient-to-t from-[#dfe2e8]/55 to-transparent" />

                {/* Les ronds colorés Foursquare */}
                <div className="absolute -right-14 top-6 hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#CD1725] lg:block" />
                <div className="absolute -right-14 top-[165px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#005AA9] lg:block" />
                <div className="absolute -right-14 top-[324px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#FFD23F] lg:block" />
                <div className="absolute -right-14 top-[483px] hidden h-[220px] w-[220px] rounded-full border-[10px] border-white bg-[#5B2C83] lg:block" />

                <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-start gap-8 px-4 py-8 sm:py-10 md:px-6 lg:min-h-[620px] lg:grid-cols-[0.98fr_1.02fr] lg:py-12">
                    
                    {/* Partie gauche - le texte */}
                    <MotionSection delay={0.15}>
                        <div className="max-w-[660px] pt-0 lg:pt-0">
                            {/* Logo */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.05 }}
                                className="mb-7 flex items-start"
                            >
                                <img
                                    src="/images/logo.png"
                                    alt="Logo Église Évangélique Foursquare Côte d’Ivoire"
                                    className="h-28 w-auto object-contain"
                                />
                            </motion.div>

                            {/* Gros titre - Convention 2026 */}
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.6, delay: 0.14 }}
                                className="max-w-[660px] text-left text-[30px] font-black leading-[1.06] tracking-[-0.025em] text-black md:text-[34px] lg:text-[44px]"
                            >
                                <span className="block whitespace-nowrap">Convention Nationale</span>
                                <span className="block">2026</span>
                                <span className="block whitespace-nowrap text-[#CD1725]">de l’Église Foursquare</span>
                                <span className="block text-[#5B2C83]">Côte d’Ivoire</span>
                            </motion.h1>

                            {/* Les petites barres de couleur */}
                            <div className="mt-5 flex items-center gap-1.5">
                                <span className="h-[3px] w-9 bg-[#CD1725]" />
                                <span className="h-[3px] w-9 bg-[#005AA9]" />
                                <span className="h-[3px] w-9 bg-[#FFD23F]" />
                                <span className="h-[3px] w-9 bg-[#5B2C83]" />
                            </div>

                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                transition={{ duration: 0.55, delay: 0.22 }}
                                className="mt-6 max-w-[500px] text-left text-[14px] font-medium leading-7 text-[#102033]/75 md:text-[15px]"
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
                                className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5"
                            >
                                <a
                                    href="/communiques/convention-nationale-2026"
                                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#CD1725] px-5 py-3 text-[13px] font-black text-white shadow-[0_14px_34px_rgba(205,23,37,0.24)] transition hover:-translate-y-0.5 hover:bg-[#b91322] sm:w-auto"
                                >
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-sm border border-white/70 text-[10px]">▣</span>
                                    Lire le communiqué
                                    <span className="text-base">→</span>
                                </a>

                                <a
                                    href="/inscription"
                                    className="inline-flex w-full items-center justify-center gap-3 border-b-2 border-[#5B2C83] pb-2 text-[13px] font-black text-[#06233F] transition hover:text-[#CD1725] sm:w-auto"
                                >
                                    S’inscrire
                                    <span className="text-base text-[#CD1725]">→</span>
                                </a>
                            </motion.div>

                            {/* Image pour mobile */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={0}
                                className="mt-8 overflow-hidden rounded-[24px] border-[4px] border-white shadow-[0_12px_35px_rgba(6,35,63,0.12)] lg:hidden"
                            >
                                <img
                                    src="/images/image 5.jpg"
                                    alt="Culte Foursquare"
                                    className="h-[240px] w-full object-cover object-[50%_30%]"
                                />
                            </motion.div>
                        </div>
                    </MotionSection>

                    {/* Partie droite - les 4 images qui s'empilent */}
                    <MotionSection delay={0.25}>
                        <div className="relative hidden min-h-[620px] lg:block">
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
                                className="group absolute left-[30px] top-[0px] z-10 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]"
                            >
                                <img
                                    src="/images/image 5.jpg"
                                    alt="Culte Foursquare"
                                    className="h-full w-full object-cover object-[50%_22%] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </motion.div>

                            {/* Image 2 - en haut à droite */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={1}
                                className="group absolute right-[30px] top-[0px] z-20 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]"
                            >
                                <img
                                    src="/images/image 3.jpg"
                                    alt="Étude biblique"
                                    className="h-full w-full object-cover object-[50%_28%] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </motion.div>

                            {/* Image 3 - en bas à gauche */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={2}
                                className="group absolute left-[30px] top-[280px] z-10 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]"
                            >
                                <img
                                    src="/images/image 6.jpg"
                                    alt="Assemblée Foursquare"
                                    className="h-full w-full object-cover object-[50%_35%] transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </motion.div>

                            {/* Image 4 - en bas à droite */}
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={imageCascade}
                                custom={3}
                                className="group absolute right-[30px] top-[280px] z-30 h-[220px] w-[270px] overflow-hidden rounded-[26px] border-[5px] border-white shadow-[0_16px_40px_rgba(6,35,63,0.12)] transition-all duration-500 hover:scale-[1.02]"
                            >
                                <img
                                    src="/images/image 1.jpg"
                                    alt="Prière et communion"
                                    className="h-full w-full object-cover object-[50%_32%] transition-transform duration-700 group-hover:scale-[1.02]"
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
                <section className="relative overflow-hidden bg-[#f9fafc] py-8 md:py-10">
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
                                            index === 0 ? 'text-[#CD1725]' : 'text-[#07172F]/55 hover:text-[#5B2C83]'
                                        }`}
                                    >
                                        {tab}
                                        {index === 0 && (
                                            <span className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-[#CD1725] via-[#005AA9] to-[#FFD23F]" />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* La liste des actualités */}
                            <div className="divide-y divide-black/5 px-5">
                                {[
                                    { day: '10', month: 'MAI 2026', color: '#CD1725', title: 'Avis d’appel aux églises pour la Convention Nationale 2026', desc: 'Date limite d’inscription : 30 juin 2026' },
                                    { day: '03', month: 'MAI 2026', color: '#005AA9', title: 'Formation des responsables : Leadership et intégrité', desc: 'Du 15 au 17 mai 2026 à Abidjan' },
                                    { day: '26', month: 'AVR. 2026', color: '#FFD23F', title: 'Campagne nationale de prière et de jeûne', desc: 'Du 1er au 31 mai 2026 — Un mois pour notre nation' },
                                    { day: '18', month: 'AVR. 2026', color: '#5B2C83', title: "Nouvelles implantations d’églises en 2026", desc: '5 nouvelles œuvres lancées en Côte d’Ivoire' },
                                ].map((item) => (
                                    <a key={item.title} href="/actualites" className="group grid grid-cols-[58px_1fr_22px] items-center gap-4 py-4">
                                        <div className="text-center">
                                            <div className="font-serif text-2xl font-black leading-none" style={{ color: item.color }}>{item.day}</div>
                                            <div className="mt-1 text-[9px] font-black uppercase tracking-wide text-[#07172F]/45">{item.month}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-[13px] font-black leading-snug text-[#07172F] transition group-hover:text-[#CD1725] md:text-sm">{item.title}</h3>
                                            <p className="mt-1 text-xs font-medium text-[#07172F]/55">{item.desc}</p>
                                        </div>
                                        <span className="text-xl text-[#07172F]/35 transition group-hover:translate-x-1 group-hover:text-[#5B2C83]">›</span>
                                    </a>
                                ))}
                            </div>

                            <div className="border-t border-black/5 px-5 py-4">
                                <a href="/actualites" className="inline-flex items-center gap-2 text-xs font-black text-[#CD1725] transition hover:text-[#5B2C83]">
                                    Voir toutes les actualités <span>→</span>
                                </a>
                            </div>
                        </div>

                        {/* Message du président national */}
                        <div className="overflow-hidden rounded-[24px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(6,35,63,0.08)]">
                            <div className="px-5 pt-5 text-center">
                                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#CD1725]">Président national</p>
                            </div>

                            <div className="relative mx-auto mt-4 flex h-[230px] items-end justify-center px-5">
                                <div className="absolute bottom-0 h-[185px] w-[185px] rounded-full bg-gradient-to-br from-[#CD1725]/10 via-[#FFD23F]/20 to-[#5B2C83]/10" />
                                <img src="/images/image 5.jpg" alt="Président national" className="relative z-10 h-[220px] w-auto object-contain" />
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
                <section className="bg-[#F8F4EC] py-8 md:py-10">
                    <div className="mx-auto grid max-w-6xl gap-6 px-4 md:px-6 lg:grid-cols-3">
                        
                        {/* Les chiffres clés */}
                        <div className="rounded-md border border-[#06233F]/5 bg-[#FBF7EF] p-6 shadow-[0_12px_35px_rgba(6,35,63,0.06)]">
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
                        <div className="rounded-md border border-[#06233F]/5 bg-[#FBF7EF] p-6 shadow-[0_12px_35px_rgba(6,35,63,0.06)]">
                            <h2 className="mb-6 text-base font-black text-[#06233F]">Prochains rendez-vous</h2>
                            <div className="space-y-5">
                                {[
                                    { day: '15', month: 'MAI', title: 'Formation des responsables', desc: '15 – 17 mai 2026 | Abidjan' },
                                    { day: '01', month: 'JUIN', title: 'Convention Nationale 2026', desc: '1er – 7 juin 2026 | Yamoussoukro' },
                                    { day: '20', month: 'JUIN', title: 'Journée des Enfants Foursquare', desc: "20 juin 2026 | Partout en Côte d’Ivoire" },
                                ].map((event) => (
                                    <a key={event.title} href="/evenements" className="group flex items-start gap-4">
                                        <div className="flex h-[52px] w-[52px] shrink-0 flex-col items-center justify-center rounded-md border-2 border-[#E7B84D] bg-white text-center">
                                            <span className="text-lg font-black leading-none text-[#C58A12]">{event.day}</span>
                                            <span className="mt-1 text-[9px] font-black uppercase text-[#06233F]/55">{event.month}</span>
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-[14px] font-black leading-snug text-[#06233F] transition group-hover:text-[#C58A12]">{event.title}</h3>
                                            <p className="mt-1 text-xs font-medium text-[#06233F]/55">{event.desc}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            <a href="/evenements" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#C58A12] transition hover:text-[#06233F]">
                                Voir tous les événements <span>→</span>
                            </a>
                        </div>

                        {/* Liens utiles */}
                        <div className="rounded-md border border-[#06233F]/5 bg-[#FBF7EF] p-6 shadow-[0_12px_35px_rgba(6,35,63,0.06)]">
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
                <section className="bg-[#f4f4f4] py-16 md:py-20">
                    <div className="mx-auto max-w-6xl px-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">Moments Light</p>
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">Nos espaces à découvrir</h2>

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
                                        className="group relative min-h-[240px] overflow-hidden rounded-2xl border border-white/80 bg-[#260d10] shadow-sm"
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
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">foursquare gi</h2>
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

            {/* PIED DE PAGE - AVIS OFFICIEL + MINISTÈRES */}
            <MotionSection>
                <section className="bg-[#f4f4f4] pb-12">
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
                                <h2 className="text-sm font-extrabold uppercase tracking-wide text-[#260d10]">Nos ministères & structures</h2>
                                <span className="mt-2 h-[2px] w-10 bg-[#f2b233]" />
                            </div>
                            <div className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-7 md:grid-cols-3 lg:grid-cols-6">
                                {ministryLogos.map((item) => (
                                    <div key={item.name} className="flex min-h-[58px] items-center justify-center">
                                        <img src={item.image} alt={item.name} className="max-h-12 max-w-[150px] object-contain" loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* NEWSLETTER */}
                    <div className="mt-10 bg-[#eee8dd] py-7">
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
                                <a href="#contact" className="inline-flex min-h-[54px] items-center justify-center bg-[#f2b233] px-10 text-sm font-extrabold uppercase text-[#260d10] transition duration-300 hover:bg-[#d99a1c]">
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