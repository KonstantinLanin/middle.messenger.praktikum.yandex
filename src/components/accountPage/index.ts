import Block from '../../utils/block';
import './accountLayout.css';

interface AccountLayoutProps {
    label?: string;
}

export class AccountLayout extends Block<AccountLayoutProps> {
    static componentName = 'AccountLayout';

    constructor({ ...props }: AccountLayoutProps) {
        super({ ...props });
    }

    render(): string {
        return `
                <div class="account-container">
                    <div class="account-button-container">
                        {{{Button type="submit" styles="button-account-form button-background-left-arrow" }}}
                    </div>
                    <div class="account-form-container">
                        <div data-layout=1></div>
                    </div>
                </div>
        `;
    }
}
