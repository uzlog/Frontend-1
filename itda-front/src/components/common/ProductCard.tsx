import S from "./CommonStyles";
import useLazyLoad from "hooks/useLazyLoad";

type TProductCardPropType = {
  size: string;
  horizontal: boolean;
  productImg: string;
  productName: string;
  productPrice: number;
  seller: string;
  description?: string;
};

type TcardSizeType = {
  [index: string]: TwidthHeightType;
};

type TwidthHeightType = {
  width: number;
  height: number;
  fontSize: number;
};

const ProductCard = ({
  size,
  horizontal,
  productImg,
  productName,
  productPrice,
  seller,
  description = "",
}: TProductCardPropType) => {
  return (
    <>
      {horizontal ? (
        <HorizontalCard
          size={size}
          horizontal={horizontal}
          productImg={productImg}
          productName={productName}
          productPrice={productPrice}
          seller={seller}
        />
      ) : (
        <VerticalCard
          size={size}
          horizontal={horizontal}
          productImg={productImg}
          productName={productName}
          productPrice={productPrice}
          seller={seller}
          description={description}
        />
      )}
    </>
  );
};

const VerticalCard = ({
  size,
  horizontal,
  productImg,
  productName,
  productPrice,
  seller,
  description,
}: TProductCardPropType) => {
  const { imageSrc, imageRef } = useLazyLoad(productImg);

  const verticalCardSize: TcardSizeType = {
    small: { width: 150, height: 200, fontSize: 13 },
    large: { width: 200, height: 250, fontSize: 15 },
    extra: { width: 350, height: 450, fontSize: 18 },
  };
  return (
    <S.ProductCard.CardLayout
      horizontal={horizontal}
      size={verticalCardSize[size]}
    >
      <S.ProductCard.ProductImageHolderLayer horizontal={horizontal}>
        <S.ProductCard.ProductImage
          ref={imageRef}
          alt="이미지"
          src={imageSrc}
          horizontal={horizontal}
        />
      </S.ProductCard.ProductImageHolderLayer>
      <S.ProductCard.ProductDescriptionLayer>
        <S.ProductCard.ProductTitle
          horizontal={horizontal}
          size={verticalCardSize[size]}
        >
          <span>{`[${seller}]`}</span>
          <span>{productName}</span>
        </S.ProductCard.ProductTitle>
        <S.ProductCard.ProductDescription>
          {description}
        </S.ProductCard.ProductDescription>
        <S.ProductCard.ProductPrice
          horizontal={horizontal}
        >{`${productPrice.toLocaleString()}원`}</S.ProductCard.ProductPrice>
      </S.ProductCard.ProductDescriptionLayer>
    </S.ProductCard.CardLayout>
  );
};

const HorizontalCard = ({
  size,
  horizontal,
  productImg,
  productName,
  productPrice,
  seller,
}: TProductCardPropType) => {
  const horizontalCardSize: TcardSizeType = {
    small: { width: 200, height: 100, fontSize: 13 },
    large: { width: 250, height: 125, fontSize: 15 },
    extra: { width: 300, height: 400, fontSize: 16 },
  };

  return (
    <S.ProductCard.CardLayout
      horizontal={horizontal}
      size={horizontalCardSize[size]}
    >
      <S.ProductCard.ProductImageHolderLayer horizontal={horizontal}>
        <S.ProductCard.ProductImage
          alt="이미지"
          src={productImg}
          horizontal={horizontal}
        />
      </S.ProductCard.ProductImageHolderLayer>
      <S.ProductCard.ProductDescriptionLayer>
        <S.ProductCard.ProductTitle
          horizontal={horizontal}
          size={horizontalCardSize[size]}
        >
          [{seller}] {productName}
        </S.ProductCard.ProductTitle>
        <S.ProductCard.ProductPrice
          horizontal={horizontal}
        >{`${productPrice.toLocaleString()}원`}</S.ProductCard.ProductPrice>
      </S.ProductCard.ProductDescriptionLayer>
    </S.ProductCard.CardLayout>
  );
};

export default ProductCard;
