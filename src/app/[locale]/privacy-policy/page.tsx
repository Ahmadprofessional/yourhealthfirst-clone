import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  return {
    title: "Privacy Policy",
    description:
      "UK GDPR privacy notice for YourHealthFirst Clinic, 2 Wimpole Street, London W1G 0EB. Learn how patient data and clinical health records are protected.",
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy-policy`,
    },
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  const sanitySettings = await sanityFetch<any>({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
  });

  const breadcrumbs = [
    { name: "Home", item: `/${locale}` },
    { name: "Privacy Policy", item: `/${locale}/privacy-policy` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf8]">
      <Header sanitySettings={sanitySettings} />
      <StructuredData type="breadcrumbs" breadcrumbs={breadcrumbs} />

      {/* Page Hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[70px] lg:py-[90px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-1.5 mb-3">
            <p className="text-[12px] font-semibold tracking-[2.5px] text-tan uppercase">
              Legal & Compliance
            </p>
          </div>
          <h1 className="font-display text-[38px] leading-[44px] font-bold tracking-[-1px] text-cream uppercase lg:text-[56px] lg:leading-[62px]">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-[620px] font-nav text-[15px] leading-[25px] text-white/80">
            Your privacy and clinical confidentiality are paramount. This policy outlines how YourHealthFirst Clinic handles your personal and medical information under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Main Content */}
      <main className="w-full px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 lg:p-16 text-[#2b2b2b]">
          <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.75] text-[#3d3d3d]">
            
            {/* 1. Data Controller */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                1. Who We Are (Data Controller)
              </h2>
              <p>
                YourHealthFirst Clinic (“we”, “us”, “our”) operates the medical and aesthetic clinic located at:
              </p>
              <div className="bg-[#fcfaf5] border-l-4 border-[#c98a3e] p-4 rounded-r-lg text-sm sm:text-base">
                <p className="font-semibold text-forest">YourHealthFirst Clinic</p>
                <p>2nd Floor, 2 Wimpole Street, London W1G 0EB, United Kingdom</p>
                <p>Lead Practitioner & Data Controller: Sofia Bouzian</p>
                <p>Telephone: 0207 225 3582 / 078 1847 4041</p>
                <p>Email: <a href="mailto:info@yourhealthfirst.uk" className="text-rust underline">info@yourhealthfirst.uk</a></p>
              </div>
              <p>
                For the purposes of the UK Data Protection Act 2018 and the UK General Data Protection Regulation (UK GDPR), we are the Data Controller responsible for your personal information.
              </p>
            </section>

            {/* 2. Personal Data We Collect */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                2. Information We Collect About You
              </h2>
              <p>
                In order to provide safe, regulated aesthetic and medical treatments (including anti-wrinkle injections, dermal fillers, phlebotomy, PRP therapy, and body contouring), we collect:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identification & Contact Data:</strong> Full name, date of birth, postal address, email address, telephone numbers, and emergency contact details.</li>
                <li><strong>Medical & Health Data (Special Category Data):</strong> Relevant medical history, current medications, known allergies, previous aesthetic treatments, blood test requisitions, and clinical notes compiled during consultations.</li>
                <li><strong>Clinical Photography:</strong> Standardised clinical photographs taken before and after procedures to document anatomical baseline and clinical progression. Photographs are never published or shared without your explicit, separate written consent.</li>
                <li><strong>Financial & Payment Data:</strong> Transaction history and booking deposit records. All electronic payment transactions are encrypted and processed through certified PCI-DSS compliant payment gateways.</li>
                <li><strong>Digital & Communication Data:</strong> Records of enquiries submitted via our website form, WhatsApp consultations, and cookie/browsing preferences.</li>
              </ul>
            </section>

            {/* 3. Lawful Bases */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                3. Our Lawful Bases for Processing
              </h2>
              <p>
                Under UK GDPR Article 6 and Article 9, we process your data under the following legal grounds:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">Contract Performance</h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    Necessary to schedule consultations, administer agreed treatments, and fulfill our contractual obligations to you.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">Legal & Clinical Obligation</h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    Fulfilling mandatory medical record-keeping, insurance compliance, and public health obligations under UK medical legislation.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">Health & Social Care (Art. 9(2)(h))</h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    Special category health data processing for the provision of healthcare, clinical diagnosis, and aesthetic treatment under professional confidentiality.
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-gray-100 bg-[#f9f9f8]">
                  <h3 className="font-bold text-forest text-sm uppercase tracking-wide">Explicit Consent</h3>
                  <p className="text-xs sm:text-sm mt-1 text-gray-600">
                    Where you opt-in to marketing newsletters, promotional educational updates, or grant permission for anonymised clinical gallery usage.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Data Sharing & Third Parties */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                4. Data Sharing & Confidentiality
              </h2>
              <p>
                We do not sell, rent, or trade your personal information to third parties. Your data is strictly disclosed only to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Accredited UK diagnostic pathology laboratories for blood sample processing and analysis.</li>
                <li>Secure clinical practice management and electronic health records providers bound by strict confidentiality and UK GDPR data processor agreements.</li>
                <li>Statutory regulatory authorities or legal advisors where strictly required by law or judicial request.</li>
              </ul>
            </section>

            {/* 5. Data Retention */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                5. How Long We Keep Your Records
              </h2>
              <p>
                In accordance with UK clinical governance and medical indemnity guidelines, patient clinical consultation records and consent forms are retained for a minimum period of <strong>7 to 8 years</strong> from the date of your last appointment. Following expiration of the statutory retention period, digital records are permanently expunged and physical documents securely shredded.
              </p>
            </section>

            {/* 6. Your Rights */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                6. Your Rights Under UK GDPR
              </h2>
              <p>
                As a patient and data subject, you hold statutory rights under UK data protection law:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right of Access (SAR):</strong> Request a copy of the personal and medical records we hold concerning you.</li>
                <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete clinical data.</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your personal data where statutory clinical retention obligations do not apply.</li>
                <li><strong>Right to Restriction of Processing:</strong> Request suspension of data processing under specific conditions.</li>
                <li><strong>Right to Data Portability:</strong> Obtain your digital records in an accessible, machine-readable format.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw marketing or photography consent at any time without impacting your clinical care.</li>
              </ul>
            </section>

            {/* 7. Supervisory Authority */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                7. Supervisory Authority & Complaints
              </h2>
              <p>
                If you have queries or concerns regarding how your data is handled, please contact Sofia Bouzian at <a href="mailto:info@yourhealthfirst.uk" className="text-rust underline">info@yourhealthfirst.uk</a>.
              </p>
              <p>
                You also have the right to lodge a complaint with the UK supervisory authority:
              </p>
              <div className="bg-[#f9f9f8] p-4 rounded-lg text-sm text-gray-700">
                <p className="font-semibold text-forest">Information Commissioner&apos;s Office (ICO)</p>
                <p>Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                <p>Helpline: 0303 123 1113 | Website: <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-rust underline">ico.org.uk</a></p>
              </div>
            </section>

            {/* Policy updates */}
            <div className="pt-6 border-t border-gray-200 text-xs text-gray-500">
              <p>Last updated: October 2026. This policy is reviewed annually to ensure ongoing compliance with UK medical regulatory standards.</p>
            </div>

          </div>
        </div>
      </main>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}
