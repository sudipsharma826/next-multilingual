
import Section from "@/components/section";
import Image from "next/image";
import personal from "@/lib/data/personal.json";
import { useTranslations } from 'next-intl';

export default function AboutSection() {
    const data = personal.personalData;
    const t = useTranslations();
    return (
        <Section title={t('about.title')}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
                

                <div className="flex-1 space-y-4">
                    {/* <h2 className="text-2xl font-bold text-gray-800">{data.fullName}</h2> */}
                    {/* <h3 className="text-lg font-semibold text-gray-600">{data.title}</h3> */}
                    <p className="text-gray-700 whitespace-pre-line">{data.bio}</p>
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <span className="font-semibold">Summary:</span> {data.summary}
                        </div>
                        <div>
                            <span className="font-semibold">Objective:</span> {data.objective}
                        </div>
                        <div>
                            <span className="font-semibold">Hero Bio:</span> {data.heroBio}
                        </div>
                        <div>
                            <span className="font-semibold">Languages:</span> {data.languages}
                        </div>
                        <div>
                            <span className="font-semibold">Hobbies:</span> {data.hobbies}
                        </div>
                        <div>
                            <span className="font-semibold">Current Learning:</span> {data.currentLearning}
                        </div>
                    </div> */}
                    {/* <div className="flex flex-wrap gap-4 mt-4">
                        {data.email && (
                            <a href={`mailto:${data.email}`} className="text-blue-600 underline">Email</a>
                        )}
                        {data.linkedinUrl && (
                            <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">LinkedIn</a>
                        )}
                        {data.githubUrl && (
                            <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">GitHub</a>
                        )}
                        {data.websiteUrl && (
                            <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Website</a>
                        )}
                        {data.resumeUrl && (
                            <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Resume</a>
                        )}
                        {data.facebookUrl && (
                            <a href={data.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Facebook</a>
                        )}
                    </div> */}
                </div>
            </div>
        </Section>
    );
}