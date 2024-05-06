import Button from "../../Buttons";
import { dataVerticalCardProps } from "../../../../types";
import Icon from "../../Icon";

export default function VerticalCard({ dataCard, isSwiper }: dataVerticalCardProps) {
	return (
		<article>
			<div
				className="card pt-4 m-auto mt-0"
				style={{
					width: `${isSwiper ?'65%' :'23.5vw'}`,
					height: `${isSwiper ?'370px' :'130%'}`,
					borderRadius: '2px',
				}}
			>
				<Icon name={dataCard.icon} title={dataCard.title}  isSwiper={isSwiper}/>
				<div className="card-body bg-light">
					<h5
						className="card-title bg-transparent d-inline-block h6"
						style={{ height: "2em" }}
					>
						{dataCard.title}
					</h5>
					<p
						className="card-text bg-transparent fs-08 limit-text-lines-5"
						style={{
							color: "#808080",
							fontFamily: "Monserrat-Light",
							lineHeight: "1.5rem",
							textWrap: "pretty",
						}}
					>
						{dataCard.description}
					</p>
					<div
						className="position-absolute bottom-0 pb-4 z-4 bg-transparent"
						style={{
							left: "50%",
							transform: "translateX(-50%)",
						}}
					>
						<Button dataButton={dataCard.buttonType} />
					</div>
				</div>
			</div>
		</article>
	);
}
