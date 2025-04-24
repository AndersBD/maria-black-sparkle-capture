export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthdate: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  service: string;
  jewelryType: string;
  jewelryMaterial: string;
  piercingLocation: string;
  appointmentDate: string;
  appointmentTime: string;
  marketingConsent: boolean;
  smsConsent: boolean;
  emailConsent: boolean;
  storeLocation: string;
  piercerName: string;
  notes: string;
  signature: string;
}

export interface Service {
  name: string;
  description: string;
  price: string;
}

export interface StoreLocation {
  id: string;
  name: string;
}

export interface JewelryOption {
  type: string;
  materials: string[];
}

export interface PiercingLocation {
  area: string;
  positions: string[];
}
