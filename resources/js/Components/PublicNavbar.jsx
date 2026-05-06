import { Link, usePage } from '@inertiajs/react';
import { BookOpen, ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useEffect, useMemo, useState } from 'react';

const MAIN_COLOR = '#06233F';
const ACCENT_COLOR = '#F4B739';

const TOP_LINKS = [
    { label: 'Versets du jour', href: '/versets-du-jour', icon: BookOpen },
    { label: 'Nous rejoindre', href: '/nous-rejoindre' },
    { label: 'Nous soutenir', href: '/nous-soutenir' },
    { label: 'Média', href: '/ressources/galerie-media' },
];

const SOCIAL_LINKS = [
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Youtube', href: '#', icon: FaYoutube },
];

// ─── Navigation principale ─────────────────────────────────────────────────
const NAV_ITEMS = [
    { label: 'Accueil', href: '/' },
    {
        label: 'Notre Eglise',
        href: '/notre-eglise',
        children: [
            { label: 'Histoire', href: '/notre-eglise/histoire' },
            { label: 'Vision nationale', href: '/notre-eglise/vision-nationale' },
            { label: 'Le Quadruple Évangile', href: '/notre-eglise/quadruple-evangile' },
            { label: "Début de l'Église en Côte d'Ivoire", href: '/notre-eglise/debut-en-cote-divoire' },
            { label: 'Confession de foi', href: '/notre-eglise/confession-de-foi' },
        ],
    },
    {
        label: 'Organisation',
        href: '/organisation',
        children: [
            { label: 'Présidence nationale', href: '/notre-eglise/presidence-nationale' },
            { label: 'Bureau national', href: '/organisation/bureau-national' },
            { label: 'Départements', href: '/organisation/departements' },
            { label: 'Districts', href: '/organisation/districts' },
            { label: 'Comités nationaux', href: '/organisation/comites-nationaux' },
            { label: 'Eglise locales', href: '/organisation/eglises-locales' },
            { label: 'Pasteurs & responsables', href: '/organisation/pasteurs-responsables' },
        ],
    },
    {
        label: 'Ministères',
        href: '/ministeres',
        children: [
            { label: 'FORCE', href: '/ministeres/force' },
            { label: 'FORME', href: '/ministeres/forme' },
            { label: 'Life Church Biblique', href: '/ministeres/life-church-biblique' },
            { label: 'École de mission', href: '/ministeres/ecole-de-mission' },
            { label: 'Louange & adoration', href: '/ministeres/louange-adoration' },
        ],
    },
    {
        label: 'Evénements',
        href: '/evenements',
        children: [
            { label: 'Convention nationale', href: '/evenements/convention-nationale' },
            { label: 'Programmes nationaux', href: '/evenements/programmes-nationaux' },
            { label: 'Conférences', href: '/evenements/conférences' },
            { label: 'Calendrier', href: '/evenements/calendrier' },
        ],
    },
    // { label: 'Événements', href: '/evenements' },
    {
        label: 'Ressources',
        href: '/ressources',
        children: [
            { label: 'Messages', href: '/ressources/messages' },
            { label: 'Enseignements', href: '/ressources/enseignements' },
            { label: 'Communiqués', href: '/ressources/communiques' },
            { label: 'Documents officiels', href: '/ressources/documents-officiels' },
            { label: 'Galerie média', href: '/ressources/galerie-media' },
            { label: 'Boutique', href: '/ressources/boutique' },
        ],
    },
    // { label: 'Nouvelles', href: '/news' },
    { label: 'Contact', href: '/contact' },
];

