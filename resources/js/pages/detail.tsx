import { useState, type ElementType, type ReactNode } from 'react';
import {
    AirVent,
    BedDouble,
    CalendarDays,
    CarFront,
    ChevronDown,
    CircleParking,
    Heart,
    HouseWifi,
    MapPin,
    Monitor,
    ShieldCheck,
    Share2,
    Star,
    Tv2,
    UtensilsCrossed,
    Waves,
    WashingMachine,
    Wifi,
} from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

const heroImage = 'https://picsum.photos/seed/villastay-detail-hero/1400/1000';

const photos = [
    heroImage,
    'https://picsum.photos/seed/villastay-detail-living/900/700',
    'https://picsum.photos/seed/villastay-detail-bedroom/900/700',
    'https://picsum.photos/seed/villastay-detail-sunset/900/700',
    'https://picsum.photos/seed/villastay-detail-garden/900/700',
];

const features = [
    [Waves, 'Private infinity pool'],
    [MapPin, 'Ocean view'],
    [Monitor, 'Dedicated workspace'],
    [CarFront, 'Free airport pickup'],
] as const;

const offers = [
    [Wifi, 'Wifi'],
    [UtensilsCrossed, 'Kitchen'],
    [AirVent, 'Air conditioning'],
    [CircleParking, 'Free parking'],
    [WashingMachine, 'Washer'],
    [Waves, 'Pool'],
    [Tv2, 'TV'],
    [ShieldCheck, 'Security cameras outside'],
] as const;

const arrangements = [
    ['Bedroom 1', 'King bed'],
    ['Bedroom 2', 'King bed'],
    ['Bedroom 3', 'Queen bed'],
    ['Bedroom 4', '2 Single beds'],
] as const;

const relatedVillas = [
    ['The Jungle Retreat', 'Uluwatu, Bali', '$355', '4.89 (96)', 'https://picsum.photos/seed/villastay-like-1/800/560'],
    ['Oceanview Sanctuary', 'Canggu, Bali', '$395', '4.92 (73)', 'https://picsum.photos/seed/villastay-like-2/800/560'],
    ['Sundara Cliff Villa', 'Uluwatu, Bali', '$465', '4.90 (81)', 'https://picsum.photos/seed/villastay-like-3/800/560'],
    ['The Palm House', 'Ungasan, Bali', '$320', '4.87 (58)', 'https://picsum.photos/seed/villastay-like-4/800/560'],
] as const;

const priceLines = [
    ['$420 x 5 nights', '$2,100'],
    ['Cleaning fee', '$150'],
    ['Service fee', '$210'],
] as const;


function Card({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <section className={`rounded-[22px] border border-black/8 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.04)] ${className}`}>
            {children}
        </section>
    );
}

function IconText({ icon: Icon, label }: { icon: ElementType; label: string }) {
    return (
        <div className="flex items-center gap-3 text-sm font-medium text-[#333]">
            <Icon className="h-5 w-5 text-[#262626]" />
            <span>{label}</span>
        </div>
    );
}


