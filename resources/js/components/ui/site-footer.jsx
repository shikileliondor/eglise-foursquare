import { Link } from '@inertiajs/react';
// import { ArrowUp, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'X' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaYoutube, href: '#', label: 'YouTube' },
];
// const socialLinks = [
//     { icon: Facebook, href: '#', label: 'Facebook' },
//     { icon: Twitter, href: '#', label: 'X' },
//     { icon: Linkedin, href: '#', label: 'LinkedIn' },
//     { icon: Youtube, href: '#', label: 'YouTube' },
// ];

export default function SiteFooter() {
    return (
        <footer className="mt-auto bg-[#3b0004] text-white">
            <div className="mx-auto w-full max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-6">
                        <img
                            src="/images/logo.jpg"
                            alt="LIGHT Foursquare logo"
                            className="h-16 w-auto object-contain sm:h-20"
                        />
                        <h2 className="font-heading mt-4 max-w-xl text-lg font-semibold uppercase leading-snug tracking-wide text-white/95 sm:text-xl">
                            Mouvement LIGHT Foursquare
                        </h2>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 sm:text-base">
                            Une communauté engagée pour partager la vérité biblique, servir avec
                            amour et impacter durablement les vies.
                        </p>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="font-heading text-lg font-semibold text-white/95 sm:text-xl">
                            Adresse
                        </h3>
                        <p className="mt-4 text-sm leading-6 text-white/80 sm:text-base">
                            La Maison du MASA – Plateau, rue Toussaint Louverture
                            09 BP 2877 Abidjan 09, Côte d’Ivoire.
                        </p>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="font-heading text-lg font-semibold text-white/95 sm:text-xl">
                            Contact
                        </h3>
                        <a
                            href="mailto:administration@masa-ci.org"
                            className="mt-4 inline-block text-sm text-white/85 underline underline-offset-4 transition hover:text-white sm:text-base"
                        >
                            administration@masa-ci.org
                        </a>
                        <p className="font-heading mt-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
                            +225 27 20 21 35 20
                        </p>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                        >
                            <Icon className="size-5" />
                        </a>
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/80 sm:text-base md:flex-row md:items-center md:justify-between">
                    <ul className="flex flex-wrap items-center gap-6">
                        <li>
                            <Link href="/news" className="transition hover:text-white">
                                Actualités
                            </Link>
                        </li>
                        <li>
                            <Link href="/convention" className="transition hover:text-white">
                                Agenda
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="transition hover:text-white">
                                Contactez-nous
                            </Link>
                        </li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <p className="text-sm text-white/80 sm:text-base">
                            LIGHT Foursquare © 2026. Tous droits réservés.
                        </p>
                        <a
                            href="https://www.linkedin.com/in/yann-morel-effobi-brou-5474782a1/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-white/90 underline underline-offset-4 transition hover:text-white sm:text-base"
                        >
                            Conçu avec professionnalisme par Yann Morel Effobi Brou
                        </a>
                        <a
                            href="#top"
                            aria-label="Retour en haut"
                            className="inline-flex size-12 items-center justify-center bg-red-600 transition hover:bg-red-500"
                        >
                            <ArrowUp className="size-6" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
