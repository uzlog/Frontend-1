import S from "./CartStyles";
import Header from "components/common/Header";
import AddressInfo from "./AddressInfo";
import PaymentInfo from "./PaymentInfo";
import CartProduct from "./CartProduct/";
import AddressForm from "./AddressForm";
const Cart = () => {
  return (
    <S.Cart.Layout>
      <S.AddressFormModal.BlackBackground />
      {/* 모달 클릭 여부에 따라 리턴 */}
      <S.Cart.HeaderLayout>
        <Header />
      </S.Cart.HeaderLayout>
      <S.Cart.ModalLayout>
        <AddressForm />
      </S.Cart.ModalLayout>
      <S.Cart.CartHeaderLayout>장바구니</S.Cart.CartHeaderLayout>
      <S.Cart.MainLayout>
        <S.Cart.ContainerLayer>
          <S.Cart.ProductsLayer>
            <CartProduct />
          </S.Cart.ProductsLayer>
          <S.Cart.SummaryLayer>
            <AddressInfo />
            <S.Cart.DivisionLine />
            <PaymentInfo />
          </S.Cart.SummaryLayer>
        </S.Cart.ContainerLayer>
      </S.Cart.MainLayout>
    </S.Cart.Layout>
  );
};

export default Cart;
