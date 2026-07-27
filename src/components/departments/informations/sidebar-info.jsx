import { useTranslations, useLocale } from 'next-intl';

import InfoRow from "./info-row";

export default function SidebarInfo() {
    const t = useTranslations('Sidebar');
    const informations = t.raw('informations');
    const locale = useLocale();

    return (
        <ul className="divide-y divide-border space-y-5">
            {informations.map(info => <InfoRow key={info.label} info={info} locale={locale}/>)}
        </ul>
    );
};