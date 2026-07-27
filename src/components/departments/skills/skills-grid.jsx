import { useTranslations, useLocale } from 'next-intl';

import SkillBar from "./skill-bar";

export default function SkillsGrid() {
    const t = useTranslations("Skills");
    const skills = t.raw('skills');
    const locale = useLocale();

    return (
        <div className="mt-10">
            <h3 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[14px] text-dim font-normal mb-5`}>
                {t('label')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {skills.map(skill => <SkillBar key={skill.name} skill={skill} locale={locale} />)}
            </div>
        </div>
    );
};