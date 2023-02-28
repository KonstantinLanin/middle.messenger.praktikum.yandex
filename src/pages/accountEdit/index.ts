import Block from '../../utils/block';
import './accountEdit.css';
import { Validation } from '../../utils/validation';

export class AccountEdit extends Block {
    protected getStateFromProps() {
        this.state = {
            onSave: () => {
                const element = this.getContent();
                const inputs = element?.querySelectorAll('input');
                const loginData = Validation (inputs, this.refs);

                console.log('inputs/AccountEdit', loginData);
            },

    };
}

    render() {
        return `
            {{#AccountLayout}}
                {{#Form formWrap="form-account-wrap"}}

                {{#Avatar styles="avatar-default"}}
                    <label for="avatar" class="input-avatar-label">Change avatar</label>
                    <input type="file" class="input-avatar" id="avatar" name="avatar">
                {{/Avatar}}

                {{{AccountInput title="Email"
                                styles="account-input"
                                type="email"
                                name="email"
                                placeholder="sparky@yandex.ru"
                                ref="email"
                                id="email"
                                onFocus=onFocus
                                onBlur=onBlur
                                onChange=onChange
                }}}

                {{{AccountInput title="Login"
                                styles="account-input"
                                type="text"
                                name="login"
                                placeholder="Login"
                                ref="login"
                                id="login"
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
