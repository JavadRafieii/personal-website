"use client";

import { useTranslations, useLocale } from 'next-intl';

import { DownloadSimpleIcon } from "@phosphor-icons/react";

export default function CvButton() {
    const t = useTranslations('Sidebar');
    const locale = useLocale();

    return (
        <a href="" className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} glass-card flex items-center justify-center gap-x-2 w-full p-4 tetx-[0.75rem] font-light backdrop-filter-[blur-md] text-[14px]`}>
            {t('btn')}
            <DownloadSimpleIcon size={20} weight="fill" color="#07bdd5"/>
        </a>
    );
};