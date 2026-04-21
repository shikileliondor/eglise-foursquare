import { Head } from '@inertiajs/react';

export default function HomeIndex() {
    return (
        <>
            <Head title="Accueil" />

            <section className="h-screen w-full overflow-hidden bg-black">
                <img
                    src="/images/banniere.png"
                    alt="Bannière Light Foursquare"
                    className="h-full w-full object-cover object-center"
                />
            </section>
        </>
    );
}
