import { useState } from "react";
import Button from "../../Resources/Buttons";

export default function Presentation() {
	const [buttonInfo] = useState([
		{
			type: "OutlinedLightGray",
			text: "Learn more",
		},
		{
			type: "FilledBlue",
			text: "Our projects →",
			link: "https://github.com/MatiFiordelli",
		},
	]);

	return (
		<section
			className="m-auto bg-transparent w-75"
			style={{ paddingTop: "15vw", paddingBottom: "12vw" }}
		>
			<div className="bg-transparent position-relative col-12 col-md-10 d-flex flex-column align-items-center align-items-md-start z-2 text-center text-md-start">
				<p className="display-6 fw-bolder bg-transparent" style={{lineHeight: '3rem'}}>
					We build beautiful and reliable web solutions
				</p>
				<p
					className="bg-transparent fw-lighter mb-4"
					style={{ color: "#B2B2B2", textWrap: 'pretty' }}
				>
					We strongly believe that comunication, trust and
					transparency are the essential elements of successful business
					relation.<br />
					Ready for the journey?
				</p>
				<div className="d-flex gap-3 bg-transparent">
					<Button dataButton={buttonInfo[0]} />
					<Button dataButton={buttonInfo[1]} />
				</div>
			</div>
		</section>
	);
}
