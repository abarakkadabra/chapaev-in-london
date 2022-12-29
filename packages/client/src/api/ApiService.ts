import { apiPath } from '../assets/config';
import { Auth } from './Auth';
import { Chats } from './Chats';
import { Leaderboard } from './Leaderboard';
import { OAuth } from './OAuth';
import { Users } from './Users';

class ApiService {
	public getAuthApi = () => {
		return new Auth(apiPath);
	};

	public getOAuthAPI = () => {
		return new OAuth(apiPath);
	};

	public getUsersApi = () => {
		return new Users(apiPath);
	};

	public getChatsApi = () => {
		return new Chats(apiPath);
	};

	public getLeaderboardApi = () => {
		return new Leaderboard(apiPath);
	};
}

export const apiService = new ApiService();
