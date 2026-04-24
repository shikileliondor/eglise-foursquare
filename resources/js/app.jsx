import '../css/app.css';
import './bootstrap';

import OpeningIntro from '@/components/OpeningIntro';
import SiteFooter from '@/components/ui/site-footer';
import { router, createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pages = import.meta.glob('./Pages/**/*.jsx');
const INTRO_TOTAL_DURATION_MS = 2600;
const LAST_PATH_COOKIE = 'lf_last_path';
const VISITED_KEY = 'lf_has_visited';

function setCookie(name, value, maxAgeSeconds) {
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}; samesite=lax`;
}

function getCookie(name) {
    const prefix = `${name}=`;
    return document.cookie
        .split(';')
        .map((part) => part.trim())
        .find((part) => part.startsWith(prefix))
        ?.slice(prefix.length);
}

function RootShell({ App, props }) {
    const [showIntro, setShowIntro] = useState(true);
    const whatsappPhone = props?.initialPage?.props?.whatsappPhone ?? '';
    const whatsappUrl = whatsappPhone
        ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Bonjour, je souhaite avoir plus d'informations.")}`
        : null;

    const currentPath = useMemo(() => {
        if (typeof window === 'undefined') {
            return '/';
        }

        return `${window.location.pathname}${window.location.search}`;
    }, [props]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        const timer = window.setTimeout(() => {
            setShowIntro(false);
            document.body.style.overflow = '';

            const hasVisited = window.localStorage.getItem(VISITED_KEY) === '1';
            const lastPath = decodeURIComponent(getCookie(LAST_PATH_COOKIE) || '/');

            if (hasVisited && currentPath === '/' && lastPath && lastPath !== '/') {
                router.visit(lastPath, { replace: true, preserveScroll: true });
                return;
            }

            window.localStorage.setItem(VISITED_KEY, '1');
        }, INTRO_TOTAL_DURATION_MS);

        return () => {
            document.body.style.overflow = '';
            window.clearTimeout(timer);
        };
    }, [currentPath]);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const pathWithQuery = `${window.location.pathname}${window.location.search}`;

        if (pathWithQuery !== '/intro') {
            setCookie(LAST_PATH_COOKIE, pathWithQuery, 60 * 60 * 24 * 30);
        }
    }, [currentPath]);

    return (
        <div id="top" className="flex min-h-screen flex-col">
            <OpeningIntro show={showIntro} />
            <main className="flex-1">
                <App {...props} />
            </main>
            {whatsappUrl ? (
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Contacter sur WhatsApp"
                    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_rgba(37,211,102,0.5)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                >
                    <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" aria-hidden="true">
                        <path d="M20.52 3.48A11.84 11.84 0 0 0 12.03 0C5.4 0 .02 5.38.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.14-1.6A11.95 11.95 0 0 0 12.03 24c6.63 0 12.01-5.38 12.01-12 0-3.2-1.25-6.21-3.52-8.52Zm-8.49 18.5a9.95 9.95 0 0 1-5.07-1.38l-.36-.21-3.64.95.97-3.55-.24-.37A9.98 9.98 0 0 1 2.03 12c0-5.51 4.49-9.99 10-9.99 2.67 0 5.18 1.04 7.07 2.92A9.94 9.94 0 0 1 22.02 12c0 5.51-4.48 9.98-9.99 9.98Zm5.48-7.48c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.48-1.74-1.65-2.03-.17-.3-.02-.45.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.48 1.7.61.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
                    </svg>
                </a>
            ) : null}
            <SiteFooter />
        </div>
    );
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pagePath = `./Pages/${name}.jsx`;

        if (pages[pagePath]) {
            return resolvePageComponent(pagePath, pages);
        }

        const caseInsensitiveMatch = Object.keys(pages).find(
            (key) => key.toLowerCase() === pagePath.toLowerCase(),
        );

        if (caseInsensitiveMatch) {
            return resolvePageComponent(caseInsensitiveMatch, pages);
        }

        return resolvePageComponent(pagePath, pages);
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<RootShell App={App} props={props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
