import React from "react";
import "../style/sideNav.css";
import SportButton from "./SportButton";
import Zen from "../assets/icon_zen.svg";
import Swim from "../assets/icon_swim.svg";
import Bicycle from "../assets/icon_bicycle.svg";
import Weight from "../assets/icon_weight.svg";

function SideNav() {
	return (
		<div className="sideNav">
			<div className="sportsButton">
				<SportButton src={Zen} alt="vers yoga" />
				<SportButton src={Swim} alt="vers natation" />
				<SportButton src={Bicycle} alt="vers vélo" />
				<SportButton src={Weight} alt="vers musculation" />
			</div>
			<div className="sideNav__box">
			<span className="sideNav__copyright">Copyright, SportSee 2020</span>
		</div>
		</div>
	);
}

export default SideNav;
