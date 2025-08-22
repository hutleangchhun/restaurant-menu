import type { MenuItem } from '@/types/menu';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-2 sm:space-y-0">
          <div className="flex-1">
            <h3 className={`text-lg sm:text-xl font-semibold text-card-foreground mb-2 language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
              {item.name[language]}
            </h3>
            <p className={`text-muted-foreground text-sm leading-relaxed mb-3 language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
              {item.description[language]}
            </p>
          </div>
          <div className="sm:ml-4 self-start">
            <span className="text-xl sm:text-2xl font-bold text-card-foreground">${item.price}</span>
          </div>
        </div>
        
        {item.labels && item.labels.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1 sm:gap-2">
            {item.labels.map((label, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gray-100 text-gray-800 hover:bg-gray-200 language-transition text-xs"
              >
                <span className={`text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                  {label[language]}
                </span>
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}