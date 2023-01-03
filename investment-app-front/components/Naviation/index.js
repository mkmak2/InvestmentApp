import { StyledNavbar, NavbarButton } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
	const [active, setActive] = useState(true);

	const handleClick = () => {
		setActive(!active);
	};

	const color = active ? '#fff' : 'transparent';
	const width = active ? 380 : 0;
	const visibility = active ? 'visible' : 'hidden';
	const delayWidth = active ? 0 : 0.5;
	const delayColor = active ? 0.5 : 0;

	return (
		<>
			<StyledNavbar
				color={color}
				width={width}
				visibility={visibility}
				delayColor={delayColor}
				delayWidth={delayWidth}>
				<span>
					<Link href='/'>
						<p>home</p>
					</Link>
				</span>
				<span>
					<Link href='/Investments'>
						<p>investments</p>
					</Link>
				</span>
				<span>
					<Link href='/Profile'>
						<p>profile</p>
					</Link>
				</span>
			</StyledNavbar>
			<NavbarButton>
				<span onClick={handleClick}>
					<FontAwesomeIcon icon={faBars} />
				</span>
			</NavbarButton>
		</>
	);
};
export default Navigation;
