import {
    ArrowRight,
    Bath,
    BedDouble,
    CalendarDays,
    CarFront,
    ChevronDown,
    CircleParking,
    Coffee,
    Heart,
    HouseWifi,
    MapPin,
    Mountain,
    Play,
    SquareStack,
    Tv2,
    Users,
    Waves,
    Wifi,
} from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

const heroImage = 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80';
const googleMapsUrl = 'https://www.google.com/maps?q=Bali%2C%20Indonesia&output=embed';

const rooms = [
    {
        name: 'Deluxe Garden Room',
        desc: 'Cozy and elegant room surrounded by lush gardens.',
        price: '$120',
        rating: '4.7',
        image: heroImage,
        details: ['2 Guests', '1 King Bed', '32 m²', 'Garden View'],
    },
    {
        name: 'Pool View Suite',
        desc: 'Spacious suite with beautiful views of the private pool.',
        price: '$160',
        rating: '4.8',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
        details: ['2 Guests', '1 King Bed', '45 m²', 'Pool View'],
    },
    {
        name: 'Family Room',
        desc: 'Perfect for families with extra space and comfort.',
        price: '$190',
        rating: '4.6',
        image: heroImage,
        details: ['4 Guests', '2 Queen Beds', '55 m²', 'Garden View'],
    },
    {
        name: 'Master Ocean Suite',
        desc: 'Luxury suite with panoramic ocean views and a private balcony.',
        price: '$250',
        rating: '4.9',
        image: heroImage,
        details: ['2 Guests', '1 King Bed', '60 m²', 'Ocean View'],
    },
];

const amenities = [
    { icon: Waves, label: 'Private Swimming Pool' },
    { icon: Coffee, label: 'Breakfast Included' },
    { icon: Wifi, label: 'Free WiFi' },
    { icon: Bath, label: 'Air Conditioning' },
    { icon: Bath, label: 'Private Bathroom' },
    { icon: Tv2, label: 'Smart TV' },
    { icon: HouseWifi, label: 'Room Service' },
    { icon: CarFront, label: 'Airport Shuttle' },
    { icon: CircleParking, label: 'Parking Area' },
    { icon: Mountain, label: 'Outdoor Lounge' },
];

const gallery = [
    heroImage,
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=900&q=80',
];

const reviews = [
    ['James T.', 'VillaStay exceeded all our expectations. The villa is beautiful, peaceful, and the staff are incredibly kind.'],
    ['Sophia L.', 'The pool, the room, the breakfast—everything was perfect! We will definitely be coming back.'],
    ['Michael R.', 'Loved the private atmosphere and how close it is to the beach and great restaurants.'],
    ['Emily K.', 'A perfect getaway. The room was spotless and the service was outstanding.'],
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
    return (
        <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1F2420] md:text-4xl">{title}</h2>
            {subtitle ? <p className="mt-3 text-sm leading-6 text-[#6D766E] md:text-[15px]">{subtitle}</p> : null}
        </div>
    );
}

