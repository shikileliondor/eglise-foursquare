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
            <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-6">
                        <img
                            src="/images/logo.jpg"
                            alt="MASA logo"
                            className="h-20 w-auto object-contain sm:h-24"
                        />
                        <h2 className="font-heading mt-4 max-w-xl text-xl font-bold uppercase leading-tight tracking-wide text-white/95 sm:text-2xl">
                            Marché des Arts du Spectacle Africain d&apos;Abidjan
                        </h2>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="font-heading text-2xl font-semibold text-white/95">Adresse</h3>
                        <p className="mt-5 text-base leading-7 text-white/80">
                            La Maison du MASA – Plateau, rue Toussaint Louverture
                            09 BP 2877 Abidjan 09, Côte d’Ivoire.
                        </p>
                    </div>

                    <div className="lg:col-span-3">
                        <h3 className="font-heading text-2xl font-semibold text-white/95">Contact</h3>
                        <a
                            href="mailto:administration@masa-ci.org"
                            className="mt-5 inline-block text-base text-white/85 underline underline-offset-4 transition hover:text-white"
                        >
                            administration@masa-ci.org
                        </a>
                        <p className="font-heading mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            +225 27 20 21 35 20
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            aria-label={label}
                            className="inline-flex size-14 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                        >
                            <Icon className="size-6" />
                        </a>
                    ))}
                </div>

                <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-base text-white/80 md:flex-row md:items-center md:justify-between">
                    <ul className="flex flex-wrap items-center gap-8">
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

                    <div className="flex items-center gap-6">
                        <p className="text-base text-white/80">MASA © 2025. Tous droits réservés.</p>
                        <a
                            href="#top"
                            aria-label="Retour en haut"
                            className="inline-flex size-16 items-center justify-center bg-red-600 transition hover:bg-red-500"
                        >
                            <ArrowUp className="size-8" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
