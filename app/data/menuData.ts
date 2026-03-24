// app/data/menuData.ts

import { IMAGES } from "@/constants/images";

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: any;
};

export type MenuCategory = {
  category: string;
  description?: string;
  note?: string;
  items: MenuItem[];
};

// 1. Currency Configuration for easy Internationalization later
export const MENU_CONFIG = {
  currencySymbol: "$",
  currencyCode: "USD",
};

export const MENU_DATA: MenuCategory[] = [
  {
    category: "House Favorites",
    description:
      "These are the shop recommendations for a great meal experience.",
    items: [
      {
        id: "fav-works-pizza",
        name: "The Works Pizza",
        description:
          "Pepperoni, fresh mushrooms, onions, green peppers, black olives, Italian sausage and double cheese.",
        price: 13.99,
        image: IMAGES.worksPizza,
      },
      {
        id: "fav-hawaiian-pizza",
        name: "Hawaiian Pizza",
        description: "Pineapple, ham and double cheese.",
        price: 13.99,
        image: IMAGES.hawaiianPizza,
      },
      {
        id: "fav-italian-white-pizza",
        name: "Italian White Pizza",
        description:
          "Our fresh dough, tomatoes, broccoli, feta cheese, garlic and oregano.",
        price: 13.99,
        image: IMAGES.italianWhitePizza,
      },
      {
        id: "fav-buffalo-chicken-pizza",
        name: "Buffalo Chicken Pizza",
        description:
          "Grilled chicken, buffalo hot sauce, onions and green peppers.",
        price: 13.99,
        image: IMAGES.buffaloChickenPizza,
      },
      {
        id: "fav-garden-salad",
        name: "Garden Salad",
        description:
          "Fresh lettuce, tomatoes, green peppers, red onions, cucumbers, and black olives.",
        price: 9.99,
        image: IMAGES.gardenSalad,
      },
    ],
  },
  {
    category: "Pick Up Specials",
    items: [
      {
        id: "pickup-10-cheese",
        name: '10" Cheese Pizza Pick Up Special',
        description: "Pick up only.",
        price: 9.99,
      },
      {
        id: "pickup-12-cheese",
        name: '12" Cheese Pizza Pick Up Special',
        description: "Pick up only.",
        price: 13.99,
      },
      {
        id: "pickup-14-cheese",
        name: '14" Cheese Pizza Pick Up Special',
        description: "Pick up only.",
        price: 15.99,
      },
      {
        id: "pickup-16-cheese",
        name: '16" Cheese Pizza Pick Up Special',
        description: "Pick up only.",
        price: 17.99,
      },
      {
        id: "pickup-18-cheese",
        name: '18" Cheese Pizza Pick Up Special',
        description: "Pick up only.",
        price: 20.99,
      },
    ],
  },
  {
    category: "Royal Pizza",
    items: [
      {
        id: "royal-cheese-pizza",
        name: "Regular Cheese Pizza",
        description: "Classic cheese or create your own pizza.",
        price: 10.99,
      },
      {
        id: "royal-white-pizza",
        name: "White Pizza",
        description:
          "A sauceless pie topped with mozzarella cheese and garlic sauce.",
        price: 10.49,
      },
    ],
  },
  {
    category: "Pizza by the Slice",
    items: [
      {
        id: "slice-cheese",
        name: "Cheese Pizza Slice",
        description: "Classic cheese slice.",
        price: 2.99,
      },
      {
        id: "slice-pepperoni",
        name: "Pepperoni Pizza Slice",
        description: "Cheese slice topped with pepperoni.",
        price: 3.99,
      },
    ],
  },
  {
    category: "Wings & Chicken",
    note: "All wings & chicken tenders are served with celery & bleu cheese or ranch.",
    items: [
      {
        id: "jumbo-wings",
        name: "Jumbo Wings",
        description: "Jumbo wings coated in breading or without breading.",
        price: 8.99,
        image: IMAGES.jumboWings,
      },
      {
        id: "boneless-wings",
        name: "Boneless Wing Dings",
        description: "Boneless jumbo wings coated in breading.",
        price: 8.99,
        image: IMAGES.bonelessWings,
      },
      {
        id: "chicken-tenders",
        name: "Chicken Tenders",
        description: "Crispy chicken tenders.",
        price: 9.99,
        image: IMAGES.chickenTenders,
      },
      {
        id: "whole-wings",
        name: "Whole Chicken Wings",
        description: "Whole chicken wings deep-fried.",
        price: 8.99,
      },
    ],
  },
  {
    category: "The Royal Pizza Specialties",
    items: [
      {
        id: "spec-works",
        name: "The Works Pizza",
        description:
          "Pepperoni, fresh mushrooms, onions, green peppers, black olives, Italian sausage and double cheese.",
        price: 13.99,
        image: IMAGES.worksPizza,
      },
      {
        id: "spec-meat-buster",
        name: "Meat Buster Pizza",
        description:
          "Pepperoni, ground beef, imported ham, bacon, Italian sausage and double cheese.",
        price: 13.99,
      },
      {
        id: "spec-greek",
        name: "Greek Pizza",
        description:
          "Ground beef, onions, green peppers, black olives and feta cheese.",
        price: 13.99,
      },
      {
        id: "spec-vegilicious",
        name: "Vegilicious Pizza",
        description:
          "Mushrooms, onions, green peppers, black olives, tomatoes and double cheese.",
        price: 13.99,
      },
      {
        id: "spec-hawaiian",
        name: "Hawaiian Pizza",
        description: "Pineapple, ham and double cheese.",
        price: 13.99,
        image: IMAGES.hawaiianPizza,
      },
      {
        id: "spec-gyro-pizza",
        name: "Gyro Pizza",
        description: "Gyro meat, onions and green peppers.",
        price: 13.99,
      },
      {
        id: "spec-cheeseburger-pizza",
        name: "Cheeseburger Pizza",
        description:
          "Ground beef, cheddar, onion, green pepper, and pizza cheese.",
        price: 13.99,
      },
      {
        id: "spec-meatball-pizza",
        name: "Meatball Pizza",
        description: "Meatball, onion, pizza cheese.",
        price: 13.99,
      },
      {
        id: "spec-mexican-pizza",
        name: "Mexican Pizza",
        description: "Ground beef, onions and jalapeno peppers.",
        price: 12.99,
      },
    ],
  },
  {
    category: "Gourmet Pizza",
    items: [
      {
        id: "gourmet-italian-white",
        name: "Italian White Pizza",
        description:
          "Fresh dough, tomatoes, broccoli, feta cheese, garlic and oregano.",
        price: 13.99,
        image: IMAGES.italianWhitePizza,
      },
      {
        id: "gourmet-spinach-white",
        name: "Spinach White Pizza",
        description: "Spinach, ricotta cheese and Italian spices.",
        price: 13.99,
      },
      {
        id: "gourmet-philly-pizza",
        name: "Philly Cheesesteak Pizza",
        description: "Steak, mushrooms, green peppers and onions.",
        price: 13.99,
      },
      {
        id: "gourmet-bbq-chicken",
        name: "Grilled BBQ Chicken Pizza",
        description: "BBQ'd chicken breast, onions and green peppers.",
        price: 13.99,
      },
      {
        id: "gourmet-buffalo-chicken",
        name: "Buffalo Chicken Pizza",
        description:
          "Grilled chicken, buffalo hot sauce, onions and green peppers.",
        price: 13.99,
        image: IMAGES.buffaloChickenPizza,
      },
      {
        id: "gourmet-chicken-alfredo",
        name: "Chicken Alfredo Pizza",
        description: "Grilled chicken with alfredo sauce.",
        price: 13.99,
      },
      {
        id: "gourmet-grilled-chicken",
        name: "Grilled Chicken Pizza",
        description: "Grilled chicken, onions, tomatoes and green peppers.",
        price: 13.99,
      },
      {
        id: "gourmet-spinach-garlic",
        name: "Spinach Garlic Pizza",
        description: "Fresh garlic, spinach, tomatoes and garlic sauce.",
        price: 13.99,
      },
      {
        id: "gourmet-philly-white",
        name: "Philly Cheesesteak White Pizza",
        description: "Steak, mushrooms, green peppers, and onions.",
        price: 13.99,
      },
      {
        id: "gourmet-royal-hot",
        name: "Royal Hot Pizza",
        description: "Italian sausage, onion, banana pepper.",
        price: 13.99,
      },
      {
        id: "gourmet-crab-cake",
        name: "Crab Cake Pizza",
        description:
          "Crab meat, onions, green peppers, jalapenos and ranch sauce.",
        price: 15.99,
      },
    ],
  },
  {
    category: "Royal Calzones & Strombolis",
    items: [
      {
        id: "reg-calzone",
        name: "Regular Calzone",
        description: "Made with ricotta cheese and mozzarella.",
        price: 14.99,
      },
      {
        id: "reg-stromboli",
        name: "Regular Stromboli",
        description: "Made with ricotta cheese and mozzarella.",
        price: 14.99,
      },
      {
        id: "veggie-calzone",
        name: "Veggie Calzone",
        description:
          "Mushrooms, tomatoes, green peppers, onions, spinach, and broccoli.",
        price: 17.99,
      },
      {
        id: "meat-calzone",
        name: "Meat Calzone",
        description: "Multiple meats, green peppers, tomatoes, and onions.",
        price: 17.99,
      },
      {
        id: "philly-calzone",
        name: "Philly Calzone",
        description: "Stuffed with mozzarella and sliced steak.",
        price: 17.99,
      },
      { id: "pepperoni-stromboli", name: "Pepperoni Stromboli", price: 15.99 },
    ],
  },
  {
    category: "Royal Best Cheesesteaks",
    items: [
      {
        id: "royal-cheesesteak",
        name: "Royal Cheesesteak",
        description: "100% beef ribeye with American cheese.",
        price: 12.99,
      },
      {
        id: "chicken-cheesesteak",
        name: "Chicken Cheesesteak",
        description: "Chicken cheesesteak with American cheese.",
        price: 12.99,
      },
      {
        id: "supreme-cheesesteak",
        name: "Royal Supreme Cheesesteak",
        description:
          "Meat with mushrooms, onions, peppers, lettuce, tomatoes, and provolone.",
        price: 12.99,
      },
      {
        id: "pizza-steak",
        name: "Pizza Steak",
        description: "Steak with pizza sauce and melted cheese.",
        price: 12.99,
      },
    ],
  },
  {
    category: "Fresh Royal Salads",
    items: [
      {
        id: "salad-garden",
        name: "Garden Salad",
        description:
          "Fresh lettuce, tomatoes, green peppers, red onions, and olives.",
        price: 9.99,
      },
      {
        id: "salad-caesar",
        name: "Caesar Salad",
        description:
          "Crisp romaine, croutons, Caesar dressing, and grated cheese.",
        price: 9.99,
      },
      {
        id: "salad-grilled-chicken",
        name: "Grilled Chicken Salad",
        description: "Grilled chicken over a bed of fresh vegetables.",
        price: 12.99,
      },
      {
        id: "salad-greek",
        name: "Greek Salad",
        description: "Tomatoes, cucumbers, onions, olives, and feta cheese.",
        price: 12.99,
      },
      {
        id: "salad-tuna",
        name: "Tuna Garden Salad",
        description: "House salad topped with a scoop of white tuna.",
        price: 12.99,
      },
      {
        id: "salad-side-garden",
        name: "Side of Garden Salad",
        description: "Smaller portion of our fresh garden salad.",
        price: 7.99,
      },
    ],
  },
  {
    category: "Royal Italian Pasta",
    items: [
      {
        id: "pasta-marinara",
        name: "Pasta with Marinara Sauce",
        description: "Pasta tossed in our homemade marinara sauce.",
        price: 12.99,
      },
      {
        id: "pasta-chicken-parm",
        name: "Pasta with Chicken Parmesan",
        description:
          "Chicken breast with tomato basil sauce and melted mozzarella.",
        price: 12.99,
      },
      {
        id: "pasta-fettuccine-shrimp",
        name: "Shrimp Fettuccine Alfredo",
        description: "Shrimp tossed in creamy Alfredo sauce.",
        price: 15.99,
      },
      {
        id: "pasta-alfredo",
        name: "Fettuccine Alfredo",
        description: "Classic creamy Alfredo pasta.",
        price: 13.99,
      },
    ],
  },
  {
    category: "Royal Sandwiches",
    items: [
      {
        id: "sand-cheeseburger",
        name: "Cheeseburger",
        description: "With American cheese.",
        price: 12.99,
      },
      {
        id: "sand-chicken-filet",
        name: "Chicken Filet Sandwich",
        description: "Breaded white meat chicken with sauce and mozzarella.",
        price: 12.99,
      },
      {
        id: "sand-turkey-club",
        name: "Triple Decker Turkey Club",
        description: "With provolone cheese.",
        price: 14.99,
      },
      {
        id: "sand-crab-cake",
        name: "Crab Cake Sandwich",
        description: "Homemade crab meat recipe with spices.",
        price: 14.99,
      },
    ],
  },
  {
    category: "Greek Specialties",
    items: [
      {
        id: "greek-gyro",
        name: "Regular Gyro",
        description: "With lettuce, tomatoes, onions and tzatziki sauce.",
        price: 11.99,
      },
      {
        id: "greek-souvlaki-platter",
        name: "Chicken Souvlaki Platter",
        description: "Grilled chicken, Greek salad, French fries and a soda.",
        price: 16.99,
      },
      {
        id: "greek-spinach-pie",
        name: "Spinach Pie Dinner",
        description: "Served with Greek salad and garlic bread.",
        price: 16.99,
      },
    ],
  },
  {
    category: "Wraps",
    items: [
      {
        id: "wrap-turkey",
        name: "Turkey Wrap",
        description: "Turkey, lettuce, tomatoes and onions.",
        price: 11.99,
      },
      {
        id: "wrap-cheesesteak",
        name: "Cheesesteak Wrap",
        description: "Thin-sliced meat with cheese and veggies.",
        price: 11.99,
      },
      {
        id: "wrap-buffalo-chicken",
        name: "Spicy Buffalo Wrap",
        description: "Buffalo flavored chicken wrap.",
        price: 11.99,
      },
      {
        id: "wrap-crab-cake",
        name: "Crab Cake Wrap",
        description: "Crab cake wrapped with fresh toppings.",
        price: 12.99,
      },
    ],
  },
  {
    category: "Quesadillas",
    items: [
      {
        id: "ques-cheese",
        name: "Cheese Quesadilla",
        description: "Cheese-filled tortilla, served with sour cream.",
        price: 11.99,
      },
      {
        id: "ques-chicken",
        name: "Grilled Chicken Quesadilla",
        description: "With melted mozzarella cheese.",
        price: 12.99,
      },
      {
        id: "ques-shrimp-steak",
        name: "Shrimp & Steak Quesadilla",
        description: "Combination of shrimp and steak with melted cheese.",
        price: 13.99,
      },
    ],
  },
  {
    category: "Burritos",
    items: [
      {
        id: "burrito-veggie",
        name: "Veggie Burrito",
        description: "Peppers, mushrooms, onions, rice, beans, and cheese.",
        price: 11.99,
      },
      {
        id: "burrito-cajun-chicken",
        name: "Cajun Chicken Burrito",
        description: "Seasoned grilled chicken with classic fillings.",
        price: 11.99,
      },
      {
        id: "burrito-crab-shrimp",
        name: "Crabs & Shrimps Burrito",
        description: "Crab meat and shrimp with rice and beans.",
        price: 13.99,
      },
    ],
  },
  {
    category: "Royal Paninis",
    items: [
      {
        id: "panini-sw-chicken",
        name: "Southwest Chicken Panini",
        description: "Fajita strips, onions, and green peppers.",
        price: 12.99,
      },
      {
        id: "panini-italian",
        name: "Traditional Italian Panini",
        description: "Pepperoni, salami, ham, and marinara.",
        price: 12.99,
      },
      {
        id: "panini-reuben",
        name: "Reuben Panini",
        description: "Corned beef, Swiss, sauerkraut and thousand island.",
        price: 12.99,
      },
    ],
  },
  {
    category: "Royal Hot Subs",
    items: [
      {
        id: "sub-hot-meatball",
        name: "Meatball Sub",
        description: "Juicy meatballs topped with pizza cheese.",
        price: 11.99,
      },
      {
        id: "sub-hot-chicken-parm",
        name: "Chicken Parm Sub",
        description: "Chicken parmesan topped with pizza cheese.",
        price: 11.99,
      },
      {
        id: "sub-hot-crab-cake",
        name: "Homemade Crab Cake Sub",
        description: "Homemade recipe with fresh spices.",
        price: 12.99,
      },
    ],
  },
  {
    category: "Royal Cold Subs",
    items: [
      {
        id: "sub-cold-italian",
        name: "Italian Cold Cut Sub",
        description: "Italian cold cuts with provolone cheese.",
        price: 11.99,
      },
      {
        id: "sub-cold-turkey",
        name: "Turkey & American Cheese Sub",
        description: "Turkey with American cheese and fresh veggies.",
        price: 11.99,
      },
      {
        id: "sub-cold-shrimp-salad",
        name: "Shrimp Salad Sub",
        description: "House salad topped with shrimp.",
        price: 11.99,
      },
    ],
  },
  {
    category: "Royal Chef Platter Specials",
    items: [
      {
        id: "plat-shrimp-basket",
        name: "Shrimp Basket",
        description: "Breaded shrimp fried until golden.",
        price: 13.99,
      },
      {
        id: "plat-fish-flounder",
        name: "Fried Fish Flounder",
        description: "Crispy fried flounder fish.",
        price: 15.99,
      },
      {
        id: "plat-crab-cake",
        name: "Homemade Crab Cake Platter",
        description: "Homemade crab cake served as a platter.",
        price: 15.99,
      },
    ],
  },
  {
    category: "Appetizers",
    items: [
      {
        id: "app-mozz-sticks",
        name: "Mozzarella Sticks",
        description: "Deep fried cheese sticks with marinara.",
        price: 8.99,
      },
      {
        id: "app-garlic-knots",
        name: "Garlic Knots",
        description: "Freshly baked garlic knots.",
        price: 8.99,
      },
      {
        id: "app-sampler",
        name: "Appetizer Sampler",
        description: "Rings, sticks, ravioli, mushrooms & poppers.",
        price: 15.99,
      },
    ],
  },
  {
    category: "Royal Side Orders",
    items: [
      {
        id: "side-fries",
        name: "French Fries",
        description: "Golden crispy fries.",
        price: 4.99,
      },
      {
        id: "side-crazy-fries",
        name: "Crazy Fries",
        description: "Cheddar cheese, onions, and bacon.",
        price: 7.99,
      },
      {
        id: "side-garlic-bread-cheese",
        name: "Garlic Bread with Cheese",
        price: 7.99,
      },
    ],
  },
  {
    category: "Desserts",
    items: [
      {
        id: "dessert-cheesecake",
        name: "Cheesecake",
        description: "Classic rich and creamy cheesecake.",
        price: 5.99,
      },
      { id: "dessert-oreo-cheesecake", name: "Oreo Cheesecake", price: 5.99 },
      {
        id: "dessert-baklava",
        name: "Baklava",
        description: "Sweet pastry with layers of filo, nuts, and honey.",
        price: 5.99,
      },
      {
        id: "dessert-cannoli",
        name: "Cannoli",
        description: "Pastry filled with sweet ricotta cream.",
        price: 5.99,
      },
    ],
  },
  {
    category: "Kids Meals",
    items: [
      {
        id: "kids-chicken-tenders",
        name: "Kid's Three Chicken Tenders with Fries",
        price: 7.99,
      },
      {
        id: "kids-pizza",
        name: "Kid's Pizza",
        description: "Mini cheese pizza.",
        price: 8.99,
      },
      { id: "kids-mac-cheese", name: "Kid's Macaroni & Cheese", price: 7.99 },
    ],
  },
  {
    category: "Beverages",
    items: [
      { id: "bev-soda", name: "Soda", price: 1.69 },
      { id: "bev-iced-tea", name: "Iced Tea", price: 1.69 },
      { id: "bev-gatorade", name: "Gatorade", price: 2.99 },
    ],
  },
];

export const MENU = MENU_DATA;
