import { ICommonInfo, ICommonWriterInfo } from "./CommonTypes";

export interface IProductDetail extends ICommonInfo {
  price: number;
  salesUnit: string;
  weight: string;
  deliveryFee: number;
  deliveryFeeCondition: string;
  origin: string;
  packagingType: string;
  detailDescription: string;
  seller: ICommonInfo;
  notice: string;
}

export interface IReview {
  id: number;
  writer: ICommonWriterInfo;
  date: string;
  image: string[];
  contents: string;
}
