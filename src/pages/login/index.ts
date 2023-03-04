import Block from '../../utils/block';
import { Validation } from '../../utils/validation';
import AuthController from '../../controllers/loginController';
import { LoginData } from '../../api/loginApi';
import { withUser } from '../../utils/store';
interface LoginDataProps {
    onLogin: () => void;
}
export class LoginBase extends Block<LoginDataProps> {
    constructor({ ...props }: LoginDataProps) {
        super({
        ...props,
        onLogin: () => this.onLogin(),
        });
    }

    async onLogin() {
        const element = this.getContent();
        const inputs = element?.querySelectorAll('input');
        const [loginData] = Validation(inputs, this.refs);

        await AuthController.login(loginData as unknown as LoginData);
}

    render() {
        return `
            {{#Form  title="Log In" formWrap="form-login-wrap" id="loginForm"}}
            
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
            
            {{{Button type="submit"
                        label="Log In"
                        styles="button-form"
                        background="button-background-main"
                        onClick=onLogin
            }}}
            
            {{{Link title="Register"
                    linkWrap="link-wrap"
                    styles="link"
                    href="/registration"
            }}}

        {{/Form}}
        
    `;
}}

export const Login = withUser(LoginBase);

