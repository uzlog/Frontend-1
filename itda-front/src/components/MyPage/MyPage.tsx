import { useState } from "react";
import S from "./MyPageStyles";
import Header from "components/common/Header";
import MyPageTabs from "components/MyPage/MyPageTabs";
import MyReview from "components/MyPage/MyReview";
import MyPageOrderList from "./MyPageOrderList/";
import MyInfoEditBefore from "./MyInfoEditBefore";
import MyInfoEditAfter from "./MyInfoEditAfter";
import { SellerInfoEdit } from "./SellerPage";

const MyPage = () => {
  const [currentSelectedTab, setCurrentSelectedTab] = useState("주문 내역");

  //임시로 만든 로그인 상태: true => 기본정보수정 페이지, 판매자 페이지 보여짐
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  //임시로 만든 판매자 식별 상태 => seller화면 보기: true
  const [isSeller, setIsSeller] = useState(false);

  const handleTabClick = (tabName: string) => {
    setCurrentSelectedTab(tabName);
  };

  return (
    <>
      <S.MyPage.Layout>
        <S.MyPage.HeaderLayout>
          <Header isSticky={true} />
        </S.MyPage.HeaderLayout>
        <S.MyPage.MainLayout>
          <S.MyPage.SideTabLayout>
            <MyPageTabs
              currentSelectedTab={currentSelectedTab}
              handleTabClick={handleTabClick}
            />
          </S.MyPage.SideTabLayout>
          <S.MyPage.ContentLayout>
            <S.MyPage.ContentLayer>
              {currentSelectedTab === "주문 내역" && <MyPageOrderList />}
              {currentSelectedTab === "상품 후기" && <MyReview />}
              {currentSelectedTab === "잇다톡"}
              {currentSelectedTab === "개인 정보 수정" &&
                (!isLoggedIn ? (
                  <MyInfoEditBefore />
                ) : isSeller ? (
                  <SellerInfoEdit />
                ) : (
                  <MyInfoEditAfter />
                ))}
            </S.MyPage.ContentLayer>
          </S.MyPage.ContentLayout>
        </S.MyPage.MainLayout>
      </S.MyPage.Layout>
    </>
  );
};

export default MyPage;
