export type ProductCategory = "servo_motor" | "motor_driver" | "software_firmware";

export type Product = {
  id: number;
  name: string;
  slug: string;
  category: ProductCategory;
  short_description: string;
  description: string;
  key_features: string[];
  specifications: Record<string, string>;
  main_image?: string | null;
  is_featured: boolean;
  order: number;
};

export type ResourceCategory =
  | "datasheet"
  | "manual"
  | "firmware"
  | "software"
  | "drawing"
  | "wiring_guide"
  | "installation_guide"
  | "other";

export type Resource = {
  id: number;
  title: string;
  slug: string;
  product: string;
  category: ResourceCategory;
  description: string;
  version: string;
  file?: string | null;
  external_url?: string | null;
  published_at: string;
  is_public: boolean;
  order: number;
};

export type ApplicationExample = {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  image?: string | null;
  related_products: string[];
  order: number;
  is_public: boolean;
};

export type InquiryPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  product_interest: string;
  quantity: string;
  application: string;
  message: string;
};
