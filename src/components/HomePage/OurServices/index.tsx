import GroupVerticalCards from "../../Resources/Cards/GroupVerticalCards";

export default function OurServices() {
	return (
		<section className="position-relative w-75 m-auto d-flex flex-column text-center py-5 bg-transparent z-2">
			<h2 className="bg-transparent">Our Services</h2>
			<p className="bg-transparent mb-5" style={{ color: "#B2B2B2", textWrap: 'pretty' }}>
				We feel very strong about our skills when it comes to planning,
				designing and coding applications. Here is what we love to do!
			</p>

			<div>
				<GroupVerticalCards />
			</div>
		</section>
	);
}
