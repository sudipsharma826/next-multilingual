
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/sections/hero-section';
import AboutSection from '@/sections/about-section';
import ProjectsSection from '@/sections/projects-section';
import ExperienceSection from '@/sections/experience-section';
import EducationSection from '@/sections/education-section';
import SkillsSection from '@/sections/skills-section';
import CertificatesSection from '@/sections/certificates-section';
import ReferencesSection from '@/sections/references-section';
import ContactSection from '@/sections/contact-section';
import Footer from '@/components/footer';
import { usePersonalData } from '@/hooks/usePersonalData';


type Props = {
  params: Promise<{ locale: string }>;
};

export default function Page({ params }: Props) {
    const { locale } = use(params);
  const t = useTranslations();
  const data = usePersonalData();

  return (
    <main className="max-md:px-4">
      <HeroSection personalData={data.personalData} />
      <AboutSection personalData={data.personalData} />
      <ProjectsSection projects={data.projects} />
      <ExperienceSection experiences={data.experiences} />
      <EducationSection educations={data.educations} />
      <SkillsSection skills={data.skills} />
      <CertificatesSection certificates={data.certificates} />
      <ReferencesSection references={data.personalData.references} />
      <ContactSection personalData={data.personalData} />
      <Footer />
    </main>
  );
}
