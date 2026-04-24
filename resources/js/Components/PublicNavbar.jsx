import { Link } from '@inertiajs/react';
import { Menu, Search, ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchCart, subscribeCart } from '@/lib/cart';

const links = [
    { label: 'Accueil', href: '/' },
    { label: 'Actualités', href: '/news' },
    { label: 'Boutique', href: '/shop' },
    { label: 'À propos', href: '/about' },
    { label: 'Contact', href: '/contact' },
];

export default function PublicNavbar() {
    const [cartCount, setCartCount] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        fetchCart()
            .then((cart) => setCartCount(cart?.count ?? 0))
            .catch(() => setCartCount(0));

        return subscribeCart((nextCart) => {
            setCartCount(nextCart?.count ?? 0);
        });
    }, []);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const threshold = window.innerWidth < 768 ? 64 : 96;
            setIsVisible(window.scrollY > threshold);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3">
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-400 overflow-hidden bg-white">
        <img
            src="/images/logo.jpg"
            alt="Light Foursquare"
            className="h-full w-full object-cover"
        />
    </span>
    <span className="font-heading hidden text-sm font-semibold tracking-wide text-slate-900 sm:inline">
        Light <br/> Foursquare
    </span>
</Link>

                <nav className="ml-2 hidden flex-1 items-center justify-center gap-8 text-base font-medium text-slate-800 md:flex">
                    {links.map((link) => (
                        <Link key={link.href} href={link.href} className="transition hover:text-slate-500">
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="ml-auto flex items-center gap-4 text-slate-800">
                    {/* <button type="button" className="hidden p-1 transition hover:text-slate-500 md:inline-flex" aria-label="Langue">
                        🇬🇧
                    </button> */}
                    {/* <button type="button" className="hidden p-1 transition hover:text-slate-500 md:inline-flex" aria-label="Rechercher">
                        <Search className="h-6 w-6" strokeWidth={1.7} />
                    </button> */}
                    <Link href="/cart" className="relative p-1 transition hover:text-slate-500" aria-label="Panier">
                        <ShoppingCart className="h-6 w-6" strokeWidth={1.7} />
                        {cartCount > 0 ? (
                            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[11px] font-semibold leading-none text-white">
                                {cartCount}
                            </span>
                        ) : null}
                    </Link>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="p-1 transition hover:text-slate-500 md:hidden"
                        aria-label="Menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-main-menu"
                    >
                        <Menu className="h-6 w-6" strokeWidth={1.7} />
                    </button>
                </div>
            </div>

            {isMenuOpen ? (
                <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-sm md:hidden" id="mobile-main-menu">
                    <nav className="flex flex-col gap-3 text-sm font-medium text-slate-800">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-2 py-2 transition hover:bg-slate-100"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            ) : null}
        </header>
    );
}
