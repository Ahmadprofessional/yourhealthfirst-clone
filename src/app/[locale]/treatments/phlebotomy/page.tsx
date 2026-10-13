import type { Metadata } from "next";
import TreatmentPage, { generateMetadata as baseMetadata } from "../[slug]/page";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return baseMetadata({ params: Promise.resolve({ locale, slug: "phlebotomy" }) });
}

export default async function PhlebotomyPage({ params }: Props) {
  const { locale } = await params;
  return <TreatmentPage params={Promise.resolve({ locale, slug: "phlebotomy" })} />;
}
