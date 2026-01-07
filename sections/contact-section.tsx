import Section from "@/components/section";
import personal from "@/lib/data/personal.json";
import { Github, Linkedin, Globe, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
    const data = personal.personalData;
    return (
        <Section title="Contact">
            <div className="flex flex-col gap-4">
                {data.email && (
                    <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        <a href={`mailto:${data.email}`} className="underline text-blue-600">{data.email}</a>
                    </div>
                )}
                {data.phone && (
                    <div className="flex items-center gap-2">
                        <Phone className="w-5 h-5 text-blue-600" />
                        <span>{data.phone}</span>
                    </div>
                )}
                {data.location && (
                    <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-600" />
                        <span>{data.location}</span>
                    </div>
                )}
                {data.linkedinUrl && (
                    <div className="flex items-center gap-2">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                        <a href={data.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">LinkedIn</a>
                    </div>
                )}
                {data.githubUrl && (
                    <div className="flex items-center gap-2">
                        <Github className="w-5 h-5 text-blue-600" />
                        <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">GitHub</a>
                    </div>
                )}
                {data.websiteUrl && (
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-600" />
                        <a href={data.websiteUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Website</a>
                    </div>
                )}
                {data.facebookUrl && (
                    <div className="flex items-center gap-2">
                        <Facebook className="w-5 h-5 text-blue-600" />
                        <a href={data.facebookUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Facebook</a>
                    </div>
                )}
                {data.twitterUrl && (
                    <div className="flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-600" />
                        <a href={data.twitterUrl} target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Twitter</a>
                    </div>
                )}
            </div>
        </Section>
    );
}