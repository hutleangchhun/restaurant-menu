import type { MenuCategory } from '@/types/menu';
import { MenuCard } from './MenuCard';
import { useLanguage } from '@/contexts/LanguageContext';

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  const { language } = useLanguage();

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className={`text-3xl font-bold text-gray-900 mb-2 ${language === 'km' ? 'font-khmer' : ''}`}>
          {category.name[language]}
        </h2>
        {category.description && (
          <p className={`text-gray-600 text-lg ${language === 'km' ? 'font-khmer' : ''}`}>
            {category.description[language]}
          </p>
        )}
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}