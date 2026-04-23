import DemoFloatingHeader from '@/components/ui/demo-floating-header';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <section className="mx-auto max-w-6xl px-6 py-8 md:py-10">
                <DemoFloatingHeader />
            </section>

            <section className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 md:pb-32">
                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Welcome to Light Foursquare</h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">Youth movement of Foursquare Church</p>
                <button
                    type="button"
                    className="mt-8 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600"
                >
                    Discover the Convention
                </button>
            </section>
        </div>
    );
}
