import Block from '../../utils/block';
import {Validation } from '../../utils/validation';

export class AccountChangePassword extends Block {
    protected getStateFromProps() {
        this.state = {
        onReg: () => {
            const element = this.getContent();
            const inputs = element?.querySelectorAll('input');
            const loginData = Validation (inputs, this.refs);

            console.log('inputs/AccountChangePassword', loginData);
        },

    };
}

    render() {
        return `
        {{#AccountLayout}}
            {{#Form  formWrap="form-account-wrap"}}

            {{{Avatar styles="avatar"}}}

            {{{AccountInput title="Old password"
                            styles="account-input"
                            type="password"
                            name="old_password"
                            placeholder="Old password"
                            ref="old_password"
                            id="old_password"
                            onFocus=onFocus
                            onBlur=onBlur
                            onChange=onChange
            }}}

            {{{AccountInput title="Password"
                            styles="account-input"
                            type="password"
                            name="password"
                            placeholder="Password"
                            ref="password"
                            id="password"
                            onFocus=onFocus
                            onBlur=onBlur
                            onChange=onChange
            }}}

            {{{AccountInput title="Password (repeat)"
                            styles="account-input"
                            type="password"
                            name="repeat_password"
                            placeholder="Password"
                            ref="repeat_password"
                            id="repeat_password"
                            onFocus=onFocus
                            onBlur=onBlur
                            onChange=onChange
            }}}

            {{{Button label="Save"
                    styles="button-form"
                    background="button-background-main"
                    onClick=onReg
            }}}
            

            {{/Form}}

        {{/AccountLayout}}

        `;
}}
