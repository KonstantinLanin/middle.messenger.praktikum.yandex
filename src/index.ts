import { renderDOM, registerComponent } from './utils';

import { Login } from './pages/login';
import { LinkPage } from './pages/linknav';
import { Error } from './pages/error';
import { Account } from './pages/account';
import { Registration } from './pages/registration';
import { AccountChangePassword } from './pages/accountChangePassword';
import { AccountEdit } from './pages/accountEdit';
import { Chat } from './pages/chat';

import './main.css';

import { Button } from './components/button';
import { Link } from './components/link';
import { Form } from './components/form';
import { Input } from './components/input';
import { WrappedInput } from './components/wrappedInput';
import { AccountInput } from './components/accountInput';
import { ErrorInput } from './components/errorInput';
import { AccountLayout } from './components/accountPage';
import { Avatar } from './components/avatar';
import { ChatlistItem } from './components/chatlistItem';

require('babel-core/register');

registerComponent(Button);
registerComponent(Link);
registerComponent(Form);
registerComponent(Input);
registerComponent(WrappedInput);
registerComponent(AccountInput);
registerComponent(ErrorInput);
registerComponent(AccountLayout);
registerComponent(Avatar);
registerComponent(ChatlistItem);

const accountData = {
    dataName: 'Konstantin',
    data: [
        { name: 'Email', value: 'sparky@yandex.ru' },
        { name: 'Login', value: 'Konstantin' },
        { name: 'Name', value: 'Konstantin' },
        { name: 'Last name', value: 'Lanin' },
        { name: 'Chat name', value: 'Konstantin' },
        { name: 'Phone', value: '+7 (925) 421-80-10' },
    ],
};

const linkArray = {
    variable: '.',
    links: [
        { title: 'Log In', styles: 'link ', href: '/login.html' },
        { title: 'Register', styles: 'link ', href: '/registration.html' },
        { title: 'Page 404', styles: 'link ', href: '/error.html' },
        { title: 'Page 500', styles: 'link ', href: '/error500.html' },
        { title: 'Chats', styles: 'link ', href: '/chat.html' },
        { title: 'Settings', styles: 'link ', href: '/account.html' },
        { title: 'Edit account', styles: 'link ', href: '/accountEdit.html' }
    ],
};

const chatData = {
    accountName: 'Konstantin',
    chatlistItems: [
        {
            displayName: 'Second', 
            messageTime: '00:00', 
            avatar: 'static/avatars/two.jpg', 
            message: 'Message 1', 
            messageCount: 1,
        },
        {
            displayName: 'Third', 
            messageTime: 'Monday', 
            avatar: 'static/avatars/three.jpg', 
            message: 'Message 2', 
            messageCount: 0,
        },
    ],
    isChat: true,
    };

const error404 = {
    title: '404',
    text: 'Oooops!',
};

const error500 = {
    title: '500',
    text: 'Wow!',
};

function getPage(pathname: string) {
    let app: any;

    if (pathname === '/') {
        app = new LinkPage(linkArray);
    } else if (pathname === '/login.html') {
        app = new Login();
    } else if (pathname === '/registration.html') {
        app = new Registration();
    } else if (pathname === '/error500.html') {
        app = new Error(error500);
    } else if (pathname === '/chat.html') {
        app = new Chat(chatData);
    } else if (pathname === '/account.html') {
        app = new Account(accountData);
    } else if (pathname === '/accountChangePassword.html') {
        app = new AccountChangePassword();
    } else if (pathname === '/accountEdit.html') {
        app = new AccountEdit();
    } else {
        app = new Error(error404);
    }
    return app;
}

window.addEventListener('DOMContentLoaded', () => {
  const App = getPage(window.location.pathname);
  renderDOM(App);
});
