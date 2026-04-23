import PublicNavbar from '@/Components/PublicNavbar';
import SiteFooter from '@/components/ui/site-footer';

export default function PublicLayout({ children }) {
    return (
        <div className="bg-slate-50 text-slate-900">
            <PublicNavbar />

            <main>{children}</main>
        </div>
    );
}
