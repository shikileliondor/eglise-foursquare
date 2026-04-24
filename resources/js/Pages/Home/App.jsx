import HomePage from '@/components/HomePage';

export default function App({ products, latestNews }) {
    return (
        <main className="relative min-h-screen bg-white">
            <HomePage products={products} latestNews={latestNews} />
        </main>
    );
}
