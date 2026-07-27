import Image from "next/image";

export default function PortfolioCard({ port, locale }) {
    return (
        <li className="glass-card overflow-hidden">
            <div className="relative w-full h-60">
                <Image
                    src={`/images/portfolio/${port.image}`}
                    alt={`${port.name}`}
                    fill
                    className="w-full"
                />
            </div>
            <div className="p-6">
                <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-[12px] text-primary`}>
                    {port.label}
                </p>
                <div className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-base font-semibold`}>
                    {port.name}
                </div>
            </div>
        </li>
    );
};