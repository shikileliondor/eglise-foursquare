export default function HomePage() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
                <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                    <span className="text-lg font-semibold tracking-wide">Light Foursquare</span>
                    <button
                        type="button"
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                    >
                        Join
                    </button>
                </nav>
            </header>

            <section className="mx-auto flex max-w-6xl flex-col items-start px-6 py-24 md:py-32">
                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">Welcome to Light Foursquare</h1>
                <p className="mt-4 max-w-2xl text-lg text-slate-600 md:text-xl">
                    Youth movement of Foursquare Church
                </p>
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
