import { useLocale } from 'next-intl';
import personalData from '@/lib/data/personal.json';

export interface PersonalData {
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  profileImageUrl: string;
  resumeUrl: string;
  cvUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  twitterUrl: string;
  websiteUrl: string;
  facebookUrl: string;
  references: Array<{
    name: string;
    role: string;
    phone: string;
  }>;
  currentLearning: string;
  summary?: string;
  objective?: string;
  heroBio?: string;
  languages?: string;
  hobbies?: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements: string[];
  logoUrl: string;
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string | null;
  grade: string | null;
  description: string;
  achievements: string[];
  logoUrl: string;
}

export interface Skill {
  name: string;
  experienceYears: number;
}

export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  features: string[];
  skills: string[];
  imageUrl: string;
}

export interface Certificate {
  title: string;
  instituteName: string;
  issueDate: string;
  imageUrl: string;
  credentialUrl: string;
  description: string;
  featured: boolean;
  skills: string[];
}

export interface TransformedData {
  personalData: PersonalData;
  experiences: Experience[];
  educations: Education[];
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
}

const getLocalizedValue = (value: any, locale: string): string => {
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && value !== null) {
    return value[locale] || value['en'] || '';
  }
  return '';
};

const getLocalizedArray = (value: any, locale: string): string[] => {
  if (Array.isArray(value)) return value;
  if (typeof value === 'object' && value !== null) {
    return value[locale] || value['en'] || [];
  }
  return [];
};

export const usePersonalData = (): TransformedData => {
  const locale = useLocale();
  
  const transformedData: TransformedData = {
    personalData: {
      fullName: getLocalizedValue(personalData.personalData.fullName, locale),
      title: getLocalizedValue(personalData.personalData.title, locale),
      bio: getLocalizedValue(personalData.personalData.bio, locale),
      email: personalData.personalData.email,
      phone: personalData.personalData.phone,
      location: getLocalizedValue(personalData.personalData.location, locale),
      profileImageUrl: personalData.personalData.profileImageUrl,
      resumeUrl: personalData.personalData.resumeUrl,
      cvUrl: personalData.personalData.cvUrl,
      linkedinUrl: personalData.personalData.linkedinUrl,
      githubUrl: personalData.personalData.githubUrl,
      twitterUrl: personalData.personalData.twitterUrl,
      websiteUrl: personalData.personalData.websiteUrl,
      facebookUrl: personalData.personalData.facebookUrl,
      references: personalData.personalData.references.map((ref: any) => ({
        name: getLocalizedValue(ref.name, locale),
        role: getLocalizedValue(ref.role, locale),
        phone: ref.phone
      })),
      currentLearning: personalData.personalData.currentLearning
    },
    experiences: personalData.experiences.map((exp: any) => ({
      company: getLocalizedValue(exp.company, locale),
      position: getLocalizedValue(exp.position, locale),
      location: getLocalizedValue(exp.location, locale),
      startDate: getLocalizedValue(exp.startDate, locale),
      endDate: exp.endDate ? getLocalizedValue(exp.endDate, locale) : null,
      description: getLocalizedValue(exp.description, locale),
      achievements: getLocalizedArray(exp.achievements, locale),
      logoUrl: exp.logoUrl
    })),
    educations: personalData.educations.map((edu: any) => ({
      institution: getLocalizedValue(edu.institution, locale),
      degree: getLocalizedValue(edu.degree, locale),
      field: getLocalizedValue(edu.field, locale),
      location: getLocalizedValue(edu.location, locale),
      startDate: getLocalizedValue(edu.startDate, locale),
      endDate: edu.endDate ? getLocalizedValue(edu.endDate, locale) : null,
      grade: edu.grade,
      description: getLocalizedValue(edu.description, locale),
      achievements: getLocalizedArray(edu.achievements, locale),
      logoUrl: edu.logoUrl
    })),
    skills: personalData.skills,
    projects: personalData.projects.map((project: any) => ({
      title: getLocalizedValue(project.title, locale),
      description: getLocalizedValue(project.description, locale),
      liveUrl: project.liveUrl,
      githubUrl: project.githubUrl,
      featured: project.featured,
      features: getLocalizedArray(project.features, locale),
      skills: project.skills,
      imageUrl: project.imageUrl
    })),
    certificates: personalData.certificates.map((cert: any) => ({
      title: getLocalizedValue(cert.title, locale),
      instituteName: getLocalizedValue(cert.instituteName, locale),
      issueDate: cert.issueDate,
      imageUrl: cert.imageUrl,
      credentialUrl: cert.credentialUrl,
      description: getLocalizedValue(cert.description, locale),
      featured: cert.featured,
      skills: cert.skills
    }))
  };

  return transformedData;
};
