export default function SkillBar({ skill, locale }) {
    return (
        <div>
            <div className={`${locale === "en" ? "font-manrope" : "font-vazirmatn"} mb-2 flex items-center justify-between text-[14px] font-light`}>
                <span>{skill.name}</span>
                <span className="text-dim">{skill.pct}%</span>
            </div>
            <div className="h-1.5 bg-muted overflow-hidden rounded-[3px] relative">
                <div className={`absolute ${locale === "en" ? "left-0" : "right-0"} top-0 h-full rounded-[3px] bg-hero`} style={{ width: `${skill.pct}%` }}></div>
            </div>
        </div>
    );
};