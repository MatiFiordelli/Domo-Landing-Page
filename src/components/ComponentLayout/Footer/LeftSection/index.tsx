import Twitter from "../../../../assets/SVG/socialMedia/twitter.svg";
import LinkedIn from "../../../../assets/SVG/socialMedia/linkedin.svg";
import Facebook from "../../../../assets/SVG/socialMedia/facebook.svg";
import Instagram from "../../../../assets/SVG/socialMedia/instagram.svg";
import GitHub from "../../../../assets/SVG/socialMedia/github.svg";
import Gmail from "../../../../assets/SVG/socialMedia/gmail.svg";

export default function LeftSection() {
	return (
		<section className="col order-2 order-sm-1 order-md-1 m-auto my-0">
			<h2
				className="text-light fs-08 mb-sm-3"
				style={{ fontFamily: "Monserrat-Bold" }}
			>
				compleet labs
			</h2>
			<p
				className="mt-2 fs-08"
				style={{ lineHeight: "1.6rem", textWrap: "pretty" }}
			>
				Fusce dapibus, tellus ac cursus commodo, tortor 
				mauris condimentum nibh, ut fermentum massa
				justo sit amet risus. Donec ullamcorper nulla.
			</p>
			<div className="d-flex justify-content-between justify-content-sm-start w-100 gap-1 gap-sm-3 mt-3">
				<a
					href="https://github.com/MatiFiordelli"
					title="GitHub"
					target="_blank"
				>
					<img
						src={GitHub}
						alt="GitHub"
						aria-label="GitHub icon link"
					/>
				</a>
				<a
					href="mailto:matifiordelli@gmail.com"
					title="Gmail"
					target="_blank"
				>
					<img src={Gmail} alt="Gmail" aria-label="Gmail icon link" />
				</a>
				<a
					href="https://www.linkedin.com/in/matiasfiordelli/"
					title="LinkedIn"
					target="_blank"
				>
					<img
						src={LinkedIn}
						alt="LinkedIn"
						aria-label="LinkedIn icon link"
					/>
				</a>
				<a href="#" title="Facebook">
					<img
						src={Facebook}
						alt="Facebook"
						aria-label="Facebook icon link"
					/>
				</a>
				<a href="#" title="Instagram">
					<img
						src={Instagram}
						alt="Instagram"
						aria-label="Instagram icon link"
					/>
				</a>
				<a href="#" title="Twitter">
					<img
						src={Twitter}
						alt="Twitter"
						aria-label="Twitter icon link"
					/>
				</a>
			</div>
		</section>
	);
}