export default function Detail() {
    const [checkIn, setCheckIn] = useState('2025-05-20');
    const [checkOut, setCheckOut] = useState('2025-05-25');
    const [guests, setGuests] = useState('8');

    return (
        <div className="landing min-h-screen bg-[#fafafa] text-[#1f1f1f]">
            <SiteHeader bookHref="#reserve" containerClassName="max-w-[1440px] lg:px-6" navBaseHref="/" />

            <main className="mx-auto max-w-[1440px] px-4 py-10 lg:px-6">
                <section>
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div>
                            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                                Cliffside Private Villa with Infinity Pool
                            </h1>
                            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-[#5f5f5f] md:text-base">
                                <span>Uluwatu, Bali, Indonesia</span>
                                <span className="flex items-center gap-2 text-[#222]">
                                    <Star className="h-4 w-4 fill-[#222]" /> 4.91 <span className="text-[#777]">(128 reviews)</span>
                                </span>
                                <span className="font-medium text-[#ff385c]">Guest favorite</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="inline-flex items-center gap-2 rounded-xl border border-[#ff385c] bg-white px-5 py-3 text-sm font-semibold text-[#ff385c] transition hover:bg-[#fff1f4]" type="button">
                                <Heart className="h-4 w-4" /> Save
                            </button>
                            <button className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#222] transition hover:bg-[#fafafa]" type="button">
                                <Share2 className="h-4 w-4" /> Share
                            </button>
                        </div>
                    </div>
                </section>

                <section className="mt-8 grid gap-4 lg:grid-cols-[2fr_1fr_1fr]">
                    <img src={photos[0]} alt="Villa exterior with infinity pool" className="h-full min-h-[420px] w-full rounded-[24px] object-cover shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:row-span-2" />
                    <img src={photos[1]} alt="Villa living room" className="h-52 w-full rounded-[22px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]" />
                    <img src={photos[2]} alt="Villa bedroom" className="h-52 w-full rounded-[22px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]" />
                    <img src={photos[3]} alt="Villa terrace at sunset" className="h-52 w-full rounded-[22px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]" />
                    <div className="relative">
                        <img src={photos[4]} alt="Villa tropical courtyard" className="h-52 w-full rounded-[22px] object-cover shadow-[0_8px_24px_rgba(0,0,0,0.06)]" />
                        <button className="absolute bottom-4 right-4 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#222] shadow-[0_10px_24px_rgba(0,0,0,0.14)] transition hover:bg-[#fafafa]" type="button">
                            Show all photos
                        </button>
                    </div>
                </section>

                <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
                    <div className="space-y-6">
                        <Card>
                            <div className="grid gap-8 p-6 md:grid-cols-[minmax(0,1fr)_72px] md:p-8">
                                <div>
                                    <h2 className="text-3xl font-semibold tracking-tight">Entire villa hosted by Sofia</h2>
                                    <p className="mt-2 text-sm text-[#666] md:text-base">8 guests - 4 bedrooms - 5 beds - 4.5 baths</p>
                                    <p className="mt-6 max-w-[72ch] text-sm leading-7 text-[#5f5f5f] md:text-[15px]">
                                        Perched on the cliffs of Uluwatu, this private villa offers breathtaking ocean views, complete privacy, and refined tropical design. Enjoy timeless sunsets, a serene infinity pool, and premium comfort just minutes from the best of Bali.
                                    </p>
                                </div>
                                <img src="https://picsum.photos/seed/sofia-host/120/120" alt="Host Sofia portrait" className="h-16 w-16 rounded-full object-cover" />
                            </div>

                            <div className="border-t border-black/8 px-6 py-6 md:px-8">
                                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                                    {features.map(([Icon, label]) => (
                                        <IconText key={label} icon={Icon} label={label} />
                                    ))}
                                </div>
                            </div>

                            <div className="grid border-t border-black/8 lg:grid-cols-[1.15fr_0.85fr]">
                                <div className="p-6 md:p-8">
                                    <h3 className="text-2xl font-semibold tracking-tight">What this place offers</h3>
                                    <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                        {offers.map(([Icon, label]) => (
                                            <IconText key={label} icon={Icon} label={label} />
                                        ))}
                                    </div>
                                    <button className="mt-8 rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#222] transition hover:bg-[#fafafa]" type="button">
                                        Show all amenities
                                    </button>
                                </div>

                                <div className="border-t border-black/8 p-6 md:p-8 lg:border-l lg:border-t-0">
                                    <h3 className="text-2xl font-semibold tracking-tight">About the villa</h3>
                                    <p className="mt-5 text-sm leading-7 text-[#5f5f5f] md:text-[15px]">
                                        Designed with natural materials and open-air living spaces, the villa blends modern luxury with Bali's organic beauty. Floor-to-ceiling glass invites natural light and sea breezes into every room, while lush gardens and cliffside views create a peaceful retreat.
                                    </p>
                                    <button className="mt-6 text-sm font-semibold text-[#ff385c] transition hover:text-[#e00b41]" type="button">
                                        Show more
                                    </button>
                                </div>
                            </div>
                        </Card>

                        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                            <Card className="p-6 md:p-8">
                                <h3 className="text-2xl font-semibold tracking-tight">Where you'll be</h3>
                                <div className="mt-5 grid gap-5 sm:grid-cols-[140px_1fr] sm:items-start">
                                    <img src="https://picsum.photos/seed/villastay-map/360/240" alt="Villa location map" className="h-[108px] w-full rounded-[18px] object-cover" />
                                    <div>
                                        <p className="text-sm leading-6 text-[#666]">Located in the heart of Uluwatu, just minutes from beaches, beach clubs, and sunset viewpoints.</p>
                                        <button className="mt-4 text-sm font-semibold text-[#ff385c]" type="button">Show on map</button>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 md:p-8">
                                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                                    <h3 className="text-2xl font-semibold tracking-tight">Sleeping arrangements</h3>
                                    <p className="text-sm text-[#666]">4 bedrooms prepared for 8 guests</p>
                                </div>
                                <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                                    {arrangements.map(([title, bed]) => (
                                        <div key={title} className="flex min-h-[136px] flex-col items-center justify-center rounded-[18px] border border-black/8 bg-[#fafafa] px-4 py-5 text-center">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.05)] ring-1 ring-black/5">
                                                <BedDouble className="h-6 w-6 text-[#262626]" />
                                            </div>
                                            <p className="mt-4 text-sm font-semibold text-[#222]">{title}</p>
                                            <p className="mt-1 text-sm leading-5 text-[#666]">{bed}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <Card className="p-6 md:p-8">
                            <h3 className="text-2xl font-semibold tracking-tight">Things to know</h3>
                            <div className="mt-6 grid gap-6 md:grid-cols-3">
                                <div>
                                    <p className="font-semibold text-[#222]">House rules</p>
                                    <p className="mt-3 text-sm leading-6 text-[#666]">No smoking, no pets, no parties.</p>
                                    <p className="mt-5 font-semibold text-[#222]">Cancellation policy</p>
                                    <p className="mt-3 text-sm leading-6 text-[#666]">Free cancellation before May 15.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#222]">Check-in / out</p>
                                    <p className="mt-3 text-sm leading-6 text-[#666]">Check-in after 3:00 PM<br />Checkout before 11:00 AM</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-[#222]">Safety & property notes</p>
                                    <p className="mt-3 text-sm leading-6 text-[#666]">Security cameras on property, first aid kit.</p>
                                </div>
                            </div>
                        </Card>

                        <section className="pt-4 pb-2">
                            <h2 className="text-3xl font-semibold tracking-tight">You may also like</h2>
                            <div className="mt-8 grid gap-6 sm:grid-cols-2 2xl:grid-cols-4">
                                {relatedVillas.map(([title, location, price, rating, image]) => (
                                    <a key={title} href="#" className="group overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.1)]">
                                        <div className="relative">
                                            <img src={image} alt={title} className="h-44 w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
                                            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#333] shadow-[0_8px_20px_rgba(0,0,0,0.12)]">
                                                <Heart className="h-4 w-4" />
                                            </span>
                                        </div>
                                        <div className="p-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-base font-semibold text-[#222]">{title}</h3>
                                                    <p className="mt-1 text-sm text-[#666]">{location}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-base font-semibold text-[#222]">{price}</p>
                                                    <p className="text-sm text-[#777]">/ night</p>
                                                </div>
                                            </div>
                                            <p className="mt-3 flex items-center gap-2 text-sm text-[#333]">
                                                <Star className="h-3.5 w-3.5 fill-[#222]" /> {rating}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>

                    <aside id="reserve" className="space-y-6 xl:sticky xl:top-24 xl:self-start">
                        <Card className="p-6 md:p-8">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-[42px] font-semibold tracking-tight">$420</span>
                                    <span className="text-base text-[#666]">night</span>
                                </div>
                                <div className="mt-2 flex items-center gap-2 text-sm text-[#222]">
                                    <Star className="h-4 w-4 fill-[#222]" /> 4.91 <span className="text-[#777]">(128 reviews)</span>
                                </div>
                            </div>

                            <div className="mt-7 overflow-hidden rounded-[18px] border border-black/10 bg-white">
                                <div className="grid sm:grid-cols-2">
                                    <label className="block border-b border-r border-black/10 p-4">
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777]">Check-in</span>
                                        <span className="mt-2 flex items-center gap-3">
                                            <input
                                                type="date"
                                                value={checkIn}
                                                onChange={(event) => setCheckIn(event.target.value)}
                                                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#222] outline-none [color-scheme:light]"
                                            />
                                            <CalendarDays className="h-4 w-4 shrink-0 text-[#777]" />
                                        </span>
                                    </label>
                                    <label className="block border-b border-black/10 p-4">
                                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777]">Check-out</span>
                                        <span className="mt-2 flex items-center gap-3">
                                            <input
                                                type="date"
                                                value={checkOut}
                                                min={checkIn}
                                                onChange={(event) => setCheckOut(event.target.value)}
                                                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#222] outline-none [color-scheme:light]"
                                            />
                                            <CalendarDays className="h-4 w-4 shrink-0 text-[#777]" />
                                        </span>
                                    </label>
                                </div>
                                <label className="block p-4">
                                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#777]">Guests</span>
                                    <span className="mt-2 flex items-center gap-3">
                                        <select
                                            value={guests}
                                            onChange={(event) => setGuests(event.target.value)}
                                            className="min-w-0 flex-1 appearance-none bg-transparent text-sm font-medium text-[#222] outline-none"
                                        >
                                            {Array.from({ length: 8 }, (_, index) => String(index + 1)).map((guestCount) => (
                                                <option key={guestCount} value={guestCount}>
                                                    {guestCount} {guestCount === '1' ? 'guest' : 'guests'}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="h-4 w-4 shrink-0 text-[#777]" />
                                    </span>
                                </label>
                            </div>

                            <button className="mt-6 w-full rounded-xl bg-[#ff385c] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#e00b41]" type="button">
                                Reserve
                            </button>
                            <p className="mt-4 text-center text-sm text-[#777]">You won't be charged yet</p>

                            <div className="mt-8 space-y-4 text-sm text-[#333]">
                                {priceLines.map(([label, value]) => (
                                    <div key={label} className="flex items-center justify-between">
                                        <span>{label}</span>
                                        <span>{value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-6 border-t border-black/8 pt-6">
                                <div className="flex items-center justify-between text-xl font-semibold tracking-tight">
                                    <span>Total before taxes</span>
                                    <span>$2,460</span>
                                </div>
                            </div>
                        </Card>

                        <Card className="flex items-start gap-4 p-6 md:p-8">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff1f4] text-[#ff385c]">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold tracking-tight">Book with confidence</h3>
                                <p className="mt-2 text-sm leading-6 text-[#666]">Free cancellation before May 15, 2025 and 24/7 customer support.</p>
                            </div>
                        </Card>
                    </aside>
                </section>


            </main>

            <SiteFooter containerClassName="max-w-[1440px] lg:px-6" />
        </div>
    );
}






