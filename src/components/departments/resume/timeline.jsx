import TimelineItem from "./timeline-item";

export default function Timeline({ data, locale }) {
    return (
        <ul>
            {data.map(data => (
                <TimelineItem
                    key={data.time}
                    data={data}
                    locale={locale}
                />
            ))}
        </ul>
    );
};