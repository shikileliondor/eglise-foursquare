import { Head } from '@inertiajs/react';

import App from '@/Pages/Home/App';

export default function HomeIndex({ products = [], latestNews = [] }) {
    return (
        <>
            <Head title="Accueil" />
            <App products={products} latestNews={latestNews} />
        </>
    );
}
