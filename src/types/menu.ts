export interface MenuItem {
  id: string;
  name: {
    en: string;
    km: string;
  };
  description: {
    en: string;
    km: string;
  };
  price: number;
  category: string;
  image?: string;
  labels?: {
    km: string;
    en: string;
  }[];
}

export interface MenuCategory {
  id: string;
  name: {
    en: string;
    km: string;
  };
  description?: {
    en: string;
    km: string;
  };
  items: MenuItem[];
}