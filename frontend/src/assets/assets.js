import logo from "./logo.png";
import search_icon from "./search_icon.png";
import profile_icon from "./profile_icon.png";
import cart_icon from "./cart_icon.png";
import menu_icon from "./menu_icon.png";
import dropdown_icon from "./dropdown_icon.png";
import hero_img from "./hero_img.jpeg";
import exchange_icon from "./exchange_icon.png";
import quality_icon from "./quality_icon.png";
import support_icon from "./support_icon.png";
import cross_icon from "./cross_icon.jpg";
import star_icon from "./star_icon.png";
import star_dull_icon from "./star_dull_icon.png";
import bin_icon from "./bin_icon.png";
import stripe_logo from "./stripe_logo.png";
import visa from "./visa.png";
import about_us from "./about_us.jpeg";
import contact_img from "./contact_img.jpg";
import Classic_Writing_Desk from "./classic_writing_desk.jpeg";
import Adjustable_Bookshelf from "./Adjustable_Bookshelf.jpeg";
import Compact_Console_Table from "./Compact_Console_Table.jpeg";
import Contemporary_Coffee_Table from "./Contemporary_Coffee_Table.jpeg";
import Decorative_Entryway_Frame from "./Decorative_Entryway_Frame.jpeg";
import Decorative_Wall_Frame from "./Decorative_Wall_Frame.jpeg";
import Dining_Table from "./Dining_Table.jpeg";
import Elegant_Dining_Chair from "./Elegant_Dining_Chair.jpeg";
import Ergonomic_Office_Chair from "./Ergonomic_Office_Chair.jpeg";
import Floating_Shelf_Set from "./Floating_Shelf_Set.jpeg";
import Foldable_Dining_Chair from "./Foldable_Dining_Chair.jpeg";
import Garden_Bench from "./Garden_Bench.jpeg";
import Glass_Display_Cabinet from "./Glass_Display_Cabinet.jpeg";
import Minimalist_Wall_Desk from "./Minimalist_Wall_Desk.jpeg";
import Modern_TV_Stand from "./Modern_TV_Stand.jpeg";
import Outdoor_Bench from "./Outdoor_Bench.jpeg";
import Patio_Table from "./Patio_Table.jpeg";
import Storage_Bench from "./Storage_Bench.jpeg";
import Upholstered_Bed_Frame from "./Upholstered_Bed_Frame.jpeg";
import Upholstered_Storage_Stool from "./Upholstered_Storage_Stool.jpeg";
import Wardrobe_Organizer from "./Wardrobe_Organizer.jpeg";
import Compact_Organizer_Unit from "./Compact_Organizer_Unit.jpeg";

export const assets = {
  logo,
  search_icon,
  profile_icon,
  cart_icon,
  menu_icon,
  dropdown_icon,
  hero_img,
  exchange_icon,
  quality_icon,
  support_icon,
  cross_icon,
  star_icon,
  star_dull_icon,
  bin_icon,
  stripe_logo,
  visa,
  about_us,
  contact_img,
};

