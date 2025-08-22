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
  options?: {
    title: {
      en: string;
      km: string;
    };
    choices: {
      name: {
        en: string;
        km: string;
      };
      priceAdd: number;
    }[];
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