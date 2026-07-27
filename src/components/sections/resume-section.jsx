import { useTranslations, useLocale } from 'next-intl';

import Timeline from "../departments/resume/timeline";
import SkillsGrid from '../departments/skills/skills-grid';

export default function ResumeSection() {
    const t = useTranslations('ResumeSection');
    const experiences = t.raw('experiences');
    const locale = useLocale();

    return (
        <div id='ResumeSection' className="my-20 scroll-mt-12.5">
            <h2 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[1.875rem] font-bold mb-5`}>
                {t('heading')}
            </h2>
            <h3 className={`${locale === "en" ? "font-space-grotesk" : "font-vazirmatn"} text-[14px] text-dim font-normal mb-5`}>
                {t('label')}
            </h3>
            <Timeline
                data={experiences}
                locale={locale}
            />
            <SkillsGrid />
        </div>
    );
};