import { Product } from "../types";

// Categories
export const categories = [
  { id: "cement", name: "Cement" },
  { id: "steel", name: "Steel TMT Bars" },
  { id: "bricks", name: "Bricks" }
];


// Products
export const products: Product[] = [
  // CEMENT PRODUCTS
  {
    id: "1",
    name: "Emami cement", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/emami-cement.png"],
    featuredImage: "/products/emami-cement.png",
    category: "cement",
    inStock: true,
    price: 300, // Price per unit
    details: {
      grade: "M43",
      type: "OPC (Ordinary Portland Cement)",
      packagingType: "PP Sack Bag"
    }
  },
  {
    id: "2",
    name: "Birla uttam", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/birla-uttam.jpg"],
    featuredImage: "/products/birla-uttam.jpg",
    category: "cement",
    inStock: true,
    price: 320, // Price per unit
    details: {
      grade: "PPC",
      type: "PPC Cement",
      packagingSize: "50kg",
      packagingType: "HDPE Sack Bag"
    }
  },
  {
    id: "3",
    name: "ACC Suraksha", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/acc-suraksha.jpg"],
    featuredImage: "/products/acc-suraksha.jpg",
    category: "cement",
    inStock: true,
    price: 310, // Price per unit
    details: {
      grade: "52.5 MPa",
      settingTime: "20 Minutes",
      packagingType: "PP Sack Bag"
    }
  },
  
  // STEEL TMT BARS PRODUCTS
  {
    id: "4",
    name: "Tata Tiscon", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/tata-tiscon.jpg"],
    featuredImage: "/products/tata-tiscon.jpg",
    category: "steel",
    inStock: true,
    price: 50000 // Price per unit
  },
  {
    id: "5",
    name: "Jindal TMT", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/jindal-tmt.jpg"],
    featuredImage: "/products/jindal-tmt.jpg",
    category: "steel",
    inStock: true,
    price: 48000 // Price per unit
  },
  {
    id: "6",
    name: "Tufcon TMT", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/tufcon-tmt.jpg"],
    featuredImage: "/products/tufcon-tmt.jpg",
    category: "steel",
    inStock: true,
    price: 47000 // Price per unit
  },
  
  // BRICKS PRODUCTS
  {
    id: "7",
    name: "Red Soil Brick", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/red-soil-brick.jpg"],
    featuredImage: "/products/red-soil-brick.jpg",
    category: "bricks",
    inStock: true,
    price: 10 // Price per unit
  },
  {
    id: "8",
    name: "Fly Ash Brick", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/fly-ash-brick.jpg"],
    featuredImage: "/products/fly-ash-brick.jpg",
    category: "bricks",
    inStock: true,
    price: 12 // Price per unit
  },
  {
    id: "9",
    name: "Clay Brick", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/clay-brick.jpg"],
    featuredImage: "/products/clay-brick.jpg",
    category: "bricks",
    inStock: true,
    price: 8 // Price per unit
  },
  {
    id: "10",
    name: "Cement Brick", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/cement-brick.jpg"],
    featuredImage: "/products/cement-brick.jpg",
    category: "bricks",
    inStock: true,
    price: 15 // Price per unit
  },
  {
    id: "11",
    name: "Hollow Clay Brick", // Updated to match imageMap key
    description: "Durable and Available in various sizes. In Stock",
    images: ["/products/hollow-clay-brick.jpg"],
    featuredImage: "/products/hollow-clay-brick.jpg",
    category: "bricks",
    inStock: true,
    price: 15 // Price per unit
  }
];