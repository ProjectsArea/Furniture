import product from "../../public/cafe3.jpeg";
import product1 from "../../public/ps1.jpeg";
import product2 from "../../public/ps3.jpeg"; 
import product3 from "../../public/bed.jpeg";
import product4 from "../../public/bed1.jpeg";
import product5 from "../../public/bed2.jpeg";  
import product6 from "../../public/pillow1.jpeg"; 
import product7 from "../../public/ps.jpeg";
import product8 from "../../public/matress.png";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
  features?: string[];
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  colors?: string[];
  inStock?: boolean;
  // 360° View properties
  modelUrl?: string;
  imageSequence?: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Public Chair",
    price: 2899,
    originalPrice: 3299,
    image: product7,
    category: "Public Sitting",
    rating: 4.8,
    reviews: 124,
    isNew: false,
    isSale: true,
    description: "Indulge in luxury with our handcrafted velvet sofa featuring premium cushioning and elegant design.",
    features: ["Premium velvet upholstery", "Hardwood frame", "Down-filled cushions", "Stain-resistant coating"],
    materials: ["Velvet", "Hardwood", "Steel springs"],
    dimensions: { width: 84, height: 32, depth: 36 },
    colors: ["biscuit", "Cream"],
    inStock: true,
    modelUrl: "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    imageSequence: ["https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 2,
    name: "Mattress",
    price: 1899,
    image: product8,
    category: "Mattress",
    rating: 4.9,
    reviews: 89,
    isNew: true,
    description: "Sleep like never before with our premium orthopedic memory foam mattress, designed to provide cloud-like comfort, optimal spinal support, and temperature-regulated rest. Crafted using high-quality materials and precision engineering, it adapts to your body’s unique shape, ensuring a rejuvenating sleep experience every night.",
    features: ["Ergonomic Support", "Temperature Regulation", "Multi-Layer Comfort", " Breathable & Cool Sleep"],
    materials: ["Cooling Materials", "Latex","Gel Foam"],
    dimensions: { width: 96, height: 30, depth: 42 },
    colors: ["blue"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 3,
    name: "Designer Leather Armchair",
    price: 1299,
    originalPrice: 1599,
    image: "https://images.pexels.com/photos/586022/pexels-photo-586022.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Living Room",
    rating: 4.7,
    reviews: 156,
    isSale: true,
    description: "Premium leather armchair with ergonomic design and superior comfort for your living space.",
    features: ["Top-grain leather", "Ergonomic design", "Swivel base", "Memory foam padding"],
    materials: ["Leather", "Steel", "Memory foam"],
    dimensions: { width: 32, height: 34, depth: 35 },
    colors: ["Cognac", "Black", "Brown"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/586022/pexels-photo-586022.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 4,
    name: "Minimalist Bed Frame",
    price: 70000,
    image: product4,
    category: "Bedroom",
    rating: 4.6,
    reviews: 203,
    description: "Clean-lined bed frame with upholstered headboard for modern bedroom aesthetics.",
    features: ["Upholstered headboard", "Solid wood frame", "Easy assembly"],
    materials: ["Oak wood", "Linen upholstery"],
    dimensions: { width: 86, height: 48, depth: 66 },
    colors: ["Natural", "Charcoal", "White"],
    inStock: true,
    imageSequence: [product4]
  },
  {
    id: 5,
    name: "Glass Coffee Table",
    price: 899,
    image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Living Room",
    rating: 4.5,
    reviews: 78,
    isNew: true,
    description: "Contemporary glass coffee table with sculptural metal base design.",
    features: ["Tempered glass top", "Metal sculptural base", "Easy to clean", "Modern design"],
    materials: ["Tempered glass", "Stainless steel"],
    dimensions: { width: 48, height: 16, depth: 24 },
    colors: ["Clear glass with chrome", "Clear glass with gold"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 6,
    name: "Executive Office Chair",
    price: 799,
    originalPrice: 999,
    image: "https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Office",
    rating: 4.8,
    reviews: 145,
    isSale: true,
    description: "Premium executive chair with advanced ergonomic support and luxury materials.",
    features: ["Ergonomic lumbar support", "Leather upholstery", "Adjustable height", "360° swivel"],
    materials: ["Leather", "Steel", "High-density foam"],
    dimensions: { width: 26, height: 45, depth: 26 },
    colors: ["Black", "Brown", "White"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 7,
    name: "Wooden Bookshelf",
    price: 1199,
    image: "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Storage",
    rating: 4.7,
    reviews: 92,
    description: "Handcrafted wooden bookshelf with adjustable shelves and timeless design.",
    features: ["Adjustable shelves", "Solid wood construction", "Anti-tip hardware", "5 shelf levels"],
    materials: ["Solid pine wood", "Natural stain"],
    dimensions: { width: 36, height: 84, depth: 12 },
    colors: ["Natural", "Dark Walnut", "White"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 8,
    name: "Accent Side Table",
    price: 459,
    image: "https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Living Room",
    rating: 4.4,
    reviews: 67,
    isNew: true,
    description: "Elegant side table with marble top and brass legs for sophisticated styling.",
    features: ["Marble top", "Brass legs", "Compact design", "Easy assembly"],
    materials: ["Marble", "Brass"],
    dimensions: { width: 18, height: 24, depth: 18 },
    colors: ["White marble with gold", "Black marble with chrome"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 9,
    name: "Luxury Bed",
    price: 2599,
    image: product3,
    category: "Bedroom",
    rating: 4.9,
    reviews: 156,
    description: "Spacious wardrobe with sliding doors and customizable interior organization.",
    features: ["Sliding doors", "Customizable interior", "Soft-close mechanism", "LED lighting"],
    materials: ["Oak veneer", "Metal hardware"],
    dimensions: { width: 96, height: 84, depth: 24 },
    colors: ["Natural Oak", "White", "Charcoal"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 10,
    name: "Dining Chair Set",
    price: 899,
    originalPrice: 1199,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Dining",
    rating: 4.6,
    reviews: 234,
    isSale: true,
    description: "Set of 4 upholstered dining chairs with wooden legs and comfortable seating.",
    features: ["Set of 4 chairs", "Upholstered seats", "Wooden legs", "Stackable design"],
    materials: ["Fabric upholstery", "Oak legs"],
    dimensions: { width: 18, height: 32, depth: 20 },
    colors: ["Gray", "Navy", "Beige", "Charcoal"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 11,
    name: "Modern Console Table",
    price: 1299,
    image: "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Living Room",
    rating: 4.7,
    reviews: 89,
    description: "Sleek console table perfect for entryways and living spaces with drawer storage.",
    features: ["Two drawers", "Sleek design", "Cable management", "Anti-scratch surface"],
    materials: ["MDF with veneer", "Metal handles"],
    dimensions: { width: 60, height: 30, depth: 16 },
    colors: ["Walnut", "White", "Black"],
    inStock: true,
    imageSequence: ["https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=600"]
  },
  {
    id: 12,
    name: "Premium Mattress",
    price: 80000,
    originalPrice: 100000,
    image: product5,
    category: "Bedroom",
    rating: 4.8,
    reviews: 312,
    isSale: true,
    description: "Luxury hybrid mattress with memory foam and pocket spring technology.",
    features: ["Memory foam layers", "Pocket spring system", "Cooling gel technology", "Hypoallergenic"],
    materials: ["Memory foam", "Pocket springs", "Cooling gel"],
    dimensions: { width: 76, height: 12, depth: 80 },
    colors: ["Brown"],
    inStock: true,
    imageSequence: [product5]
  },
  {
    id: 13,
    name: "Public Sitting Bench - Silver",
    price: 139,
    image: product, // Replace with actual image after upload
    category: "Public Sitting",
    rating: 4.5,
    reviews: 12,
    isNew: true,
    description: "Spacious and comfortable cafeteria/public sitting area. Upload images to showcase.",
    features: ["Durable seating", "Easy to clean", "Modern design", "Customizable layout"],
    materials: ["Metal", "Wood", "Plastic"],
    dimensions: { width: 20, height: 15, depth: 20 },
    colors: ["Custom"],
    inStock: true,
    imageSequence: ["/public/cafe3.jpg"] // Update with real images after upload
  },
  {
      id: 14,
      name: "Public Sitting Bench - Green",
      price: 159,
      image: product1, // Update with the actual path after upload
      category: "Public Sitting",
      rating: 4.7,
      reviews: 18,
      isNew: true,
      description: "Comfortable public sitting bench with a modern green finish. Ideal for cafeterias, waiting areas, and lounges.",
      features: ["Ergonomic design", "Durable metal frame", "Anti-rust coating", "Comfortable seating"],
      materials: ["Metal", "Synthetic Leather"],
      dimensions: { width: 25, height: 18, depth: 22 },
      colors: ["Green", "Silver"],
      inStock: true,
      imageSequence: [product1], // Add more if you have multiple images
    },
    {
      id: 15,
      name: "Public Sitting Bench - Metallic",
      price: 169,
      image: product2, // Update with the actual path after upload
      category: "Public Sitting",
      rating: 4.6,
      reviews: 20,
      isNew: false,
      description: "Stainless steel public sitting bench designed for heavy usage in public spaces like airports, hospitals, and offices.",
      features: ["Stainless steel build", "Long-lasting durability", "Easy maintenance", "Comfortable perforated seats"],
      materials: ["Stainless Steel"],
      dimensions: { width: 26, height: 18, depth: 23 },
      colors: ["Metallic Silver"],
      inStock: true,
      imageSequence: [product2], // Add more if needed
    },
    {
      id: 16,
      name: "Premium Pillow",
      price: 5000,
      originalPrice: 7000,
      image: product6,
      category: "Bedroom",
      rating: 4.7,
      reviews: 185,
      isSale: true,
      description: "Ergonomic pillow with memory foam and cooling gel for superior comfort and neck support.",
      features: ["Ergonomic design", "Memory foam core", "Cooling gel layer", "Hypoallergenic cover"],
      materials: ["Memory foam", "Cooling gel", "Breathable fabric"],
      dimensions: { width: 40, height: 12, depth: 18 },
      colors: ["White"],
      inStock: true,
      imageSequence: [product6]
    }
  ];
  
