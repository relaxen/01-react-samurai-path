import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '7ca12056-5135-4c87-b992-4dc27fe7ff64'
	},
});

export const usersAPI = {

	getUsers(pageSize = 1, currentPage = 10) {
		return instance({
			method: 'get',
			url: 'users',
			params: {
				count: pageSize,
				page: currentPage,
			},
		}).then(response => response.data)
	},

	followUser(userId, following = true) {
		return instance({
			method: following ? 'post' : 'delete',
			url: `follow/${userId}`,
		}).then(response => response.data)
	},

	getProfile(userId) {
		console.warn('Observe method. Please use profileAPI object');
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = {

	getProfile(userId) {
		return instance({
			method: 'get',
			url: `profile/${userId}`,
		}).then(response => response.data)
	},
	getStatus(userId) {
		return instance({
			method: 'get',
			url: `profile/status/${userId}`,
		}).then(response => response.data)
	},
	updateStatus(status) {
		return instance({
			method: 'put',
			url: `profile/status`,
			data: {
				status
			}
		}).then(response => response.data)
	},

}

export const authAPI = {

	getAuthProfile() {
		return instance({
			method: 'get',
			url: 'auth/me',
		}).then(response => response.data)
	},

	login(email, password, rememberMe = false) {
		return instance({
			method: 'post',
			url: 'auth/login',
			data: {
				'email': email, 
				'password': password, 
				'rememberMe': rememberMe
			}
		}).then(response => response.data)
	},

	logout() {
		return instance({
			method: 'delete',
			url: 'auth/login',
		}).then(response => response.data)
	},
}