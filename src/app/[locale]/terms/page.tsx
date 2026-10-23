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
    title: "Terms & Conditions",
    description:
      "Clinical terms and conditions, booking, cancellation policy and treatment standards for YourHealthFirst Clinic at 2 Wimpole Street, London W1G 0EB.",
    alternates: {
      canonical: `${baseUrl}/${locale}/terms`,
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  const sanitySettings = await sanityFetch<any>({
    query: SITE_SETTINGS_QUERY,
    tags: ["siteSettings"],
  });

  const breadcrumbs = [
    { name: "Home", item: `/${locale}` },
    { name: "Terms & Conditions", item: `/${locale}/terms` },
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
              Clinical Guidelines & Agreement
            </p>
          </div>
          <h1 className="font-display text-[38px] leading-[44px] font-bold tracking-[-1px] text-cream uppercase lg:text-[56px] lg:leading-[62px]">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 max-w-[620px] font-nav text-[15px] leading-[25px] text-white/80">
            These terms govern your appointments, medical consultations, and aesthetic treatments at YourHealthFirst Clinic, 2 Wimpole Street, London W1G 0EB.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Main Content */}
      <main className="w-full px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 lg:p-16 text-[#2b2b2b]">
          <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.75] text-[#3d3d3d]">
            
            {/* 1. Introduction */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                1. Clinical Service Overview
              </h2>
              <p>
                YourHealthFirst Clinic operates under the clinical leadership of Dr. Sofia Bouzian at 2nd Floor, 2 Wimpole Street, London W1G 0EB. By booking a consultation or undergoing treatment, you agree to be bound by these Terms and Conditions.
              </p>
              <p>
                All aesthetic procedures, diagnostic phlebotomy services, and wellness protocols are provided in accordance with UK clinical guidelines, medical safety standards, and manufacturer directives.
              </p>
            </section>

            {/* 2. Medical Consultations & Suitability */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                2. Consultations &amp; Clinical Suitability
              </h2>
              <p>
                Prior to receiving any injectable, laser, light, or aesthetic treatment, all patients undergo a comprehensive medical consultation. The decision to perform any treatment remains entirely at the professional clinical discretion of the practitioner.
              </p>
              <p>
                If upon assessment Dr. Sofia Bouzian determines that a procedure is clinically unsuitable, contraindicated, or unlikely to achieve a safe, natural outcome, the clinic reserves the right to decline treatment. In such circumstances, our priority is always your safety and wellbeing.
              </p>
            </section>

            {/* 3. Age Restrictions (UK Law) */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                3. Age Restriction Policy (Strictly 18+)
              </h2>
              <p>
                In strict compliance with the <strong>Botulinum Toxin and Cosmetic Fillers (Children) Act 2021</strong>, it is a criminal offence in the UK to administer botulinum toxin or cosmetic dermal fillers to any person under the age of 18.
              </p>
              <p>
                We do not administer aesthetic cosmetic treatments to anyone under 18 years of age. Photographic proof of age (valid passport or driving licence) may be requested prior to consultation.
              </p>
            </section>

            {/* 4. Booking & Cancellation Policy */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                4. Bookings, Deposits &amp; Cancellation Policy
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Consultation &amp; Treatment Deposits:</strong> A deposit is required to secure your appointment slot in our Harley Street clinic diary.</li>
                <li><strong>48-Hour Notice Period:</strong> We require a minimum of <strong>48 hours&apos; notice</strong> to reschedule or cancel an appointment without penalty.</li>
                <li><strong>Late Cancellations &amp; Missed Appointments:</strong> Cancellations made with less than 48 hours&apos; notice, or failure to attend your scheduled session, will result in forfeiture of the booking deposit to cover clinic overheads and reserved clinical time.</li>
                <li><strong>Punctuality:</strong> Please arrive promptly for your appointment. Arriving more than 15 minutes late may require rescheduling or shortening the consultation to prevent delaying subsequent scheduled patients.</li>
              </ul>
            </section>

            {/* 5. Patient Responsibilities */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                5. Accurate Medical Disclosure &amp; Aftercare
              </h2>
              <p>
                Patients must provide complete, truthful, and accurate information regarding their medical history, known allergies, current prescriptions, over-the-counter supplements, and recent aesthetic interventions. Withholding medical information may compromise treatment safety and invalidates clinical liability.
              </p>
              <p>
                You agree to strictly adhere to the verbal and written post-treatment aftercare protocols provided by the practitioner. Failure to follow aftercare guidance significantly increases the risk of complications or sub-optimal aesthetic outcomes.
              </p>
            </section>

            {/* 6. Treatment Outcomes & Longevity */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                6. Expected Outcomes &amp; Individual Variation
              </h2>
              <p>
                Aesthetic medicine is not an exact science. Due to physiological diversity, individual metabolic variations, skin quality, age, and lifestyle factors, results and longevity vary significantly between patients.
              </p>
              <p>
                While we strive for excellence and natural enhancement, no medical or aesthetic procedure carries an absolute guarantee of specific results. Fees charged represent the professional skill, clinical time, and pharmaceutical product administered.
              </p>
            </section>

            {/* 7. Governing Law */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                7. Governing Law &amp; Jurisdiction
              </h2>
              <p>
                These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>England and Wales</strong>. Both parties submit to the exclusive jurisdiction of the Courts of England and Wales.
              </p>
            </section>

            {/* Contact */}
            <div className="pt-6 border-t border-gray-200 text-sm text-gray-600">
              <p className="font-semibold text-forest">YourHealthFirst Clinic</p>
              <p>2nd Floor, 2 Wimpole Street, London W1G 0EB</p>
              <p>Contact: 0207 225 3582 | <a href="mailto:info@yourhealthfirst.uk" className="text-rust underline">info@yourhealthfirst.uk</a></p>
            </div>

          </div>
        </div>
      </main>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}
