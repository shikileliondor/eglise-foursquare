
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
 
            <div className="min-h-screen bg-gray-50">
                <PublicNavbar />
 
                <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-56 sm:px-6 lg:px-8">
                    <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-600">Contact</p>
                        <h1 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">Formulaire simple</h1>
                        <p className="mt-4 text-sm text-gray-600 sm:text-base">
                            Remplissez ce formulaire pour nous laisser vos informations. Les champs marqués * sont obligatoires.
                        </p>
 
                        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                            <div className="grid gap-5 sm:grid-cols-2">
                                <label className="space-y-2">
                                    <span className="text-sm font-medium text-gray-700">Nom *</span>
                                    <input
                                        required
                                        type="text"
                                        name="nom"
                                        placeholder="Votre nom"
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                    />
                                </label>
 
                                <label className="space-y-2">
                                    <span className="text-sm font-medium text-gray-700">Prénom *</span>
                                    <input
                                        required
                                        type="text"
                                        name="prenom"
                                        placeholder="Votre prénom"
                                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                    />
                                </label>
                            </div>
 
                            <label className="space-y-2 block">
                                <span className="text-sm font-medium text-gray-700">Numéro de téléphone *</span>
                                <input
                                    required
                                    type="tel"
                                    name="telephone"
                                    placeholder="Ex: 07 00 00 00 00"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                />
                            </label>
 
                            <label className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                                <input
                                    type="checkbox"
                                    name="membre_foursquare"
                                    checked={isMember}
                                    onChange={(event) => setIsMember(event.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                                />
                                <span className="text-sm text-gray-700">Je suis membre Foursquare</span>
                            </label>
 
                            {isMember ? (
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="space-y-2">
                                        <span className="text-sm font-medium text-gray-700">District *</span>
                                        <input
                                            required={isMember}
                                            type="text"
                                            name="district"
                                            placeholder="Votre district"
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        />
                                    </label>
 
                                    <label className="space-y-2">
                                        <span className="text-sm font-medium text-gray-700">Église *</span>
                                        <input
                                            required={isMember}
                                            type="text"
                                            name="eglise"
                                            placeholder="Nom de votre église"
                                            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                                        />
                                    </label>
                                </div>
                            ) : null}
 
                            <button
                                type="submit"
                                className="inline-flex items-center rounded-xl bg-amber-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
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