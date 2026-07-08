import { Link, usePage } from '@inertiajs/react';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const items = [
    ['Accueil', '/'],
    ['La Convention', '/convention'],
    ['Programme', '/convention#programme'],
    ['Boutique officielle', '/shop'],
    ['Infos pratiques', '/convention#infos-pratiques'],
    ['Contact', '/contact'],
];

export default function PublicNavbar() {
    const { url } = usePage();
    const [open, setOpen] = useState(false);

    useEffect(() => setOpen(false), [url]);

    useEffect(() => {
        const previous = document.body.style.overflow;
        if (open) document.body.style.overflow = 'hidden';
        const close = (event) => event.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', close);
        return () => {
            document.body.style.overflow = previous;
            window.removeEventListener('keydown', close);
        };
    }, [open]);

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-50 border-t-[5px] border-[#225CA3] bg-[#FAF9F7]/95 backdrop-blur-xl">
                <div className="mx-auto flex h-[76px] max-w-[1580px] items-center px-4 sm:px-6 lg:h-[88px] lg:px-8">
                    <Link href="/" className="flex items-center" aria-label="Accueil">
                        <img src="/images/logo.png" alt="Église Foursquare Côte d’Ivoire" className="h-12 w-[145px] object-contain object-left lg:h-16 lg:w-[210px]" />
                    </Link>

                    <nav className="ml-auto hidden items-center gap-1 xl:flex" aria-label="Navigation principale">
                        {items.map(([label, href]) => (
                            <Link key={label} href={href} className="rounded-full px-3.5 py-2 text-[13px] font-bold text-[#4D4A45] transition hover:bg-white hover:text-[#225CA3]">
                                {label}
                            </Link>
                        ))}
                    </nav>

                    <div className="ml-4 hidden items-center gap-2 xl:flex">
                        <Link href="/shop" className="rounded-full bg-[#E4E0D8] px-6 py-3 text-[13px] font-black text-[#123B68] transition hover:bg-[#FBB51B]">Boutique</Link>
                        <Link href="/convention#inscription" className="rounded-full bg-[#123B68] px-6 py-3 text-[13px] font-black text-white transition hover:bg-[#225CA3]">S’inscrire</Link>
                    </div>

                    <button type="button" onClick={() => setOpen(true)} className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-[#123B68]/15 bg-white text-[#123B68] xl:hidden" aria-label="Ouvrir le menu">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </header>

            <div className="h-[76px] lg:h-[88px]" aria-hidden="true" />

            <div onClick={() => setOpen(false)} className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition-opacity xl:hidden ${open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`} />
            <aside className={`fixed right-0 top-0 z-[70] flex h-dvh w-full max-w-sm flex-col bg-[#FAF9F7] transition-transform duration-500 xl:hidden ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex items-center justify-between border-b border-[#123B68]/10 p-5">
                    <img src="/images/logo.png" alt="" className="h-12 w-36 object-contain object-left" />
                    <button type="button" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123B68] text-white" aria-label="Fermer le menu"><X className="h-5 w-5" /></button>
                </div>
                <nav className="flex-1 overflow-y-auto px-5 py-5">
                    {items.map(([label, href], index) => (
                        <Link key={label} href={href} className="flex min-h-[58px] items-center border-b border-[#123B68]/10 text-base font-black text-[#123B68]">
                            <span className="mr-4 text-[10px] text-[#FBB51B]">{String(index + 1).padStart(2, '0')}</span>{label}
                        </Link>
                    ))}
                </nav>
                <div className="grid grid-cols-2 gap-3 border-t border-[#123B68]/10 bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
                    <Link href="/shop" className="flex min-h-12 items-center justify-center rounded-full bg-[#E4E0D8] text-xs font-black text-[#123B68]">Boutique</Link>
                    <Link href="/convention#inscription" className="flex min-h-12 items-center justify-center rounded-full bg-[#123B68] text-xs font-black text-white">S’inscrire</Link>
                </div>
            </aside>
        </>
    );
}
