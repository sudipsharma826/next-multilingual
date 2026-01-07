
import Section from "@/components/section";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { type Project } from '@/hooks/usePersonalData';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const t = useTranslations();
    return (
        <Section title={t('projects.title')}>
            <div className="flex flex-wrap justify-center items-center gap-6 mr-auto">
                {projects.map((project, idx) => (
                    <div key={idx} className="hover:-translate-y-0.5 transition duration-300 max-w-80 border border-gray-200 rounded-xl bg-white shadow-md flex flex-col">
                        {/* Project preview image if available, else fallback */}
                        {project.imageUrl && project.imageUrl !== "" ? (
                            <Image
                                className="rounded-t-xl h-42 object-cover"
                                src={project.imageUrl}
                                alt={project.title}
                                width={320}
                                height={170}
                            />
                        ) : (
                            <div className="rounded-t-xl h-42 bg-gray-100 flex items-center justify-center text-gray-400" style={{height:170}}>
                                No Image
                            </div>
                        )}
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-base font-bold text-gray-800">
                                {project.title}
                            </h3>
                            <p className="text-gray-600 mt-1 text-sm">
                                {project.description}
                            </p>
                            {project.features && project.features.length > 0 && (
                                <ul className="list-disc pl-5 mt-2 text-xs text-gray-500 space-y-1">
                                    {project.features.map((feature: string, i: number) => (
                                        <li key={feature + i}>{feature}</li>
                                    ))}
                                </ul>
                            )}
                            {project.skills && project.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.skills.map((skill: string) => (
                                        <span key={skill} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs border border-blue-100">{skill}</span>
                                    ))}
                                </div>
                            )}
                            <div className="flex gap-3 mt-4">
                                {project.githubUrl && (
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 underline font-medium">GitHub</a>
                                )}
                                {project.liveUrl && (
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-green-700 underline font-medium">Live</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}