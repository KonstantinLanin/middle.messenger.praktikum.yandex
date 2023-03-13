import Block from '../../utils/block';
import './accountEdit.css';
import { Validation } from '../../utils/validation';
import { withUser } from '../../utils/store';
import AccountController from '../../controllers/accountController';
import { AccountData } from '../../api/accountApi';
import { onAvatarChange } from '../../utils/functions';
import Router, { routes, withRouter } from '../../utils/router';

interface AccountDataProps extends AccountData {
    onClick: () => void;
    onAvatarClick: () => void;
    onSave: () => void;
    router: Router;
}
export class AccountEditBase extends Block<AccountDataProps> {
    private avatarData: unknown;

    constructor(props: AccountDataProps) {
        super({
            ...props,
            onClick: () => props.router.go(routes.account),
            onAvatarClick: async () => {
                this.avatarData = onAvatarChange('avatar');
            },
            onSave: async () => {
                const element = this.getContent();
                const inputs = element?.querySelectorAll('input');
                const [loginData, isValid] = Validation(inputs, this.refs);

            if (isValid) {
                if (this.avatarData instanceof FormData) {
                    await AccountController.changeAvatar(this.avatarData);
                }
                    await AccountController.changeAccount(loginData as unknown as AccountData);
            }
        },
    });
}
    
    render() {
        return `
            {{#AccountLayout onClick = onClick}}
                {{#Form formWrap="form-account-wrap" id="avatarForm"}}

                {{{Avatar id="avatar" styles="avatar-default" avatar=avatar edit=true onClick=onAvatarClick }}}
                
                <span class="form-account-title">  {{ login }} </span>

                {{{AccountInput title="Email"
                                styles="account-input"
                                type="email"
                                name="email"
                                placeholder="sparky@yandex.ru"
                                ref="email"
                                id="email"
                                value=email
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}

                {{{AccountInput title="Login"
                                styles="account-input"
                                type="text"
                                name="login"
                                placeholder="Konstantin"
                                ref="login"
                                id="login"
                                value=login
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}
            
                {{{AccountInput title="Name"
                                styles="account-input"
                                type="text"
                                name="first_name"
                                placeholder="Konstantin"
                                ref="first_name"
                                id="first_name"
                                value=first_name
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}

                {{{AccountInput title="Last Name"
                                styles="account-input"
                                type="text"
                                name="second_name"
                                placeholder="Lanin"
                                ref="second_name"
                                id="second_name"
                                value=second_name
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}

                {{{AccountInput title="Name in chat"
                                styles="account-input"
                                type="text"
                                name="display_name"
                                placeholder="Konstantin"
                                ref="display_name"
                                id="display_name"
                                value=display_name
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}

                {{{AccountInput title="Phone"
                                styles="account-input"
                                type="phone"
                                name="phone"
                                placeholder="+7 (925) 421-80-10"
                                ref="phone"
                                id="phone"
                                value=phone
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}
            

                {{{Button type="submit"
                        label="Save"
                        styles="button-form"
                        background="button-background-main"
                        onClick=onSave
                }}}
            

            {{/Form}}

        {{/AccountLayout}}

        `;
}}

export const AccountEdit = withRouter(withUser(AccountEditBase));
