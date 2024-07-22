interface Photo {
  small: string;
  medium?: string;
  large?: string;
  full?: string;
}

export default interface Pet {
  id: number;
  name: string;
  description: string;
  gender: string;
  species: string;
  status: string;
  url: string;
  photos: Photo[];
  primary_photo_cropped: string;
}
