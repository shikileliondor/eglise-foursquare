import PublicNavbar from '@/Components/PublicNavbar';
import { Head, Link } from '@inertiajs/react';

const fallbackImage = 'https://placehold.co/1200x700/E7E8DF/6D6D63?text=Actualite';

function formatDate(dateString) {
    if (!dateString) {
        return 'Date à confirmer';
    }

    return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
}

export default function NewsIndex({ news }) {
    const entries = news?.data ?? [];

    return (
        <>
            <Head title="Actualités" />

            <div className="min-h-screen overflow-x-hidden bg-[#f5f5f3] text-zinc-800">
                <PublicNavbar />

                <section className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 md:pb-16 lg:px-8">
                    <div className="mb-10 text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#bd7f6f]">Journal Light Foursquare</p>
                        <h1 className="mt-3 font-serif text-3xl font-semibold text-zinc-700 sm:text-4xl md:text-5xl">Nos actualités</h1>
                        <p className="mx-auto mt-3 max-w-2xl text-sm text-zinc-500">
                            Suivez les nouveautés, événements et annonces de la communauté avec une mise en page fidèle à l&apos;identité du site.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {entries.map((item) => (
                            <article key={item.id} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                                <img src={item.image_url || fallbackImage} alt={item.title} className="h-48 w-full max-w-full object-cover sm:h-56" />

                                <div className="p-4 sm:p-6">
                                    <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{formatDate(item.published_at)}</p>
                                    <h2 className="mt-3 line-clamp-2 text-xl font-semibold text-zinc-800 sm:text-2xl">{item.title}</h2>
                                    <p className="mt-3 line-clamp-3 text-sm text-zinc-600">{item.excerpt}</p>

                                    <Link
                                        href={route('news.show', item.slug)}
                                        className="mt-6 inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-900 hover:text-white"
                                    >
                                        Lire l&apos;actualité
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {entries.length === 0 ? (
                        <div className="mt-12 rounded-2xl border border-dashed border-zinc-300 bg-white p-8 text-center text-zinc-500">
                            Aucune actualité publiée pour le moment.
                        </div>
                    ) : null}
                </section>
            </div>
        </>
    );
}
