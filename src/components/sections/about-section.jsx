import { useTranslations, useLocale } from 'next-intl';

import AboutInfoGrid from "../departments/about/about-info-grid";
import ServicesGrid from "../departments/about/service-grid";

export default function AboutSection() {
    const t = useTranslations('AboutSection');
    const services = t.raw('services');
    const information = t.raw('information');
    const locale = useLocale();

    return (
        <div id='AboutSection' className='scroll-mt-12.5'>
            <h2 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[1.875rem] font-bold mb-5`}>
                {t('heading')}
            </h2>
            <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-[1.125rem] text-soft font-normal`}>
                {t('description')}
            </p>
            <AboutInfoGrid information={information} locale={locale}/>
            <h3 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[1.25rem] font-bold mb-5`} >
                {t('label')}
            </h3>
            <ServicesGrid services={services} locale={locale}/>
        </div>
    );
};