import { menuData } from '@/data/menuData';
import { MenuCard } from './MenuCard';
import { ChefHat, Clock, MapPin, Languages, Globe, Check, ChevronDown } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

export function RestaurantMenu() {
  const { language, setLanguage } = useLanguage();
  const [activeTab, setActiveTab] = useState(menuData[0]?.id);

  const restaurantInfo = {
    name: 'Bella Vista',
    tagline: {
      en: 'Khmer food — aromatic, delicious, hygienic, and affordable.',
      km: 'អាហារខ្មែរ ឈ្ងុយ ឆ្ងាញ់ អនាម័យ និងតម្លៃសមរម្យ'
    },
    address: {
      en: '123 Main Street, Downtown',
      km: '១២៣ ផ្លូវធំ កណ្តាលក្រុង'
    },
    hours: {
      en: 'Open Daily 11:00 AM - 10:00 PM',
      km: 'បើករាល់ថ្ងៃ ពីម៉ោង ១១ ព្រឹក ដល់ ១០ យប់'
    }
  };


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="text-center">
            {/* Language Dropdown */}
            <div className="flex justify-end mb-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 language-transition hover:bg-accent hover:text-accent-foreground"
                  >
                    <Globe className="w-4 h-4" />
                    <span className={`text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                      {language === 'en' ? 'English' : 'ខ្មែរ'}
                    </span>
                    <Languages className="w-3 h-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  <DropdownMenuItem
                    onClick={() => setLanguage('en')}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span>English</span>
                    {language === 'en' && <Check className="w-4 h-4" />}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setLanguage('km')}
                    className="flex items-center justify-between cursor-pointer font-khmer"
                  >
                    <span>ខ្មែរ</span>
                    {language === 'km' && <Check className="w-4 h-4" />}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <div className="flex justify-center items-center mb-4">
              <ChefHat className="w-8 h-8 sm:w-12 sm:h-12 text-foreground mr-2 sm:mr-3" />
              <h1 className={`text-2xl sm:text-4xl font-bold text-foreground language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                {restaurantInfo.name}
              </h1>
            </div>
            <p className={`text-base sm:text-xl text-muted-foreground mb-4 sm:mb-6 px-4 language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
              {restaurantInfo.tagline[language]}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground px-4">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span className={`language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                  {restaurantInfo.address[language]}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className={`language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                  {restaurantInfo.hours[language]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Mobile Dropdown Menu */}
          <div className="block sm:hidden mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between px-4 py-3 h-auto"
                >
                  <span className={`font-medium ${language === 'km' ? 'font-khmer' : ''}`}>
                    {menuData.find(cat => cat.id === activeTab)?.name[language] || 
                     (language === 'en' ? 'Select Category' : 'ជ្រើសរើសប្រភេទ')}
                  </span>
                  <ChevronDown className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]" align="start">
                {menuData.map((category) => (
                  <DropdownMenuItem
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`cursor-pointer px-4 py-3 ${language === 'km' ? 'font-khmer' : ''}`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{category.name[language]}</span>
                      {activeTab === category.id && <Check className="w-4 h-4" />}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Desktop Horizontal Tabs */}
          <div className="hidden sm:block">
            <TabsList className="grid w-full grid-cols-4 mb-6 sm:mb-8 h-auto">
              {menuData.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id} 
                  className={`text-xs sm:text-sm font-medium language-transition text-fade-in px-2 py-3 ${language === 'km' ? 'font-khmer' : ''}`}
                >
                  {category.name[language]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {menuData.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-4 sm:space-y-6">
              <div className="text-center mb-6 sm:mb-8 px-4">
                <h2 className={`text-2xl sm:text-3xl font-bold text-foreground mb-2 language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                  {category.name[language]}
                </h2>
                {category.description && (
                  <p className={`text-base sm:text-lg text-muted-foreground language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
                    {category.description[language]}
                  </p>
                )}
              </div>
              
              <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {category.items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-8 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="text-center text-muted-foreground">
            <p className={`mb-2 language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
              {language === 'en' 
                ? '© 2024 Bella Vista Restaurant. All rights reserved.'
                : '© ២០២៤ ភោជនីយដ្ឋាន Bella Vista។ រក្សាសិទ្ធិគ្រប់យ៉ាង។'
              }
            </p>
            <p className={`text-sm language-transition text-fade-in ${language === 'km' ? 'font-khmer' : ''}`}>
              {language === 'en'
                ? 'For reservations, call (555) 123-4567 or visit us online'
                : 'សម្រាប់ការកក់កន្លែង សូមទូរស័ព្ទ (555) 123-4567 ឬចូលមើលគេហទំព័ររបស់យើង'
              }
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}