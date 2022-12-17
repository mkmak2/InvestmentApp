import { StyledNavbar, StyledLink } from './styles';

const Navigation = () => {
	return (
		<StyledNavbar>
			<StyledLink href='/Home'>Strona Głowna</StyledLink>
			<StyledLink href='/Investments'>Przegląd Inwestycji</StyledLink>
			<StyledLink href='/Profile'>Profil</StyledLink>
		</StyledNavbar>
	);
};

export default Navigation;
