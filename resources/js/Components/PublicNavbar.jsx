import { Link, usePage } from '@inertiajs/react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

const NAVIGATION_ITEMS = [
    { label: 'Accueil', href: '/' },
    {
        label: 'Notre Église',
        href: '/notre-eglise',
        children: [
            { label: 'Histoire', href: '/notre-eglise/histoire' },
            { label: 'Vision nationale', href: '/notre-eglise/vision-nationale' },
            { label: 'Le Quadruple Évangile', href: '/notre-eglise/quadruple-evangile' },
            { label: 'Début de l’Église en Côte d’Ivoire', href: '/notre-eglise/debut-en-cote-divoire' },
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
            { label: 'Comités nationaux', href: '/organisation/comites-nationaux' },
            { label: 'Districts', href: '/organisation/districts' },
            { label: 'Églises locales', href: '/organisation/eglises-locales' },
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
            { label: 'Jeunesse', href: '/ministeres/jeunesse' },
            { label: 'Femmes', href: '/ministeres/femmes' },
            { label: 'Hommes', href: '/ministeres/hommes' },
            { label: 'Enfants', href: '/ministeres/enfants' },
            { label: 'Louange & adoration', href: '/ministeres/louange-adoration' },
        ],
    },
    {
        label: 'Événements',
        href: '/evenements',
        children: [
            { label: 'Convention nationale', href: '/evenements/convention-nationale' },
            { label: 'Programmes nationaux', href: '/evenements/programmes-nationaux' },
            { label: 'Conférences', href: '/evenements/conferences' },
            { label: 'Calendrier', href: '/evenements/calendrier' },
        ],
    },
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
    { label: 'Actualités', href: '/news' },
    { label: 'Contact', href: '/contact' },
];

const joinLink = { label: 'Nous rejoindre', href: '/nous-rejoindre' };
const MAIN_COLOR = '#06233F';
const ACCENT_COLOR = '#F4B739';

export default function PublicNavbar() {
    const { url } = usePage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openMobileSection, setOpenMobileSection] = useState(null);

    useEffect(() => {
        const onEscape = (event) => {
            if (event.key === 'Escape') {
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

    const normalizedUrl = useMemo(() => (url.endsWith('/') && url !== '/' ? url.slice(0, -1) : url), [url]);

    const isLinkActive = (href, children = []) => {
        if (normalizedUrl === href) {
            return true;
        }

        return children.some(({ href: childHref }) => normalizedUrl === childHref);
    };

    const toggleMobileSection = (label) => {
        setOpenMobileSection((current) => (current === label ? null : label));
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#d5dee8] bg-white shadow-sm">
            <div className="mx-auto flex w-full max-w-7xl items-center gap-6 px-4 py-3 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3" aria-label="Accueil Foursquare Côte d’Ivoire">
                    <img src="/images/logo.png" alt="Logo Foursquare Côte d’Ivoire" className="h-12 w-12 rounded-full border border-[#d5dee8] object-cover" />
                    <span className="hidden text-sm font-semibold leading-tight sm:block" style={{ color: MAIN_COLOR }}>
                        Foursquare
                        <br />
                        Côte d’Ivoire
                    </span>
                </Link>

                <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
                    {NAVIGATION_ITEMS.map((item) => {
                        const active = isLinkActive(item.href, item.children);

                        if (!item.children) {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="border-b-2 px-1 py-2 text-[15px] font-medium transition"
                                    style={{ color: MAIN_COLOR, borderColor: active ? ACCENT_COLOR : 'transparent' }}
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        return (
                            <div key={item.label} className="group relative">
                                <Link
                                    href={item.href}
                                    className="inline-flex items-center gap-1 border-b-2 px-1 py-2 text-[15px] font-medium transition"
                                    style={{ color: MAIN_COLOR, borderColor: active ? ACCENT_COLOR : 'transparent' }}
                                >
                                    {item.label}
                                    <ChevronDown className="h-4 w-4" />
                                </Link>
                                <div className="invisible absolute left-0 top-full mt-2 w-72 rounded-xl border border-[#d5dee8] bg-white p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            className="block rounded-lg px-3 py-2 text-sm transition hover:bg-[#f4f8fc]"
                                            style={{ color: MAIN_COLOR }}
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </nav>

                <div className="ml-auto flex items-center gap-3">
                    <Link
                        href={joinLink.href}
                        className="hidden rounded-lg px-4 py-2 text-sm font-semibold transition hover:brightness-95 md:inline-flex"
                        style={{ backgroundColor: ACCENT_COLOR, color: MAIN_COLOR }}
                    >
                        {joinLink.label}
                    </Link>
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="rounded-md border border-[#d5dee8] p-2 lg:hidden"
                        aria-label="Ouvrir le menu"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-main-menu"
                        style={{ color: MAIN_COLOR }}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div id="mobile-main-menu" className="border-t border-[#d5dee8] bg-white px-4 py-4 lg:hidden">
                    <nav className="flex flex-col gap-1">
                        {NAVIGATION_ITEMS.map((item) => {
                            const active = isLinkActive(item.href, item.children);
                            if (!item.children) {
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="rounded-lg px-3 py-2 text-sm font-medium"
                                        style={{ color: MAIN_COLOR, backgroundColor: active ? '#fff8e6' : 'transparent' }}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            const isOpen = openMobileSection === item.label;

                            return (
                                <div key={item.label} className="rounded-lg border border-[#e5ebf2]">
                                    <button
                                        type="button"
                                        className="flex w-full items-center justify-between px-3 py-2 text-left text-sm font-medium"
                                        style={{ color: MAIN_COLOR, backgroundColor: active ? '#fff8e6' : 'transparent' }}
                                        onClick={() => toggleMobileSection(item.label)}
                                    >
                                        {item.label}
                                        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    </button>
                                    {isOpen && (
                                        <div className="border-t border-[#e5ebf2] px-2 py-2">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block rounded-md px-2 py-2 text-sm"
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
                            href={joinLink.href}
                            className="mt-3 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold"
                            style={{ backgroundColor: ACCENT_COLOR, color: MAIN_COLOR }}
                        >
                            {joinLink.label}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
