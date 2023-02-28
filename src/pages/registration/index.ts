import Block from '../../utils/block';
import { Validation } from '../../utils/validation';

export class Registration extends Block {
    protected getStateFromProps() {
        this.state = {
            onReg: () => {
                const element = this.getContent();
                const inputs = element?.querySelectorAll('input');
                const loginData = Validation (inputs, this.refs);

                console.log('inputs/registration', loginData);
        },
    };
}

    render() {
        return `
            {{#Form title="Registration" formWrap="form-login-wrap"}}

            {{{WrappedInput title="Email"
                styles="input input-icon-left input-email"
                type="email"
                name="email"
                placeholder="sparky@yandex.ru"
                ref="email"
                id="email"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput title="Login"
                styles="input input-icon-left input-login"
                type="text"
                name="login"
                placeholder="Konstantin"
                ref="login"
                id="login"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput title="Name"
                styles="input input-icon-left input-name"
                type="text"
                name="first_name"
                placeholder="Konstantin"
                ref="first_name"
                id="first_name"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput title="Surname"
                styles="input input-icon-left input-name"
                type="text"
                name="second_name"
                placeholder= "Lanin"
                ref="second_name"
                id="second_name"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput title="Phone"
                styles="input input-icon-left input-phone"
                type="phone"
                name="phone"
                placeholder="+7 (925) 421 80 10"
                ref="phone"
                id="phone"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput title="Password"
                styles="input input-icon-left input-password"
                type="password"
                name="password"
                placeholder="Password"
                ref="password"
                id="password"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput title="Password (repeat)"
                styles="input input-icon-left input-password"
                type="password"
                name="repeat_password"
                placeholder="Password"
                ref="repeat_password"
                id="repeat_password"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{Button type="submit"
                label="Register"
                styles="button-form"
                background="button-background-main"
                onClick=onReg
            }}}

            {{{Link title="Log In"
                linkWrap="link-wrap"
                styles="link"
                href="/login.html"}}}
            
        {{/Form}}

        `;
}}
