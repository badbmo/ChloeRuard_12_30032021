import { useEffect, useState } from "react";

/**
 * Custom hook to fetch data from API or mocked data
 * @param {string} url url to fetch data from
 * @returns {object} error, isloading, data
 */

export default function useApi(url) {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState({});

	function CheckError(response) {
		//check if >= 200 && response.status <= 299
		if (!response.ok) {
			throw Error(response.statusText);
		} else {
			return response.json();
		}
	}

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then(CheckError)
			.then((result) => {
				setData(result);
				setIsLoading(false);
			})
			.catch((error) => {
				setError(error);
				setIsLoading(false);
			});
	}, [url]);

	return [error, isLoading, data];
}
