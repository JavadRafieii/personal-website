import { useLocale } from 'next-intl';

export default function ContactInfoCard({ icon, label, value }) {
    const locale = useLocale();

    return (
        <li className="glass-card p-5 flex items-center gap-x-3">
            <div className="w-9 h-9 rounded-lg bg-[#07bdd51a] flex items-center justify-center text-primary">
                {icon}
            </div>
            <div>
                <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-dim font-light text-[12px] tracking-[.1rem]`}>
                    {label}
                </p>
                <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-bright font-light text-[14px]`}>
                    {value}
                </p>
            </div>
        </li>
    );
};