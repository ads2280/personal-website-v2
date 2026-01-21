export type NavBarLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type SocialLink = {
  title: string;
  url: string;
  icon: string;
  external?: boolean;
};

export type Identity = {
  name: string;
  logo: string;
  email: string;
};

export type SEOInfo = {
  title: string;
  description: string;
  image: string;
};

export type ReadingItem = {
  title: string;
  author: string;
  url?: string;
};

export type HomePageContent = {
  seo: SEOInfo;
  role: string;
  description: string;
  socialLinks: SocialLink[];
  links: {
    title: string;
    url: string;
    external?: boolean;
  }[];
  currentlyReading?: ReadingItem[];
};

export type ResumeItem = {
  title: string;
  company: {
    name: string;
    image: string;
    url: string;
  };
  date: string;
  description?: string;
};

export type AboutPageContent = {
  seo: SEOInfo;
  subtitle: string;
  about: {
    description: string;
    image_l: {
      url: string;
      alt: string;
      link?: string;
    };
    image_r: {
      url: string;
      alt: string;
      link?: string;
    };
  };
  connect: {
    description: string;
    links: SocialLink[];
  };
};

export type Project = {
  title: string;
  description: string;
  image: string;
  year: string;
  url: string;
  demoUrl?: string;
};

export type ProjectPageContent = {
  seo: SEOInfo;
  subtitle: string;
  projects: Project[];
};

export type WorkPageContent = {
  seo: SEOInfo;
  subtitle: string;
  description: string;
  items: ResumeItem[];
};

export type BlogPageContent = {
  seo: SEOInfo;
  subtitle: string;
};
