import { PriceCategory } from "@/components/PriceListClient";
import enPriceList from "./priceList_raw.json";
import ruPriceList from "./translations/priceList/ru.json";
import esPriceList from "./translations/priceList/es.json";
import frPriceList from "./translations/priceList/fr.json";
import arPriceList from "./translations/priceList/ar.json";

const priceListMap: Record<string, PriceCategory[]> = {
  en: enPriceList as PriceCategory[],
  ru: ruPriceList as PriceCategory[],
  es: esPriceList as PriceCategory[],
  fr: frPriceList as PriceCategory[],
  ar: arPriceList as PriceCategory[],
};

export function getLocalizedPriceList(locale: string): PriceCategory[] {
  return priceListMap[locale] ?? (enPriceList as PriceCategory[]);
}
