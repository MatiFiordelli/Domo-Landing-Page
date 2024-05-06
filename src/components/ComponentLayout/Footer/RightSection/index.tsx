
export default function RightSection() {
	return (
		<section className="col order-1 order-sm-1 order-md-2 m-auto mt-0">
			<div className="d-flex flex-row justify-content-between">
				<div
					className="d-flex flex-column fs08 "
					style={{ lineHeight: "1.9rem" }}
				>
					<h6
						className="text-light mb-2 mb-sm-3 fs-055"
						style={{ fontFamily: "Monserrat-Bold" }}
					>
						SITEMAP
					</h6>
					<a
						href="#presentation"
						title="Home"
						style={{ fontSize: "0.8rem" }}
					>
						Home
					</a>
					<a
						href="#technology"
						title="Technology"
						style={{ fontSize: "0.8rem" }}
					>
						Technology
					</a>
					<a
						href="#ourServices"
						title="Services"
						style={{ fontSize: "0.8rem" }}
					>
						Services
					</a>
					<a
						href="#about"
						title="About"
						style={{ fontSize: "0.8rem" }}
					>
						About
					</a>
				</div>
				<div
					className="d-flex flex-column"
					style={{ lineHeight: "1.9rem" }}
				>
					<h6
						className="text-light mb-2 mb-sm-3 fs-055 text-nowrap"
						style={{ fontFamily: "Monserrat-Bold" }}
					>
						CASE STUDIES
					</h6>
					<a
						href="https://www.swiss.com"
						target="_blank"
						title="Swiss Airlines"
						className="text-nowrap"
						style={{ fontSize: "0.8rem" }}
					>
						Swiss Airlines
					</a>
					<a
						href="https://www.google.com/"
						target="_blank"
						title="Google"
						style={{ fontSize: "0.8rem" }}
					>
						Google
					</a>
					<a
						href="https://www.apple.com/la/"
						target="_blank"
						title="Apple"
						style={{ fontSize: "0.8rem" }}
					>
						Apple
					</a>
					<a
						href="https://www.nike.com.ar/"
						target="_blank"
						title="Nike"
						style={{ fontSize: "0.8rem" }}
					>
						Nike
					</a>
				</div>
				<div
					className="d-flex flex-column"
					style={{ lineHeight: "1.9rem" }}
				>
					<h6
						className="text-light h6 mb-2 mb-sm-3 fs-055"
						style={{ fontFamily: "Monserrat-Bold" }}
					>
						CONTACT
					</h6>
					<a
						href="https://github.com/MatiFiordelli"
						title="Jobs"
						style={{ fontSize: "0.8rem" }}
					>
						Jobs
					</a>
					<a
						href="mailto:matifiordelli@gmail.com"
						target="_blank"
						title="Hire us"
						style={{ fontSize: "0.8rem" }}
					>
						Hire us
					</a>
				</div>
			</div>
		</section>
	);
}