export default function PublicNavbar({ alwaysVisible = false }) {
    const { url } = usePage();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState(null);

    const [hasScrolled, setHasScrolled] = useState(alwaysVisible);

    useEffect(() => {
        if (alwaysVisible) {
            setHasScrolled(true);
            return;
        }

        const onScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, [alwaysVisible]);

    useEffect(() => {
        const onEscape = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
                setOpenMobileSection(null);
            }
        };

        window.addEventListener('keydown', onEscape);

        return () => window.removeEventListener('keydown', onEscape);
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
        setOpenMobileSection(null);
    }, [url]);

    const normalizedUrl = useMemo(() => {
        return url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url;
    }, [url]);

    const isLinkActive = (href, children = []) => {
        return normalizedUrl === href || children.some(({ href: childHref }) => normalizedUrl === childHref);
    };

    const toggleMobileSection = (label) => {
        setOpenMobileSection((current) => (current === label ? null : label));
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 w-full transform transition-all duration-300 ease-out ${
                hasScrolled
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : '-translate-y-full opacity-0 pointer-events-none'
            }`}
        >
            {/* ── Barre supérieure ──────────────────────────────────────── */}
            <div style={{ backgroundColor: MAIN_COLOR }} className="hidden lg:block">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
                    {/* Liens gauche */}
                    <div className="flex items-center gap-1 text-[12px] text-white/80">
                        {TOP_LINKS.map((link, index) => {
                            const Icon = link.icon;

                            return (
                                <span key={link.href} className="flex items-center">
                                    {index !== 0 && (
                                        <span className="mx-2.5 select-none text-white/25">|</span>
                                    )}

                                    <Link
                                        href={link.href}
                                        className="flex items-center gap-1.5 transition hover:text-white"
                                    >
                                        {Icon && (
                                            <Icon
                                                className="h-3.5 w-3.5"
                                                style={{ color: ACCENT_COLOR }}
                                            />
                                        )}

                                        {link.label}
                                    </Link>
                                </span>
                            );
                        })}
                    </div>

                    {/* Icônes sociales + sélecteur de langue */}
                    <div className="flex items-center gap-3">
                        {SOCIAL_LINKS.map(({ icon: Icon, href, name }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="text-white/70 transition hover:text-white"
                            >
                                <Icon className="h-3.5 w-3.5" />
                            </a>
                        ))}

                        <span className="select-none text-white/25">|</span>

                        <button
                            type="button"
                            className="flex items-center gap-1 text-[12px] text-white/80 transition hover:text-white"
                        >
                            FR <ChevronDown className="h-3 w-3" />
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Barre principale ──────────────────────────────────────── */}
            <div className="border-b border-[#d5dee8] bg-white shadow-sm">
                <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:gap-4 lg:px-8 lg:py-2.5">
                    {/* Logo + identité */}
                    <Link
                        href="/"
                        className="flex min-w-0 shrink items-center gap-2 sm:gap-3"
                        aria-label="Accueil Foursquare Côte d'Ivoire"
                    >
                        <div className="h-12 w-[min(11rem,calc(100vw-5.75rem))] shrink overflow-hidden sm:h-14 sm:w-48 lg:h-16 lg:w-56">
                            <img
                                src="/images/logo.png"
                                alt="Logo Foursquare Côte d'Ivoire"
                                className="h-full w-full object-contain object-left"
                            />
                        </div>

                        <div className="hidden flex-col sm:flex">
                            {/* <span
                                className="text-[15px] font-bold leading-snug"
                                style={{ color: MAIN_COLOR }}
                            >
                                Foursquare
                                <br />
                                Côte d'Ivoire
                            </span>

                            <span className="mt-0.5 text-[8.5px] font-medium uppercase tracking-wide text-gray-400">
                                Jésus sauve, guérit, baptise
                                <br />
                                et revient bientôt
                            </span> */}
                        </div>
                    </Link>

                    {/* Navigation desktop */}
                    <nav className="hidden min-w-0 flex-1 items-center justify-end gap-0.5 lg:flex">
                        {NAV_ITEMS.map((item) => {
                            const active = isLinkActive(item.href, item.children);

                            if (!item.children) {
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="border-b-2 px-2.5 py-2 text-[12.5px] font-semibold uppercase tracking-wide transition"
                                        style={{
                                            color: active ? ACCENT_COLOR : MAIN_COLOR,
                                            borderColor: active ? ACCENT_COLOR : 'transparent',
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            return (
                                <div key={item.label} className="group relative">
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-0.5 border-b-2 px-2.5 py-2 text-[12.5px] font-semibold uppercase tracking-wide transition"
                                        style={{
                                            color: active ? ACCENT_COLOR : MAIN_COLOR,
                                            borderColor: active ? ACCENT_COLOR : 'transparent',
                                        }}
                                    >
                                        {item.label}
                                        <ChevronDown className="h-3.5 w-3.5" />
                                    </Link>

                                    {/* Dropdown */}
                                    <div className="invisible absolute left-0 top-full mt-1 w-64 rounded-xl border border-[#d5dee8] bg-white p-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:opacity-100">
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.href}
                                                href={child.href}
                                                className="block rounded-lg px-3 py-2 text-[13px] font-medium transition hover:bg-[#f4f8fc]"
                                                style={{ color: MAIN_COLOR }}
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                        {/* Bouton CTA */}
                        {/* <Link
                            href="/nous-rejoindre"
                            className="ml-4 shrink-0 rounded-lg px-5 py-2 text-[13px] font-bold transition hover:brightness-95"
                            style={{ backgroundColor: ACCENT_COLOR, color: MAIN_COLOR }}
                        >
                            S'inscrire
                        </Link> */}
                    </nav>

                    {/* Burger mobile */}
                    <div className="ml-auto flex items-center gap-3 lg:hidden">
                        <Link
                            href="/nous-rejoindre"
                            className="hidden rounded-lg px-4 py-2 text-[13px] font-bold transition hover:brightness-95 md:inline-flex"
                            style={{ backgroundColor: ACCENT_COLOR, color: MAIN_COLOR }}
                        >
                            S'inscrire
                        </Link>

                        <button
                            type="button"
                            onClick={() => setIsMenuOpen((previous) => !previous)}
                            className="rounded-md border border-[#d5dee8] p-2 transition hover:bg-[#f4f8fc]"
                            aria-label="Ouvrir le menu"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            style={{ color: MAIN_COLOR }}
                        >
                            {isMenuOpen ? (
                                <X className="h-5 w-5" />
                            ) : (
                                <Menu className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Menu mobile ───────────────────────────────────────────── */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="max-h-[calc(100vh-64px)] overflow-y-auto border-t border-[#d5dee8] bg-white px-4 py-4 shadow-xl lg:hidden"
                >
                    {/* Liens rapides visibles sur mobile */}
                    <div
                        className="mb-3 grid grid-cols-2 gap-x-3 gap-y-1.5 rounded-lg px-3 py-2.5 text-[12px] sm:flex sm:flex-wrap sm:gap-x-4"
                        style={{ backgroundColor: MAIN_COLOR }}
                    >
                        {TOP_LINKS.map((link) => {
                            const Icon = link.icon;

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="flex items-center gap-1.5 text-white/80 transition hover:text-white"
                                >
                                    {Icon && (
                                        <Icon
                                            className="h-3 w-3"
                                            style={{ color: ACCENT_COLOR }}
                                        />
                                    )}

                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    <nav className="flex flex-col gap-1">
                        {NAV_ITEMS.map((item) => {
                            const active = isLinkActive(item.href, item.children);

                            if (!item.children) {
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-wide"
                                        style={{
                                            color: MAIN_COLOR,
                                            backgroundColor: active ? '#fff8e6' : 'transparent',
                                        }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            const isOpen = openMobileSection === item.label;

                            return (
                                <div
                                    key={item.label}
                                    className="overflow-hidden rounded-lg border border-[#e5ebf2]"
                                >
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-semibold uppercase tracking-wide"
                                        style={{
                                            color: MAIN_COLOR,
                                            backgroundColor: active ? '#fff8e6' : 'transparent',
                                        }}
                                        onClick={() => toggleMobileSection(item.label)}
                                    >
                                        {item.label}

                                        {isOpen ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </button>

                                    {isOpen && (
                                        <div className="border-t border-[#e5ebf2] px-2 py-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block rounded-md px-3 py-2 text-sm transition hover:bg-[#f4f8fc]"
                                                    style={{ color: MAIN_COLOR }}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        <Link
                            href="/nous-rejoindre"
                            className="mt-3 flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-bold"
                            style={{ backgroundColor: ACCENT_COLOR, color: MAIN_COLOR }}
                        >
                            S'inscrire
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}