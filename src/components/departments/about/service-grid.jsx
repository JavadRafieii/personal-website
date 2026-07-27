import ServiceItem from "./service-item";

export default function ServicesGrid({ services, locale }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
            {services.map(service => <ServiceItem key={service.label} service={service} locale={locale}/>)}
        </ul>
    );
};