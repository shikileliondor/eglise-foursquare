import PublicNavbar from '@/Components/PublicNavbar';
export default function PublicLayout({ children, headerAlwaysVisible = false }) {
    return (
        <div className="bg-slate-50 text-slate-900">
            <PublicNavbar alwaysVisible={headerAlwaysVisible} />

            <main>{children}</main>
        </div>
    );
}
