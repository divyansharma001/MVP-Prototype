export interface GlobalSettings {
  bakeryName: string;
  logoUrl: string;
  primaryColor: 'orange' | 'blue' | 'green' | 'rose';
  font: 'lato' | 'playfair' | 'dancing';
}

export interface HeaderData {
    id: string;
    type: 'Header';
    phone: string;
    email: string;
    navLinks: { title: string; href: string; }[];
}

export interface HeroData {
    id: string;
    type: 'Hero';
    preHeading: string;
    mainHeading: string;
    featuredProduct: { name: string; description: string; image: string; };
    primaryCtaText: string;
    secondaryCtaText: string;
    backgroundImage: string;
}

export interface CategoryShowcaseData {
    id: string;
    type: 'CategoryShowcase';
    preHeading: string;
    heading: string;
    categories: { title: string; image: string; description: string; tag: string; }[];
}

export interface BestSellersData {
    id: string;
    type: 'BestSellers';
    preHeading: string;
    heading: string;
    products: { id: string; name: string; price: number; rating: number; image: string; sale?: boolean; }[];
}

export interface FullWidthCtaData {
    id: string;
    type: 'FullWidthCta';
    preHeading: string;
    heading: string;
    image: string;
}

export interface TestimonialsData {
    id: string;
    type: 'Testimonials';
    preHeading: string;
    heading: string;
    testimonials: { name: string; company: string; quote: string; image: string; }[];
}

export interface LatestPostsData {
    id: string;
    type: 'LatestPosts';
    preHeading: string;
    heading: string;
    posts: { date: string; title: string; image: string; }[];
}

export interface EmailCtaData {
    id: string;
    type: 'EmailCta';
    preHeading: string;
    heading: string;
    backgroundImage: string;
}

export type PageComponent = HeroData | CategoryShowcaseData | BestSellersData | FullWidthCtaData | TestimonialsData | LatestPostsData | EmailCtaData;


export interface FooterData {
    id: string;
    type: 'Footer';
    copyrightText: string;
}

export interface SiteData {
  global: GlobalSettings;
  header: HeaderData;
  page: PageComponent[];
  footer: FooterData;
}