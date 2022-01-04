export const urlMockData = {
	userMainData(userId) {
		return `../data/user/${userId}.json`;
	},
	userActivity(userId) {
		return `../data/user/${userId}/activity.json`;
	},
	userAverageSessions(userId) {
		return `../data/user/${userId}/average-sessions.json`;
	},
	userPerformance(userId) {
		return `../data/user/${userId}/performance.json`;
	},
};