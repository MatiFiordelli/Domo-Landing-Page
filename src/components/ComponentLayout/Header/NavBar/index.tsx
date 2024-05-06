import HireUs from "../../../../assets/SVG/hireUs.svg";

export default function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light z-2 bg-transparent pt-5">
			<div className="container-fluid px-0">
				<a 
					className="navbar-brand h6" 
					style={{ fontSize: "0.9rem", fontFamily: 'Monserrat-Bold' }}
					href="#" 
					title="compleet labs"
				>
					compleet labs
				</a>
				<div className="d-grid">
					<button
						className="navbar-toggler shadow-none border-1 border-light"
						style={{ justifySelf: 'end' }}
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span
							className="navbar-toggler-icon"
							style={{ filter: 'invert(1)' }}
						></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
						style={{ backgroundColor: 'rgb(39, 50, 69, .9)' }}
					>
						<ul className="navbar-nav mb-2 mb-lg-0 mx-1 gap-3">
							<li className="nav-item">
								<a
									className="nav-link active h6"
									style={{ fontSize: "0.8rem" }}
									href="#presentation"
									data-text="Home"
									title="Home"
								>
									Home
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link h6"
									style={{ fontSize: "0.8rem" }}
									href="#ourServices"
									data-text="Services"
									title="Services"
								>
									Services
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link h6"
									style={{ fontSize: "0.8rem" }}
									href="#technology"
									data-text="Technology"
									title="Technology"
								>
									Technology
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link h6"
									style={{ fontSize: "0.8rem" }}
									href="#partners"
									data-text="Case studies"
									title="Case studies"
								>
									Case studies
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link h6"
									style={{ fontSize: "0.8rem" }}
									href="#about"
									data-text="About"
									title="About"
								>
									About
								</a>
							</li>
							<li className="nav-item d-flex justify-content-start align-center">
								<img
									src={HireUs}
									alt="Hire us"
									aria-label="Hire us"
									title="matifiordelli@gmail.com"
									className="pe-2 d-block h6"
									style={{ fontSize: "0.8rem" }}
								/>
								<a
									className="nav-link px-0 h6"
									style={{ fontSize: "0.8rem" }}
									href="mailto:matifiordelli@gmail.com"
									data-text="Hire us"
									title="matifiordelli@gmail.com"
								>
									Hire us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}