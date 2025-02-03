export interface Post {
  id: string;
  date?: string;
  slug?: string;
  title?: string;
  content?: {
    rendered: string;
  }
  excerpt?: {
    rendered: string;
  }
  _links: {
    author: [
      {
        href: string;
      }
    ],
    ["wp:featuredmedia"]?: [
      {
        href: string;
      }
    ]
  }
}

export interface FeaturedMedia {
  id: string;
  date: string;
  title?: {
    rendered: string;
  }
  description?: {
    rendered: string;
  }
  source_url?: string;
}

export interface Author {
  id?: string;
  name?: string;
  description?: string;
  slug?: string;
  avatar_urls?: {
    24: string;
    48: string;
    96: string;
  }
}

export interface DotProps {
  active: boolean;
}

export interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
}

export interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export interface FeaturesProps {
  children: React.ReactNode
  icon?: string
  alt?: string
}

export interface SectionProps {
  children: React.ReactNode;
  background?: string; 
}