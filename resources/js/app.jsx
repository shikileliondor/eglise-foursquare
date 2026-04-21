import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pages = import.meta.glob('./Pages/**/*.jsx');

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

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
