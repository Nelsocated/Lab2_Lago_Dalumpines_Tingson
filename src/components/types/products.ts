import { Product } from "./interfaces";

export const products: Product[] = [
  {
    id: "laptop-1", name: "Alienware 16 Aurora Gaming Laptop",
    category: "laptop", subcategory: "gaming_laptop", price: 96700,
    image: "/products/laptop/Alienware_16_Aurora.jpg", inStock: true,
  },
  {
    id: "laptop-2", name: "ASUS V16 Gaming Laptop",
    category: "laptop", subcategory: "gaming_laptop", price: 59995,
    image: "/products/laptop/Asus_V16.png", inStock: true,
  },
  {
    id: "laptop-3", name: "MSI Thin 15 B12UCX",
    category: "laptop", subcategory: "gaming_laptop", price: 36495,
    image: "/products/laptop/MSI-THIN-15-B12UCX-1438PH-6.jpg", inStock: true,
  },
  {
    id: "sleeve-1", name: "Blue Laptop Sleeve",
    category: "laptop", subcategory: "laptop_sleeve", price: 549,
    image: "/products/laptop/laptop-sleeve/Blue_Laptop_Sleeve.png", inStock: true,
  },
  {
    id: "sleeve-2", name: "Canvas Sleeve Laptop Case",
    category: "laptop", subcategory: "laptop_sleeve", price: 499,
    image: "/products/laptop/laptop-sleeve/Canvas_Sleeve_Laptop_Case.png", inStock: true,
  },
  {
    id: "sleeve-3", name: "Felt Laptop Sleeve",
    category: "laptop", subcategory: "laptop_sleeve", price: 649,
    image: "/products/laptop/laptop-sleeve/Felt_Laptop_Sleeve.png", inStock: true,
  },
  {
    id: "sleeve-4", name: "Geo Laptop Sleeve",
    category: "laptop", subcategory: "laptop_sleeve", price: 549,
    image: "/products/laptop/laptop-sleeve/Geo_Laptop_Sleeve.png", inStock: true,
  },
  {
    id: "sleeve-5", name: "Neo Laptop Sleeve",
    category: "laptop", subcategory: "laptop_sleeve", price: 549,
    image: "/products/laptop/laptop-sleeve/Neo_Sleeve.png", inStock: true,
  },
  {
    id: "phone-1", name: "iPhone 17 Pro Max",
    category: "phone", subcategory: "mobile_phone", price: 86990,
    image: "/products/phone/17_pro_max.jpg", inStock: true,
  },
  {
    id: "phone-2", name: "OPPO A6 Pro 5G",
    category: "phone", subcategory: "mobile_phone", price: 18999,
    image: "/products/phone/Oppo_a6_pro_5g.jpg", inStock: true,
  },
  {
    id: "phone-3", name: "Samsung Galaxy S26 Ultra",
    category: "phone", subcategory: "mobile_phone", price: 86990,
    image: "/products/phone/Samsung_s26_ultra.jpg", inStock: true,
  },
  {
    id: "phone-case-1", name: "Blue iPhone Silicone Case",
    category: "phone", subcategory: "phone_case", price: 499,
    image: "/products/phone/phone-case/Blue_Iphone_Silicon_Case.jpg", inStock: true,
  },
  {
    id: "phone-case-2", name: "Galaxy S26 Protective Case",
    category: "phone", subcategory: "phone_case", price: 599,
    image: "/products/phone/phone-case/Galaxy_S26_Case.jpg", inStock: true,
  },
  {
    id: "phone-case-3", name: "OPPO A6 Trigger Design Case",
    category: "phone", subcategory: "phone_case", price: 399,
    image: "/products/phone/phone-case/Oppo_a6_trigger_design_case.jpg", inStock: true,
  },
  {
    id: "phone-stand-1", name: "Adjustable Phone Stand for Desk",
    category: "phone", subcategory: "phone_stand", price: 349,
    image: "/products/phone/phone-stand/Adjustable_phonestand_for_desk.jpg", inStock: true,
  },
  {
    id: "phone-stand-2", name: "Magnetic Phone Stand",
    category: "phone", subcategory: "phone_stand", price: 499,
    image: "/products/phone/phone-stand/magnetic_phone_stand.jpg", inStock: true,
  },
  {
    id: "phone-stand-3", name: "Wooden Phone Stand",
    category: "phone", subcategory: "phone_stand", price: 299,
    image: "/products/phone/phone-stand/Wooden_phone_stand.jpg", inStock: true,
  },
  {
    id: "tablet-1", name: "Apple iPad 11th Generation",
    category: "tablet", subcategory: "pad", price: 24990,
    image: "/products/tablet/iPad(11thEd).jpg", inStock: true,
  },
  {
    id: "tablet-2", name: "Microsoft Surface Pro 12",
    category: "tablet", subcategory: "pad", price: 52990,
    image: "/products/tablet/Microsoft_Surface_pro12.jpg", inStock: true,
  },
  {
    id: "tablet-3", name: "Samsung Galaxy Tab S6 Lite",
    category: "tablet", subcategory: "pad", price: 15990,
    image: "/products/tablet/Samsung_Galaxy_TabS6Lite.avif", inStock: true,
  },
  {
    id: "keyboard-case-1", name: "Galaxy Tab S6 Keyboard Case",
    category: "tablet", subcategory: "keyboard_case", price: 1499,
    image: "/products/tablet/keyboard-case/Galaxy_tab_s6_keyboardcase.jpg", inStock: true,
  },
  {
    id: "keyboard-case-2", name: "iPad Air 6 Magnetic Keyboard Case",
    category: "tablet", subcategory: "keyboard_case", price: 2299,
    image: "/products/tablet/keyboard-case/Ipad_Air6_Magnetic_Keyboard_Case.jpg", inStock: true,
  },
  {
    id: "keyboard-case-3", name: "Redmi Pad 2 Pro Keyboard Case",
    category: "tablet", subcategory: "keyboard_case", price: 1599,
    image: "/products/tablet/keyboard-case/redmi_pad_2_pro_keyboard.jpg", inStock: true,
  },
  {
    id: "keyboard-1", name: "AULA F75 Pro Keyboard",
    category: "peripherals", subcategory: "keyboard", price: 3299,
    image: "/products/peripherals/keyboard/aula_f75_pro.jpg", inStock: true,
  },
  {
    id: "keyboard-2", name: "GravaStar Mercury K1 Lite",
    category: "peripherals", subcategory: "keyboard", price: 4999,
    image: "/products/peripherals/keyboard/gravastar_mercury_k1_lite.jpg", inStock: true,
  },
  {
    id: "keyboard-3", name: "Razer Huntsman V3",
    category: "peripherals", subcategory: "keyboard", price: 8990,
    image: "/products/peripherals/keyboard/Razer_huntsman_v3.jpg", inStock: true,
  },
  {
    id: "mouse-1", name: "Logitech G Pro X Superlight",
    category: "peripherals", subcategory: "mouse", price: 7995,
    image: "/products/peripherals/mouse/logitech_superlight_mouse.jpg", inStock: true,
  },
  {
    id: "mouse-2", name: "Razer DeathAdder Essential",
    category: "peripherals", subcategory: "mouse", price: 1195,
    image: "/products/peripherals/mouse/razer_deathAdder_essential.jpg", inStock: true,
  },
  {
    id: "mouse-3", name: "VXE R1 Pro",
    category: "peripherals", subcategory: "mouse", price: 2299,
    image: "/products/peripherals/mouse/vxe_r1_pro.jpg", inStock: true,
  },
];
