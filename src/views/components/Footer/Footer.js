import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

const footerInfo = [
	{
		title: "Project",
		links: [
			"Changelog",
			"Status",
			"Commission Icons",
			"License",
			"All Versions",
		],
	},
	{
		title: "Help",
		links: ["FAQs", "Troubleshooting", "Support", "Contact Us"],
	},
	{
		title: "Community",
		links: ["GitHub", "Issues", "Icon Requests", "Twitter"],
	},
];

const Footer = () => {
	return (
		<div>
			<div className="feedback text-center p-4">
				<p>We’d love to hear what you think!</p>
				<Button
					className="rounded-pill fw-bold border-2 px-3"
					variant="outline-dark"
				>
					{" "}
					Give feedback
				</Button>
			</div>
			<div className="footer m-0">
				<Container className="p-5 pb-2">
					<Row>
						<Col xs="12" md="6">
							<h4>Go Make Something Awesome</h4>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eaque non officiis nesciunt velit, inventore modi!
							</p>
						</Col>
						{footerInfo.map((info, index) => (
							<Col
								key={index}
								xs="12"
								md="2"
								className="d-none d-sm-block"
							>
								<h6 className="fw-bold">{info.title}</h6>
								{info.links.map((link, index) => (
									<a
										key={index}
										href="#nothing"
										className="border-0 bg-none d-block"
									>
										{link}
									</a>
								))}
							</Col>
						))}
					</Row>
					<hr />
					<p className="text-center copy-right-text m-0 pb-3">
						© 2022 Walmart. All Rights Reserved.{" "}
					</p>
				</Container>
			</div>
		</div>
	);
};

export default Footer;
