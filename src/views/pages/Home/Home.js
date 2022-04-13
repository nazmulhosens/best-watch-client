import React from "react";
import "./home.css";
import Banner from "../../components/Banner/Banner";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import HomeProducts from "../../components/HomeProducts/HomeProducts";

const Home = () => {
	return (
		<div className="home-container">
			<div className="side-bar">
				<ul className="socila-icons">
					<li className="socila-icon">
						<a href="#">
							<i class="fab fa-twitter"></i>
						</a>
					</li>
					<li className="socila-icon">
						<a href="#">
							<i class="fab fa-linkedin-in"></i>
						</a>
					</li>
					<li className="socila-icon">
						<a href="#" className="fb">
							<i class="fab fa-facebook-f"></i>
						</a>
					</li>
				</ul>
				<h6>Best Online luxery Watch Store</h6>
			</div>
			<div className="home">
				<HomeBanner />
				<Banner />
				<HomeProducts />
			</div>
		</div>
	);
};

export default Home;
