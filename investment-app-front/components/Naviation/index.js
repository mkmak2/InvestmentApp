import { StyledNavbar, StyledLink } from './styles';

const Navigation = () => {
	return (
		<StyledNavbar>
			<StyledLink href='/Home'>Strona Głowna</StyledLink>
			<StyledLink href='/'>Przegląd Inwestycji</StyledLink>
			<StyledLink href='/'>Profil</StyledLink>
		</StyledNavbar>
	);
};

export default Navigation;
