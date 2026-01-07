import Section from "@/components/section";
import Image from "next/image";
import personal from "@/lib/data/personal.json";

export default function CertificatesSection() {
    const certificates = personal.certificates;
    if (!certificates || certificates.length === 0) return null;
    return (
        <Section title="Certificates & Awards">
            <div className="space-y-6">
                {certificates.map((cert, idx) => (
                    <div key={idx} className="w-full border border-gray-200 p-6 rounded-xl bg-white flex flex-col md:flex-row gap-4 items-start">
                        <div className="shrink-0">
                            <Image
                                src={cert.imageUrl || "/assets/certificate-default.png"}
                                alt={cert.title}
                                width={80}
                                height={80}
                                className="rounded-lg border border-gray-200"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-base font-bold text-gray-800">{cert.title}</h3>
                            <div className="text-sm text-gray-600">{cert.instituteName}</div>
                            <div className="text-xs text-gray-400 mb-1">{cert.issueDate?.slice(0, 10)}</div>
                            {cert.description && <div className="text-gray-600 text-sm mb-1 whitespace-pre-line">{cert.description}</div>}
                            {cert.skills && cert.skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-1">
                                    {cert.skills.map((skill, i) => (
                                        <span key={i} className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs border border-blue-100">{skill}</span>
                                    ))}
                                </div>
                            )}
                            {cert.credentialUrl && (
                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline text-xs mt-2 inline-block">View Credential</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
