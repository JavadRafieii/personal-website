export default function TimelineItem({ data, locale }) {

    const { time, title, organization, description } = data;

    return (
        <li className={`${locale === "en" ? "pl-8 border-l" : "pr-8 border-r"} border-border relative pb-8`}>
            <span className={`${locale === "en" ? "-left-1.25" : "-right-1.25"} absolute top-1.75 w-2.5 h-2.5 rounded-full border border-primary bg-bg shadow-[0_0_12px_hsl(187_94%_43%_/_0.6)]`}></span>
            <time className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-[14px] text-primary font-light`}>
                {time}
            </time>
            <h4 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} font-medium text-[1.125rem] my-3`}>
                {title}
                <span className="text-muted-fg">
                    {organization}
                </span>
            </h4>
            <ul className={`${locale === "en" ? "font-manrope pl-3" : "font-vazirmatn pr-3"} list-disc text-[14px] text-soft font-light`}>
                {description.map(desc => <li key={desc}>{desc}</li>)}
            </ul>
        </li >
    );
};