import { DATA } from "@/data/resume";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": DATA.name,
    "url": "https://shihab-newaz-portfolio.vercel.app/",
    "sameAs": [
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.GitHub.url,
      DATA.contact.social.Facebook.url,
      DATA.contact.social.X.url
    ],
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": DATA.work[0].company
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": DATA.education[0].school
    },
    "description": DATA.description
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default StructuredData;