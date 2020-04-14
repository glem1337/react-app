import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'a743b5cd-3bde-49a3-9d2a-3503d5caa355'
    }
});

export class usersApi {

    static getUsers(pageNumber = 1, pageSize = 5) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    }

    static follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }

    static unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            });
    }


}

export class authApi {

    static me() {
        return instance.get(`/auth/me`)
            .then(response => {
                return response.data;
            });
    }

    static login(email, password, rememberMe = false, captcha = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe, captcha});
    }

    static logout() {
        return instance.delete(`/auth/login`);
    }

    static getProfile(userId) {
        console.warn('Obsolete method. Please use profileApi.getProfile()');
        return profileApi.getProfile(userId);
    }

}


export class profileApi {

    static updateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }

    static getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    }

    static getProfile(userId) {
        return instance.get(`/profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }

}