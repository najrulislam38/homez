export interface IFeatures {
  featureImg: string;
  title: string;
  rate: string | number;
  parking?: string | number;
  bedrooms?: string | number;
  area?: string | number;
}

export interface IApartmentType {
  apartmentTypeImage: string;
  apartmentType: string;
  properties: number;
}

export interface IPeople {
  image: string;
  name: string;
  role: string;
  review: string;
}

export interface IBlog {
  blogImg: string;
  blogType: string;
  title: string;
  postDate?: string;
}
