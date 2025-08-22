import type { MenuCategory } from '@/types/menu';

export const menuData: MenuCategory[] = [
  {
    id: 'appetizers',
    name: {
      en: 'Appetizers',
      km: 'ម្ហូបកម្រាំកម្រាំ'
    },
    description: {
      en: 'Perfect starters to begin your culinary journey',
      km: 'ម្ហូបបម្រើដំបូងដ៏ល្អឥតខ្ចោះសម្រាប់ចាប់ផ្តើមការធ្វើដំណើរធ្វើម្ហូប'
    },
    items: [
      {
        id: 'bruschetta',
        name: {
          en: 'Bruschetta Classica',
          km: 'ប្រុសកេតាបែបបុរាណ'
        },
        description: {
          en: 'Toasted bread topped with fresh tomatoes, basil, garlic, and olive oil',
          km: 'នំបុ័ងអាំងកញ្ចប់ផ្លែប៉េងប៉ោះស្រស់ ស្លឹកបាសិល ខ្ទឹមស និងប្រេងអូលីវ'
        },
        price: 12.99,
        category: 'appetizers',
        labels: [{
          km: 'បន្លែ',
          en: 'Vegetarian'
        }]
      },
      {
        id: 'calamari',
        name: {
          en: 'Crispy Calamari',
          km: 'មឹកខ្ទុយកំប្រុក'
        },
        description: {
          en: 'Golden fried squid rings served with marinara sauce and lemon',
          km: 'មឹកខ្ទុយចៀនពណ៌មាសជាមួយទឹកជ្រលក់ម៉ារីណារ៉ា និងក្រូចឆ្មារ'
        },
        price: 15.99,
        category: 'appetizers'
      },
      {
        id: 'wings',
        name: {
          en: 'Buffalo Wings',
          km: 'ស្លាបមាន់ក្រហម'
        },
        description: {
          en: 'Spicy chicken wings tossed in buffalo sauce with blue cheese dip',
          km: 'ស្លាបមាន់ហឹរជាមួយទឹកជ្រលក់ក្រហម និងទឹកជ្រលក់ឈីសខៀវ'
        },
        price: 13.99,
        category: 'appetizers',
        labels: [{
          km: 'ហឹរ',
          en: 'Spicy'
        }]
      }
    ]
  },
  {
    id: 'mains',
    name: {
      en: 'Main Courses',
      km: 'ម្ហូបសំខាន់'
    },
    description: {
      en: 'Hearty dishes to satisfy your appetite',
      km: 'ម្ហូបឆ្ងាញ់ៗសម្រាប់បំពេញចិត្តរបស់អ្នក'
    },
    items: [
      {
        id: 'margherita',
        name: {
          en: 'Pizza Margherita',
          km: 'ពីហ្សាម៉ាហ្គេរីតា'
        },
        description: {
          en: 'Classic pizza with tomato sauce, fresh mozzarella, and basil',
          km: 'ពីហ្សាបែបបុរាណជាមួយទឹកជ្រលក់ប៉េងប៉ោះ ឈីសម៉ុសារ៉ែលឡាស្រស់ និងស្លឹកបាសិល'
        },
        price: 18.99,
        category: 'mains',
        labels: [{
          km: 'បន្លែ',
          en: 'Vegetarian'
        }]
      },
      {
        id: 'salmon',
        name: {
          en: 'Grilled Salmon',
          km: 'ត្រីសាលម៉ុនអាំង'
        },
        description: {
          en: 'Atlantic salmon with lemon herb butter, served with seasonal vegetables',
          km: 'ត្រីសាលម៉ុនអាត្លង់ទិកជាមួយប៊ើក្រូចឆ្មារ បម្រើជាមួយបន្លែតាមរដូវ'
        },
        price: 26.99,
        category: 'mains',
        labels: [{
          km: 'គ្មានជាតិគ្លូតែន',
          en: 'Gluten-Free'
        }]
      },
      {
        id: 'ribeye',
        name: {
          en: 'Ribeye Steak',
          km: 'សាច់គោរីបអាយ'
        },
        description: {
          en: '12oz prime ribeye steak with garlic mashed potatoes and asparagus',
          km: 'សាច់គោរីបអាយ ១២អោនជាមួយដំឡូងចំហុយខ្ទឹមស និងស្ពៃខ្ចី'
        },
        price: 32.99,
        category: 'mains',
        labels: [{
          km: 'គ្មានជាតិគ្លូតែន',
          en: 'Gluten-Free'
        }, {
          km: 'ម្ហូបល្អ',
          en: 'Premium'
        }]
      },
      {
        id: 'pasta',
        name: {
          en: 'Fettuccine Alfredo',
          km: 'មីអ៊ីតាលីអាល់ហ្វ្រេដូ'
        },
        description: {
          en: 'Creamy parmesan sauce with fresh fettuccine pasta',
          km: 'ទឹកជ្រលក់ក្រែមជាមួយមីអ៊ីតាលីស្រស់'
        },
        price: 19.99,
        category: 'mains',
        labels: [{
          km: 'បន្លែ',
          en: 'Vegetarian'
        }, {
          km: 'ក្រែម',
          en: 'Creamy'
        }]
      }
    ]
  },
  {
    id: 'rice',
    name: {
      en: 'Rice',
      km: 'បាយ'
    },
    description: {
      en: 'A variety of delicious rice dishes, served with meats, vegetables and eggs. Perfect for any time of day!',
      km: 'ជ្រើសរើសម្ហូបបាយជាច្រើនប្រភេទ មានសាច់ បន្លែ ស៊ុត។ សមរម្យសម្រាប់គ្រប់ពេល!'
    },
    items: [
      {
        id: 'rice-chicken',
        name: {
          en: 'Rice with Chicken',
          km: 'បាយសាច់មាន់'
        },
        description: {
          en: 'Steamed rice served with chicken(Wing, Thight, Breast), vegetables, and a sauce',
          km: 'បាយសជាមួយ (ស្លាប, ភ្លៅ, ទ្រូង) បន្លែ និងទឹកជ្រលក់'
        },
        price: 8.99,
        category: 'desserts',
        labels: [{
          km: 'បាយ',
          en: 'Rice'
        }, {
          km: 'មាន់',
          en: 'Chicken'
        }]
      },
      {
        id: "rice-pork",
        name: {
          en: "Rice with Pork",
          km: "បាយសាច់ជ្រូក"
        },
        description: {
          "en": "Steamed rice served with pork (grilled), vegetables, and a sauce",
          "km": "បាយសជាមួយសាច់ជ្រូក (អាំង) បន្លែ និងទឹកជ្រលក់"
        },
        price: 8.99,
        category: "main",
        labels: [{
          km: 'បាយ',
          en: 'Rice'
        }, {
          km: 'មាន់',
          en: 'Chicken'
        }]
      },
      {
        id: 'rice-beef',
        name: {
          en: 'Rice with Beef',
          km: 'បាយសាច់គោ'
        },
        description: {
          en: 'Steamed rice served with beef (fried), vegetables, and a sauce',
          km: 'បាយសជាមួយសាច់គោ (ចៀន) បន្លែ និងទឹកជ្រលក់'
        },
        price: 7.99,
        category: 'desserts',
        labels: [{
          km: 'គ្មានជាតិគ្លូតែន',
          en: 'Gluten-Free'
        }, {
          km: 'តម្លៃសមរម្យ',
          en: 'Budget-Friendly'
        }]
      }
    ]
  },
  {
    id: 'beverages',
    name: {
      en: 'Beverages',
      km: 'ភេសជ្ជៈ'
    },
    description: {
      en: 'Refreshing drinks to complement your meal',
      km: 'ភេសជ្ជៈធ្វើឱ្យស្រស់ស្រាយសម្រាប់បន្ថែមនឹងអាហាររបស់អ្នក'
    },
    items: [
      {
        id: 'milk-coffee',
        name: {
          en: 'Iced Coffee with Milk',
          km: 'កាហ្វេទឹកដោះគោទឹកកក'
        },
        description: {
          en: 'Full-bodied Cabernet Sauvignon from Napa Valley',
          km: 'ស្រាវ៉ាំងខាប៊ែណែត សូវីញ្យុងពីជ្រលងណាប៉ា'
        },
        price: 9.99,
        category: 'beverages',
        labels: [{
          km: 'មិនមានសាច់',
          en: 'Vegan'
        }, {
          km: 'គ្មានជាតិគ្លូតែន',
          en: 'Gluten-Free'
        }, {
          km: 'ស្រស់ស្រាយ',
          en: 'Refreshing'
        }]
      },
      {
        id: 'coffee',
        name: {
          en: 'Espresso',
          km: 'កាហ្វេអេស្ព្រេសូ'
        },
        description: {
          en: 'Rich Italian espresso made from premium arabica beans',
          km: 'កាហ្វេអ៊ីតាលីល្អធ្វើពីគ្រាប់កាហ្វេអារ៉ាប៊ីកាល្អ'
        },
        price: 3.99,
        category: 'beverages',
        labels: [{
          km: 'មិនមានសាច់',
          en: 'Vegan'
        }, {
          km: 'គ្មានជាតិគ្លូតែន',
          en: 'Gluten-Free'
        }]
      },
      {
        id: 'smoothie',
        name: {
          en: 'Berry Smoothie',
          km: 'ទឹកកក់ផ្លែប៊ឺរី'
        },
        description: {
          en: 'Blend of mixed berries, banana, and yogurt',
          km: 'ទឹកកក់លាយផ្លែប៊ឺរីច្រើនប្រភេទ ចេក និងយ៉ាឡាត'
        },
        price: 6.99,
        category: 'beverages',
        labels: [{
          km: 'បន្លែ',
          en: 'Vegetarian'
        }, {
          km: 'គ្មានជាតិគ្លូតែន',
          en: 'Gluten-Free'
        }, {
          km: 'ល្អសុខភាព',
          en: 'Healthy'
        }]
      }
    ]
  }
];