import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

import PublicNavbar from '@/Components/PublicNavbar';

const missionItems = [
    'Renforcer la vie spirituelle des jeunes',
    'Créer un esprit d’unité et d’amour fraternel',
    'Encourager l’implication des ados dans l’église',
    'Impacter positivement notre génération',
];

const objectives = [
    'Organiser des activités spirituelles et sociales',
    'Participer aux conventions Foursquare',
    'Développer les talents des ados (musique, média, communication)',
    'Promouvoir l’évangile avec des outils modernes',
];

const sectionReveal = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function AboutIndex() {
    return (
        <>
            <Head title="À propos" />

            <div className="min-h-screen bg-white text-slate-900">
                <PublicNavbar />

                <main className="bg-white">
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="relative overflow-hidden border-b border-slate-200"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.12),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(79,70,229,0.12),transparent_42%)]" />
                        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 text-center md:pb-24 md:pt-24">
                            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#c96442]">Light Foursquare</p>
                            <h1 className="font-heading mt-5 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#260d10] sm:text-5xl md:text-6xl">
                                À propos  de  Light
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                                Une génération de jeunes passionnés qui grandit dans la foi, sert avec amour et influence
                                son époque avec excellence.
                            </p>
                        </div>
                    </motion.section>

                    <section className="py-16 md:py-20">
                        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -34 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="space-y-7"
                            >
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6a58c7]">Qui sommes-nous ?</p>
                                    <h2 className="font-heading mt-3 text-3xl font-extrabold leading-tight text-[#260d10] md:text-4xl">
                                        Une famille de jeunes enracinés en Christ
                                    </h2>
                                </div>
                                <p className="text-base leading-8 text-slate-700 md:text-lg">
                                    Light Foursquare est le mouvement de jeunesse de l’église Foursquare Côte d’Ivoire.
                                    Notre cœur est simple : former des jeunes solides dans la Parole, actifs dans
                                    l’église, et utiles à leur génération.
                                </p>

                                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-7">
                                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c96442]">
                                        Notre mission
                                    </p>
                                    <ul className="mt-4 space-y-3.5">
                                        {missionItems.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-slate-700">
                                                <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#6a58c7]" />
                                                <span className="text-sm leading-relaxed md:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 34 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.7, ease: 'easeOut' }}
                                className="relative"
                            >
                                <div className="absolute -left-5 -top-5 h-24 w-24 rounded-2xl bg-[#f5d8c8]" />
                                <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-[#dcd6fb]" />
                                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(15,23,42,0.35)]">
                                    <img
                                        src="/images/image 6.jpg"
                                        alt="Jeunes en moment de louange à l'église"
                                        className="h-full min-h-[320px] w-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <motion.section
                        variants={sectionReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="border-y border-slate-200 bg-[#f8fafc] py-16 md:py-20"
                    >
                        <div className="mx-auto max-w-4xl px-6 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a58c7]">Vision</p>
                            <p className="font-heading mx-auto mt-6 max-w-3xl text-2xl font-semibold leading-snug text-[#260d10] md:text-4xl">
                                Former des jeunes leaders chrétiens capables d’influencer leur génération par la Parole,
                                la créativité et l’excellence.
                            </p>
                        </div>
                    </motion.section>

                    <section className="py-16 md:py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <motion.div
                                variants={sectionReveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="max-w-3xl"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6a58c7]">Objectifs</p>
                                <h2 className="font-heading mt-4 text-3xl font-extrabold uppercase leading-tight text-[#260d10] sm:text-4xl">
                                    Des actions pour bâtir demain
                                </h2>
                            </motion.div>

                            <div className="mt-10 grid gap-5 md:grid-cols-2">
                                {objectives.map((objective, index) => (
                                    <motion.article
                                        key={objective}
                                        initial={{ opacity: 0, y: 24 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.45)]"
                                    >
                                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c96442]">Objectif {index + 1}</p>
                                        <p className="mt-3 text-base leading-relaxed text-slate-700">{objective}</p>
                                    </motion.article>
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
