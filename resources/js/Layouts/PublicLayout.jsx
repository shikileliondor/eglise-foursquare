import PublicNavbar from '@/Components/PublicNavbar';
import SiteFooter from '@/components/ui/site-footer';

export default function PublicLayout({ children }) {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
            <PublicNavbar />

            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
