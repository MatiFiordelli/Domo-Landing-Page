import AngularJS from "../../../../assets/SVG/languages/angular.svg";
import HTML5 from "../../../../assets/SVG/languages/html5.svg";
import CSS from "../../../../assets/SVG/languages/css.svg";
import NodeJS from "../../../../assets/SVG/languages/nodejs.svg";
import Python from "../../../../assets/SVG/languages/python.svg";
import SASS from "../../../../assets/SVG/languages/sass.svg";

export default function TechnoLanguages() {
	return (
		<div className="bg-transparent d-flex flex-column  justify-content-end m-auto mt-0">
			<figure className="gap-5 bg-transparent pb-4 d-flex justify-content-end">
				<img
					src={`${HTML5}`}
					alt="HTML5"
					title="HTML5"
					aria-label="HTML5"
					className="bg-transparent col-xxl-3"
				/>
				<img
					src={`${CSS}`}
					alt="CSS3"
					title="CSS3"
					aria-label="CSS3"
					className="bg-transparent ps-2 col-xxl-3"
				/>
			</figure>
			<figure className="gap-5 bg-transparent pb-4 d-flex justify-content-end">
				<img
					src={`${SASS}`}
					alt="Sass"
					title="Sass"
					aria-label="Sass"
					className="bg-transparent col-xxl-3"
				/>
				<img
					src={`${NodeJS}`}
					alt="NodeJS"
					title="NodeJS"
					aria-label="NodeJS"
					className="bg-transparent ps-2 col-xxl-3"
				/>
			</figure>
			<figure className="gap-5 bg-transparent d-flex justify-content-end">
				<img
					src={`${AngularJS}`}
					alt="AngularJS"
					title="AngularJS"
					aria-label="AngularJS"
					className="bg-transparent col-xxl-3"
				/>
				<img
					src={`${Python}`}
					alt="Python"
					title="Python"
					aria-label="Python"
					className="bg-transparent ps-2 col-xxl-3"
				/>
			</figure>
		</div>
	);
}
