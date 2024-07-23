interface Address {
  address1?: string;
  address2?: string;
  city: string;
  country?: string;
  postcode: string;
  state?: string;
}

interface Photo {
  small?: string;
  medium?: string;
  large?: string;
  full?: string;
}

interface Breeds {
  mixed: boolean;
  primary: string;
  secondary: string;
}

interface Attributes {
  declawed: boolean;
  house_trained: boolean;
  spayed_neutered: boolean;
  special_needs: boolean;
}

interface Contact {
  address: Address;
  email?: string;
  phone?: string;
}

export default interface Pet {
  id: number;
  name: string;
  gender: string;
  species: string;
  age: string;
  status: string;
  breeds: Breeds;
  primary_photo_cropped: Photo | null;
  attributes: Attributes;
  contact: Contact;
  description: string;
  photos: Photo[];
  size: string;
  url: string;
  tags: string[];
  environment: { cats: boolean; dogs: boolean; children: boolean };
}
