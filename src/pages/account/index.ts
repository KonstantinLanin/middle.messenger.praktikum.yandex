import Block from '../../utils/block';
import { withUser } from '../../utils/store';
import { AccountData } from '../../api/accountApi';
import AuthController from '../../controllers/loginController';
import Router, { routes, withRouter } from '../../utils/router';

interface AccountBaseProps extends AccountData{
    onLogout?: () => void;
    onClick?: () => void;
    router: Router;
}
class AccountBase extends Block<AccountBaseProps> {
    constructor({ ...props }: AccountBaseProps) {
        super({
            ...props,
            onLogout: () => AuthController.logout(),
            onClick: () => props.router.go(routes.chats),
        });
}

    render() {
        return `
            {{#AccountLayout onClick = onClick}}
                {{#Form  formWrap="form-account-wrap"}}

                {{{Avatar styles="avatar-default" avatar=avatar }}}

                <span class="form-account-title">  {{ login }} </span>

                <ul class="account-input-wrap">
                
                    <li class="account-input-wrap">
                        <div class="account-input-label-wrap">
                            <span class="account-input-label">Email</span>
                            <span class="account-input">{{email}}</span>
                        </div>
                        <div class="account-input-border"></div>
                    </li>
                    <li class="account-input-wrap">
                        <div class="account-input-label-wrap">
                            <span class="account-input-label">Login</span>
                            <span class="account-input">{{login}}</span>
                        </div>
                        <div class="account-input-border"></div>
                    </li>
                    <li class="account-input-wrap">
                        <div class="account-input-label-wrap">
                            <span class="account-input-label">Name</span>
                            <span class="account-input">{{first_name}}</span>
                        </div>
                        <div class="account-input-border"></div>
                    </li>
                    <li class="account-input-wrap">
                        <div class="account-input-label-wrap">
                            <span class="account-input-label">Last name</span>
                            <span class="account-input">{{second_name}}</span>
                        </div>
                        <div class="account-input-border"></div>
                    </li>
                    <li class="account-input-wrap">
                        <div class="account-input-label-wrap">
                            <span class="account-input-label">Name in chat</span>
                            <span class="account-input">{{display_name}}</span>
                        </div>
                        <div class="account-input-border"></div>
                    </li>
                    <li class="account-input-wrap">
                        <div class="account-input-label-wrap">
                            <span class="account-input-label">Phone</span>
                            <span class="account-input">{{phone}}</span>
                        </div>
                        <div class="account-input-border"></div>
                    </li>
                </ul>

                <div class="link-wrap">
                    {{{Link title="Edit account"
                            styles="link link-decor-marine"
                            href="/settings-edit"
                            linkBorder="link-decor-border"}}}

                    {{{Link title="Change password"
                            styles="link link-decor-marine"
                            href="/settings-change-password"
                            linkBorder="link-decor-border"}}}

                    {{{Button label="Logout" styles="link link-decor-red" onClick=onLogout}}}

                </div>

                {{/Form}}

            {{/AccountLayout}}

        `;
}}

export const Account = withRouter(withUser(AccountBase));
