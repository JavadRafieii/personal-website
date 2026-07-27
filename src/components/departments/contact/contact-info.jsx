"use client";

import { useTranslations } from 'next-intl';
import { MapPinIcon, PhoneIcon, EnvelopeOpenIcon } from "@phosphor-icons/react";

import ContactInfoCard from "./contact-info-card";

export default function ContactInfo() {
    const t = useTranslations('Contact');

    return (
        <ul className="space-y-5">
            <ContactInfoCard
                icon={<MapPinIcon size={20} weight="fill" />}
                label={t('information.location.label')}
                value={t('information.location.value')}
            />
            <ContactInfoCard
                icon={<PhoneIcon size={20} weight="fill" />}
                label={t('information.phone.label')}
                value={t('information.phone.value')}
            />
            <ContactInfoCard
                icon={<EnvelopeOpenIcon size={20} weight="fill" />}
                label={t('information.email.label')}
                value={t('information.email.value')}
            />
        </ul>
    );
};