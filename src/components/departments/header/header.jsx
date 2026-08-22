"use client";

import { useTranslations, useLocale } from 'next-intl';

import { useState } from "react";

import Sidebar from "../sidebar/sidebar";
import { ListIcon, XIcon } from "@phosphor-icons/react";

export default function Header() {
    const t = useTranslations('Header');
    const locale = useLocale();

    const [isOpen, setIsOpen] = useState(false);

    function toggleSidebar() {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <header className="w-full fixed top-0 left-0 z-20 backdrop-blur-2xl border border-border bg-surface px-8 py-4 lg:hidden">
                <div className="grid grid-cols-3">
                    <div>
                        <ListIcon
                            size={20}
                            color="#b3b3b3"
                            className="cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <span className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"}  font-bold text-fg text-sm`}>
                            {t('title')}
                        </span>
                    </div>

                    <div></div>
                </div>
            </header>

            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/90 z-30"
                />
            )}

            <aside
                className={`fixed top-0 left-0 z-40 w-80 bg-surface p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } overflow-scroll scrollbar-none h-dvh`}
            >
                <XIcon
                    size={20}
                    color="#b3b3b3"
                    className="mb-5 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                />

                <Sidebar />
            </aside>
        </>
    );
}