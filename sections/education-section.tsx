import Section from "@/components/section";
import Image from "next/image";
import personal from "@/lib/data/personal.json";

export default function EducationSection() {
    const educations = personal.educations;
    return (
        <Section title="Education">
            <div className="space-y-6">
                {educations.map((edu, idx) => (
                    <div key={idx} className="w-full border border-gray-200 p-6 rounded-xl bg-white">
                        <div className="flex flex-col md:flex-row items-start gap-3 md:items-center justify-between w-full text-gray-500">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                                {/* If you have institution logo URLs, use them here. Otherwise, fallback to a default icon. */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                                    <Image
                                        src={edu.logoUrl && edu.logoUrl !== "" ? edu.logoUrl : "/assets/education-image-1.png"}
                                        alt={edu.institution}
                                        width={32}
                                        height={32}
                                        className="size-8"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">
                                        {edu.degree}
                                    </h3>
                                    <div className="text-sm text-gray-600">{edu.institution}</div>
                                    <div className="text-xs text-gray-400">{edu.field}</div>
                                </div>
                            </div>
                            <div className="text-xs text-gray-500">
                                {edu.startDate?.slice(0, 10)} - {edu.endDate ? edu.endDate.slice(0, 10) : "Present"}
                            </div>
                        </div>
                        <div className="mt-4 text-gray-600 text-sm whitespace-pre-line">{edu.description}</div>
                        {edu.achievements && edu.achievements.length > 0 && (
                            <ul className="list-disc pl-5 mt-2 text-xs text-gray-500 space-y-1">
                                {edu.achievements.map((ach: string) => (
                                    <li key={ach}>{ach}</li>
                                ))}
                            </ul>
                        )}
                        {edu.grade && (
                            <div className="mt-2 text-xs text-gray-700 font-semibold">Grade: {edu.grade}</div>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
}