import Section from "@/components/section";
import personal from "@/lib/data/personal.json";

export default function ReferencesSection() {
    const references = personal.personalData.references;
    if (!references || references.length === 0) return null;
    return (
        <Section title="References">
            <div className="text-gray-700 whitespace-pre-line text-sm">
                {references}
            </div>
        </Section>
    );
}