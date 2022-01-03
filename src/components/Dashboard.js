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
import Loader from "./Loader";

/**
 * Wrapper component displaying charts and data components
 * @returns {JSX} React component
 */

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
	const [errorActivity, isLoadingActivity, dataActivity] = useApi(url.userActivity(userId));
	const [errorSessions, isLoadingSessions, dataSessions] = useApi(url.userAverageSessions(userId));
	const [errorPerformance, isLoadingPerformance, dataPerformance] = useApi(url.userPerformance(userId));

	if (errorMain || errorActivity || errorSessions || errorPerformance) {
		return <p>{errorMain.message}</p>;
	}

	if (isLoadingMain || isLoadingActivity || isLoadingSessions || isLoadingPerformance) {
		return <Loader />;
	}

	return (
		<section className="dashboard">
			<Headline name={dataMain?.data?.userInfos.firstName} />
			<section className="dashboard__data">
				<section className="dashboard__charts">
					<ChartWeight activity={dataActivity?.data?.sessions}/>
					<ChartGoal averageSessions={dataSessions?.data?.sessions}/>
					<ChartRadar performance={dataPerformance?.data?.data}/>
					<ChartKpi score={dataMain?.data?.todayScore} />
				</section>
				<section className="dashboard__macroList">
					<MacroWidget src={Fire} amount={dataMain?.data?.keyData.calorieCount} unit="kCal" type="Calories" color="red" />
					<MacroWidget src={Chicken} amount={dataMain?.data?.keyData.proteinCount} unit="g" type="Protéines" color="blue" />
					<MacroWidget src={Apple} amount={dataMain?.data?.keyData.carbohydrateCount} unit="g" type="Glucides" color="yellow" />
					<MacroWidget src={Hamburger} amount={dataMain?.data?.keyData.lipidCount} unit="g" type="Lipides" color="pink" />
				</section>
			</section>
		</section>
	);
}

export default Dashboard;
