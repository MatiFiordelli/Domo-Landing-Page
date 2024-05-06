import { useState } from "react";
import HorizontalCard from "../../Resources/Cards/HorizontalCard";
import Trademarks from "./Trademarks";
import { HorizontalCardProps } from "../../../types";

const objCard = [
	{
		title: "Get in touch with us",
		description:
			"Maecenas sed diam eget risus varius blandit sit amet  non magna.",
		buttonType: {
			type: "OutlinedBlue",
			text: "Hire us",
		},
		showImage: false,
		link: "mailto:matifiordelli@gmail.com",
	},
	{
		title: "Our Projects",
		description:
			"Maecenas sed diam eget risus varius blandit sit amet  non magna.",
		buttonType: {
			type: "OutlinedBlue",
			text: "See Projects",
		},
		showImage: true,
		link: "https://www.linkedin.com/in/matiasfiordelli/",
	},
];

export default function Partners() {
	const [infoCard] = useState<HorizontalCardProps[]>(objCard);

	return (
		<section
			className="container-fluid position-relative z-1 bg-light text-dark p-0 d-flex flex-column "
			style={{height: '200%'}}
		>
			<div className="bg-transparent mt-5">
				<h6
					className="bg-transparent text-secondary w-75 m-auto text-center mt-5"
					style={{
						fontSize: '0.55rem',
						fontFamily: 'Circular',
						letterSpacing: '1px',
					}}
				>
					CLIENTS WE WORKED WITH
				</h6>
				<Trademarks />
				<div
					className="bg-transparent d-flex d-xxl-none flex-column flex-md-row gap-4 m-auto mt-3 w-75"
				>
					<HorizontalCard dataCard={infoCard[0]} isScreenXXL={false}/>
					<HorizontalCard dataCard={infoCard[1]} isScreenXXL={false} />
				</div>

				<div
					className="bg-transparent d-none d-xxl-flex flex-column flex-md-row gap-4 m-auto mt-3 w-75"
				>
					<HorizontalCard dataCard={infoCard[0]} isScreenXXL={true} />
					<HorizontalCard dataCard={infoCard[1]} isScreenXXL={true} />
				</div>
			</div>
		</section>
	);
}
