import Block from '../../utils/block';
import {Validation } from '../../utils/validation';
import { withUser } from '../../utils/store';
import AccountController from '../../controllers/accountController';
import { AccountPasswordData } from '../../api/accountApi';
import { routes, withRouter } from '../../utils/router';
interface AccountChangePasswordBaseProps extends AccountPasswordData{
    onReg?: () => void;
    onClick?: () => void;
}

export class AccountChangePasswordBase extends Block<AccountChangePasswordBaseProps> {
    constructor(props: any) {
        super({
            ...props,
            onClick: () => props.router.go(routes.account),
            onReg: async () => {
                const element = this.getContent();
                const inputs = element?.querySelectorAll('input');
                const [loginData, isValid] = Validation(inputs, this.refs);
    
            if (isValid) {
                await AccountController.changePassword(loginData as unknown as AccountPasswordData);
            }
            },
        });
}

    render() {
        return `
        {{#AccountLayout onClick = onClick}}
            {{#Form formWrap="form-account-wrap"}}

            {{{Avatar styles="avatar-default" avatar=avatar }}}

            <span class="form-account-title">  {{ login }} </span>

            {{{AccountInput title="Old password"
                            styles="account-input"
                            type="password"
                            name="oldPassword"
                            placeholder="Old password"
                            ref="oldPassword"
                            id="oldPassword"
                            onFocus=onFocus
                            onBlur=onBlur
                            onChange=onChange
            }}}

            {{{AccountInput title="Password"
                            styles="account-input"
                            type="password"
                            name="newPassword"
                            placeholder="Password"
                            ref="newPassword"
                            id="newPassword"
                            onFocus=onFocus
                            onBlur=onBlur
                            onChange=onChange
            }}}

            {{{AccountInput title="Password (repeat)"
                            styles="account-input"
                            type="password"
                            name="repeatPassword"
                            placeholder="Password"
                            ref="repeatPassword"
                            id="repeatPassword"
                            onFocus=onFocus
                            onBlur=onBlur
                            onChange=onChange
            }}}

            {{{Button type="submit"
                    label="Save"
                    styles="button-form"
                    background="button-background-main"
                    onClick=onReg
            }}}
            

            {{/Form}}

        {{/AccountLayout}}

        `;
}}

export const AccountChangePassword = withRouter(withUser(AccountChangePasswordBase));
