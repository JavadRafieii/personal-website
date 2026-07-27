export default function AboutInfoItem({ label, value, locale }) {
    return (
        <li className="flex items-center justify-between border-b border-border py-2">
            <span className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-dim font-light text-[14px]`}>{label}</span>
            <span className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-bright font-light text-[14px]`}>{value}</span>
        </li>
    );
};