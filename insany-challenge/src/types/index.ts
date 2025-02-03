export interface IPost {
  id: string;
  date?: string;
  slug?: string;
  title?: {
    rendered: string;
  }
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

export interface IFeaturedMedia {
  id?: string;
  date?: string;
  type?: string;
  title?: {
    rendered: string;
  }
  description?: {
    rendered: string;
  }
  source_url?: string;
}

export interface IAuthor {
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

export interface IDotProps {
  $active: boolean;
}

export interface IInputProps {
  label?: string;
  type?: string;
  placeholder?: string;
}

export interface IButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export interface IFeaturesProps {
  children: React.ReactNode
  icon?: string
  alt?: string
}

export interface ISectionProps {
  children: React.ReactNode;
  background?: string; 
}

export interface IContextFeaturesType {
  posts: IPost[];
  authors: Map<string, IAuthor>;
  featuresMedia: Map<string, IFeaturedMedia>;
  fetchPosts: () => void;
  fetchAuthorDetails: (authorUrl: string, postId: string) => void;
  fetchFeaturesMedia: (featureUrl: string, featureId: string) => void;
}