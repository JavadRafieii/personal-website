"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
    TranslateIcon,
    HouseIcon,
    UserIcon,
    ListIcon,
    BagIcon,
    PhoneIcon
}
    from "@phosphor-icons/react";

export default function Navigation() {
    const t = useTranslations('Navigation');
    const locale = useLocale();

    return (
        <ul className="flex items-center justify-center lg:flex-col lg:space-y-3">
            <li className="group text-muted-fg py-2 px-3 rounded-xl border-transparent hover:border-border hover:bg-surface-hover hover:text-fg transition relative cursor-pointer">
                <Link href={"/"} locale={locale === "en" ? "fa" : "en"}>
                    <span className={`${locale === "en" ? "-left-18.75 font-manrope" : "-right-18.75 font-vazirmatn"} text-fg text-[12px] font-light absolute top-1 py-1 w-17.5 border border-border bg-surface-hover text-center hidden xl:group-hover:inline`}>
                        {t('translate.label')}
                    </span>
                    <TranslateIcon className="size-4 md:size-5" weight="fill" />
                </Link>
            </li>
            <li className="group text-muted-fg py-2 px-3 rounded-xl border-transparent hover:border-border hover:bg-surface-hover hover:text-fg transition relative cursor-pointer">
                <span className={`${locale === "en" ? "-left-18.75 font-manrope" : "-right-18.75 font-vazirmatn"} text-fg text-[12px] font-light absolute top-1 py-1 w-17.5 border border-border bg-surface-hover text-center hidden xl:group-hover:inline`}>
                    {t('home.label')}
                </span>
                <HouseIcon className="size-4 md:size-5" weight="fill" onClick={() =>
                    document.getElementById("HeroSection")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }  />
            </li>
            <li className="group text-muted-fg py-2 px-3 rounded-xl border-transparent hover:border-border hover:bg-surface-hover hover:text-fg transition relative cursor-pointer">
                <span className={`${locale === "en" ? "-left-18.75 font-manrope" : "-right-18.75 font-vazirmatn"} text-fg text-[12px] font-light absolute top-1 py-1 w-17.5 border border-border bg-surface-hover text-center hidden xl:group-hover:inline`}>
                    {t('about.label')}
                </span>
                <UserIcon className="size-4 md:size-5" weight="fill" onClick={() =>
                    document.getElementById("AboutSection")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }/>
            </li>
            <li className="group text-muted-fg py-2 px-3 rounded-xl border-transparent hover:border-border hover:bg-surface-hover hover:text-fg transition relative cursor-pointer">
                <span className={`${locale === "en" ? "-left-18.75 font-manrope" : "-right-18.75 font-vazirmatn"} text-fg text-[12px] font-light absolute top-1 py-1 w-17.5 border border-border bg-surface-hover text-center hidden xl:group-hover:inline`}>
                    {t('resume.label')}
                </span>
                <ListIcon className="size-4 md:size-5" weight="fill" onClick={() =>
                    document.getElementById("ResumeSection")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }/>
            </li>
            <li className="group text-muted-fg py-2 px-3 rounded-xl border-transparent hover:border-border hover:bg-surface-hover hover:text-fg transition relative cursor-pointer">
                <span className={`${locale === "en" ? "-left-18.75 font-manrope" : "-right-18.75 font-vazirmatn"} text-fg text-[12px] font-light absolute top-1 py-1 w-17.5 border border-border bg-surface-hover text-center hidden xl:group-hover:inline`}>
                    {t('portfolio.label')}
                </span>
                <BagIcon className="size-4 md:size-5" weight="fill" onClick={() =>
                    document.getElementById("PortfolioSection")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }/>
            </li>
            <li className="group text-muted-fg py-2 px-3 rounded-xl border-transparent hover:border-border hover:bg-surface-hover hover:text-fg transition relative cursor-pointer">
                <span className={`${locale === "en" ? "-left-18.75 font-manrope" : "-right-18.75 font-vazirmatn"} text-fg text-[12px] font-light absolute top-1 py-1 w-17.5 border border-border bg-surface-hover text-center hidden xl:group-hover:inline`}>
                    {t('contact.label')}
                </span>
                <PhoneIcon className="size-4 md:size-5" weight="fill" onClick={() =>
                    document.getElementById("ContactSection")?.scrollIntoView({
                        behavior: "smooth",
                    })
                }/>
            </li>
        </ul>
    );
};