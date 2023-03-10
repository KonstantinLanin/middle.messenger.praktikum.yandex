import AuthController from './loginController';
import Router, { routes } from '../utils/router';
import AccountAPI, { AccountData, AccountPasswordData } from '../api/accountApi';

class AccountController {
    private api: AccountAPI;
    private router: Router;

    constructor() {
        this.api = new AccountAPI();
        this.router = new Router();
    }

    async changeAccount(data: AccountData) {
        try {
            await this.api.changeAccount(data);
            await AuthController.fetchUser();
            this.router.go(routes.account);
        } catch (e: any) {
            console.log('Update account request error:', e);
        }
    }

    async changeAvatar(data: FormData) {
        try {
            await this.api.changeAvatar(data);
            await AuthController.fetchUser();
        } catch (e: any) {
            console.log('Update avatar request error:', e);
        }
    }

    async changePassword(data: AccountPasswordData) {
        try {
            await this.api.changePassword(data);
            await AuthController.fetchUser();
            this.router.go(routes.account);
        } catch (e: any) {
            console.log('Update password request error:', e);
        }
    }

    async search(login: string) {
        try {
            return await this.api.search(login);
        } catch (e: any) {
            console.log('Search error:', e);
            return [];
        }
    }

    async back() {
        try {
            this.router.back();
        } catch (e: any) {
            console.log('Transition error', e);
        }
    }

    async toCharts() {
        try {
            this.router.go(routes.chats);
        } catch (e: any) {
            console.log('Transition error', e);
        }
    }

    async toAccount() {
        try {
            this.router.go(routes.account);
        } catch (e: any) {
            console.log('Transition error', e);
        }
    }
}

export default new AccountController();
