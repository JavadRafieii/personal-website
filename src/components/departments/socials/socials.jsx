"use client";

import { LinkedinLogoIcon, GithubLogoIcon } from "@phosphor-icons/react";

export default function Socials() {
    return (
        <ul className="flex items-center gap-3 my-5">
            <li className="w-9 h-9 glass-card text-muted-fg hover:text-primary">
                <a href="" className="flex items-center justify-center w-full h-full">
                    <LinkedinLogoIcon size={20} weight="fill" />
                </a>
            </li>
            <li className="w-9 h-9 glass-card text-muted-fg hover:text-primary">
                <a href="" className="flex items-center justify-center w-full h-full">
                    <GithubLogoIcon size={20} weight="fill" />
                </a>
            </li>
        </ul>
    );
};