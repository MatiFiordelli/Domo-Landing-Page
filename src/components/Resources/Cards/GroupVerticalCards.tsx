import { useState } from "react";
import VerticalCard from "./VerticalCard";
import { VerticalCardProps } from "../../../types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const objCard = [
	{
		icon: "pappers",
		title: "Business & Product Concept",
		description:
			"Analyse business and product concepts at Start-up Workshops or Ongoing Projects' Audits and prepare a viable and sensible product roadmap for achieving a perfect market fit.",
		buttonType: { type: "OutlinedGray", text: "Learn more" },
	},
	{
		icon: "devices",
		title: "Web & Mobile Development",
		description:
			"Plan, develop and test high-quality web-applications using AngularJS, NodeJS, JavaScript, TypeScript, HTML5 and SASS/CSS3 frameworks and native mobile languages.",
		buttonType: { type: "OutlinedGray", text: "Learn more" },
	},
	{
		icon: "pencilRuler",
		title: "UX & UI Design",
		description:
			"Sketch information architecture and simple mock-ups, convert them into clickable prototypes and finish with usable interface designs to deliver a good and reliable user experience.",
		buttonType: { type: "OutlinedGray", text: "Learn more" },
	},
];

export default function GroupVerticalCards() {
	const [infoCard] = useState<VerticalCardProps[]>(objCard);

	return (
		<>
			<div className="d-none d-md-flex flex-row gap-4 justify-content-center ">
				<VerticalCard dataCard={infoCard[0]} isSwiper={false} />
				<VerticalCard dataCard={infoCard[1]} isSwiper={false} />
				<VerticalCard dataCard={infoCard[2]} isSwiper={false} />
			</div>

			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper bg-transparent d-flex justify-content-center d-md-none "
			>
				<SwiperSlide className="bg-transparent">
					<VerticalCard dataCard={infoCard[0]} isSwiper={true} />
				</SwiperSlide>
				<SwiperSlide className="bg-transparent">
					<VerticalCard dataCard={infoCard[1]} isSwiper={true} />
				</SwiperSlide>
				<SwiperSlide className="bg-transparent">
					<VerticalCard dataCard={infoCard[2]} isSwiper={true} />
				</SwiperSlide>
			</Swiper>
		</>
	);
}
