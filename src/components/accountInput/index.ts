import Block from '../../utils/block';
import { InputProps } from '../input';
import Validator, { ValidationType } from '../../utils/validation';
import './accountInput.css';

interface AccountInputProps extends InputProps {
    title: string;
    validationType: ValidationType;
    validateMessage: string;
    isValid: boolean;
}

export class AccountInput extends Block<AccountInputProps> {
    static componentName = 'AccountInput';

    constructor({
        ...props
    }: AccountInputProps) {
        super({
        ...props,
        onBlur: (e: FocusEvent) => {
            const input = e.target as HTMLInputElement;
            const { value } = input;
            const { name } = input;
            const [flag, text] = Validator.validate(<ValidationType>name, value);
            this.refs.error.setProps({
                isValid: flag,
                validateMessage: text,
            });
        },

    });
}

protected render(): string {
    return `
        <div class="account-input-wrap">
            <div class="account-input-label-wrap">
                <span class="account-input-label">{{title}}</span>
                {{{Input 
                        title=title
                        styles=styles
                        type=type
                        name=name
                        placeholder=placeholder
                        onFocus=onFocus
                        onBlur=onBlur
                        onChange=onChange
                        id=id
                        value=value
                }}}
            </div>
            <div class="account-input-border"></div>
            {{{ErrorInput validateMessage="Invalid value" isValid=true ref="error"}}}
        </div>

    `;
}}
