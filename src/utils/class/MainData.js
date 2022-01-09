export default class MainData {
	/**
	 * User Data
	 * @param { number } id
	 * @param { string } firstName
	 * @param { number } todayScore
	 * @param { object } keyData
	 */
	constructor(id, firstName, todayScore, keyData) {
			this.id = id;
			this.firstName = firstName;
			this.todayScore = todayScore;
			this.keyData = keyData;
	}
}