import { useTranslations, useLocale } from 'next-intl';

export default function HeroSection() {
    const t = useTranslations('HeroSection');
    const locale = useLocale();

    return (
        <div id='HeroSection' className="h-full flex items-center">
            <div>
                <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-dim text-[1rem] font-light tracking-widest`}>
                    {t('label')}
                </p>
                <h2 className={`${locale === "en" ? "font-manrope font-extrabold" : "font-vazirmatn font-black"} text-3xl md:text-5xl my-5 md:leading-16`}>
                    {t.rich("heading", {
                        highlight: (chunks) => (
                            <span className="bg-hero bg-clip-text text-transparent">
                                {chunks}
                            </span>
                        ),
                    })}
                </h2>
                <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-[1.125rem] text-soft font-normal`}>
                    {t('description')}
                </p>
            </div>
        </div>
    );
};