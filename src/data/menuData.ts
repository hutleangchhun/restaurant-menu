import type { MenuCategory } from '@/types/menu';

export const menuData: MenuCategory[] = [
  {
    id: 'soup',
    name: {
      en: 'Soup',
      km: 'ប្រភេទស៊ុប'
    },
    description: {
      en: 'Delicious homemade soup, fresh and flavorful!',
      km: 'ស៊ុបរសជាតិឆ្ងាញ់ និងស្រស់ស្រាយ។'
    },
    items: [
      {
        id: 'rice-noodle-soup',
        name: {
          en: 'Rice Noodle Soup with Pork',
          km: 'គុយទាវសាច់ជ្រូក'
        },
        description: {
          en: 'Rice noodle soup with pork, Innards, and sauce',
          km: 'ស៊ុបគុយទាវជាមួយសាច់ជ្រូក គ្រឿងក្នុង និងទឹកជ្រលក់'
        },
        price: 5000,
        category: 'soup',
        options: [
          {
            title: {
              en: 'Add-ons',
              km: 'បន្ថែម'
            },
            choices: [
              {
                name: { en: 'Pork Innards', km: 'គ្រឿងក្នុង' },
                priceAdd: 2000
              },
              {
                name: { en: 'Noodles', km: 'គុយទាវ' },
                priceAdd: 1000
              },
              {
                name: { en: 'Beef Meatballs', km: 'ប្រហិតសាច់គោ' },
                priceAdd: 2000
              },
              {
                name: { en: 'Seafood', km: 'គ្រឿងសមុទ្រ' },
                priceAdd: 2000
              },
              {
                name: { en: 'Fish Meatball', km: 'ប្រហិតត្រី' },
                priceAdd: 2000
              }
            ]
          }
        ],
        labels: [{
          km: 'ស៊ុប',
          en: 'Soup'
        }]
      },
      {
        id: 'rice-noodle-soup-beef',
        name: {
          en: 'Rice Noodle Soup with Beef',
          km: 'គុយទាវសាច់គោ'
        },
        description: {
          en: 'Rich beef noodle soup with tender beef and sauce',
          km: 'ស៊ុបគុយទាវជាមួយសាច់គោ និងទឹកជ្រលក់'
        },
        price: 5500,
        category: 'soup',
        options: [
          {
            title: {
              en: 'Add-ons',
              km: 'បន្ថែម'
            },
            choices: [
              {
                name: { en: 'Pork Innards', km: 'គ្រឿងក្នុង' },
                priceAdd: 2000
              },
              {
                name: { en: 'Extra Noodles', km: 'គុយទាវបន្ថែម' },
                priceAdd: 1000
              },
              {
                name: { en: 'Beef Meatballs', km: 'ប្រហិតសាច់គោ' },
                priceAdd: 2000
              },
              {
                name: { en: 'Seafood', km: 'គ្រឿងសមុទ្រ' },
                priceAdd: 2000
              },
              {
                name: { en: 'Fish Meatball', km: 'ប្រហិតត្រី' },
                priceAdd: 2000
              }
            ]
          }
        ],
        labels: [{
          km: 'ស៊ុប',
          en: 'Soup'
        }]
      },
      {
        id: 'rice-noodle-soup-meatball',
        name: {
          en: 'Rice Noodle Soup with fish Meatball',
          km: 'គុយទាវប្រហិតត្រី'
        },
        description: {
          en: 'Rich beef noodle soup with tender beef and sauce',
          km: 'ស៊ុបគុយទាវជាមួយប្រហិតត្រី និងទឹកជ្រលក់'
        },
        price: 6000,
        category: 'soup',
        options: [
          {
            title: {
              en: 'Add-ons',
              km: 'បន្ថែម'
            },
            choices: [
              {
                name: { en: 'Pork Innards', km: 'គ្រឿងក្នុង' },
                priceAdd: 2000
              },
              {
                name: { en: 'Extra Noodles', km: 'គុយទាវបន្ថែម' },
                priceAdd: 1000
              },
              {
                name: { en: 'Beef Meatballs', km: 'ប្រហិតសាច់គោ' },
                priceAdd: 2000
              },
              {
                name: { en: 'Seafood', km: 'គ្រឿងសមុទ្រ' },
                priceAdd: 2000
              },
              {
                name: { en: 'Fish Meatball', km: 'ប្រហិតត្រី' },
                priceAdd: 2000
              }
            ]
          }
        ],
        labels: [{
          km: 'ស៊ុប',
          en: 'Soup'
        }]
      },
    ]
  },
  {
    id: 'beef-stew',
    name: {
      en: 'Beef Stew',
      km: 'ខគោ'
    },
    description: {
      en: 'Khmer-style braised beef, rich in flavor and perfect fresh bread or noodle!',
      km: 'ខគោខ្មែរ មានរសជាតិឆ្ញាញ់ ល្អបំផុតជាមួយនំប៉័ងក្តៅៗ ឬគុយទាវ និងមី!'
    },
    items: [
      {
        id: 'noodle-stew',
        name: {
          en: 'Beef Stew with Noodles',
          km: 'មីខគោ'
        },
        description: {
          en: 'Beef Stew with beef, vegetables, and noodles in a savory broth',
          km: 'ខគោជាមួយសាច់គោ, បន្លែ, មី'
        },
        price: 76000,
        category: 'mains',
         labels: [{
          km: 'ខគោ',
          en: 'Beef Stew'
        }, {
          km: 'បន្លែ',
          en: 'Vegetables'
        },
        {
          km: 'មី',
          en: 'Noodles'
        }]
      },
      {
        id: 'bread-stew',
        name: {
          en: 'Beef Stew with Bread',
          km: 'នំប៉័ងខគោ'
        },
        description: {
          en: 'Beef Stew with beef, vegetables, and fresh bread',
          km: 'ខគោជាមួយសាច់គោ, បន្លែ, នំប៉័ង'
        },
        price: 108000,
        category: 'mains',
        labels: [{
          km: 'ខគោ',
          en: 'Beef Stew'
        }, {
          km: 'បន្លែ',
          en: 'Vegetables'
        },
        {
          km: 'នំប៉័ង',
          en: 'Bread'
        }]
      },
      {
        id: 'rice-noodle-stew',
        name: {
          en: 'Beef Stew with Rice Noodles',
          km: 'គុយទាវខគោ'
        },
        description: {
          en: 'Beef Stew with beef, vegetables, and rice noodles in a savory broth',
          km: 'ខគោជាមួយសាច់គោ, បន្លែ, គុយទាវ'
        },
        price: 132000,
        category: 'mains',
        labels: [{
          km: 'ខគោ',
          en: 'Beef Stew'
        }, {
          km: 'បន្លែ',
          en: 'Vegetables'
        },
        {
          km: 'គុយទាវ',
          en: 'Rice Noodles'
        }]
      },
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
        price: 36000,
        category: 'desserts',
        labels: [{
          km: 'បាយ',
          en: 'Rice'
        }, {
          km: 'សាច់មាន់',
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
          "en": "Steamed rice served with pork (fried), vegetables, and a sauce",
          "km": "បាយសជាមួយសាច់ជ្រូក (ចៀន) បន្លែ និងទឹកជ្រលក់"
        },
        price: 36000,
        category: "main",
        labels: [{
          km: 'បាយ',
          en: 'Rice'
        }, {
          km: 'សាច់ជ្រូក',
          en: 'Pork'
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
        price: 32000,
        category: 'desserts',
        labels: [{
          km: 'សាច់គោ',
          en: 'Beef'
        }, {
          km: 'បាយ',
          en: 'Rice'
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
        price: 40000,
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
        id: 'iced-coffee',
        name: {
          en: 'Iced Coffee',
          km: 'កាហ្វេទឹកកក'
        },
        description: {
          en: 'Rich Italian espresso made from premium arabica beans',
          km: 'កាហ្វេអ៊ីតាលីល្អធ្វើពីគ្រាប់កាហ្វេអារ៉ាប៊ីកាល្អ'
        },
        price: 16000,
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
        id: 'tee',
        name: {
          en: 'Lemon Tea',
          km: 'តែក្រូចឆ្មារ'
        },
        description: {
          en: 'Blend of mixed berries, banana, and yogurt',
          km: 'ទឹកកក់លាយផ្លែប៊ឺរីច្រើនប្រភេទ ចេក និងយ៉ាឡាត'
        },
        price: 28000,
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