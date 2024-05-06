import { ButtonInfoProps } from "../../../types";

export default function Button({ dataButton }: ButtonInfoProps) {
	if (dataButton.type === "FilledBlue")
		return (
			<a
				href={dataButton.link as string}
				target="_blank"
				className="bg-transparent"
				title={dataButton.link}
			>
				<button 
					type="button" 
					className="btn btn-primary px-4 py-2 fs07 text-nowrap"
					style={{borderRadius: '2px'}}
				>
					{dataButton.text}
				</button>
			</a>
		);
	if (dataButton.type === "OutlinedBlue")
		return (
			<button
				type="button"
				className="btn btn-outline-primary px-4 py-2 fs07 text-nowrap text-light"
				style={{borderRadius: '2px', border:'1px solid #9BB8FF'}}
			>
				{dataButton.text}
			</button>
		);
	if (dataButton.type === "OutlinedGray")
		return (
			<button
				type="button"
				className="btn btn-outline-secondary px-4 py-2 fs07 text-nowrap"
				style={{borderRadius: '2px'}}
			>
				{dataButton.text}
			</button>
		);
	if (dataButton.type === "OutlinedLightGray")
		return (
			<button
				type="button"
				className="btn btn-outline-secondary px-4 py-2 fs07 text-nowrap"
				style={{borderRadius: '2px', color: '#B2B2B2'}}
			>
				{dataButton.text}
			</button>
		);
	if (dataButton.type === "OutlinedWhite")
		return (
			<a
				href={dataButton.link as string}
				target="_blank"
				className="bg-transparent"
				title={dataButton.link}
			>
				<button
					type="button"
					className="btn btn-outline-light px-4 py-2 fs07 text-nowrap"
					style={{borderRadius: '2px'}}
				>
					{dataButton.text}
				</button>
			</a>
		);
}
