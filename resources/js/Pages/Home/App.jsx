import HomePage from '@/components/HomePage';

export default function App({ products }) {
    return (
        <main className="relative min-h-screen bg-white">
            <HomePage products={products} />
        </main>
    );
}
