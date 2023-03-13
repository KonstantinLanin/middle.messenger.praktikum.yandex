import registerComponent  from './utils/registerComponent';
import Router, { routes } from './utils/router';
import AuthController from './controllers/loginController';
import ChatsController from './controllers/chatsController';
import store from './utils/store';

import { Login } from './pages/login/index';
import { Error } from './pages/error/index';
import { Account } from './pages/account/index';
import { Registration } from './pages/registration/index';
import { AccountChangePassword } from './pages/accountChangePassword/index';
import { AccountEdit } from './pages/accountEdit/index';
import { Chats } from './pages/chat/index';

import './main.css';

import { Button } from './components/button/index';
import { Link } from './components/link/index';
import { Form } from './components/form/index';
import { Input } from './components/input/index';
import { WrappedInput } from './components/wrappedInput/index';
import { AccountInput } from './components/accountInput/index';
import { ErrorInput } from './components/errorInput/index';
import { AccountLayout } from './components/accountPage/index';
import { Avatar } from './components/avatar/index';
import { Chatlist } from './components/chatlist/index';
import { ChatlistItem } from './components/chatlistItem/index';
import { Chat } from './components/chat/index';
import { Message } from './components/chatMessage/index';
import { Modal } from './components/modal/index';

// require('babel-core/register');

document.addEventListener('DOMContentLoaded', async () => {
    registerComponent(Button);
    registerComponent(Link);
    registerComponent(Form);
    registerComponent(Input);
    registerComponent(WrappedInput);
    registerComponent(AccountInput);
    registerComponent(ErrorInput);
    registerComponent(AccountLayout);
    registerComponent(Avatar);
    registerComponent(Chatlist);
    registerComponent(ChatlistItem);
    // @ts-ignore
    registerComponent(Chat);
    registerComponent(Message);
    registerComponent(Modal);

    const router = new Router();
    const routesValues = Object.values(routes);

    router
        .use(routes.start, Login)
        .use(routes.registration, Registration)
        .use(routes.account, Account)
        .use(routes.accountEdit, AccountEdit)
        .use(routes.accountChangePassword, AccountChangePassword)
        .use(routes.chats, Chats)
        .use(routes.error, Error);

    let isNeedAuth = true;
    switch (window.location.pathname) {
        case routes.start:
        case routes.registration:
        isNeedAuth = false;
        break;
    }

    if (routesValues.includes(window.location.pathname as routes)) {
        try {
            await AuthController.fetchUser();
            await ChatsController.get();
            router.start();

            if (!isNeedAuth) {
                router.go(routes.chats);
            }
        } catch (e) {
            console.log('User request error:', e);
            store.set('currentUser', null);
            router.start();

            if (isNeedAuth) {
                router.go(routes.start);
            }
        }
    } else {
        console.log('404', window.location.pathname);
        router.start();
        router.go(routes.error);
    }
});
