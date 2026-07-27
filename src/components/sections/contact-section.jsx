import { useTranslations, useLocale } from 'next-intl';

import ContactForm from '../departments/contact/contact-form';
import ContactInfo from '../departments/contact/contact-info';

export default function ContactSection() {
    const t = useTranslations('Contact');
    const locale = useLocale()

    return (
        <div id='ContactSection' className='my-20 scroll-mt-12.5'>
            <h2 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[1.875rem] font-bold mb-5`}>
                {t('heading')}
            </h2>
            <p className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} text-[1.125rem] text-soft font-normal`}>
                {t('description')}
            </p>
            <div className='grid grid-cols-12 gap-5 mt-10'>
                <div className='col-span-12 xl:col-span-7 order-2 xl:order-1'>
                    <ContactForm />
                </div>
                <div className='col-span-12 xl:col-span-5 order-1 xl:order-2'>
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
};