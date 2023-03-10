import Block from '../../utils/block';
import './form.css';

interface FormProps {
    formWrap: string;
    title: string;
    events: Record<string, unknown>;
}

export class Form extends Block<FormProps> {
    static componentName = 'Form';

    constructor(props: FormProps) {
        const onClick = (e: MouseEvent) => {
            e.preventDefault();
        };

        super({ ...props, events: { click: onClick } });
    }

    render() {
        return `
            <div class="container">
                <div class="container-flex-wrap">
                    <div class="{{formWrap}}">
                        <form class="form" id="{{id}}>
                        <span class="form-title"> {{title}}</span>
                        <div data-slot=1></div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
}
