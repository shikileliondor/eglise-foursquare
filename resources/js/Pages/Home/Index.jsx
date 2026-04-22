import { Head } from '@inertiajs/react';
import { useState } from 'react';

import IntroSplash from '@/components/IntroSplash';

export default function HomeIndex() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <>
            <Head title="Accueil" />

            <main className="relative min-h-screen w-full overflow-hidden bg-black">
                <IntroSplash show={showIntro} onComplete={() => setShowIntro(false)} />

                <section className="h-screen w-full">
                    <img
                        src="/images/banniere.png"
                        alt="Bannière Light Foursquare"
                        className="h-full w-full object-cover object-center"
                    />
                </section>
            </main>
        </>
    );
}
