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
import useApi from "../utils/hooks/useApi";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { useContext } from "react";
import { FetchContext } from "../utils/context/fetchContext"
import {urlApi} from "../utils/const/urlApi"
import {urlMockData} from "../utils/const/urlMockData"

/**
 * Wrapper component displaying charts and data components
 * @returns {JSX} React component
 */

function Dashboard() {
	const { userId } = useParams();

	const {fetch} = useContext(FetchContext);
	const url = (fetch === 'API' ? urlApi : urlMockData)

	//check in browser console where the data come from
	if(url===urlApi){
		console.log("fetch data from API");
	}
	if(url===urlMockData)
	console.log("fetch data from mocked data");

	const [errorMain, isLoadingMain, dataMain] = useApi(url.userMainData(userId));
	const [errorActivity, isLoadingActivity, dataActivity] = useApi(url.userActivity(userId));
	const [errorSessions, isLoadingSessions, dataSessions] = useApi(url.userAverageSessions(userId));
	const [errorPerformance, isLoadingPerformance, dataPerformance] = useApi(url.userPerformance(userId));

	const error = errorMain || errorActivity || errorSessions || errorPerformance;

	if (error) {
		return <p>{error.message}</p>;
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
