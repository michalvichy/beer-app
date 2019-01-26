export interface Beer {
  abv: string;
  attributes: string | string[];
  beer_id: number;
  brewer: string;
  category: string;
  country: string;
  image_url: string;
  name: string;
  on_sale: boolean;
  price: string;
  product_id: number;
  size: string;
  style: string;
  type?: string;
}
