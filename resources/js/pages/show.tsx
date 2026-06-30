import {
    Award,
    Briefcase,
    CalendarDays,
    Camera,
    Car,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Heart,
    Home,
    Laptop,
    Minus,
    PawPrint,
    Plus,
    Search,
    Share,
    ShieldCheck,
    Star,
    Tv,
    Waves,
    Wifi,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';

type Amenity = {
    name: string;
    unavailable?: boolean;
};

type SleepRoom = {
    title: string;
    beds: string;
    image: string;
};

const photos = [
    'https://picsum.photos/seed/show-villa-hero/1200/800',
    'https://picsum.photos/seed/show-villa-living/800/600',
    'https://picsum.photos/seed/show-villa-bedroom/800/600',
    'https://picsum.photos/seed/show-villa-pool/800/600',
    'https://picsum.photos/seed/show-villa-dining/800/600',
];

const rooms: SleepRoom[] = [
    { title: 'Bedroom 1', beds: '1 king bed', image: 'https://picsum.photos/seed/show-room-1/600/420' },
    { title: 'Bedroom 2', beds: '1 queen bed, 1 hammock', image: 'https://picsum.photos/seed/show-room-2/600/420' },
    { title: 'Bedroom 3', beds: '1 king bed, 1 hammock', image: 'https://picsum.photos/seed/show-room-3/600/420' },
];

const amenities: Amenity[] = [
    { name: 'Kitchen' },
    { name: 'Wifi' },
    { name: 'Dedicated workspace' },
    { name: 'Free parking on premises' },
    { name: 'Private pool' },
    { name: 'Private hot tub - available all year, open 24 hours' },
    { name: 'Pets allowed' },
    { name: 'TV' },
    { name: 'Carbon monoxide alarm', unavailable: true },
    { name: 'Smoke alarm', unavailable: true },
];

const reviews = [
    ['Aryan', '7 years on Airbnb', 'Great villa with lots of facilities and entertainment options. Good vibe with bean bags, pool table, many TVs and communal areas.'],
    ['Klemen Tudor', '1 year on Airbnb', 'Very nice villa for a big group. Walking to the third floor with big luggage is tiring, but nice place overall.'],
    ['Anas', '2 months on Airbnb', 'A very clean place. For us, 15 people still feels comfortable. There is also space for small events.'],
    ['Pupit', '4 years on Airbnb', 'Pleasant stay for one night. There are many activities that can be done with family.'],
    ['Septian', '1 year on Airbnb', 'In the middle of Jogjakarta. The location is great and easy to find on maps.'],
    ['Farhan', '9 years on Airbnb', 'A cozy place with a lot of activities. Five star experience.'],
];

const policyCards: Array<{ title: string; body: string; Icon: LucideIcon }> = [
    { title: 'Cancellation policy', body: 'Add your trip dates to get the cancellation details for this stay.', Icon: Briefcase },
    { title: 'House rules', body: 'Check-in after 2:00 PM. Checkout before 12:00 PM. Pets allowed.', Icon: Home },
    { title: 'Safety & property', body: 'No carbon monoxide alarm. No smoke alarm. Potential for noise.', Icon: ShieldCheck },
];

const highlights: Array<{ title: string; body: string; Icon: LucideIcon }> = [
    { title: 'Enjoy the pool and hot tub', body: 'Swim or soak at this home.', Icon: Waves },
    { title: 'Self check-in', body: 'Check yourself in with the lockbox.', Icon: Home },
    { title: 'Extra spacious', body: 'Guests love this home for a comfortable group stay.', Icon: Home },
];

const calendarDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];

function IconForAmenity({ name }: { name: string }) {
    if (name.includes('Wifi')) return <Wifi size={22} />;
    if (name.includes('parking')) return <Car size={22} />;
    if (name.includes('workspace')) return <Laptop size={22} />;
    if (name.includes('pool') || name.includes('hot tub')) return <Waves size={22} />;
    if (name.includes('Pets')) return <PawPrint size={22} />;
    if (name.includes('TV')) return <Tv size={22} />;
    return <Home size={22} />;
}

