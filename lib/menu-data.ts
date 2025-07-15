export interface MenuItemType {
  id: string
  name: string
  description: string
  price: number
  tags?: string[]
}

export const menuData = {
  breakfast: [
    {
      id: "b1",
      name: "Continental Breakfast",
      description: "Assorted pastries, fresh fruit, yogurt, and granola",
      price: 18.95,
      tags: ["Vegetarian"],
    },
    {
      id: "b2",
      name: "American Breakfast",
      description: "Two eggs any style, bacon or sausage, toast, and breakfast potatoes",
      price: 22.95,
    },
    {
      id: "b3",
      name: "Eggs Benedict",
      description: "Poached eggs on English muffin with Canadian bacon and hollandaise sauce",
      price: 24.95,
    },
    {
      id: "b4",
      name: "Avocado Toast",
      description: "Multigrain toast topped with smashed avocado, poached eggs, and microgreens",
      price: 19.95,
      tags: ["Vegetarian"],
    },
    {
      id: "b5",
      name: "Belgian Waffles",
      description: "Served with maple syrup, fresh berries, and whipped cream",
      price: 17.95,
      tags: ["Vegetarian"],
    },
  ],
  lunch: [
    {
      id: "l1",
      name: "Caesar Salad",
      description: "Romaine lettuce, parmesan cheese, croutons, and Caesar dressing",
      price: 16.95,
      tags: ["Vegetarian"],
    },
    {
      id: "l2",
      name: "Club Sandwich",
      description: "Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo",
      price: 21.95,
    },
    {
      id: "l3",
      name: "Grilled Salmon",
      description: "Served with seasonal vegetables and lemon butter sauce",
      price: 28.95,
      tags: ["Gluten-Free"],
    },
    {
      id: "l4",
      name: "Pasta Primavera",
      description: "Seasonal vegetables tossed with linguine in a light cream sauce",
      price: 23.95,
      tags: ["Vegetarian"],
    },
    {
      id: "l5",
      name: "Gourmet Burger",
      description: "Angus beef patty with aged cheddar, caramelized onions, and special sauce",
      price: 24.95,
    },
  ],
  dinner: [
    {
      id: "d1",
      name: "Filet Mignon",
      description: "8oz center cut filet with red wine reduction, served with mashed potatoes",
      price: 42.95,
      tags: ["Gluten-Free"],
    },
    {
      id: "d2",
      name: "Herb Roasted Chicken",
      description: "Half chicken with rosemary and thyme, served with roasted vegetables",
      price: 32.95,
      tags: ["Gluten-Free"],
    },
    {
      id: "d3",
      name: "Seafood Risotto",
      description: "Arborio rice with shrimp, scallops, and mussels in a saffron broth",
      price: 36.95,
    },
    {
      id: "d4",
      name: "Vegetable Wellington",
      description: "Roasted vegetables and mushroom duxelles wrapped in puff pastry",
      price: 29.95,
      tags: ["Vegetarian", "Vegan"],
    },
    {
      id: "d5",
      name: "Rack of Lamb",
      description: "Herb-crusted and served with mint jelly and roasted fingerling potatoes",
      price: 44.95,
    },
  ],
  drinks: [
    {
      id: "dr1",
      name: "Signature Cocktails",
      description: "Ask your server about our seasonal specialty cocktails",
      price: 16.95,
    },
    {
      id: "dr2",
      name: "Classic Martini",
      description: "Gin or vodka with dry vermouth and olive or lemon twist",
      price: 15.95,
    },
    {
      id: "dr3",
      name: "Wine Selection",
      description: "Glass of house red, white, or sparkling wine",
      price: 14.95,
    },
    {
      id: "dr4",
      name: "Craft Beer",
      description: "Selection of local and imported craft beers",
      price: 9.95,
    },
    {
      id: "dr5",
      name: "Non-Alcoholic Options",
      description: "Mocktails, fresh juices, specialty coffee, and tea",
      price: 7.95,
      tags: ["Non-Alcoholic"],
    },
  ],
}
