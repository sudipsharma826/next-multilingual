
import Section from "@/components/section";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { type Experience } from '@/hooks/usePersonalData';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
    const t = useTranslations();
    return (
        <Section title={t('experience.title')}>
            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="w-full border border-gray-200 p-6 rounded-xl bg-white">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                {/* If you have company logo URLs, use them here. Otherwise, fallback to a default icon. */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <Image
                                        src={exp.logoUrl && exp.logoUrl !== "" ? exp.logoUrl : "/assets/company-default.png"}
                                        alt={exp.company}
                                        width={32}
                                        height={32}
                                        className="size-8"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">
                                        {exp.position}
                                    </h3>
                                    <div className="text-sm text-gray-600">{exp.company}</div>
                                    <div className="text-xs text-gray-400">{exp.location}</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">
                                {exp.startDate?.slice(0, 10)} - {exp.endDate ? exp.endDate.slice(0, 10) : "Present"}
                            </div>
                        </div>
                        <div className="mt-4 text-gray-600 text-sm whitespace-pre-line">{exp.description}</div>
                        {exp.achievements && exp.achievements.length > 0 && (
                            <ul className="list-disc pl-5 mt-2 text-xs text-gray-500 space-y-1">
                                {exp.achievements.map((ach: string) => (
                                    <li key={ach}>{ach}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}