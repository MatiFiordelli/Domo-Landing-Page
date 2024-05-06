import { useEffect, useState } from "react";
import Pappers from "../../../assets/SVG/icons/pappers.svg";
import Devices from "../../../assets/SVG/icons/devices.svg";
import PencilRuler from "../../../assets/SVG/icons/pencilRuler.svg";
import { IconProps } from "../../../types";

export default function Icon({ name, title, isSwiper }: IconProps) {
	const [icon, setIcon] = useState<React.SetStateAction<string | null>>(null);

	useEffect(() => {
		if (name === "pappers") setIcon(Pappers);
		if (name === "devices") setIcon(Devices);
		if (name === "pencilRuler") setIcon(PencilRuler);
	}, []);

	return (
		<>
			{icon && (
				<figure
					className="rounded-pill m-auto position-relative"
					style={{
						backgroundColor: "#3871FF",
						width: `${isSwiper ? '8vw' : '4vw'}`,
						height: `${isSwiper ? '8vw' : '4vw'}`,
					}}
				>
					<img
						src={icon as string}
						alt={title}
						title={title}
						aria-label={title}
						className="m-auto p-2 bg-transparent position-absolute z-3 w-75"
						style={{
							top: "50%",
							left: "50%",
							transform: "translate(-50%, -50%)",
						}}
					/>
				</figure>
			)}
		</>
	);
}
