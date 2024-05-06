import AnimatedSpinner from "./AnimatedSpinner";

export default function OverlaySpinner() {
	return (
		<section
			className="d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<AnimatedSpinner />
		</section>
	);
}
