export namespace HomePageModel{
  export interface ListProduct {
    id: number;
    name: string;
    price: number;
    cover_image: string;
    category: number;
    description: string;
    updatedAt?: string | null;
    createdAt?: string | null;
  }

  export interface Product{
    name : string;
    price : string;
    cover_image : string;
    category: string;
    description : string;
  }

  export interface AddProductResponse {
    message: string;
  }


}
