import AboutInfoItem from "./about-info-item";

export default function AboutInfoGrid({ information, locale }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 my-10">
            {information.map(info => <AboutInfoItem key={info.label} label={info.label} value={info.value} locale={locale}/>)}
        </ul>
    );
};