export default function Show() {
    return (
        <main className="min-h-screen bg-white pb-24 font-sans text-[13px] text-[#1F2420] max-sm:pb-[84px] [&_a]:transition [&_a]:duration-150 [&_a]:active:scale-[0.99] [&_button]:transition [&_button]:duration-150 [&_button]:active:scale-[0.99] [&_img]:bg-[#EEF2EC]">
            <SiteHeader bookHref="#booking" containerClassName="max-w-[1280px] lg:px-8" navBaseHref="/" />
            <div className="mx-auto max-w-[1280px] px-4 lg:px-8 max-sm:px-0">
                <TitleBar />
                <PhotoGrid />
                <div className="grid grid-cols-[minmax(0,1fr)_360px] gap-12 pt-8 max-lg:grid-cols-1 max-lg:gap-8 max-sm:px-6 max-sm:pt-7">
                    <ListingDetails />
                    <BookingCard />
                </div>
                <BelowFold />
            </div>
            <SiteFooter containerClassName="max-w-[1280px] lg:px-8" />
            <MobileBookingBar />
        </main>
    );
}

function TitleBar() {
    return (
        <section className="pt-5 max-sm:px-6 max-sm:pt-0">
            <div className="flex items-center justify-between gap-4">
                <h1 className="text-xl font-semibold leading-7 max-sm:text-lg">Villa Amalura II</h1>
                <div className="flex gap-4 text-xs font-medium max-sm:hidden">
                    <button className="inline-flex items-center gap-1 underline" type="button"><Share size={12} />Share</button>
                    <button className="inline-flex items-center gap-1 underline" type="button"><Heart size={12} />Save</button>
                </div>
            </div>
        </section>
    );
}

