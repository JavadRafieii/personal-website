export default function ServiceItem({ service, locale }) {
    return (
        <li className="glass-card p-6">
            <h3 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-base font-semibold my-3`}>
                {service.label}
            </h3>
            <p className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[14px] text-soft font-light`}>
                {service.value}
            </p>
        </li>
    );
};