import { Link } from '@inertiajs/react';
import { ArrowUp } from 'lucide-react';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';

const footerLinks = [
    { label: 'À propos de nous', href: '/a-propos' },
    { label: 'Nos croyances', href: '/nos-croyances' },
    { label: 'Ministères', href: '/ministeres' },
    { label: 'Églises locales', href: '/eglises-locales' },
    { label: 'Ressources', href: '/ressources' },
    { label: 'Médias', href: '/medias' },
    { label: 'Nous soutenir', href: '/nous-soutenir' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
];

const socialLinks = [
    {
        icon: FaFacebookF,
        href: 'https://web.facebook.com/profile.php?id=61550748345489&_rdc=1&_rdr#',
        label: 'Facebook',
    },
    {
        icon: FaTiktok,
        href: 'https://www.tiktok.com/@light_foursquare?is_from_webapp=1&sender_device=pc',
        label: 'TikTok',
    },
];

export default function SiteFooter() {
    return (
        <footer className="mt-auto overflow-x-hidden bg-[#062b49] text-white">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:px-10">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                    <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[13px] font-medium leading-6 text-white/85 sm:justify-start lg:gap-x-4">
                        {footerLinks.map((link, index) => (
                            <li key={link.label} className="flex items-center justify-center gap-4 lg:justify-start">
                                <Link
                                    href={link.href}
                                    className="transition duration-300 hover:text-[#f2b233]"
                                >
                                    {link.label}
                                </Link>

                                {index < footerLinks.length - 1 && (
                                    <span className="hidden h-3 w-px bg-white/25 sm:inline-block" />
                                )}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                        <span className="text-[13px] font-semibold text-white/85">
                            Suivez-nous
                        </span>

                        <div className="flex items-center gap-3">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-[#f2b233] hover:text-[#062b49]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                    <div className="flex flex-col items-center gap-4 text-center text-[13px] leading-6 text-white/75 md:flex-row md:items-center md:justify-between md:text-left">
                        <p>
                            © 2026 Mouvement LIGHT Foursquare. Tous droits réservés.
                        </p>

                        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
                            <a
                                href="https://www.linkedin.com/in/yann-morel-effobi-brou-5474782a1/"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-white/85 underline underline-offset-4 transition duration-300 hover:text-[#f2b233]"
                            >
                                Conçu par BEYAM
                            </a>

                            <a
                                href="#top"
                                aria-label="Retour en haut"
                                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition duration-300 hover:bg-[#f2b233] hover:text-[#062b49]"
                            >
                                <ArrowUp className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}