/**
 * Search-focused landing pages. Each entry becomes a page at /<slug>
 * (see app/[slug]/page.tsx), is added to the sitemap and gets
 * Service + FAQ + Breadcrumb structured data.
 *
 * Content is deliberately factual and price-free. To add a page, add an
 * entry here — no other code changes are needed.
 */

export type LandingPage = {
  slug: string;
  /** Used for <title>; the site name is appended automatically */
  seoTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  h1Accent: string;
  eyebrow: string;
  intro: string;
  heroImage: string;
  serviceType: "tour" | "transport";
  highlights: { title: string; text: string }[];
  sections: { heading: string; paragraphs: string[] }[];
  goodToKnow: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
  whatsappText: string;
};

export const landingPages: LandingPage[] = [
  {
    slug: "ajanta-ellora-tour-from-aurangabad",
    seoTitle: "Ajanta & Ellora Caves Tour from Aurangabad (Chhatrapati Sambhajinagar)",
    metaDescription:
      "Book a private Ajanta & Ellora Caves tour from Aurangabad (Chhatrapati Sambhajinagar) with Global Horizons Tours & Travels. Comfortable private vehicle, flexible day plan. Request a free quote.",
    keywords: [
      "Ajanta Ellora tour from Aurangabad",
      "Ajanta Ellora caves tour package",
      "Aurangabad to Ajanta Ellora private taxi",
      "Ajanta Ellora one day tour",
      "Ellora caves tour Chhatrapati Sambhajinagar",
    ],
    h1: "Ajanta & Ellora Caves Tour",
    h1Accent: "from Aurangabad",
    eyebrow: "UNESCO World Heritage Tours",
    intro:
      "Explore two of India's greatest rock-cut wonders with a private vehicle and a plan built around your pace. Global Horizons Tours & Travels is based in Chhatrapati Sambhajinagar (Aurangabad), the gateway to both sites, so pickups are simple and local knowledge comes as standard.",
    heroImage: "/packages/ellora-caves-aurangabad.png",
    serviceType: "tour",
    highlights: [
      { title: "Ellora Caves", text: "A UNESCO World Heritage Site of Buddhist, Hindu and Jain rock-cut temples, including the monolithic Kailasa Temple." },
      { title: "Ajanta Caves", text: "UNESCO-listed Buddhist caves famous for ancient paintings and sculpture, set in a horseshoe-shaped gorge." },
      { title: "Private Vehicle", text: "Travel with your own family or group in a private car or larger vehicle, with a driver who knows the route." },
      { title: "Flexible Planning", text: "Combine one site or both, add Grishneshwar or Daulatabad Fort, or extend into a multi-day Maharashtra circuit." },
    ],
    sections: [
      {
        heading: "Plan Ajanta and Ellora the easy way",
        paragraphs: [
          "Ellora lies roughly 30 km from Aurangabad, while Ajanta is a longer drive of around 100 km or more each way. Because of the distances, many travellers choose to see the two sites on separate days, while others combine them in a long single-day tour. We help you decide based on your time, group and fitness.",
          "Tell us your dates, group size and preferred pickup point and we will prepare a quote for a private vehicle with a driver, with sightseeing stops arranged around your interests.",
        ],
      },
      {
        heading: "Make it a longer journey",
        paragraphs: [
          "Ajanta and Ellora combine naturally with Shirdi, Grishneshwar Jyotirlinga, Daulatabad Fort and Bibi Ka Maqbara. We also build multi-day itineraries that start or end at Aurangabad, Pune, Mumbai or Shirdi.",
        ],
      },
    ],
    goodToKnow: [
      "Ajanta Caves are generally closed on Mondays and Ellora Caves on Tuesdays, so we schedule around these days.",
      "Carry comfortable footwear, water, sun protection and a valid photo ID for entry-ticket purposes.",
      "Monsoon (June to September) brings green landscapes and waterfalls near the caves but can affect road conditions.",
      "Entry tickets and guide fees are separate unless included in your confirmed quote.",
    ],
    faqs: [
      { question: "Can Ajanta and Ellora be visited in one day from Aurangabad?", answer: "It is possible but makes for a very long day because Ajanta is roughly 100 km or more from Aurangabad. Most travellers prefer two separate days. We can plan either option based on your preference." },
      { question: "Which day are Ajanta and Ellora closed?", answer: "Ajanta is typically closed on Mondays and Ellora on Tuesdays. Always confirm current timings before travel; we take this into account while planning your itinerary." },
      { question: "Do you provide a private car with driver for Ajanta Ellora?", answer: "Yes. We arrange private vehicles with professional drivers from Chhatrapati Sambhajinagar (Aurangabad) for individuals, families and groups." },
      { question: "How do I get a price?", answer: "Send us your dates, number of travellers and pickup location through our quote form or WhatsApp and we will reply with a customised quotation." },
    ],
    related: ["aurangabad-city-sightseeing-tour", "grishneshwar-jyotirlinga-tour-package", "aurangabad-to-shirdi-taxi"],
    whatsappText: "Hello Global Horizons, I would like a quote for an Ajanta & Ellora tour from Aurangabad.",
  },
  {
    slug: "aurangabad-to-shirdi-taxi",
    seoTitle: "Aurangabad to Shirdi Taxi – Private Cab Service",
    metaDescription:
      "Private taxi from Aurangabad (Chhatrapati Sambhajinagar) to Shirdi, one-way or round trip, with professional drivers. Get a quick quote from Global Horizons Tours & Travels.",
    keywords: [
      "Aurangabad to Shirdi taxi",
      "Aurangabad to Shirdi cab",
      "Chhatrapati Sambhajinagar to Shirdi taxi",
      "Shirdi darshan taxi from Aurangabad",
      "Aurangabad Shirdi one way cab",
    ],
    h1: "Aurangabad to Shirdi Taxi",
    h1Accent: "Private & Comfortable",
    eyebrow: "Pilgrimage Transport",
    intro:
      "Travel from Chhatrapati Sambhajinagar (Aurangabad) to Shirdi in a clean, comfortable private vehicle driven by an experienced driver. Choose one-way, round trip or a combined Shirdi–Shani Shingnapur–Ellora plan.",
    heroImage: "/shirdi.jpg",
    serviceType: "transport",
    highlights: [
      { title: "One-Way or Round Trip", text: "Pay for the journey you actually need — drop-only, return the same day, or stay overnight at Shirdi." },
      { title: "Vehicles for Every Group", text: "Sedans for couples and small families, larger vehicles for bigger groups and pilgrim parties." },
      { title: "Add Nearby Darshan", text: "Include Shani Shingnapur, Trimbakeshwar or Grishneshwar on the same trip." },
      { title: "Doorstep Pickup", text: "Pickup from your home, hotel, railway station or the airport in Aurangabad." },
    ],
    sections: [
      {
        heading: "A smooth road trip to Shirdi",
        paragraphs: [
          "The drive from Aurangabad to Shirdi usually takes around three hours depending on traffic and stops. We plan timing around your darshan slot so you are not rushing, and we can adjust pickup times to suit elderly travellers and children.",
          "Share your pickup point, date and number of passengers and we will confirm the right vehicle and quotation.",
        ],
      },
    ],
    goodToKnow: [
      "Shirdi temple darshan timings and queue times vary; check the official Sai Baba Sansthan guidance before travel.",
      "Mention luggage and the number of elderly passengers when requesting a quote so we can suggest the right vehicle.",
      "Tolls, parking and state-border charges are quoted clearly in your confirmation.",
    ],
    faqs: [
      { question: "How long does it take from Aurangabad to Shirdi by taxi?", answer: "Typically around three hours of driving, depending on traffic, road conditions and stops." },
      { question: "Can I book a one-way drop to Shirdi?", answer: "Yes. We offer one-way drops as well as round-trip and multi-stop plans." },
      { question: "Can you include Shani Shingnapur on the way?", answer: "Yes. Shani Shingnapur is commonly combined with Shirdi, and we can plan it as a stop on the same trip." },
      { question: "How do I book?", answer: "Use the transport quote form, call us or message us on WhatsApp with your date, pickup location and group size." },
    ],
    related: ["private-taxi-service-chhatrapati-sambhajinagar", "grishneshwar-jyotirlinga-tour-package", "ajanta-ellora-tour-from-aurangabad"],
    whatsappText: "Hello Global Horizons, I need a taxi from Aurangabad to Shirdi. Please share the details.",
  },
  {
    slug: "aurangabad-airport-transfer",
    seoTitle: "Aurangabad Airport Transfer & Railway Station Pickup",
    metaDescription:
      "Reliable airport and railway station transfers in Aurangabad (Chhatrapati Sambhajinagar). Private cabs with professional drivers from Global Horizons Tours & Travels.",
    keywords: [
      "Aurangabad airport taxi",
      "Chhatrapati Sambhajinagar airport transfer",
      "Aurangabad railway station cab",
      "airport pickup Aurangabad",
      "airport drop Chhatrapati Sambhajinagar",
    ],
    h1: "Airport & Railway Transfers",
    h1Accent: "in Aurangabad",
    eyebrow: "Meet · Greet · Transfer",
    intro:
      "Arrive or depart stress-free. We arrange pre-booked airport and railway station transfers in Chhatrapati Sambhajinagar (Aurangabad) for individuals, families, corporate guests and tour groups.",
    heroImage: "/sedan.jpg",
    serviceType: "transport",
    highlights: [
      { title: "Pre-Booked Pickup", text: "Share your flight or train details and your vehicle is arranged in advance." },
      { title: "Hotel & Home Drops", text: "Direct transfers to hotels, resorts, offices or residences across the city." },
      { title: "Groups & Luggage", text: "From sedans to tempo travellers, with space for family luggage and group travel." },
      { title: "Onward Journeys", text: "Continue straight to Ajanta, Ellora, Shirdi or any other destination with the same team." },
    ],
    sections: [
      {
        heading: "Local team, clear communication",
        paragraphs: [
          "Because we are based in Chhatrapati Sambhajinagar, we know the city, the airport approach and the railway station routes. Confirm your arrival details by phone or WhatsApp and we will coordinate pickup timing with you.",
        ],
      },
    ],
    goodToKnow: [
      "Share your flight or train number so we can track delays.",
      "Corporate and group transfers can be quoted together with city sightseeing or outstation travel.",
    ],
    faqs: [
      { question: "Do you provide pickup from Aurangabad railway station?", answer: "Yes. We arrange pickups and drops for both the airport and the railway station." },
      { question: "Can I pre-book a transfer for a group?", answer: "Yes. Tell us your group size and luggage and we will suggest an appropriate vehicle." },
      { question: "Can I continue to another city after the airport pickup?", answer: "Yes. Many guests go directly from the airport to Ellora, Shirdi or other destinations on the same booking." },
    ],
    related: ["private-taxi-service-chhatrapati-sambhajinagar", "aurangabad-city-sightseeing-tour", "aurangabad-to-shirdi-taxi"],
    whatsappText: "Hello Global Horizons, I need an airport/railway transfer in Aurangabad.",
  },
  {
    slug: "grishneshwar-jyotirlinga-tour-package",
    seoTitle: "Grishneshwar Jyotirlinga Tour Package from Aurangabad",
    metaDescription:
      "Plan a Grishneshwar Jyotirlinga darshan and Maharashtra pilgrimage tour from Aurangabad with Shirdi, Shani Shingnapur, Trimbakeshwar and Bhimashankar options.",
    keywords: [
      "Grishneshwar Jyotirlinga tour from Aurangabad",
      "Maharashtra Jyotirlinga tour package",
      "Shirdi Trimbakeshwar Bhimashankar tour",
      "Grishneshwar temple taxi",
      "Maharashtra pilgrimage tour package",
    ],
    h1: "Grishneshwar & Maharashtra",
    h1Accent: "Pilgrimage Tours",
    eyebrow: "Spiritual Journeys",
    intro:
      "Grishneshwar, one of the twelve Jyotirlingas, is located close to Ellora near Chhatrapati Sambhajinagar. We design comfortable pilgrimage tours that connect Grishneshwar with Shani Shingnapur, Shirdi, Trimbakeshwar and Bhimashankar.",
    heroImage: "/packages/ghrishneshwar-shani-shingnapur-shirdi-trimbakeshwar-bhimashankar-pune.png",
    serviceType: "tour",
    highlights: [
      { title: "Grishneshwar Jyotirlinga", text: "A short drive from Ellora Caves, easily combined with a heritage day." },
      { title: "Multi-Day Circuits", text: "Our 6-day circuit covers Grishneshwar, Shani Shingnapur, Shirdi, Trimbakeshwar and Bhimashankar." },
      { title: "Pilgrim-Friendly Pace", text: "Timing planned around darshan, with attention to senior travellers and families." },
      { title: "Private Transport", text: "Comfortable private vehicles for your family or community group." },
    ],
    sections: [
      {
        heading: "Customise your yatra",
        paragraphs: [
          "Every group is different. Tell us which temples you want to include, your travel dates and group size, and we will prepare an itinerary and quotation. Accommodation, meals and darshan arrangements can be discussed as part of your quote.",
        ],
      },
    ],
    goodToKnow: [
      "Temple timings, dress codes and queue systems can change; follow the guidance of each temple trust.",
      "Festival and weekend days can be crowded, so we recommend booking early.",
    ],
    faqs: [
      { question: "Where is Grishneshwar temple located?", answer: "Grishneshwar is located near Ellora, a short drive from Chhatrapati Sambhajinagar (Aurangabad) in Maharashtra." },
      { question: "Can you arrange a multi-day Jyotirlinga tour?", answer: "Yes. We offer a 6-day circuit and can customise the route and duration for your group." },
      { question: "Is the tour suitable for senior citizens?", answer: "Yes, we plan comfortable timings and vehicles. Please mention any mobility needs when you enquire." },
    ],
    related: ["aurangabad-to-shirdi-taxi", "ajanta-ellora-tour-from-aurangabad", "private-taxi-service-chhatrapati-sambhajinagar"],
    whatsappText: "Hello Global Horizons, I am interested in a Grishneshwar / Jyotirlinga tour package.",
  },
  {
    slug: "aurangabad-city-sightseeing-tour",
    seoTitle: "Aurangabad City Sightseeing Tour – Bibi Ka Maqbara, Daulatabad Fort & More",
    metaDescription:
      "Private Aurangabad (Chhatrapati Sambhajinagar) sightseeing tour covering Bibi Ka Maqbara, Daulatabad Fort, Panchakki and more. Request a quote from Global Horizons Tours & Travels.",
    keywords: [
      "Aurangabad sightseeing tour",
      "Aurangabad city tour",
      "Bibi Ka Maqbara tour",
      "Daulatabad Fort tour from Aurangabad",
      "Chhatrapati Sambhajinagar tourist places",
    ],
    h1: "Aurangabad City",
    h1Accent: "Sightseeing Tour",
    eyebrow: "Local Heritage",
    intro:
      "Discover Chhatrapati Sambhajinagar's Mughal and Deccan heritage in a half-day or full-day private tour led by a local team that knows the city.",
    heroImage: "/aurangabad.jpg",
    serviceType: "tour",
    highlights: [
      { title: "Bibi Ka Maqbara", text: "The 17th-century tomb often called the 'Taj of the Deccan'." },
      { title: "Daulatabad Fort", text: "A formidable hill fort on the outskirts of the city with panoramic views." },
      { title: "Panchakki & Local Sites", text: "Add Panchakki, the Aurangabad Caves and local markets as time allows." },
      { title: "Half or Full Day", text: "Choose a short city loop or combine it with Ellora and Grishneshwar." },
    ],
    sections: [
      {
        heading: "See the city at your pace",
        paragraphs: [
          "Our city tours work well as a first-day introduction before heading out to Ajanta or Ellora, or as a stand-alone plan for travellers with limited time between flights and trains.",
        ],
      },
    ],
    goodToKnow: [
      "Monument opening hours and entry fees change; we confirm the plan before your travel date.",
      "Wear comfortable shoes and carry water, especially in summer.",
    ],
    faqs: [
      { question: "How long does an Aurangabad city tour take?", answer: "A typical city tour takes a half day to a full day depending on how many sites you include." },
      { question: "Can I combine city sightseeing with Ellora Caves?", answer: "Yes. Ellora and Grishneshwar are commonly added to a full-day plan." },
      { question: "Is a guide included?", answer: "Guide services can be arranged on request and will be mentioned in your quotation." },
    ],
    related: ["ajanta-ellora-tour-from-aurangabad", "aurangabad-airport-transfer", "grishneshwar-jyotirlinga-tour-package"],
    whatsappText: "Hello Global Horizons, I would like to book an Aurangabad city sightseeing tour.",
  },
  {
    slug: "private-taxi-service-chhatrapati-sambhajinagar",
    seoTitle: "Private Taxi & Cab Service in Chhatrapati Sambhajinagar (Aurangabad)",
    metaDescription:
      "Book a private taxi or cab in Chhatrapati Sambhajinagar (Aurangabad) for local, outstation, airport and group travel. Sedans, SUVs and tempo travellers with professional drivers.",
    keywords: [
      "taxi service in Aurangabad",
      "cab service Chhatrapati Sambhajinagar",
      "outstation cab Aurangabad",
      "tempo traveller on rent Aurangabad",
      "car rental with driver Aurangabad",
    ],
    h1: "Private Taxi & Cab Service",
    h1Accent: "in Chhatrapati Sambhajinagar",
    eyebrow: "Reliable Transport",
    intro:
      "From a single airport drop to a multi-day group tour, Global Horizons Tours & Travels provides pre-booked private vehicles with professional drivers in Aurangabad and across Maharashtra.",
    heroImage: "/tempo.jpg",
    serviceType: "transport",
    highlights: [
      { title: "Local & Outstation", text: "Point-to-point drops, day rentals and multi-day outstation trips." },
      { title: "Sedans to Tempo Travellers", text: "Choose the vehicle that fits your passengers and luggage." },
      { title: "Corporate & Group Travel", text: "Transport for company visits, weddings, events and tour groups." },
      { title: "Clear Quotations", text: "Tell us your route and dates and receive a clear quote before you confirm." },
    ],
    sections: [
      {
        heading: "Transport you can plan around",
        paragraphs: [
          "Whether you need a quick local transfer or a trip to Ajanta, Ellora, Shirdi or Pune, we match the vehicle to your group and keep communication simple over phone and WhatsApp.",
        ],
      },
    ],
    goodToKnow: [
      "Share pickup location, drop location, date, time and number of passengers for the fastest quote.",
      "Peak travel dates and festival weekends should be booked early.",
    ],
    faqs: [
      { question: "What types of vehicles do you offer?", answer: "We arrange sedans, larger cars and tempo travellers depending on group size. See our Fleet page for details." },
      { question: "Do you offer outstation taxis?", answer: "Yes — one-way, round-trip and multi-day outstation trips from Aurangabad." },
      { question: "How do I request a quote?", answer: "Use our transport quote form, call us or message us on WhatsApp." },
    ],
    related: ["aurangabad-to-shirdi-taxi", "aurangabad-airport-transfer", "ajanta-ellora-tour-from-aurangabad"],
    whatsappText: "Hello Global Horizons, I need a taxi in Chhatrapati Sambhajinagar. Please share the details.",
  },
];

export const getLandingPage = (slug: string) =>
  landingPages.find((page) => page.slug === slug);
