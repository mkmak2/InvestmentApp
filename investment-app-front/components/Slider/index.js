import { StyledSlider, StyledButton, Description } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Slider = () => {
	const [count, SetCount] = useState(0);
	const option = [
		{
			image: '4.jpg',
			title: 'Przegląd inwestycji',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis voluptas adipisci numquam modi obcaecati beatae. Dicta impedit velit ipsam atque? Sed accusantium ab ipsa neque a optio molestias ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit doloremque a dolor debitis tempora itaque quam quaerat quasi laudantium! Autem delectus quia assumenda numquam qui! Labore a optio ullam.',
		},
        {
			image: '5.jpg',
			title: 'Symulujacja inwestycji',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis voluptas adipisci numquam modi obcaecati beatae. Dicta impedit velit ipsam atque? Sed accusantium ab ipsa neque a optio molestias ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit doloremque a dolor debitis tempora itaque quam quaerat quasi laudantium! Autem delectus quia assumenda numquam qui! Labore a optio ullam.',
		},
        {
			image: '1.jpg',
			title: 'Predykcja ceny',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis voluptas adipisci numquam modi obcaecati beatae. Dicta impedit velit ipsam atque? Sed accusantium ab ipsa neque a optio molestias ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit doloremque a dolor debitis tempora itaque quam quaerat quasi laudantium! Autem delectus quia assumenda numquam qui! Labore a optio ullam.',
		},
        {
			image: '2.jpg',
			title: 'Kalkulator inwestycyjny - wirtualny portfel',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis voluptas adipisci numquam modi obcaecati beatae. Dicta impedit velit ipsam atque? Sed accusantium ab ipsa neque a optio molestias ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit doloremque a dolor debitis tempora itaque quam quaerat quasi laudantium! Autem delectus quia assumenda numquam qui! Labore a optio ullam.',
		},
        {
			image: '3.jpg',
			title: 'Porónywanie wykresów',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis voluptas adipisci numquam modi obcaecati beatae. Dicta impedit velit ipsam atque? Sed accusantium ab ipsa neque a optio molestias ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro impedit doloremque a dolor debitis tempora itaque quam quaerat quasi laudantium! Autem delectus quia assumenda numquam qui! Labore a optio ullam.',
		}
	];
	let activeOption = option[count];

	const handleClick = side => {
		if (!side) {
			SetCount(count + 1);
			if (count == option.length - 1) SetCount(0);
		} else {
			SetCount(count - 1);
			if (count == 0) SetCount(option.length - 1);
		}
	};

	return (
		<>
			<StyledSlider image={activeOption.image}>
				<StyledButton onClick={() => handleClick(0)} style={{ left: 20 }}>
					<FontAwesomeIcon
						style={{ backgroundColor: 'transparent' }}
						icon={faAngleLeft}
					/>
				</StyledButton>
				<StyledButton onClick={() => handleClick(1)} style={{ right: 20 }}>
					<FontAwesomeIcon
						style={{ backgroundColor: 'transparent' }}
						icon={faAngleRight}
					/>
				</StyledButton>
			</StyledSlider>

			<Description>
				<h2>{activeOption.title}</h2>
				<p>{activeOption.description}</p>
			</Description>
		</>
	);
};

export default Slider;