export const products = [
  {
    id: "LR-TB-001",
    name: "Contemporary Coffee Table",
    description:
      "A sleek coffee table featuring a minimalist design with a lower shelf for additional storage.",
    price: 350,
    image: [Contemporary_Coffee_Table],
    category: "Living Room",
    subCategory: "Table",
    sizes: ["Oak", "Walnut", "Cherry"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "DR-CH-002",
    name: "Elegant Dining Chair",
    description:
      "An elegant dining chair with a curved backrest and cushioned seat for enhanced comfort.",
    price: 150,
    image: [Elegant_Dining_Chair],
    category: "Dining Room",
    subCategory: "Chair",
    sizes: ["Walnut", "Teal", "Maple"],
    date: 1718434345448,
    bestSeller: true,
  },
  {
    id: "BR-BD-003",
    name: "Upholstered Bed Frame",
    description:
      "A stylish bed frame upholstered in fabric, featuring a tufted headboard and sturdy wooden slats.",
    price: 800,
    image: [Upholstered_Bed_Frame],
    category: "Bedroom",
    subCategory: "Bed",
    sizes: ["Teal", "Cherry", "Oak"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "OF-DS-004",
    name: "Classic Writing Desk",
    description:
      "A rustic writing desk with two drawers and ample workspace, perfect for a home office.",
    price: 450,
    image: [Classic_Writing_Desk],
    category: "Office",
    subCategory: "Desk",
    sizes: ["Pine", "Maple", "Walnut"],
    date: 1718434345448,
    bestSeller: true,
  },
  {
    id: "OD-BN-005",
    name: "Outdoor Bench",
    description:
      "A durable bench designed for outdoor use, featuring a slatted seat and backrest.",
    price: 300,
    image: [Outdoor_Bench],
    category: "Outdoor",
    subCategory: "Bench",
    sizes: ["Cherry", "Oak", "Pine"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "DC-SH-006",
    name: "Floating Shelf Set",
    description:
      "A set of two floating shelves, ideal for displaying decor items or storing books.",
    price: 120,
    image: [Floating_Shelf_Set],
    category: "Decor",
    subCategory: "Shelf",
    sizes: ["Maple", "Walnut", "Teal"],
    date: 1718434345448,
    bestSeller: true,
  },
  {
    id: "LR-ST-007",
    name: "Modern TV Stand",
    description:
      "A contemporary TV stand with open shelving and two cabinets for media storage.",
    price: 600,
    image: [Modern_TV_Stand],
    category: "Living Room",
    subCategory: "Stand",
    sizes: ["Walnut", "Cherry", "Oak"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "DR-TB-008",
    name: "Dining Table",
    description:
      "A vibrant dining table with a smooth finish, comfortably seating six peopleA vibrant dining table with a smooth finish, comfortably seating six people.",
    price: 700,
    image: [Dining_Table],
    category: "Dining Room",
    subCategory: "Table",
    sizes: ["Teal", "Maple", "Cherry"],
    date: 1718434345448,
    bestSeller: true,
  },
  {
    id: "BR-OR-009",
    name: "Wardrobe Organizer",
    description:
      "A spacious wardrobe organizer with multiple compartments and hanging rods.",
    price: 900,
    image: [Wardrobe_Organizer],
    category: "Bedroom",
    subCategory: "Organizer",
    sizes: ["Oak", "Walnut", "Pine"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "OF-CH-010",
    name: "Ergonomic Office Chair",
    description:
      "An ergonomic office chair with adjustable height and lumbar support for comfortable seating.",
    price: 250,
    image: [Ergonomic_Office_Chair],
    category: "Office",
    subCategory: "Chair",
    sizes: ["Maple", "Teal", "Cherry"],
    date: 1718434345448,
    bestSeller: true,
  },
  {
    id: "OD-TB-011",
    name: "Patio Table",
    description:
      "A sturdy patio table designed to withstand outdoor elements, perfect for gatherings.",
    price: 400,
    image: [Patio_Table],
    category: "Outdoor",
    subCategory: "Table",
    sizes: ["Pine", "Cherry", "Oak"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "DC-FR-012",
    name: "Decorative Wall Frame",
    description:
      "A decorative wall frame suitable for showcasing art or photographs.",
    price: 80,
    image: [Decorative_Wall_Frame],
    category: "Decor",
    subCategory: "Frame",
    sizes: ["Walnut", "Teal", "Maple"],
    date: 1718434345448,
    bestSeller: true,
  },
  {
    id: "LR-BN-013",
    name: "Storage Bench",
    description:
      "A multifunctional bench with hidden storage, perfect for entryways or living rooms.",
    price: 320,
    image: [Storage_Bench],
    category: "Living Room",
    subCategory: "Bench",
    sizes: ["Oak", "Walnut", "Pine"],
    date: 1718434345448,
    bestSeller: false,
  },
  {
    id: "DE-FR-014",
    name: "Compact Console Table",
    description:
      "A compact console table with clean lines, ideal for hallways or behind sofas.",
    price: 279,
    image: [Compact_Console_Table],
    category: "Decor",
    subCategory: "Frame",
    sizes: ["Teal", "Cherry", "Walnut", "Maple"],
    date: 1718323200000,
    bestSeller: false,
  },
  {
    id: "DE-ST-015",
    name: "Adjustable Bookshelf",
    description:
      "A versatile shelf unit with adjustable tiers for books or decorative items.",
    price: 464,
    image: [Adjustable_Bookshelf],
    category: "Decor",
    subCategory: "Stand",
    sizes: ["Teal", "Oak", "Maple"],
    date: 1718323200000,
    bestSeller: false,
  },
  {
    id: "DI-CH-016",
    name: "Foldable Dining Chair",
    description:
      "A space-saving foldable chair suitable for both indoor and outdoor use.",
    price: 551,
    image: [Foldable_Dining_Chair],
    category: "Dining Room",
    subCategory: "Chair",
    sizes: ["Pine", "Oak", "Walnut", "Cherry"],
    date: 1718323200000,
    bestSeller: true,
  },
  {
    id: "OF-SH-017",
    name: "Minimalist Wall Desk",
    description:
      "A wall-mounted desk offering a clean and modern workstation solution.",
    price: 212,
    image: [Minimalist_Wall_Desk],
    category: "Office",
    subCategory: "Shelf",
    sizes: ["Teal", "Maple", "Pine", "Oak"],
    date: 1718323200000,
    bestSeller: true,
  },
  {
    id: "DC-ST-018",
    name: "Upholstered Storage Stool",
    description:
      "A soft stool with hidden storage compartment, great for small spaces.",
    price: 147,
    image: [Upholstered_Storage_Stool],
    category: "Decor",
    subCategory: "Stool",
    sizes: ["Oak", "Walnut", "Teal"],
    date: 1718323200000,
    bestSeller: false,
  },
  {
    id: "DC-FR-019",
    name: "Decorative Entryway Frame",
    description:
      "A framed wall piece to bring character and charm to your entryway.",
    price: 165,
    image: [Decorative_Entryway_Frame],
    category: "Decor",
    subCategory: "Frame",
    sizes: ["Cherry", "Teal", "Maple"],
    date: 1718323200000,
    bestSeller: false,
  },
  {
    id: "OD-BN-020",
    name: "Garden Bench",
    description:
      "A weather-resistant bench ideal for relaxing in your outdoor garden.",
    price: 393,
    image: [Garden_Bench],
    category: "Outdoor",
    subCategory: "Bench",
    sizes: ["Cherry", "Maple", "Walnut"],
    date: 1718323200000,
    bestSeller: true,
  },
  {
    id: "BR-CA-021",
    name: "Glass Display Cabinet",
    description:
      "A display cabinet with transparent doors for showcasing valuable items.",
    price: 728,
    image: [Glass_Display_Cabinet],
    category: "Bedroom",
    subCategory: "Cabinet",
    sizes: ["Walnut", "Oak", "Teal"],
    date: 1718323200000,
    bestSeller: false,
  },
  {
    id: "OF-OR-022",
    name: "Compact Organizer Unit",
    description:
      "An all-purpose organizer with multiple compartments for easy sorting.",
    price: 366,
    image: [Compact_Organizer_Unit],
    category: "Office",
    subCategory: "Organizer",
    sizes: ["Pine", "Cherry", "Maple"],
    date: 1718323200000,
    bestSeller: false,
  },
];
