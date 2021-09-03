import S from "./MyPageStyles";
import MyPageTab from "components/MyPage/MyPageTab";

interface IMyPageTabsProps {
  currentSelectedTab: string;
  handleTabClick: (tabName: string) => void;
}

const MyPageTabs = ({
  currentSelectedTab,
  handleTabClick,
}: IMyPageTabsProps) => {
  const tabs = ["주문 내역", "상품 후기", "잇다톡", "개인 정보 수정"];

  return (
    <S.MyPageTabs.Layout>
      <S.MyPageTabs.Layer>
        {tabs.map((tab, index) => (
          <MyPageTab
            category={tab}
            currentSelectedTab={currentSelectedTab}
            handleTabClick={handleTabClick}
          />
        ))}
      </S.MyPageTabs.Layer>
    </S.MyPageTabs.Layout>
  );
};

export default MyPageTabs;
