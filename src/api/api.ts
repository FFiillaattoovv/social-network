import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '015f6ef9-f2e2-4c2d-a216-55334fed10bf'}
});

export const usersAPI = {
    getUsers(pageSize: number = 10, currentPage: number = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
    }
};

export const followAPI = {
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
    }
};

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
    }
};