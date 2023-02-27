import Block from '../../utils/block';
import { Validation } from '../../utils/validation';

export class Login extends Block {
  protected getStateFromProps() {
    this.state = {
        onLogin: () => {
            const element = this.getContent();
            const inputs = element?.querySelectorAll('input');
            const loginData = Validation (inputs, this.refs);
        },

    };
}

    render() {
        return `
            {{#Form  title="Log In" formWrap="form-login-wrap"}}
            
            {{{WrappedInput
                title="Login"
                ref="login"
                styles="input input-icon-left input-login"
                type="text"
                name="login"
                id="login"
                placeholder="Login"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}

            {{{WrappedInput
                title="Password"
                ref="password"
                styles="input input-icon-left input-password"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onFocus=onFocus
                onBlur=onBlur
                onChange=onChange
            }}}
            
            {{{Button label="Log In"
                styles="button-form"
                background="button-background-main"
                onClick=onLogin
            }}}
            
            {{{Link title="Register"
                linkWrap="link-wrap"
                styles="link"
                href="/registration.html"
            }}}

        {{/Form}}
        
    `;
}}
