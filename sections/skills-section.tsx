import Section from "@/components/section";
import personal from "@/lib/data/personal.json";
import { icons } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
export default function SkillsSection() {
const iconMap: Record<string, keyof typeof icons> = {
    "React": "React",
    "Next.js": "Box",
    "TailwindCSS": "Feather",
    "TypeScript": "Code2",
    "Node.js": "Server",
    "Postgresql": "Database",
    "MySql": "Database",
    "Git & Github": "GitBranch",
    "JavaScript": "FileCode",
    "Redux /React Toolkit": "Repeat",
    "MongoDB": "Database",
    "Express.js": "Package",
    "PrismaOrm": "Layers",
    "Cloudinary": "Cloud",
    "Docker": "Ship",
    "AWS Cloud": "Cloud",
    "Zustand": "Zap",
    "LangChain": "Link",
    "NestJs": "Shield",
    "Socket.Io": "Wifi",
    "Redis": "Database",
    "Zod": "Shield",
    "Vapi AI Voice Agent": "Mic",
    "NextAuth.js": "UserCheck",
    "JsonWebToken": "Key",
    "Moongose": "Database",
    "Multer": "UploadCloud",
    "Supabase": "Database",
    "Resend Email": "Mail",
    "ElevenLabs": "Mic",
    "AI / AI Services": "Bot",
    "Khalti Payments": "CreditCard",
    "SQL": "Database",
};

    const skills = personal.skills;
    const t = useTranslations();
    return (
        <Section title={t('skills.title')}>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => {
                    const Icon = icons[iconMap[skill.name] || "Circle"];
                    return (
                        <div key={skill.name} className="relative flex items-center border border-gray-300 bg-white hover:bg-gray-100/70 text-gray-600 text-[13px] rounded-full px-5 py-1.5 gap-2 shadow-sm">
                            {Icon && <Icon className="w-5 h-5 mr-1" />}
                            <span>{skill.name}</span>
                            {/* Experience years removed, icon only */}
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}