export interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  description: string;
  problem?: string;
  solution?: string;
  techStack: string[];
  img: string;
  url?: string;
  demo?: string;
  video?: string;
  features?: string[];
  highlights?: string[];
  stakeholders?: string[];
}

export type PageContent =
  | {
      id: number;
      type: 'text';
      content: string;
      link?: string;
      linkTitle?: string;
    }
  | {
      id: number;
      type: 'image';
      content: string; 
      alt: string;
      caption?: string;
    }
  | {
      id: number;
      type: 'video';
      content: string;
      caption?: string;
    };

export interface Page {
  url: string;
  title: string;
  heading: string;
  subheading: string;
  content: PageContent[];
}

export interface Service {
  num: string;
  icon: string;
  title: string;
  blurb: string;
  items: string[];
  color: string;
}