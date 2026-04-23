import { Link } from '@inertiajs/react';
import { Menu, Search, ShoppingCart } from 'lucide-react';

const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/news' },
    { label: 'Boutique', href: '/shop' },
    { label: 'À propos', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function PublicNavbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400 bg-white text-lg font-black text-slate-900">
                        LF
                    </span>
                    <span className="hidden text-sm font-bold tracking-wide text-slate-900 sm:inline">Light Foursquare</span>
                </Link>

                <nav className="ml-2 hidden flex-1 items-center justify-center gap-8 text-xl font-medium text-slate-800 md:flex">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="transition hover:text-slate-500">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-4 text-slate-800">
                    <button type="button" className="hidden p-1 transition hover:text-slate-500 md:inline-flex" aria-label="Langue">
                        🇬🇧
                    </button>
                    <button type="button" className="hidden p-1 transition hover:text-slate-500 md:inline-flex" aria-label="Rechercher">
                        <Search className="h-6 w-6" strokeWidth={1.7} />
                    </button>
                    <Link href="/cart" className="p-1 transition hover:text-slate-500" aria-label="Panier">
                        <ShoppingCart className="h-6 w-6" strokeWidth={1.7} />
                    </Link>
                    <button type="button" className="p-1 transition hover:text-slate-500 md:hidden" aria-label="Menu">
                        <Menu className="h-6 w-6" strokeWidth={1.7} />
                    </button>
                </div>
            </div>
        </header>
    );
}
