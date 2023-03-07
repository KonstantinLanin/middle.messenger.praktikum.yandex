import Block from '../../utils/block';
import './error.css';

export class Error extends Block {

    render() {
        return `
            <div class="container">
                <div class="container-flex-wrap">
                    <div class="error-wrap">
                        <span class="error-title"> 404 </span>
                        <span class="error-text"> Oops! </span>
                        {{{Link title="Back to chats"
                                linkWrap="link-wrap"
                                styles="link error-link"
                                href="/messenger" background="error-link-bg"}}}
                    </div>
                </div>
            </div>
        `;
}}
