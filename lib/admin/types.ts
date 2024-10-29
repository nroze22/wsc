export interface PageSection {
  id: string;
  label: string;
  description: string;
  component: string;
}

export interface PageConfig {
  id: string;
  label: string;
  description: string;
  sections: PageSection[];
}

export interface ProposedChange {
  id: string;
  description: string;
  pageId: string;
  sectionId: string;
  files: {
    path: string;
    content: string;
    diff?: string;
  }[];
  images?: {
    path: string;
    url: string;
  }[];
  timestamp: number;
}

export interface AIResponse {
  changes: ProposedChange;
  followUpQuestions?: string[];
  warnings?: string[];
  suggestions?: string[];
}