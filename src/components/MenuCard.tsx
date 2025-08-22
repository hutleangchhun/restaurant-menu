import type { MenuItem } from '@/types/menu';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="group overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 space-y-3 sm:space-y-0">
          <div className="flex-1">
            <h3 className={`text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-200 ${language === 'km' ? 'font-khmer leading-relaxed' : 'leading-tight'}`}>
              {item.name[language]}
            </h3>
            <p className={`text-gray-600 text-sm leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-200 ${language === 'km' ? 'font-khmer text-base' : ''}`}>
              {item.description[language]}
            </p>
          </div>
          <div className="sm:ml-4 self-start">
            <div className="text-right">
              <span className="text-xl sm:text-2xl font-bold text-card-foreground">
                {language === 'km' ? `៛${item.price.toLocaleString()}` : `$${(item.price / 4000).toFixed(2)}`}
              </span>
              <div className="text-xs text-muted-foreground mt-1">
                {language === 'km' ? `$${(item.price / 4000).toFixed(2)}` : `៛${item.price.toLocaleString()}`}
              </div>
            </div>
          </div>
        </div>
        
        {/* Options */}
        {item.options && item.options.length > 0 && (
          <div className="mb-4 space-y-3 border-t pt-4">
            <h4 className={`text-sm font-semibold text-gray-700 ${language === 'km' ? 'font-khmer' : ''}`}>
              {language === 'en' ? 'Customization Options:' : 'ជម្រើសកែប្រែ៖'}
            </h4>
            {item.options.map((option, optionIndex) => (
              <div key={optionIndex} className="space-y-2">
                <h5 className={`text-sm font-medium text-gray-600 ${language === 'km' ? 'font-khmer' : ''}`}>
                  {option.title[language]}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {option.choices.map((choice, choiceIndex) => (
                    <div
                      key={choiceIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-50 border border-gray-200 rounded-md text-xs"
                    >
                      <span className={`text-gray-700 ${language === 'km' ? 'font-khmer' : ''}`}>
                        {choice.name[language]}
                      </span>
                      {choice.priceAdd !== 0 && (
                        <span className={`font-medium ${choice.priceAdd > 0 ? 'text-blue-600' : 'text-green-600'}`}>
                          {choice.priceAdd > 0 ? '+ ' : ''}
                          {language === 'km' 
                            ? `៛${choice.priceAdd.toLocaleString()}` 
                            : `$${(choice.priceAdd / 4000).toFixed(2)}`
                          }
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </CardContent>
    </Card>
  );
}