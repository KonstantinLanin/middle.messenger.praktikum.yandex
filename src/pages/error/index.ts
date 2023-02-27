import Block from '../../utils/block';
import './error.css';

type ErrorPageProps = {
    title: string;
    text: string;
}

export class Error extends Block {
    constructor({ title, text }: ErrorPageProps) {
    super({ title, text });
}

    render() {
        return `
            <div class="container">
                <div class="container-flex-wrap">
                    <div class="error-wrap">
                        <span class="error-title"> {{ title }}</span>
                        <span class="error-text"> {{ text }} </span>
                        {{{Link title="Back"
                                linkWrap="link-wrap"
                                styles="link error-link"
                                href="/" background="error-link-bg"}}}
                    </div>
                </div>
            </div>


        `;
}}
