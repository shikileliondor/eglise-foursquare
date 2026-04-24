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
