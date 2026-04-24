import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { clearCart, removeCartItem, updateCartItemQuantity } from '@/lib/cart';

function formatPrice(value) {
    return `${Number(value).toFixed(2)} €`;
}

export default function CartPanel({ open, onClose, cart }) {
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const items = cart?.items ?? [];
    const total = useMemo(() => Number(cart?.total ?? 0), [cart?.total]);
    const handleClose = () => {
        setFeedback(null);
        onClose?.();
    };

    useEffect(() => {
        if (!open) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                handleClose();
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [open]);

    const handleCheckout = async (event) => {
        event.preventDefault();
        setFeedback(null);

        if (!items.length) {
            setFeedback({ type: 'error', message: 'Votre panier est vide.' });
            return;
        }

        setIsSubmitting(true);

        try {
            const payload = {
                customer_name: customerName,
                customer_phone: customerPhone,
                items: items.map((item) => ({
                    product_id: item.product_id,
                    variant_id: item.variant_id,
                    quantity: item.quantity,
                })),
            };

            const { data } = await axios.post('/orders', payload);
            await clearCart();
            setCustomerName('');
            setCustomerPhone('');
            setFeedback({ type: 'success', message: 'Commande enregistrée. Redirection WhatsApp...' });

            if (data?.whatsapp_url) {
                window.location.href = data.whatsapp_url;
            }
        } catch (error) {
            const firstMessage = Object.values(error?.response?.data?.errors ?? {})?.[0]?.[0];
            setFeedback({
                type: 'error',
                message: firstMessage || 'Impossible de finaliser la commande pour le moment.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {open ? <button type="button" onClick={handleClose} className="fixed inset-0 z-40 bg-black/30" aria-label="Fermer le panier" /> : null}

            <aside
                className={`fixed right-0 top-0 z-50 h-full w-full max-w-md transform border-l border-zinc-200 bg-white p-6 shadow-xl transition-transform duration-300 ${
                    open ? 'translate-x-0' : 'translate-x-full'
                } ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-zinc-900">Votre panier</h2>
                    <button type="button" onClick={handleClose} className="text-sm font-medium text-zinc-500 hover:text-zinc-900">
                        Fermer
                    </button>
                </div>

                <div className="max-h-[42vh] space-y-3 overflow-y-auto pr-1">
                    {items.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-zinc-300 px-4 py-6 text-center text-sm text-zinc-500">
                            Aucun article pour le moment.
                        </p>
                    ) : (
                        items.map((item) => (
                            <article key={item.id} className="rounded-2xl border border-zinc-200 p-3">
                                <p className="text-sm font-semibold uppercase tracking-wide text-rose-700">{item.brand}</p>
                                <p className="text-sm text-zinc-800">{item.name}</p>
                                {item.variant_label ? <p className="text-xs text-zinc-500">Option: {item.variant_label}</p> : null}
                                <p className="mt-1 text-sm font-medium">{formatPrice(item.unit_price)}</p>

                                <div className="mt-2 flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => item.quantity > 1 && updateCartItemQuantity(item.id, item.quantity - 1)}
                                        className="h-8 w-8 rounded-full border border-zinc-300 text-zinc-700"
                                    >
                                        −
                                    </button>
                                    <span className="min-w-7 text-center text-sm font-semibold">{item.quantity}</span>
                                    <button
                                        type="button"
                                        onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                                        className="h-8 w-8 rounded-full border border-zinc-300 text-zinc-700"
                                    >
                                        +
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => removeCartItem(item.id)}
                                        className="ml-auto text-xs font-medium text-zinc-500 underline"
                                    >
                                        Retirer
                                    </button>
                                </div>
                            </article>
                        ))
                    )}
                </div>

                <div className="mt-5 border-t border-zinc-200 pt-5">
                    <div className="mb-4 flex items-center justify-between text-sm">
                        <span>Total</span>
                        <span className="text-lg font-bold text-zinc-900">{formatPrice(total)}</span>
                    </div>

                    <form onSubmit={handleCheckout} className="space-y-3">
                        <input required value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="Nom complet" className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm" />
                        <input required value={customerPhone} onChange={(event) => setCustomerPhone(event.target.value)} placeholder="Téléphone" className="w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm" />

                        {feedback ? <p className={`text-xs ${feedback.type === 'error' ? 'text-red-600' : 'text-emerald-600'}`}>{feedback.message}</p> : null}

                        <button
                            type="submit"
                            disabled={isSubmitting || items.length === 0}
                            className="w-full rounded-full border border-zinc-400 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-zinc-700 transition hover:bg-zinc-900 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            {isSubmitting ? 'Validation...' : 'Commander via WhatsApp'}
                        </button>
                    </form>
                </div>
            </aside>
        </>
    );
}
