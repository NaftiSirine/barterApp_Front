// review.model.ts

import { Product } from "./product";

export class Review {
  id: number;
  productId: number;
  comments: string;
  starRating: number;
  status: string;
  product: Product;

  constructor(
    id: number = 0,
    productId: number = 0,
    comments: string = '',
    starRating: number = 0,
    status: string = '',
    product: Product | null = new Product()
  ) {
    this.id = id;
    this.productId = productId;
    this.comments = comments;
    this.starRating = starRating;
    this.status = status;
    this.product = product || new Product();
  }
}
