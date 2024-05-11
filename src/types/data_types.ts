export interface Project {
  id: number;
  title: string;
  description: string;
  src: string;
  alt: string;
  preview_url?: string;
  source_url?: string;
}

export interface Technology {
  id: number;
  title: string;
  src: string;
  alt: string;
}
