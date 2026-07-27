export default function InfoRow({ info, locale }) {
    return (
        <li className="flex items-center justify-between pb-3">
            <span className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-dim font-light text-[16px]`}>
                {info.label}
            </span>
            <span className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-bright font-light text-[14px] flex items-center gap-2`}>
            {(info.label === "Status" || info.label === "وضعیت")
                    && <span className="block w-1.5 h-1.5 rounded-full bg-green-500"></span>}
                {info.value}
            </span>
        </li>
    );
};