export default function Welcome() {
    return (
        <div className="landing min-h-screen bg-[#F7F8F5] text-[#1F2420]">

            <SiteHeader />

            <main id="home">
                <section className="relative overflow-hidden">
                    <img src={heroImage} alt="Luxury villa with pool" className="h-[760px] w-full object-cover md:h-[820px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.68)_0%,rgba(0,0,0,0.38)_36%,rgba(0,0,0,0.12)_100%)]" />
                    <div className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-[1280px] flex-col justify-between px-4 pb-10 pt-24 lg:px-8">
                        <div className="max-w-xl text-white md:pt-16">
                            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/75">Private villa escape</p>
                            <h1 className="max-w-md text-5xl font-semibold leading-[1.02] tracking-tight md:text-[64px]">Your Private Villa Escape</h1>
                            <p className="mt-6 max-w-lg text-[16px] leading-7 text-white/88 md:text-[18px]">
                                Experience a peaceful stay with elegant rooms, a private pool, and warm hospitality in one unforgettable villa destination.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a href="#book" className="rounded-xl bg-[#1F5C45] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(31,92,69,0.26)] transition hover:bg-[#174936]">
                                    Book Your Room
                                </a>
                                <a href="#rooms" className="inline-flex items-center gap-2 rounded-xl border border-white/45 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
                                    Explore Rooms <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>

                        <div id="book" className="mx-auto w-full max-w-[1120px] rounded-[22px] bg-white p-4 shadow-[0_18px_40px_rgba(0,0,0,0.14)] ring-1 ring-[#DDE4DC]">
                            <div className="grid gap-4 md:grid-cols-[1.2fr_1.2fr_1fr_1fr_auto] md:items-center">
                                {[
                                    ['Check-in', 'May 24, 2025', CalendarDays],
                                    ['Check-out', 'May 28, 2025', CalendarDays],
                                    ['Guests', '2 Guests', Users],
                                    ['Room type', 'All Rooms', ChevronDown],
                                ].map(([label, value, Icon]) => (
                                    <div key={label as string} className="flex items-center justify-between gap-3 rounded-2xl bg-[#F7F8F5] px-4 py-4 ring-1 ring-[#DDE4DC] md:bg-transparent md:px-0 md:py-0 md:ring-0">
                                        <div>
                                            <p className="text-sm font-medium text-[#1F2420]">{label as string}</p>
                                            <p className="mt-1 text-sm text-[#6D766E]">{value as string}</p>
                                        </div>
                                        <Icon className="h-5 w-5 text-[#6D766E]" />
                                    </div>
                                ))}
                                <a href="#rooms" className="rounded-xl bg-[#1F5C45] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#174936]">Book now</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mx-auto max-w-[1280px] px-4 pb-16 pt-24 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div>
                            <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight">A Boutique Villa Designed for Relaxation</h2>
                            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#555]">
                                VillaStay is a serene private villa where modern architecture meets tropical beauty. Surrounded by lush greenery, our villa offers complete privacy, thoughtful comfort, and personalized hospitality to make your stay truly unforgettable.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
                                {[[Waves, 'Private Pool'], [Coffee, 'Breakfast Included'], [Mountain, 'Garden & Ocean Views'], [Wifi, 'Free WiFi'], [CarFront, 'Airport Transfer']].map(([Icon, label]) => (
                                    <div key={label as string} className="px-4 py-4 text-center">
                                        <Icon className="mx-auto h-5 w-5 text-[#1F2420]" />
                                        <p className="mt-3 text-xs font-medium text-[#1F2420]">{label as string}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                            <img src={heroImage} alt="Villa lounge and pool" className="h-[430px] w-full object-cover" />
                        </div>
                    </div>
                </section>

                <section id="rooms" className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-8">
                    <SectionTitle title="Choose Your Room" subtitle="Select the perfect room for your stay" />
                    <div className="mt-10 grid gap-6 lg:grid-cols-4">
                        {rooms.map((room) => (
                            <article key={room.name} className="overflow-hidden rounded-[22px] border border-[#DDE4DC] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.1)]">
                                <div className="relative">
                                    <img src={room.image} alt={room.name} className="h-52 w-full object-cover" />
                                    <span className="absolute right-3 top-3 rounded-lg bg-[#1F2420]/70 px-2.5 py-1 text-xs font-medium text-white">{room.rating}</span>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{room.name}</h3>
                                    <p className="mt-2 text-sm leading-6 text-[#6D766E]">{room.desc}</p>
                                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-[#6D766E]">
                                        {room.details.map((detail) => (
                                            <div key={detail} className="flex items-center gap-2"><SquareStack className="h-3.5 w-3.5" /><span>{detail}</span></div>
                                        ))}
                                    </div>
                                    <div className="mt-5 flex items-center justify-between">
                                        <p className="text-[26px] font-semibold tracking-tight">{room.price} <span className="text-sm font-medium text-[#6D766E]">/ night</span></p>
                                        <a href="/show" className="rounded-xl bg-[#1F5C45] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#174936]">View Details</a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="amenities" className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-8">
                    <SectionTitle title="Everything You Need for a Perfect Stay" />
                    <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                        {amenities.map((amenity) => (
                            <div key={amenity.label} className="flex items-center gap-3 rounded-2xl border border-[#DDE4DC] bg-white px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                                <amenity.icon className="h-5 w-5 text-[#1F2420]" />
                                <span className="text-sm font-medium text-[#1F2420]">{amenity.label}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="gallery" className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-8">
                    <SectionTitle title="Gallery" />
                    <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                        {gallery.map((image, index) => <img key={`${image}-${index}`} src={image} alt={`Villa gallery ${index + 1}`} className="h-44 w-full rounded-[18px] object-cover shadow-[0_8px_20px_rgba(0,0,0,0.08)] md:h-52" />)}
                    </div>
                    <div className="mt-6 text-center"><a href="#gallery" className="inline-flex rounded-xl border border-[#DDE4DC] bg-white px-5 py-3 text-sm font-semibold shadow-[0_8px_20px_rgba(0,0,0,0.04)]">View full gallery</a></div>
                </section>

                <section id="reviews" className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-8">
                    <SectionTitle title="Why Guests Love This Villa" />
                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {[[Play, 'Peaceful Private Atmosphere'], [BedDouble, 'Carefully Designed Rooms'], [MapPin, 'Great Location'], [Heart, 'Friendly Personalized Service']].map(([Icon, title]) => (
                            <article key={title as string} className="rounded-[22px] border border-[#DDE4DC] bg-white p-6 text-center shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                                <Icon className="mx-auto h-6 w-6 text-[#1F2420]" />
                                <h3 className="mt-4 text-base font-semibold">{title as string}</h3>
                                <p className="mt-2 text-sm leading-6 text-[#6D766E]">Enjoy thoughtful comfort, privacy, and warm service in every detail.</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section id="location" className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-8">
                    <div className="grid gap-6 lg:grid-cols-[320px_1fr] lg:items-stretch">
                        <div className="rounded-[24px] border border-[#DDE4DC] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                            <h2 className="text-3xl font-semibold tracking-tight">Perfectly Located for Your Stay</h2>
                            <p className="mt-4 text-sm leading-6 text-[#6D766E]">VillaStay is located in a peaceful area just minutes from stunning beaches, local restaurants, and popular attractions.</p>
                            <a href="https://www.google.com/maps/search/?api=1&query=Bali%2C%20Indonesia" target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-xl border border-[#1F5C45] px-5 py-3 text-sm font-semibold text-[#1F5C45] transition hover:bg-[#1F5C45] hover:text-white">View location</a>
                        </div>
                        <div className="relative overflow-hidden rounded-[24px] border border-[#DDE4DC] bg-[#EEF2EC] shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
                                                        <iframe
                                title="VillaStay Google Maps location"
                                src={googleMapsUrl}
                                className="h-full min-h-[320px] w-full border-0"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                            <div className="absolute left-1/2 top-10 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-lg"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#1F5C45]" /> VillaStay</span></div>
                        </div>
                    </div>
                </section>

                {/* <section className="mx-auto max-w-[1280px] px-4 pb-16 lg:px-8">
                    <div className="grid gap-6 overflow-hidden rounded-[28px] border border-[#DDE4DC] bg-white shadow-[0_10px_28px_rgba(0,0,0,0.06)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <img src="https://images.unsplash.com/photo-1501117716987-c8e1ecb21042?auto=format&fit=crop&w=1200&q=80" alt="Villa sunset pool" className="h-full min-h-[240px] w-full object-cover" />
                        <div className="p-8 lg:p-10"><h2 className="text-3xl font-semibold tracking-tight">Ready to stay at VillaStay?</h2><p className="mt-4 max-w-lg text-sm leading-6 text-[#6D766E]">Choose your room and enjoy a relaxing villa experience designed for comfort and unforgettable moments.</p><a href="#book" className="mt-6 inline-flex rounded-xl bg-[#1F5C45] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#174936]">Book Your Stay</a></div>
                    </div>
                </section> */}
            </main>

            <SiteFooter />
        </div>
    );
}






