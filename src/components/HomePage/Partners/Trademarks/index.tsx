import TNW from "../../../../assets/SVG/trademarks/tnw.svg";
import Google from "../../../../assets/SVG/trademarks/google.svg";
import Nike from "../../../../assets/SVG/trademarks/nike.svg";
import Airbnb from "../../../../assets/SVG/trademarks/airbnb.svg";
import ItNewsAfrica from "../../../../assets/SVG/trademarks/itnewsafrica.svg";

export default function Trademarks() {
	return (
		<div className="d-flex flex-row gap-5 justify-content-between bg-transparent text-dark w-75 m-auto overflow-hidden ">
			<a
				href="https://thenextweb.com"
				target="_blank"
				className="bg-transparent"
			>
				<img
					src={`${TNW}`}
					className="bg-transparent"
					title="TNW"
					alt="TNW"
					aria-label="TNW"
				/>
			</a>
			<a
				href="https://www.google.com"
				target="_blank"
				className="bg-transparent"
			>
				<img
					src={`${Google}`}
					className="bg-transparent"
					title="Google"
					alt="Google"
					aria-label="Google"
				/>
			</a>
			<a
				href="https://www.nike.com.ar/"
				target="_blank"
				className="bg-transparent"
			>
				<img
					src={`${Nike}`}
					className="bg-transparent"
					title="Nike"
					alt="Nike"
					aria-label="Nike"
				/>
			</a>
			<a
				href="https://www.airbnb.com.ar/"
				target="_blank"
				className="bg-transparent"
			>
				<img
					src={`${Airbnb}`}
					className="bg-transparent"
					title="Airbnb"
					alt="Airbnb"
					aria-label="Airbnb"
				/>
			</a>
			<a
				href="https://www.itnewsafrica.com/"
				target="_blank"
				className="bg-transparent"
			>
				<img
					src={`${ItNewsAfrica}`}
					className="bg-transparent"
					title="ItNewsAfrica"
					alt="ItNewsAfrica"
					aria-label="ItNewsAfrica"
				/>
			</a>
		</div>
	);
}
