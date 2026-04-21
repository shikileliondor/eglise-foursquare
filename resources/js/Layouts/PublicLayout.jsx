import { Link } from '@inertiajs/react';

export default function PublicLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <Link href="/" className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-black text-slate-900">
                            L
                        </span>
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Light Convention</p>
                            <p className="text-base font-extrabold leading-none">Foursquare</p>
                        </div>
                    </Link>

                    <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
                        <Link href="/" className="text-slate-700 transition hover:text-slate-900">Accueil</Link>
                        <Link href="/about" className="text-slate-700 transition hover:text-slate-900">À propos</Link>
                        <Link href="/convention" className="text-slate-700 transition hover:text-slate-900">Convention</Link>
                        <Link href="/shop" className="text-slate-700 transition hover:text-slate-900">Boutique</Link>
                        <Link href="/news" className="text-slate-700 transition hover:text-slate-900">Actualités</Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Link
                            href="/shop"
                            className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
                        >
                            Commander
                        </Link>
                    </div>
                </div>
            </header>

            <main>{children}</main>

            <footer className="mt-20 bg-slate-950 text-slate-200">
                <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Light</p>
                        <h2 className="mt-3 text-2xl font-black">Un mouvement vivant, une vision forte.</h2>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Navigation</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
                            <li><Link href="/convention" className="hover:text-white">Convention</Link></li>
                            <li><Link href="/shop" className="hover:text-white">Boutique</Link></li>
                            <li><Link href="/news" className="hover:text-white">Actualités</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Contact</h3>
                        <p className="mt-4 text-sm text-slate-300">Besoin d&apos;aide pour une commande convention ?</p>
                        <a
                            href="https://wa.me/2250000000000"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-4 inline-flex rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
                        >
                            WhatsApp
                        </a>
                    </div>
                </div>
                <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-400">
                    © {new Date().getFullYear()} Light Foursquare. Tous droits réservés.
                </div>
            </footer>
        </div>
    );
}
