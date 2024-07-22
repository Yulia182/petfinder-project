interface Photo {
  small?: string;
  medium?: string;
  large?: string;
  full?: string;
}

export default interface Pet {
  id: number;
  name: string;
  gender: string;
  species: string;
  size: string;
  age: string;
  status: string;
  breeds: { mixed: boolean; primary: string; secondary: string };
  primary_photo_cropped: Photo | null;
}
