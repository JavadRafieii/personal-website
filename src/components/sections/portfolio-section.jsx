import { useTranslations, useLocale } from 'next-intl';

import PortfolioGrid from '../departments/portfolio/portfolio-grid';

export default function PortfolioSection() {
    const t = useTranslations('Portfolio');
    const locale = useLocale();

    return (
        <div id='PortfolioSection' className='scroll-mt-12.5'>
            <h2 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[1.875rem] font-bold mb-5`}>
                {t('heading')}
            </h2>
            <PortfolioGrid />
        </div>
    );
};