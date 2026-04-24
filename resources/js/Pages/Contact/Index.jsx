import { Head } from '@inertiajs/react';
import { useState } from 'react';

import PublicNavbar from '@/Components/PublicNavbar';

export default function ContactIndex() {
    const [isMember, setIsMember] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        window.alert('Merci ! Votre formulaire a bien été rempli.');
    };

    return (
        <>
            <Head title="Contact" />

            <div className="min-h-screen bg-slate-950 text-slate-100">
                <PublicNavbar />

                <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-32 sm:px-6 lg:px-8">
                    <section className="rounded-3xl border border-white/10 bg-slate-900/90 p-6 shadow-2xl sm:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Contact</p>
                        <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Formulaire simple</h1>
                        <p className="mt-4 text-sm text-slate-300 sm:text-base">
                            Remplissez ce formulaire pour nous laisser vos informations. Les champs marqués * sont obligatoires.
                        </p>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2">
                                    <span className="text-sm font-medium text-slate-200">Nom *</span>
                                    <input
                                        required
                                        type="text"
                                        name="nom"
                                        placeholder="Votre nom"
                                        className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
                                    />
                                </label>

                                <label className="space-y-2">
                                    <span className="text-sm font-medium text-slate-200">Prénom *</span>
                                    <input
                                        required
                                        type="text"
                                        name="prenom"
                                        placeholder="Votre prénom"
                                        className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <label className="space-y-2 block">
                                <span className="text-sm font-medium text-slate-200">Numéro de téléphone *</span>
                                <input
                                    required
                                    type="tel"
                                    name="telephone"
                                    placeholder="Ex: 07 00 00 00 00"
                                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
                                />
                            </label>

                            <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/60 px-4 py-3">
                                <input
                                    type="checkbox"
                                    name="membre_foursquare"
                                    checked={isMember}
                                    onChange={(event) => setIsMember(event.target.checked)}
                                    className="h-4 w-4 rounded border-white/30 bg-transparent text-amber-300 focus:ring-amber-300"
                                />
                                <span className="text-sm text-slate-200">Je suis membre Foursquare</span>
                            </label>

                            {isMember ? (
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="space-y-2">
                                        <span className="text-sm font-medium text-slate-200">District *</span>
                                        <input
                                            required={isMember}
                                            type="text"
                                            name="district"
                                            placeholder="Votre district"
                                            className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
                                        />
                                    </label>

                                    <label className="space-y-2">
                                        <span className="text-sm font-medium text-slate-200">Église *</span>
                                        <input
                                            required={isMember}
                                            type="text"
                                            name="eglise"
                                            placeholder="Nom de votre église"
                                            className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-300 focus:outline-none"
                                        />
                                    </label>
                                </div>
                            ) : null}

                            <div className="space-y-4 rounded-2xl border border-indigo-300/20 bg-indigo-500/10 p-4 sm:p-5">
                                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-200">Champs proposés (optionnels)</p>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <label className="space-y-2">
                                        <span className="text-sm text-slate-200">Email</span>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="votre@email.com"
                                            className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-300 focus:outline-none"
                                        />
                                    </label>

                                    <label className="space-y-2">
                                        <span className="text-sm text-slate-200">Âge</span>
                                        <input
                                            type="number"
                                            name="age"
                                            min="1"
                                            placeholder="Votre âge"
                                            className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-300 focus:outline-none"
                                        />
                                    </label>
                                </div>

                                <label className="space-y-2 block">
                                    <span className="text-sm text-slate-200">Sujet de contact</span>
                                    <input
                                        type="text"
                                        name="sujet"
                                        placeholder="Ex: Demande d'information"
                                        className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-300 focus:outline-none"
                                    />
                                </label>

                                <label className="space-y-2 block">
                                    <span className="text-sm text-slate-200">Message</span>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Votre message..."
                                        className="w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-indigo-300 focus:outline-none"
                                    />
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center rounded-xl bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
                            >
                                Envoyer
                            </button>
                        </form>
                    </section>
                </main>
            </div>
        </>
    );
}
