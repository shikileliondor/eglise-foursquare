import PublicNavbar from '@/Components/PublicNavbar';
import { Head, Link } from '@inertiajs/react';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';

const fallbackImage = 'https://placehold.co/1400x900/E7E8DF/6D6D63?text=Actualite';

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

export default function NewsShow({ news }) {
    const photoUrls = news.photo_urls?.length ? news.photo_urls : [news.image_url || fallbackImage];
    const [selectedPhoto, setSelectedPhoto] = useState(photoUrls[0]);

    return (
        <>
            <Head title={news.title} />

            <div className="min-h-screen bg-[#f5f5f3] text-zinc-800">
                <PublicNavbar />

                <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
                    <Link href={route('news.index')} className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                        <ChevronLeft className="h-4 w-4" />
                        Retour aux actualités
                    </Link>

                    <article className="overflow-hidden rounded-3xl bg-white shadow-sm">
                        <img src={selectedPhoto || fallbackImage} alt={news.title} className="h-[420px] w-full object-cover" />

                        <div className="space-y-5 p-6 sm:p-10">
                            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">{formatDate(news.published_at)}</p>
                            <h1 className="text-3xl font-semibold text-zinc-800 sm:text-4xl">{news.title}</h1>
                            <p className="whitespace-pre-line text-base leading-8 text-zinc-600">{news.content}</p>

                            <div>
                                <h2 className="mb-3 text-lg font-semibold text-zinc-800">Photos de l&apos;actualité</h2>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                                    {photoUrls.map((photoUrl) => (
                                        <button
                                            key={photoUrl}
                                            type="button"
                                            onClick={() => setSelectedPhoto(photoUrl)}
                                            className={`overflow-hidden rounded-xl border transition ${
                                                selectedPhoto === photoUrl ? 'border-zinc-900 ring-2 ring-zinc-900/10' : 'border-zinc-200 hover:border-zinc-400'
                                            }`}
                                        >
                                            <img src={photoUrl} alt="Photo actualité" className="h-24 w-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}
