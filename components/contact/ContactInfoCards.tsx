import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const contactItems = [
  {
    title: "Call Us",
    description: "Speak directly with our travel specialists.",
    value: "+91 77700 69004",
    href: "tel:+917770069004",
    icon: Phone,
  },
  {
    title: "Email Us",
    description: "Send us your travel requirements anytime.",
    value: "ghtravelsinfo@gmail.com",
    href: "mailto:ghtravelsinfo@gmail.com",
    icon: Mail,
  },
  {
    title: "Visit Us",
    description: "Come and meet our travel experts.",
    value: "Chhatrapati Sambhajinagar",
    href: "#location",
    icon: MapPin,
  },
  {
    title: "WhatsApp",
    description: "Quick assistance for your travel enquiries.",
    value: "Chat With Us",
    href: "https://wa.me/917770069004",
    icon: MessageCircle,
  },
];

export default function ContactInfoCards() {
  return (
    <section className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 xl:px-6">
      <div className="-mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden border border-[#e6dfd3] bg-[#fffefd] p-6 shadow-[0_18px_50px_rgba(18,63,85,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-[#d9a737]/60 hover:shadow-[0_25px_60px_rgba(18,63,85,0.14)]"
            >
              {/* Background Accent */}

              <div className="absolute right-[-30px] top-[-30px] h-24 w-24 rounded-full bg-[#d9a737]/[0.05] transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#14596a]/10 text-[#14596a] transition-all duration-300 group-hover:bg-[#14596a] group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-[#d9a737] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-6 font-serif text-[20px] font-bold text-[#123f55]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[13px] leading-6 text-[#829093]">
                  {item.description}
                </p>

                <p className="mt-5 text-[13px] font-semibold text-[#14596a]">
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}