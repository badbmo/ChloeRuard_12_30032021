import React from "react";
import "../style/dashboard.css";
import Headline from "./Headline";
import MacroWidget from "./MacroWidget";
import Fire from "../assets/icon_fire.svg";
import Chicken from "../assets/icon_chicken.svg";
import Apple from "../assets/icon_apple.svg";
import Hamburger from "../assets/icon_cheeseburger.svg";
import ChartGoal from "./ChartGoal";
import ChartKpi from "./ChartKpi";
import ChartRadar from "./ChartRadar";
import ChartWeight from "./ChartWeight";
import useApi from "../hooks/useApi";
import { useParams } from "react-router-dom";

function Dashboard() {
	const { userId } = useParams();

	const url = {
		userMainData(userId) {
			return `http://localhost:3000/user/${userId}`;
		},
		userActivity(userId) {
			return `http://localhost:3000/user/${userId}/activity`;
		},
		userAverageSessions(userId) {
			return `http://localhost:3000/user/${userId}/average-sessions`;
		},
		userPerformance(userId) {
			return `http://localhost:3000/user/${userId}/performance`;
		},
	};

	const [errorMain, isLoadingMain, dataMain] = useApi(url.userMainData(userId));
	console.log(dataMain);

	const [errorActivity, isLoadingActivity, dataActivity] = useApi(url.userMainData(userId));
	console.log(errorActivity, isLoadingActivity, dataActivity);

	if (errorMain) {
		return <p>{errorMain.message}</p>;
	}

	if (isLoadingMain) {
		// return <Loader />;
		return <p>ça charge !</p>;
	}

	return (
		<section className="dashboard">
			<Headline name={dataMain?.data?.userInfos.firstName} />
			<section className="dashboard__data">
				<section className="dashboard__charts">
					<ChartWeight />
					<ChartGoal />
					<ChartRadar />
					<ChartKpi />
				</section>
				<section className="dashboard__macroList">
					<MacroWidget src={Fire} amount="1930kCal" type="Calories" color="red" />
					<MacroWidget src={Chicken} amount="155g" type="Protéines" color="blue" />
					<MacroWidget src={Apple} amount="290g" type="Glucides" color="yellow" />
					<MacroWidget src={Hamburger} amount="50g" type="Lipides" color="pink" />
				</section>
			</section>
		</section>
	);
}

export default Dashboard;
