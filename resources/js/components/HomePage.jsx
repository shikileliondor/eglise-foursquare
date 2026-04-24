import PublicNavbar from '@/Components/PublicNavbar'
import { HoverSliderDemo } from '@/components/ui/animated-slideshow-demo'
import { ExpandableGallery } from '@/components/ui/expandable-gallery'
import OffersCarouselDemo from '@/components/ui/offers-carousel-demo'
import { MotionSection } from '@/components/ui/motion-section'
import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { hoverLift, staggerContainer, staggerItem } from '@/lib/animations'

const communityPhotos = [
    '/images/image 6.jpg',
    '/images/image 2.jpg',
    '/images/image 3.jpg',
    '/images/image 4.jpg',
]

const fallbackNewsImage = 'https://placehold.co/1200x700/E7E8DF/6D6D63?text=Actualite'

function formatDate(dateString) {
    if (!dateString) return 'Date à confirmer'
    return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    })
}

export default function HomePage({ products = [], latestNews = [] }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <PublicNavbar />

            {/* ─── HERO ─── */}
            <section className="relative overflow-hidden bg-white pb-16 pt-12 md:pb-20 md:pt-16">
                <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#c96442] via-[#f89b21] to-transparent" />
                <div className="relative mx-auto max-w-7xl px-4 md:px-6">

                    <MotionSection>
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
                                Light Foursquare au service d'une génération qui impacte.
                            </p>
                        </div>
                    </MotionSection>

                    <MotionSection delay={0.15}>
                        <div className="grid h-[280px] grid-cols-[1.8fr_1fr_1fr] grid-rows-2 gap-[6px] sm:h-[380px] md:h-[460px] lg:h-[520px]">

                            <article className="group relative row-span-2 overflow-hidden bg-slate-100">
                                <img src="/images/image 1.jpg" alt="Worship" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5">
                                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.25em] text-white/60 sm:text-[9px]">Worship</span>
                                </div>
                            </article>

                            <article className="group relative overflow-hidden bg-slate-100">
                                <img src="/images/image 9.jpg" alt="Media" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">Media</span>
                                </div>
                                <span className="absolute right-2 top-2 text-[9px] font-bold text-white/25">02</span>
                            </article>

                            <article className="group relative overflow-hidden bg-slate-100">
                                <img src="/images/image 3.jpg" alt="Com" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">Com</span>
                                </div>
                                <span className="absolute right-2 top-2 text-[9px] font-bold text-white/25">03</span>
                            </article>

                            <article className="group relative overflow-hidden bg-slate-100">
                                <img src="/images/image 4.jpg" alt="Intercession" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">Intercession</span>
                                </div>
                                <span className="absolute right-2 top-2 text-[9px] font-bold text-white/25">04</span>
                            </article>

                            <article className="group relative overflow-hidden bg-slate-100">
                                <img src="/images/image 6.jpg" alt="Events" className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4">
                                    <span className="mb-1 block text-[8px] font-bold uppercase tracking-[0.2em] text-white/60">Events</span>
                                </div>
                                <span className="absolute right-2 top-2 text-[9px] font-bold text-white/25">05</span>
                            </article>

                        </div>
                    </MotionSection>

                    <MotionSection delay={0.2}>
                        <div className="mt-8 flex items-center justify-end border-t border-black/8 pt-6">
                            <Link href={route('about')} className="group flex items-center gap-3 border border-slate-900 px-6 py-3 text-xs font-bold uppercase tracking-widest text-slate-900 transition hover:bg-slate-900 hover:text-white">
                                Rejoindre <span className="transition group-hover:translate-x-1">→</span>
                            </Link>
                        </div>
                    </MotionSection>

                </div>
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
                            <motion.div
                                className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
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
                            Nos derniers souvenirs en images
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
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#260d10]">🛍️ Boutique Light</p>
                        <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] md:text-4xl">
                            Collection Foursquare
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
