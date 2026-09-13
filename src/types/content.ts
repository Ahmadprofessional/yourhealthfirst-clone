export interface TextSegment {
  text: string;
  bold?: boolean;
}

export interface ServiceCard {
  slug: string;
  title: string;
  /** Rich description — the live site bolds a lead-in phrase on most cards. */
  description: TextSegment[];
  image: string;
  href: string;
  /** Icon key for the service card SVG icon */
  icon?: string;
  /** Hex color for the icon circle background */
  iconBg?: string;
}

export interface TrustBadge {
  title: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface WhyChooseFeature {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavDropdownItem {
  label: string;
  href: string;
}

export interface NavDropdownGroup {
  category: string;
  items: NavDropdownItem[];
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownGroup[];
}
