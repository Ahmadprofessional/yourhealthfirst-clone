import React from "react";

interface StructuredDataProps {
  type?: "clinic" | "breadcrumbs";
  breadcrumbs?: { name: string; item: string }[];
}

export default function StructuredData({ type = "clinic", breadcrumbs }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "MedicalClinic", "LocalBusiness"],
    "@id": `${baseUrl}/#clinic`,
    name: "YourHealthFirst Clinic",
    alternateName: "Your Health First Clinic Harley Street",
    legalName: "YourHealthFirst Clinic London",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.png`,
    image: [
      `${baseUrl}/images/hero-bg.jpeg`,
      `${baseUrl}/images/about-us-page-image-v2.jpg`,
      `${baseUrl}/images/why-choose-us.jpg`,
    ],
    description:
      "Premier Harley Street, London clinic specialising in aesthetic medicine, anti-wrinkle injections, dermal fillers, hair loss restoration, phlebotomy blood tests, body contouring and longevity protocols.",
    telephone: "+442072253582",
    email: "info@yourhealthfirst.uk",
    priceRange: "£££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2nd Floor, 2 Wimpole Street",
      addressLocality: "London",
      addressRegion: "Greater London",
      postalCode: "W1G 0EB",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5168,
      longitude: -0.1472,
    },
    hasMap: "https://maps.google.com/?q=2+Wimpole+Street+London+W1G+0EB",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:30",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:00",
      },
    ],
    founder: {
      "@type": "Person",
      name: "Sofia Bouzian",
      jobTitle: "Founder & Medical Aesthetic Practitioner",
      worksFor: {
        "@type": "MedicalClinic",
        name: "YourHealthFirst Clinic",
      },
    },
    medicalSpecialty: [
      "https://schema.org/Dermatology",
      "https://schema.org/PlasticSurgery",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Anti-Wrinkle Injections",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dermal Fillers",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "PRP Hair Loss & Skin Rejuvenation",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Phlebotomy & Diagnostic Blood Tests",
        procedureType: "https://schema.org/DiagnosticProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Sclerotherapy for Spider Veins",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cryolipolysis Fat Freezing",
        procedureType: "https://schema.org/NoninvasiveProcedure",
      },
    ],
    sameAs: [
      "https://www.facebook.com/Yourhealthfirstsofia",
      "https://twitter.com/YHFHarleyStreet",
      "https://www.instagram.com/yourhealthfirst_clinic_/",
    ],
  };

  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: crumb.name,
            item: crumb.item.startsWith("http") ? crumb.item : `${baseUrl}${crumb.item}`,
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
    </>
  );
}
