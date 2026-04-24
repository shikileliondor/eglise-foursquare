import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

import PublicNavbar from '@/Components/PublicNavbar';

const missionItems = [
    'renforcer la vie spirituelle des jeunes',
    'créer un esprit d’unité et d’amour fraternel',
    'encourager l’implication des ados dans l’église',
    'impacter positivement notre génération',
];

const objectives = [
    'organiser des activités spirituelles et sociales',
    'participer aux conventions Foursquare',
    'développer les talents des ados (musique, média, communication)',
    'promouvoir l’évangile avec des outils modernes',
];

const revealVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function AboutIndex() {
    return (
        <>
            <Head title="À propos" />

            <div className="min-h-screen bg-slate-950 text-slate-100">
                <PublicNavbar />

                <main>
                    <motion.section
                        initial={{ opacity: 0, scale: 0.97, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="relative overflow-hidden border-b border-white/10"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_48%),radial-gradient(circle_at_80%_0%,rgba(251,191,36,0.25),transparent_38%),linear-gradient(135deg,#020617_20%,#0f172a_55%,#1e1b4b_100%)]" />
                        <div className="relative mx-auto flex min-h-[55vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center md:min-h-[62vh]">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/90">Light Foursquare</p>
                            <h1 className="max-w-4xl text-4xl font-black uppercase leading-tight text-white sm:text-5xl md:text-6xl">
                                À propos de Light Foursquare
                            </h1>
                            <p className="mt-6 max-w-2xl text-base text-slate-200 sm:text-lg md:text-xl">
                                Un mouvement d’ados passionnés au service de Dieu
                            </p>
                        </div>
                    </motion.section>

                    <section className="bg-slate-900 py-16 md:py-20">
                        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:gap-14">
                            <motion.div
                                initial={{ opacity: 0, x: -44 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.75, ease: 'easeOut' }}
                                className="space-y-7"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">Qui sommes-nous ?</p>
                                <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                                    Light Foursquare est un mouvement d’ados de l’église Foursquare Côte d’Ivoire. Nous sommes
                                    une génération dynamique engagée dans la foi, la louange et le service de Dieu.
                                </p>

                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Nous avons pour mission de :</p>
                                    <ul className="mt-4 space-y-3 text-slate-200">
                                        {missionItems.map((item) => (
                                            <li key={item} className="flex items-start gap-3">
                                                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                                                <span className="text-sm leading-relaxed sm:text-base">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 44 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.75, ease: 'easeOut' }}
                                className="relative"
                            >
                                <div className="absolute -left-6 -top-6 h-24 w-24 rounded-3xl bg-indigo-500/30 blur-2xl" />
                                <div className="absolute -bottom-8 -right-4 h-28 w-28 rounded-full bg-amber-500/20 blur-2xl" />
                                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800/70 shadow-2xl">
                                    <img
                                        src="/images/534336857_122251521824024944_5650508535512238767_n.jpg"
                                        alt="Jeunes en moment de louange à l'église"
                                        className="h-full w-full min-h-[280px] object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    <motion.section
                        variants={revealVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="border-y border-white/10 bg-slate-950 py-16 md:py-20"
                    >
                        <div className="mx-auto max-w-4xl px-6 text-center">
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Vision</p>
                            <p className="mt-6 text-lg leading-relaxed text-slate-100 sm:text-xl md:text-2xl">
                                Devenir un mouvement de jeunes leaders chrétiens capables d’influencer leur génération par
                                la parole de Dieu, la créativité et l’excellence.
                            </p>
                        </div>
                    </motion.section>

                    <section className="bg-slate-900 py-16 md:py-20">
                        <div className="mx-auto max-w-6xl px-6">
                            <motion.div
                                variants={revealVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                className="max-w-2xl"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-300">Objectifs</p>
                                <h2 className="mt-4 text-3xl font-black uppercase text-white sm:text-4xl">Des actions concrètes</h2>
                            </motion.div>

                            <div className="mt-10 grid gap-5 sm:grid-cols-2">
                                {objectives.map((objective, index) => (
                                    <motion.article
                                        key={objective}
                                        initial={{ opacity: 0, y: 28 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.2 }}
                                        transition={{ duration: 0.6, delay: index * 0.08, ease: 'easeOut' }}
                                        className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900 p-6 shadow-xl"
                                    >
                                        <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">Objectif {index + 1}</p>
                                        <p className="mt-3 text-base leading-relaxed text-slate-200">{objective}</p>
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
