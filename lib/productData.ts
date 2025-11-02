export interface Category {
  name: string;
  slug: string;
}

export interface ProductType {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  description: string;
  image: string;
  sizes: string[];
  customization: string[];
  basePrice: number;
}

export const categories: Category[] = [
  { name: "Nails", slug: "nails" },
  { name: "Bolts", slug: "bolts" },
  { name: "Hooks", slug: "hooks" },
  { name: "Rivets", slug: "rivets" },
  { name: "Chains", slug: "chains" },
  { name: "Washers & Nuts", slug: "washers_nuts" },
  { name: "Screws", slug: "screws" },
  { name: "Miscellaneous", slug: "miscellaneous" },
  { name: "Perforated Sheets", slug: "perforated_sheets" },
];

export const productsData: Record<string, ProductType[]> = {
  nails: [
    {
      id: "dowel-nail",
      name: "Dowel Nail",
      slug: "dowel-nail",
      categorySlug: "nails",
      description:
        "A cylindrical nail, often used for joinery or as a structural pin. Provides a secure and flush connection for various carpentry and woodworking projects.",
      image: "/images/dowel-nail-removebg.png",
      sizes: ["N/A"],
      customization: ["Steel", "Stainless Steel"],
      basePrice: 0.1,
    },
    {
      id: "u-nail",
      name: "U-Nail",
      slug: "u-nail",
      categorySlug: "nails",
      description:
        "A U-shaped nail, commonly known as a staple, used to fasten wires, cables, or fencing to wooden surfaces. It provides a secure, two-point hold.",
      image: "/images/u-Nail-removebg.png",
      sizes: ["N/A"],
      customization: ["Galvanized", "PVC Coated"],
      basePrice: 0.08,
    },
    {
      id: "nag-fani-nail",
      name: "Nag Fani Nail",
      slug: "nag-fani-nail",
      categorySlug: "nails",
      description:
        "A specialized nail with a unique bend, likely for specific fastening or decorative purposes. It's used where a standard straight nail would not suffice.",
      image: "/images/Nag-fani-nail-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.12,
    },
    {
      id: "wire-nail",
      name: "Wire Nail",
      slug: "wire-nail",
      categorySlug: "nails",
      description:
        "A general-purpose nail made from wire, widely used in framing, sheathing, and various construction applications. Features a flat, round head.",
      image: "/images/wire-nail-removebg.png",
      sizes: ["N/A"],
      customization: ["Bright Finish", "Galvanized"],
      basePrice: 0.05,
    },
    {
      id: "panel-pin",
      name: "Panel Pin",
      slug: "panel-pin",
      categorySlug: "nails",
      description:
        "A small, thin nail with a very small head, designed for securing thin sheets of wood or panels. Can be driven in without splitting the material.",
      image: "/images/Panel-pin-removebg.png",
      sizes: ["N/A"],
      customization: ["Bright Finish", "Zinc Plated"],
      basePrice: 0.06,
    },
    {
      id: "khila-m-marka",
      name: "Khila M Marka",
      slug: "khila-m-marka",
      categorySlug: "nails",
      description:
        "A robust and heavy-duty nail, likely used for securing large timber or for applications requiring significant holding power.",
      image: "/images/khila-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.15,
    },
    {
      id: "blue-tacks",
      name: "Blue Tacks",
      slug: "blue-tacks",
      categorySlug: "nails",
      description:
        "Small, colored tacks with a sharp point, typically used for decorative purposes or for hanging lightweight items like posters and fabric.",
      image: "/images/blue-tacks-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.05,
    },
    {
      id: "roofing-nail",
      name: "Roofing Nail",
      slug: "roofing-nail",
      categorySlug: "nails",
      description:
        "Short, thick shank nail with a large, flat head for securing roofing felt, shingles, and other roofing materials. Often galvanized for corrosion resistance.",
      image: "/images/roofing-nail.png",
      sizes: ["0.75 inch", "1 inch", "1.25 inch"],
      customization: ["Galvanized", "Electro-Galvanized"],
      basePrice: 0.06,
    },
  ],
  bolts: [
    {
      id: "u-bolt",
      name: "U Bolt",
      slug: "u-bolt",
      categorySlug: "bolts",
      description:
        "A bolt in the shape of the letter U with screw threads on both ends. Primarily used to support pipework, attach items to poles, or for general clamping.",
      image: "/images/u-bolt-removebg.png",
      sizes: ["N/A"],
      customization: ["Zinc Plated", "Hot-Dip Galvanized"],
      basePrice: 1.8,
    },
    {
      id: "square-u-bolt",
      name: "Square U Bolt",
      slug: "square-u-bolt",
      categorySlug: "bolts",
      description:
        "Similar to a standard U-bolt, but with a square bend. Used for clamping square or rectangular sections, such as timber or steel beams.",
      image: "/images/square-u-bolt-removebg.png",
      sizes: ["N/A"],
      customization: ["Zinc Plated", "Hot-Dip Galvanized"],
      basePrice: 1.9,
    },
    {
      id: "bolt",
      name: "Bolt",
      slug: "bolt",
      categorySlug: "bolts",
      description:
        "A general term for a threaded fastener. Our bolts come in various head types and are designed for a wide range of applications from construction to machinery.",
      image: "/images/bolt-full-threaded-removebg.png",
      sizes: ["N/A"],
      customization: ["Zinc Plated", "Stainless Steel"],
      basePrice: 0.5,
    },
    {
      id: "carriage-bolt",
      name: "Carriage Bolt",
      slug: "carriage-bolt",
      categorySlug: "bolts",
      description:
        "Features a smooth, domed head and a square section underneath that grips into the material, preventing rotation when a nut is tightened.",
      image: "/images/carriage-bolt-removebg.png",
      sizes: ["N/A"],
      customization: ["Zinc Plated", "Stainless Steel"],
      basePrice: 0.6,
    },
  ],
  hooks: [
    {
      id: "l-hook",
      name: "L-Hook",
      slug: "l-hook",
      categorySlug: "hooks",
      description:
        "A right-angled hook, ideal for hanging pictures, tools, and other items from walls or ceilings. Provides a sturdy and reliable hanging point.",
      image: "/images/L-bolt-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.25,
    },
    {
      id: "j-hook",
      name: "J Hook",
      slug: "j-hook",
      categorySlug: "hooks",
      description:
        "A hook shaped like the letter 'J', perfect for hanging heavier items and for securing cables, ropes, or chains. Its design provides good load distribution.",
      image: "/images/j-hook-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.35,
    },
    {
      id: "pipe-hook",
      name: "Pipe Hook",
      slug: "pipe-hook",
      categorySlug: "hooks",
      description:
        "A specialized hook designed to support pipes, conduits, or tubing against a wall or ceiling. Features a shape that cradles the pipe securely.",
      image: "/images/pipe-hook-removebg.png",
      sizes: ["N/A"],
      customization: ["Galvanized", "Stainless Steel"],
      basePrice: 0.5,
    },
  ],
  rivets: [
    {
      id: "tinmen-rivets",
      name: "Tinmen Rivets",
      slug: "tinmen-rivets",
      categorySlug: "rivets",
      description:
        "A fastener typically used for joining thin sheets of metal or tin. Provides a strong and permanent connection for various sheet metal work.",
      image: "/images/tinman-rivet-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.1,
    },
    {
      id: "round-head-rivets",
      name: "Round Head Rivets",
      slug: "round-head-rivets",
      categorySlug: "rivets",
      description:
        "A type of permanent fastener with a rounded head. Ideal for applications where a smooth finish is required. Used in general construction and fabrication.",
      image: "/images/round-head-rivet-removebg.png",
      sizes: ["N/A"],
      customization: ["Steel", "Aluminum"],
      basePrice: 0.12,
    },
  ],
  chains: [
    {
      id: "ship-chain",
      name: "Ship Chain",
      slug: "ship-chain",
      categorySlug: "chains",
      description:
        "A heavy-duty, robust chain suitable for mooring, towing, and other high-stress marine or industrial applications. Known for its strength and durability.",
      image: "/images/ship-chain-removebg.png",
      sizes: ["N/A"],
      customization: ["Galvanized"],
      basePrice: 5.0,
    },
    {
      id: "lock-chain",
      name: "Lock Chain",
      slug: "lock-chain",
      categorySlug: "chains",
      description:
        "A versatile chain for general security and locking purposes. Can be used with padlocks to secure gates, bicycles, or equipment.",
      image: "/images/lock-chain-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 2.5,
    },
    {
      id: "cow-chain",
      name: "Cow Chain",
      slug: "cow-chain",
      categorySlug: "chains",
      description:
        "A lightweight to medium-duty chain, traditionally used for tethering livestock. Also suitable for light-duty towing and securing.",
      image: "/images/cow-chain-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 1.8,
    },
  ],
  washers_nuts: [
    {
      id: "damar-washer",
      name: "Damar Washer (Bitumen)",
      slug: "damar-washer-bitumen",
      categorySlug: "washers_nuts",
      description:
        "A washer coated in bitumen, used to create a watertight seal and prevent corrosion. Ideal for use on rooftops and in outdoor structures.",
      image: "/images/damar-washer-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.2,
    },
    {
      id: "chaddar-washers",
      name: "Chaddar Washers",
      slug: "chaddar-washers",
      categorySlug: "washers_nuts",
      description:
        "A flat washer used to distribute the load of a threaded fastener, preventing damage to the surface and ensuring a secure fit.",
      image: "/images/Chaddar-washer-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.1,
    },
    {
      id: "nut",
      name: "Nut",
      slug: "nut",
      categorySlug: "washers_nuts",
      description:
        "A fastener with a threaded hole, used in combination with a bolt to secure objects together. Available in various shapes and sizes.",
      image: "/images/Nut-removebg.png",
      sizes: ["N/A"],
      customization: ["Zinc Plated", "Stainless Steel"],
      basePrice: 0.15,
    },
  ],
  screws: [
    {
      id: "self-drilling-screw",
      name: "Self-drilling Screw",
      slug: "self-drilling-screw",
      categorySlug: "screws",
      description:
        "A screw designed with a drill bit point, allowing it to drill its own hole and tap its own threads in a single operation. Perfect for metal work.",
      image: "/images/self-drilling-screw-washer-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.2,
    },
  ],
  miscellaneous: [
    {
      id: "straight-rod",
      name: "Straight Rod",
      slug: "straight-rod",
      categorySlug: "miscellaneous",
      description:
        "A plain metal rod, often used as a structural component, a shaft, or a pin. Its versatility makes it useful for a wide range of custom applications.",
      image: "/images/straight-rod-removebg.png",
      sizes: ["N/A"],
      customization: ["Steel", "Aluminum"],
      basePrice: 1.0,
    },
    {
      id: "roofing-wire-bombay",
      name: "Roofing Wire (Bombay)",
      slug: "roofing-wire-bombay",
      categorySlug: "miscellaneous",
      description:
        "A specialized wire used for securing roofing materials. Its flexibility and strength ensure a durable hold, even in harsh weather conditions.",
      image: "/images/bombay-type-removebg.png",
      sizes: ["N/A"],
      customization: ["N/A"],
      basePrice: 0.8,
    },
  ],
  perforated_sheets: [
    {
      id: "aluminium-perforated-sheets",
      name: "Aluminium Perforated Sheets",
      slug: "aluminium-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "Lightweight and corrosion-resistant sheets, ideal for filtration, architectural facades, and ventilation systems where weight is a factor.",
      image: "/images/aluminium-ps.webp",
      sizes: ["Custom Hole Sizes"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "crc-perforated-sheets",
      name: "CRC Perforated Sheets",
      slug: "crc-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "Cold Rolled Coil (CRC) sheets offering a smooth finish and excellent flatness, suitable for interior decoration and general manufacturing.",
      image: "/images/crc-ps.webp",
      sizes: ["Custom Thickness"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "industrial-perforated-sheets",
      name: "Industrial Perforated Sheets",
      slug: "industrial-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "High-strength, durable sheets designed for heavy-duty applications like conveyor screens, machinery guards, and sound absorption panels.",
      image: "/images/industrial-ps.webp",
      sizes: ["Heavy Gauge"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "metal-perforated-sheets",
      name: "Metal Perforated Sheets",
      slug: "metal-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "General-purpose perforated metal sheets offering a balance of strength and airflow, widely used across various industries for screening and safety.",
      image: "/images/metal-ps.webp",
      sizes: ["Standard and Custom"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "mild-steel-perforated-sheets",
      name: "Mild Steel Perforated Sheets",
      slug: "mild-steel-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "The most economical option, offering good strength and formability, typically used for non-corrosive or coated environments.",
      image: "/images/ms-ps.webp",
      sizes: ["Various Gauges"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "stainless-steel-perforated-sheets",
      name: "Stainless Steel Perforated Sheets",
      slug: "stainless-steel-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "Excellent corrosion and heat resistance, making them ideal for food processing, chemical plants, and high-moisture architectural use.",
      image: "/images/ss-ps.jpg",
      sizes: ["304 and 316 Grade"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "z-channel-perforated-sheets",
      name: "Z Channel Perforated Sheets",
      slug: "z-channel-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "Perforated sheets formed into a Z-shaped channel, adding structural rigidity, commonly used as rails, framing, or decorative trim.",
      image: "/images/z-channel.png",
      sizes: ["Custom Lengths"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
    {
      id: "c-channel-perforated-sheets",
      name: "C Channel Perforated Sheets",
      slug: "c-channel-perforated-sheets",
      categorySlug: "perforated_sheets",
      description:
        "Perforated sheets formed into a C-shaped channel, providing robust support and ease of mounting, often used for cable trays and light framing.",
      image: "/images/C-Channel.png",
      sizes: ["Custom Widths"],
      customization: ["Based on Requirement"],
      basePrice: 100,
    },
  ],
};
