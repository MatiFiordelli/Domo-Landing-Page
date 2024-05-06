import TechnoInfo from "./TechnoInfo";
import TechnoLanguages from "./TechnoLanguages";

export default function Technology() {
	return (
		<section
			className="container-fluid position-relative z-1 pb-5 px-0 text-center text-md-start m-auto"
			style={{ backgroundColor: "#3871FF", paddingTop: "10vw" }}
		>
			<div className="w-75 m-auto bg-transparent py-5 d-flex flex-column flex-md-row row-cols-md-2">
				<TechnoInfo />
				<TechnoLanguages />
			</div>
		</section>
	);
}