function PhotoGrid() {
    return (
        <section className="relative mt-3 grid h-[365px] grid-cols-2 gap-2 overflow-hidden rounded-lg max-sm:mt-4 max-sm:block max-sm:h-[285px] max-sm:rounded-none">
            <img src={photos[0]} alt="Villa courtyard with pool" className="h-full w-full object-cover" />
            <div className="grid grid-cols-2 gap-2 max-sm:hidden">
                {photos.slice(1).map((photo, index) => (
                    <img key={photo} src={photo} alt={`Villa photo ${index + 2}`} className="h-full w-full object-cover" />
                ))}
            </div>
            <button className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-md border border-[#1F2420] bg-white px-3 py-2 text-xs font-semibold hover:bg-[#EEF2EC] max-sm:hidden" type="button">
                <Camera size={13} />Show all photos
            </button>
        </section>
    );
}

function ListingDetails() {
    return (
        <div>
            <section className="border-b border-[#DDE4DC] pb-8">
                <h2 className="text-base font-semibold leading-6">Entire villa in Kecamatan Umbulharjo, Indonesia</h2>
                <p className="mt-1 text-xs">16+ guests - 4 bedrooms - 3 beds - 4.5 baths</p>
                <div className="mt-5 grid grid-cols-[80px_1fr_70px_70px] items-center rounded-lg border border-[#DDE4DC] px-5 py-3 max-sm:grid-cols-1 max-sm:gap-3">
                    <div className="flex items-center gap-2 font-semibold"><Award size={20} />Favorite</div>
                    <div className="px-5 text-xs font-semibold max-sm:px-0">One of the most loved homes, according to guests</div>
                    <div className="text-center text-sm font-semibold max-sm:text-left">4.94<div className="mt-1 inline-flex"><Star size={11} fill="currentColor" /></div></div>
                    <div className="text-center text-sm font-semibold max-sm:text-left">145<div className="text-[10px] underline">Reviews</div></div>
                </div>
            </section>

            <section className="flex gap-4 border-b border-[#DDE4DC] py-5">
                <img src="https://picsum.photos/seed/show-host/96/96" alt="Host profile" className="h-10 w-10 rounded-full object-cover" />
                <div>
                    <h3 className="font-semibold">Hosted by Koldo</h3>
                    <p className="text-xs text-[#6D766E]">9 years hosting</p>
                </div>
            </section>

            <section className="space-y-5 border-b border-[#DDE4DC] py-5">
                {highlights.map(({ title, body, Icon }) => (
                    <div key={title} className="flex gap-5">
                        <Icon size={24} />
                        <div>
                            <h3 className="font-semibold">{title}</h3>
                            <p className="text-xs text-[#6D766E]">{body}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="border-b border-[#DDE4DC] py-6 leading-5">
                <p className="rounded-md bg-[#F7F8F5] px-4 py-3 text-xs text-[#6D766E]">Some info has been automatically translated. <button className="font-semibold text-[#1F2420] underline" type="button">Show original</button></p>
                <p className="mt-5">A beautiful, lush, green, comfortable and quiet place in the middle of the city. Newly renovated villa made with care, using a modern tropical open concept and generous communal spaces.</p>
                <h3 className="mt-5 font-semibold">The space</h3>
                <p className="mt-2">The house has 3 bedrooms and 4 bathrooms. Each room has a private terrace, with a kitchen, dining area, pool, and spaces for gathering with family.</p>
                <button className="mt-4 font-semibold underline" type="button">Show more</button>
            </section>

            <SleepingRooms />
            <Amenities />
            <Calendar />
            <Reviews />
        </div>
    );
}

function SleepingRooms() {
    return (
        <section className="border-b border-[#DDE4DC] py-8">
            <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold">Where you'll sleep</h2>
                <div className="flex items-center gap-3 text-xs text-[#6D766E]"><span>1 / 2</span><button className="grid h-6 w-6 place-items-center rounded-full border" type="button"><ChevronLeft size={12} /></button><button className="grid h-6 w-6 place-items-center rounded-full border" type="button"><ChevronRight size={12} /></button></div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 max-sm:grid-cols-1">
                {rooms.slice(0, 2).map((room) => (
                    <div key={room.title} className="overflow-hidden rounded-xl border border-[#DDE4DC]">
                        <img src={room.image} alt={room.title} className="h-36 w-full object-cover" />
                        <div className="p-3">
                            <h3 className="font-semibold">{room.title}</h3>
                            <p className="text-xs">{room.beds}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

function Amenities() {
    return (
        <section className="border-b border-[#DDE4DC] py-8">
            <h2 className="text-base font-semibold">What this place offers</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-12 gap-y-4 max-sm:grid-cols-1">
                {amenities.map((amenity) => (
                    <div key={amenity.name} className={`flex gap-4 ${amenity.unavailable ? 'text-[#6D766E] line-through' : ''}`}>
                        <IconForAmenity name={amenity.name} />
                        <span>{amenity.unavailable ? `Unavailable: ${amenity.name}` : amenity.name}</span>
                    </div>
                ))}
            </div>
            <button className="mt-7 rounded-md border border-[#1F2420] px-4 py-3 text-xs font-semibold hover:bg-[#EEF2EC]" type="button">Show all 64 amenities</button>
        </section>
    );
}

function Calendar() {
    return (
        <section className="border-b border-[#DDE4DC] py-8">
            <h2 className="text-base font-semibold">Select check-in date</h2>
            <p className="mt-1 text-xs text-[#6D766E]">Add your travel dates for exact pricing</p>
            <div className="mt-6 grid grid-cols-2 gap-10 max-sm:grid-cols-1">
                <Month title="June 2026" days={calendarDays} />
                <Month title="July 2026" days={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']} offset={3} />
            </div>
            <div className="mt-5 flex justify-between text-xs"><button className="rounded border px-2 py-1" type="button">Keys</button><button className="font-semibold underline" type="button">Clear dates</button></div>
        </section>
    );
}

function Month({ title, days, offset = 0 }: { title: string; days: string[]; offset?: number }) {
    return (
        <div>
            <div className="mb-4 flex items-center justify-between">
                <ChevronLeft size={18} className="opacity-0" />
                <h3 className="text-xs font-semibold">{title}</h3>
                <ChevronRight size={14} />
            </div>
            <div className="grid grid-cols-7 text-center text-xs font-semibold text-[#6D766E]">
                {'SMTWTFS'.split('').map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-y-2 text-center text-xs">
                {Array.from({ length: offset }).map((_, index) => <span key={`blank-${index}`} />)}
                {days.map((day) => <button key={day} className="mx-auto grid h-7 w-7 place-items-center rounded-full text-[#6D766E] hover:border hover:border-[#1F2420]" type="button">{day}</button>)}
            </div>
        </div>
    );
}

function Reviews() {
    return (
        <section className="border-b border-[#DDE4DC] py-10">
            <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-8 max-sm:grid-cols-1">
                {reviews.map(([name, years, body]) => (
                    <article key={name}>
                        <div className="flex items-center gap-3">
                            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#DDE4DC] font-semibold">{name[0]}</div>
                            <div><h3 className="font-semibold">{name}</h3><p className="text-xs text-[#6D766E]">{years}</p></div>
                        </div>
                        <p className="mt-3 line-clamp-3 leading-5">{body}</p>
                        <button className="mt-2 font-semibold underline" type="button">Show more</button>
                    </article>
                ))}
            </div>
            <button className="mt-8 rounded-md border border-[#1F2420] px-5 py-3 text-xs font-semibold" type="button">Show all 145 reviews</button>
        </section>
    );
}

function BookingCard() {
    return (
        <aside id="booking" className="sticky top-24 h-fit scroll-mt-24 rounded-xl border border-[#DDE4DC] p-5 shadow-[0_6px_16px_rgba(0,0,0,0.12)] max-lg:hidden">
            <h2 className="text-base font-semibold">Add dates for prices</h2>
            <div className="mt-5 overflow-hidden rounded-lg border border-[#DDE4DC] text-[10px] font-semibold">
                <div className="grid grid-cols-2">
                    <button className="border-r border-[#DDE4DC] p-3 text-left" type="button">CHECK-IN<br /><span className="text-xs font-normal">Add date</span></button>
                    <button className="p-3 text-left" type="button">CHECKOUT<br /><span className="text-xs font-normal">Add date</span></button>
                </div>
                <button className="flex w-full items-center justify-between border-t border-[#DDE4DC] p-3 text-left" type="button"><span>GUESTS<br /><span className="text-xs font-normal">1 guest</span></span><ChevronDown size={12} /></button>
            </div>
            <button className="mt-4 h-10 w-full rounded-lg bg-[#1F5C45] text-xs font-semibold text-white hover:bg-[#174936]" type="button">Check availability</button>
            <button className="mx-auto mt-6 flex items-center gap-2 text-xs underline" type="button"><CalendarDays size={13} />Report this listing</button>
        </aside>
    );
}

function BelowFold() {
    return (
        <div className="mx-auto max-w-[1280px] max-sm:px-6">
            <section className="border-b border-[#DDE4DC] py-8">
                <h2 className="text-base font-semibold">Where you'll be</h2>
                <p className="mt-2 text-xs">Kecamatan Umbulharjo, Daerah Istimewa Yogyakarta, Indonesia</p>
                <div className="mt-5 h-[420px] overflow-hidden rounded-lg border border-[#DDE4DC] bg-[#EEF2EC]">
                    <iframe
                        title="Villa Amalura II location on Google Maps"
                        src="https://maps.google.com/maps?q=Kecamatan%20Umbulharjo%2C%20Yogyakarta%2C%20Indonesia&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        className="h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <p className="mt-4 text-xs text-[#6D766E]">This listing's location is verified and the exact location will be provided after booking.</p>
            </section>
            <section className="border-b border-[#DDE4DC] py-8">
                <h2 className="text-base font-semibold">Neighborhood highlights</h2>
                <p className="mt-4 max-w-[620px] leading-5">Located in a quiet housing complex in the south-center of the city, close to parks, local streets, and open houses.</p>
                <button className="mt-3 font-semibold underline" type="button">Show more</button>
            </section>
            <section className="grid grid-cols-3 gap-12 border-b border-[#DDE4DC] py-8 max-sm:grid-cols-1">
                {policyCards.map(({ title, body, Icon }) => (
                    <div key={title}>
                        <Icon size={20} />
                        <h3 className="mt-3 font-semibold">{title}</h3>
                        <p className="mt-2 text-xs leading-5 text-[#6D766E]">{body}</p>
                        <button className="mt-2 text-xs font-semibold underline" type="button">Learn more</button>
                    </div>
                ))}
            </section>
        </div>
    );
}

function MobileBookingBar() {
    return (
        <div className="fixed inset-x-0 bottom-0 z-20 flex items-center justify-between border-t border-[#DDE4DC] bg-white px-6 py-4 sm:hidden">
            <div>
                <div className="font-semibold">Add dates</div>
                <div className="text-sm underline">for prices</div>
            </div>
            <button className="rounded-lg bg-[#1F5C45] px-5 py-3 text-sm font-semibold text-white" type="button">Check availability</button>
        </div>
    );
}




