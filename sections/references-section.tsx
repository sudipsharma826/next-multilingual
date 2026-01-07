
import Section from "@/components/section";
import personal from "@/lib/data/personal.json";
import { useTranslations } from "next-intl";


export default function ReferencesSection() {
    const references = personal?.personalData.references;
    if (!references || references.length === 0) return null;
    const t = useTranslations();
        return (
            <Section title={t('references.title')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {references.map((ref: any, idx: number) => (
                    <div key={idx} className="">
                        <div className="font-bold text-lg md:text-xl text-gray-900 mb-1">
                            {ref.name}
                        </div>
                        <div className="text-gray-700 mb-1">{ref.role}</div>
                        <div className="text-xs text-gray-600 font-semibold">
                            Phone: <span className="font-normal">{ref.phone}</span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}