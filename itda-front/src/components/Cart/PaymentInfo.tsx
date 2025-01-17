import S from "./CartStyles";
import GradientButton from "components/common/Atoms/GradientButton";
import { selectedProduct, cartProductData } from "stores/CartAtoms";
import { useRecoilValue } from "recoil";
const PaymentInfo = () => {
  const cartProductState = useRecoilValue(cartProductData);
  const subTitles = ["주문금액", "배송비", "합계"];
  const subTitleList = subTitles.map((title, idx) => (
    <li key={idx}>
      <S.PaymentInfo.SubTitle key={idx}>{title}</S.PaymentInfo.SubTitle>
    </li>
  ));

  const calculateTotalAmount = () => {
    return cartProductState.reduce((acc, product) => {
      const { price, count } = product;
      acc += price * count;
      return acc;
    }, 0);
  };

  const totalAmount = calculateTotalAmount();
  return (
    <S.PaymentInfo.Layout>
      <S.PaymentInfo.Title>결제 상세</S.PaymentInfo.Title>
      <S.PaymentInfo.ContentsLayer>
        <S.PaymentInfo.SubTitleBlock>
          {subTitleList}
        </S.PaymentInfo.SubTitleBlock>
        <S.PaymentInfo.ContentsBlock>
          <S.PaymentInfo.Contents>
            {totalAmount.toLocaleString()}
          </S.PaymentInfo.Contents>
          <S.PaymentInfo.Contents>0원</S.PaymentInfo.Contents>
          <S.PaymentInfo.Contents>
            {totalAmount.toLocaleString()}원
          </S.PaymentInfo.Contents>
        </S.PaymentInfo.ContentsBlock>
      </S.PaymentInfo.ContentsLayer>
      <GradientButton width={"18rem"} disabled={true}>
        구매 하기
      </GradientButton>
    </S.PaymentInfo.Layout>
  );
};

export default PaymentInfo;
