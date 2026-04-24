import { Head } from '@inertiajs/react';

import App from '@/Pages/Home/App';

export default function HomeIndex({ products = [] }) {
    return (
        <>
            <Head title="Accueil" />
            <App products={products} />
        </>
    );
}
