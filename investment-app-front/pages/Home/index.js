import {
	MainContent,
	Description,
	DescriptionContainer,
	Wraper,
	InfoWraper
} from './styles';
import SidePanel from '../../components/SidePanel';
import Image from 'next/image';
import Slider from '../../components/Slider';

const Home = () => {
	return (
		<>
		<SidePanel />
		<MainContent>
			<DescriptionContainer>
				<Description>
					<h1>Co zawiera strona?</h1>
					<p>
						Tutaj sie wpierdoli opis strony, który wymyślimy ale póki co daje
						jakieś przykładowe pierdoły. Lorem ipsum dolor sit, amet consectetur
						adipisicing elit. Ipsa cum nobis soluta unde accusantium minus
						voluptatum libero at, totam, repellat tempora nulla ab perferendis
						corporis quibusdam voluptates vero sequi minima?Lorem ipsum dolor
						sit amet consectetur adipisicing elit. Ipsum soluta odit ullam
						similique repellat voluptatibus dolorum, saepe quis nulla ea facilis
						adipisci laborum ipsa, aliquid nam ducimus maiores praesentium
						fugiat.
					</p>
				</Description>
				<div>
					<Image src='/descriptionImage.jpg' width={400} height={250} />
				</div>
			</DescriptionContainer>

			<Wraper>
				<h1>Możliwości strony</h1>
				<Slider />
			</Wraper>

			<InfoWraper>
				<h1>Skąd pobieramy dane?</h1>
				<p>TUTAJ BĘDZIE OPIS SKĄD BIERZEMY DANE ITP Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus deleniti animi laudantium natus possimus error accusantium fugiat nemo consectetur laborum, quisquam vero voluptas labore maxime dignissimos ipsum nihil quidem voluptatibus? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore sit, nihil rerum aspernatur dolore, sapiente delectus molestias placeat amet, temporibus ducimus nam consequatur? Incidunt inventore sapiente iste laborum tempore?</p>
				<ul>
					<li>NAZWA STRONY NR 1</li>
					<li>NAZWA STRONY NR 2</li>
					<li>NAZWA STRONY NR 3</li>
				</ul>
			</InfoWraper>
		</MainContent>
		</>
	);
};

export default Home;
