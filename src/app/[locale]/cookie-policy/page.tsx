import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import CookieSettingsTrigger from "@/components/CookieSettingsTrigger";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

  return {
    title: "Cookie Policy",
    description:
      "UK PECR & GDPR Cookie Policy for YourHealthFirst Clinic London. Complete inventory of strictly necessary, analytical and marketing cookies used on our website.",
    alternates: {
      canonical: `${baseUrl}/${locale}/cookie-policy`,
    },
  };
}

export default async function CookiePolicyPage({ params }: Props) {
  const { locale } = await params;

  const breadcrumbs = [
    { name: "Home", item: `/${locale}` },
    { name: "Cookie Policy", item: `/${locale}/cookie-policy` },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf8]">
      <Header />
      <StructuredData type="breadcrumbs" breadcrumbs={breadcrumbs} />

      {/* Page Hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[70px] lg:py-[90px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-1.5 mb-3">
            <p className="text-[12px] font-semibold tracking-[2.5px] text-tan uppercase">
              PECR & GDPR Transparency
            </p>
          </div>
          <h1 className="font-display text-[38px] leading-[44px] font-bold tracking-[-1px] text-cream uppercase lg:text-[56px] lg:leading-[62px]">
            Cookie Policy
          </h1>
          <p className="mt-3 max-w-[620px] font-nav text-[15px] leading-[25px] text-white/80">
            This Cookie Policy explains how YourHealthFirst Clinic uses cookies and similar tracking technologies on our website in full adherence with the UK Privacy and Electronic Communications Regulations (PECR) and UK GDPR.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Main Content */}
      <main className="w-full px-5 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12 lg:p-16 text-[#2b2b2b]">
          <div className="space-y-10 text-[15px] sm:text-[16px] leading-[1.75] text-[#3d3d3d]">
            
            {/* Quick Action Box */}
            <div className="bg-[#fcfaf5] border border-[#c98a3e]/30 rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-subheading text-[18px] font-bold text-forest uppercase tracking-wide">
                  Change Your Cookie Choices
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  You can inspect or modify your consent status at any time.
                </p>
              </div>
              <CookieSettingsTrigger />
            </div>

            {/* 1. What Are Cookies */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                1. What Are Cookies?
              </h2>
              <p>
                Cookies are small text files downloaded to your device (computer, tablet, or smartphone) when you access a website. They allow the website to recognise your device, store language preferences, and ensure seamless navigation between pages.
              </p>
              <p>
                Under UK PECR and UK GDPR, non-essential cookies (such as analytics and marketing trackers) may only be deployed if you provide free, informed, and unambiguous consent prior to their placement.
              </p>
            </section>

            {/* 2. Google Consent Mode v2 */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                2. How We Implement Google Consent Mode v2
              </h2>
              <p>
                Our clinic website deploys <strong>Google Consent Mode v2</strong>. By default, all analytical storage, advertising storage, user data, and ad personalisation signals are initialized to a <code>denied</code> status prior to user interaction.
              </p>
              <p>
                Unless you affirmatively click &ldquo;Accept All Cookies&rdquo; or enable specific categories via our preference centre, no non-essential tracking cookies are created or transmitted.
              </p>
            </section>

            {/* 3. Detailed Cookie Inventory Table */}
            <section className="space-y-4">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                3. Cookies Used on This Website
              </h2>
              <p>
                The table below details every cookie category, provider, technical purpose, and lifespan:
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200 text-left text-xs sm:text-sm">
                  <thead className="bg-[#f7f5ef] text-forest font-semibold">
                    <tr>
                      <th scope="col" className="px-4 py-3 sm:px-6">Cookie Name</th>
                      <th scope="col" className="px-4 py-3 sm:px-6">Provider</th>
                      <th scope="col" className="px-4 py-3 sm:px-6">Category</th>
                      <th scope="col" className="px-4 py-3 sm:px-6">Purpose</th>
                      <th scope="col" className="px-4 py-3 sm:px-6">Lifespan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {/* Strictly Necessary */}
                    <tr>
                      <td className="px-4 py-3 sm:px-6 font-mono font-medium text-forest">yhf_cookie_consent_v1</td>
                      <td className="px-4 py-3 sm:px-6">yourhealthfirst.uk</td>
                      <td className="px-4 py-3 sm:px-6">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-green-100 text-green-800">
                          Necessary
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-6">Stores patient cookie consent preferences across sessions.</td>
                      <td className="px-4 py-3 sm:px-6">12 months</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 sm:px-6 font-mono font-medium text-forest">NEXT_LOCALE</td>
                      <td className="px-4 py-3 sm:px-6">yourhealthfirst.uk</td>
                      <td className="px-4 py-3 sm:px-6">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-green-100 text-green-800">
                          Necessary
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-6">Preserves your selected language (English, Arabic, Spanish, French, Russian).</td>
                      <td className="px-4 py-3 sm:px-6">Session / 12 mo</td>
                    </tr>

                    {/* Analytics */}
                    <tr className="bg-[#fafaf8]">
                      <td className="px-4 py-3 sm:px-6 font-mono font-medium text-forest">_ga</td>
                      <td className="px-4 py-3 sm:px-6">Google LLC</td>
                      <td className="px-4 py-3 sm:px-6">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-blue-100 text-blue-800">
                          Analytics
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-6">Calculates visitor, session and campaign data for site analytics reports. Only set with consent.</td>
                      <td className="px-4 py-3 sm:px-6">2 years</td>
                    </tr>
                    <tr className="bg-[#fafaf8]">
                      <td className="px-4 py-3 sm:px-6 font-mono font-medium text-forest">_ga_*</td>
                      <td className="px-4 py-3 sm:px-6">Google LLC</td>
                      <td className="px-4 py-3 sm:px-6">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-blue-100 text-blue-800">
                          Analytics
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-6">Used by Google Analytics to persist session state. Only set with consent.</td>
                      <td className="px-4 py-3 sm:px-6">2 years</td>
                    </tr>

                    {/* Marketing */}
                    <tr>
                      <td className="px-4 py-3 sm:px-6 font-mono font-medium text-forest">_gcl_au</td>
                      <td className="px-4 py-3 sm:px-6">Google AdSense / Ads</td>
                      <td className="px-4 py-3 sm:px-6">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold uppercase bg-purple-100 text-purple-800">
                          Marketing
                        </span>
                      </td>
                      <td className="px-4 py-3 sm:px-6">Used to measure advertising conversion efficiency. Only set with explicit marketing consent.</td>
                      <td className="px-4 py-3 sm:px-6">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4. Browser Control */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                4. Managing Cookies in Your Web Browser
              </h2>
              <p>
                In addition to our on-site cookie controls, most web browsers allow you to manage or block cookies through browser settings. For guidance, please refer to your browser documentation:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-rust underline">Google Chrome</a></li>
                <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-rust underline">Apple Safari</a></li>
                <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-rust underline">Mozilla Firefox</a></li>
                <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-rust underline">Microsoft Edge</a></li>
              </ul>
            </section>

            {/* 5. Contact */}
            <section className="space-y-3">
              <h2 className="font-subheading text-[22px] sm:text-[26px] font-bold text-forest tracking-tight">
                5. Questions & Enquiries
              </h2>
              <p>
                If you have questions regarding this Cookie Policy or our data protection practices, please contact our clinical team at:
              </p>
              <p className="text-sm sm:text-base">
                YourHealthFirst Clinic — 2 Wimpole Street, London W1G 0EB<br />
                Email: <a href="mailto:info@yourhealthfirst.uk" className="text-rust underline">info@yourhealthfirst.uk</a><br />
                Telephone: 0207 225 3582
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
