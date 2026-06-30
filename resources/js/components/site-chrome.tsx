import { Facebook, Home, Instagram, LocateFixed, Menu } from 'lucide-react';

type SiteChromeProps = {
    bookHref?: string;
    containerClassName?: string;
    navBaseHref?: '' | '/';
};

const navItems = ['Home', 'Rooms', 'Amenities', 'Gallery', 'Reviews', 'Location'];

const footerColumns = [
    { title: 'About VillaStay', items: ['Our Story', 'Sustainability', 'Careers'] },
    { title: 'Rooms', items: ['All Rooms', 'Deluxe Garden Room', 'Pool View Suite'] },
    { title: 'Guest Services', items: ['Breakfast', 'Room Service', 'Airport Shuttle'] },
    { title: 'Contact', items: ['hello@villastay.com', '+62 555 123 888'] },
    { title: 'Legal', items: ['Terms & Conditions', 'Privacy Policy'] },
];

function sectionHref(item: string, navBaseHref: '' | '/') {
    const hash = `#${item.toLowerCase()}`;

    return navBaseHref === '/' ? `/${hash}` : hash;
}

export function SiteHeader({ bookHref = '#book', containerClassName = 'max-w-[1280px] lg:px-8', navBaseHref = '' }: SiteChromeProps) {
    return (
        <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
            <div className={`mx-auto flex items-center justify-between px-4 py-4 ${containerClassName}`}>
                <a href="/" className="flex items-center gap-2 text-[22px] font-semibold tracking-tight">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10">
                        <Home className="h-5 w-5" />
                    </div>
                    <span>VillaStay</span>
                </a>

                <nav className="hidden items-center gap-8 text-sm font-medium text-[#222] md:flex">
                    {navItems.map((item) => (
                        <a key={item} href={sectionHref(item, navBaseHref)} className="transition hover:text-[#ff385c]">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button className="hidden rounded-full border border-black/10 p-2 md:inline-flex" type="button" aria-label="Open menu">
                        <Menu className="h-5 w-5" />
                    </button>
                    <a href={bookHref} className="rounded-xl bg-[#ff385c] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,56,92,0.25)] transition hover:bg-[#e00b41]">
                        Book Now
                    </a>
                </div>
            </div>
        </header>
    );
}

export function SiteFooter({ containerClassName = 'max-w-[1280px] lg:px-8' }: Pick<SiteChromeProps, 'containerClassName'>) {
    return (
        <footer className="border-t border-black/8 bg-white">
            <div className={`mx-auto px-4 py-10 ${containerClassName}`}>
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
                    {footerColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#222]">{column.title}</h3>
                            <ul className="mt-4 space-y-3 text-sm text-[#5f5f5f]">
                                {column.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-black/8 pt-6 text-sm text-[#777] md:flex-row md:items-center md:justify-between">
                    <p>© 2026 VillaStay. All rights reserved.</p>
                    <div className="flex items-center gap-4 text-[#444]">
                        <Instagram className="h-4 w-4" />
                        <Facebook className="h-4 w-4" />
                        <LocateFixed className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
