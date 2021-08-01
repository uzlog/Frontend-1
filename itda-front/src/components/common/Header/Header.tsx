import S from "../CommonStyles";
import SideDrawer from "./SideDrawer";

type THeader = {
	color: string;
}

const Header = ({ color } : THeader) => {
	return (
		<S.Header.HeaderLayout>
			<S.Header.HeaderLayer>
				<S.Header.LeftBlock color={color}>
						<S.Header.Navigation>홈</S.Header.Navigation>
						<S.Header.Navigation>제품 소개</S.Header.Navigation>
						<S.Header.Navigation>브랜드 이야기</S.Header.Navigation>
				</S.Header.LeftBlock>
				<S.Header.LogoBlock>
					<S.Header.ItdaLogo color={color}/>
				</S.Header.LogoBlock>
				<S.Header.RightBlock>
					<S.Header.CartButton color={color}/>
					<S.Header.LoginButton color={color}/>
				</S.Header.RightBlock>
			</S.Header.HeaderLayer>
		</S.Header.HeaderLayout>
	);
};

export default Header;
