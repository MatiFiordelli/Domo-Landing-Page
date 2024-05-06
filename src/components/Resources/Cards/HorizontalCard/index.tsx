import Button from "../../Buttons";
import ImageCellphone from "../../../../../public/cellphone.webp";
import { dataHorizontalCardProps } from "../../../../types";

export default function HorizontalCard({
	dataCard,
	isScreenXXL,
}: dataHorizontalCardProps) {
	return (
		<article className="bg-transparent col-md-6">
			<div
				className="card rounded-1 border-0 d-flex flex-row overflow-hidden position-relative"
				style={{
					backgroundColor: '#3871FF',
					transform: 'translateY(25%)',
					height: `${isScreenXXL ? '28vw' : '240px'}`,
				}}
			>
				<div className="card-body bg-transparent w-50 position-relative mt-4">
					<h5 className="card-title bg-transparent text-light w-50 text-nowrap h4 ms-2">
						{dataCard.title}
					</h5>
					<p
						className="limit-text-lines-3 card-text bg-transparent ms-2"
						style={{
							color: "#9BB8FF",
							fontSize: "0.75rem",
							fontFamily: "Monserrat-Light",
							lineHeight: "1.5rem",
						}}
					>
						{dataCard.description}
					</p>
					<div
						className="position-absolute bg-transparent"
						style={{ left: "1.5rem", bottom: "2rem" }}
					>
						<Button
							dataButton={{
								type: dataCard.buttonType.type,
								text: dataCard.buttonType.text,
								link: dataCard.link,
							}}
						/>
					</div>
				</div>
				{dataCard.showImage ? (
					<img
						src={ImageCellphone}
						className="d-none d-sm-block d-md-none d-lg-block col-lg-5 bg-transparent position-relative"
						style={{ transform: "translateY(25%)" }}
						alt="Smartphone"
						aria-label="Smartphone"
					/>
				) : (
					<div className="d-none d-sm-block d-md-none d-lg-block w-50 bg-transparent position-relative" />
				)}
			</div>
		</article>
	);
}
