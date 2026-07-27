import { useTranslations, useLocale } from 'next-intl';
import PortfolioCard from "./portfolio-card";


export default function PortfolioGrid() {
    const t = useTranslations('Portfolio');
    const portfolio = t.raw('portfolio');
    const locale = useLocale();

    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {portfolio.map((port, id) => <PortfolioCard key={id} port={port} locale={locale} />)}
        </ul>
    );
};