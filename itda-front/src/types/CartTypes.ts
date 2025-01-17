interface ICartProduct {
  id: number;
  imageUrl: string;
  productName: string;
  price: number;
  count: number;
}

interface ISendingCartProduct {
  id: number;
  price: number;
  count: number;
}

export type { ICartProduct, ISendingCartProduct };
