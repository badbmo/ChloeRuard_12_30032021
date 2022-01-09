import MainData from "../class/MainData";
import ActivityData from "../class/ActivityData";
import PerformanceData from "../class/PerformanceData";
import SessionsData from "../class/SessionsData";
import PropTypes from "prop-types";

/**
 * Custom hook to convert the JSON response into js object
 * @param {object} result result from promise response.json in fetch (from useAPI)
 * @param {string} url url to fetch data from (from useAPI)
 * @returns {object} data converted into js object
 */

function ConvertData(result, url) {

	function findEndPoint(url) {
		const endpoint = url.split("user/").pop();
		if (endpoint.endsWith(".json")) {
			return endpoint.replace(".json", "");
		} else {
			return endpoint;
		}
	}

	function mapper(endpoint) {
		if (endpoint.includes("/activity")) {
			return new ActivityData(
				result.data.userId,
				result.data.sessions
			);
		}
		if (endpoint.includes("/average-sessions")) {
			return new SessionsData(
				result.data.userId,
				result.data.sessions
			);
		}
		if (endpoint.includes("/performance")) {
			return new PerformanceData(
				result.data.userId,
				result.data.data
			);
		}
		if (!endpoint.includes("/")) {
			return new MainData(
				result.data.id,
				result.data.userInfos.firstName,
				result.data.todayScore,
				result.data.keyData
			);
		}
	}

	return mapper(findEndPoint(url));
}

ConvertData.propTypes = {
  result: PropTypes.object,
	url: PropTypes.string
}

export default ConvertData;
