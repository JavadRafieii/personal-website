import { useTranslations, useLocale } from 'next-intl';

export default function Avatar() {
    const t = useTranslations('Sidebar');
    const locale = useLocale();

    return (
        <div>
            <div className="rounded-3xl p-1.5 bg-surface border border-border mb-5">
                <img src="/images/avatar-1.png" alt="Avatar" className="rounded-xl blur-[.5px]" />

            </div>
            <h1 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} font-bold text-[1.5rem]`}>{t('name')}</h1>
            <p className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[16px] text-primary font-medium`}>{t('title')}</p>
        </div>

    );
};