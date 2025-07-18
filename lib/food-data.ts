export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  isVegetarian: boolean;
  isSpicy: boolean;
  region: string;
  category: string;
  rating: number;
  numRatings: number;
  ingredients: string;
}

export const streetFoodData = {
  chaat: [
    {
      id: "c1",
      name: "Pani Puri",
      description:
        "Hollow crispy puris filled with spicy potato mixture and tangy tamarind water. A beloved street snack, especially popular in Maharashtra's Amravati, offering a burst of flavors in every bite.",
      price: 40,
      image: "/placeholder.svg?height=400&width=600&text=Pani+Puri",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "chaat",
      rating: 4.8,
      numRatings: 245,
      ingredients:
        "Semolina puris, potato, chickpeas, onions, tamarind water, mint, coriander, spices",
    },
    {
      id: "c2",
      name: "Aloo Tikki",
      description:
        "Crispy potato patties served with chickpea curry, yogurt, and chutneys. A favorite in Amravati, Maharashtra, known for its rich, tangy, and spicy flavors.",
      price: 50,
      image: "/placeholder.svg?height=400&width=600&text=Aloo+Tikki",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "chaat",
      rating: 4.5,
      numRatings: 187,
      ingredients:
        "Potatoes, peas, ginger, green chilies, coriander, spices, chickpea curry, yogurt, tamarind chutney",
    },
    {
      id: "c3",
      name: "Bhel Puri",
      description:
        "Puffed rice, vegetables, and tangy tamarind sauce mixed to perfection. A staple street food in Amravati, Maharashtra, offering a crunchy, spicy, and refreshing taste.",
      price: 35,
      image: "/placeholder.svg?height=400&width=600&text=Bhel+Puri",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "chaat",
      rating: 4.6,
      numRatings: 203,
      ingredients:
        "Puffed rice, sev, onions, tomatoes, potatoes, tamarind chutney, mint chutney, coriander",
    },
    {
      id: "c4",
      name: "Dahi Puri",
      description:
        "Crispy puris topped with potatoes, yogurt, and various chutneys. A cooling, flavorful treat popular in Amravati, Maharashtra, especially during hot summer evenings.",
      price: 45,
      image: "/placeholder.svg?height=400&width=600&text=Dahi+Puri",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "chaat",
      rating: 4.7,
      numRatings: 176,
      ingredients:
        "Puris, potatoes, yogurt, tamarind chutney, mint chutney, sev, coriander, spices",
    },
    {
      id: "c5",
      name: "Samosa Chaat",
      description:
        "Crushed samosas topped with chickpea curry, yogurt, and chutneys. A hearty, spicy street food favorite in Amravati, Maharashtra, perfect for evening snacks.",
      price: 60,
      image: "/placeholder.svg?height=400&width=600&text=Samosa+Chaat",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "chaat",
      rating: 4.9,
      numRatings: 231,
      ingredients:
        "Samosas, chickpea curry, yogurt, tamarind chutney, mint chutney, onions, tomatoes, spices",
    },
  ],
  rolls: [
    {
      id: "r1",
      name: "Kathi Roll",
      description:
        "Paratha wrapped around spiced chicken or paneer with onions and chutney. A filling, flavorful roll enjoyed by many in Amravati, Maharashtra.",
      price: 80,
      image: "/placeholder.svg?height=400&width=600&text=Kathi+Roll",
      isVegetarian: false,
      isSpicy: true,
      region: "Maharashtra",
      category: "rolls",
      rating: 4.7,
      numRatings: 198,
      ingredients:
        "Paratha, chicken/paneer, bell peppers, onions, spices, egg, chutneys",
    },
    {
      id: "r2",
      name: "Paneer Tikka Roll",
      description:
        "Soft rumali roti filled with marinated and grilled paneer tikka. A popular vegetarian street roll in Amravati, Maharashtra, known for its smoky, spicy taste.",
      price: 75,
      image: "/placeholder.svg?height=400&width=600&text=Paneer+Tikka+Roll",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "rolls",
      rating: 4.5,
      numRatings: 156,
      ingredients:
        "Rumali roti, paneer, yogurt, bell peppers, onions, spices, mint chutney",
    },
    {
      id: "r3",
      name: "Chicken Frankie",
      description:
        "Spiced chicken wrapped in a thin flatbread with special masala. A favorite non-veg street food in Amravati, Maharashtra, loved for its bold flavors.",
      price: 90,
      image: "/placeholder.svg?height=400&width=600&text=Chicken+Frankie",
      isVegetarian: false,
      isSpicy: true,
      region: "Maharashtra",
      category: "rolls",
      rating: 4.8,
      numRatings: 212,
      ingredients:
        "Flatbread, chicken, onions, bell peppers, spices, frankie masala, chutneys",
    },
  ],
  curries: [
    {
      id: "cu1",
      name: "Pav Bhaji",
      description:
        "Spicy mashed vegetable curry served with buttered bread rolls. A signature street food of Maharashtra, especially popular in Amravati for its rich, buttery taste.",
      price: 70,
      image: "/placeholder.svg?height=400&width=600&text=Pav+Bhaji",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "curries",
      rating: 4.9,
      numRatings: 267,
      ingredients:
        "Potatoes, peas, tomatoes, onions, bell peppers, pav bhaji masala, butter, bread rolls",
    },
    {
      id: "cu2",
      name: "Chole Bhature",
      description:
        "Spicy chickpea curry served with deep-fried bread. A hearty, satisfying meal found at many street stalls in Amravati, Maharashtra, loved for its bold flavors.",
      price: 80,
      image: "/placeholder.svg?height=400&width=600&text=Chole+Bhature",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "curries",
      rating: 4.8,
      numRatings: 243,
      ingredients:
        "Chickpeas, tomatoes, onions, spices, bhature (deep-fried bread), coriander",
    },
    {
      id: "cu3",
      name: "Vada Pav",
      description:
        "Spicy potato fritter in a bun with chutneys. The iconic street food of Maharashtra, especially beloved in Amravati for its spicy, tangy flavors.",
      price: 25,
      image: "/placeholder.svg?height=400&width=600&text=Vada+Pav",
      isVegetarian: true,
      isSpicy: true,
      region: "Maharashtra",
      category: "curries",
      rating: 4.7,
      numRatings: 289,
      ingredients:
        "Potatoes, gram flour, spices, bread bun, garlic chutney, green chutney",
    },
  ],
  sweets: [
    {
      id: "s1",
      name: "Jalebi",
      description:
        "Deep-fried pretzel-shaped sweets soaked in sugar syrup. A festive favorite in Amravati, Maharashtra, enjoyed hot and fresh from local sweet shops.",
      price: 30,
      image: "/placeholder.svg?height=400&width=600&text=Jalebi",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "sweets",
      rating: 4.6,
      numRatings: 178,
      ingredients: "All-purpose flour, yogurt, sugar syrup, saffron, cardamom",
    },
    {
      id: "s2",
      name: "Kulfi",
      description:
        "Traditional Indian ice cream in various flavors. A creamy, cooling dessert popular on the streets of Amravati, Maharashtra, especially during summer.",
      price: 35,
      image: "/placeholder.svg?height=400&width=600&text=Kulfi",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "sweets",
      rating: 4.8,
      numRatings: 201,
      ingredients: "Milk, sugar, pistachios, almonds, cardamom, saffron",
    },
    {
      id: "s3",
      name: "Gulab Jamun",
      description:
        "Deep-fried milk solids soaked in rose-flavored sugar syrup. A classic sweet treat in Amravati, Maharashtra, perfect for celebrations and special occasions.",
      price: 40,
      image: "/placeholder.svg?height=400&width=600&text=Gulab+Jamun",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "sweets",
      rating: 4.9,
      numRatings: 234,
      ingredients:
        "Milk powder, all-purpose flour, sugar syrup, cardamom, rose water",
    },
  ],
  beverages: [
    {
      id: "b1",
      name: "Masala Chai",
      description:
        "Spiced tea with milk and aromatic spices. A comforting beverage enjoyed at every street corner in Amravati, Maharashtra, especially during monsoon season.",
      price: 15,
      image: "/placeholder.svg?height=400&width=600&text=Masala+Chai",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "beverages",
      rating: 4.7,
      numRatings: 312,
      ingredients:
        "Tea leaves, milk, ginger, cardamom, cinnamon, cloves, sugar",
    },
    {
      id: "b2",
      name: "Lassi",
      description:
        "Yogurt-based sweet or savory drink with various flavors. A refreshing, cooling drink popular in Amravati, Maharashtra, especially during the hot summer months.",
      price: 25,
      image: "/placeholder.svg?height=400&width=600&text=Lassi",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "beverages",
      rating: 4.6,
      numRatings: 187,
      ingredients:
        "Yogurt, sugar/salt, water, cardamom, saffron (for sweet lassi)",
    },
    {
      id: "b3",
      name: "Nimbu Pani",
      description:
        "Refreshing lemonade with a hint of salt and spices. A street-side favorite in Amravati, Maharashtra, perfect for quenching thirst on hot days.",
      price: 20,
      image: "/placeholder.svg?height=400&width=600&text=Nimbu+Pani",
      isVegetarian: true,
      isSpicy: false,
      region: "Maharashtra",
      category: "beverages",
      rating: 4.5,
      numRatings: 156,
      ingredients: "Lemon juice, water, sugar, salt, cumin powder, mint leaves",
    },
  ],
};
