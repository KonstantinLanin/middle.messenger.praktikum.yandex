import Block from '../../utils/block';
import './chatlistItem.css';

interface ChatlistItemProps {
    displayName: string;
    messageTime: Date;
    avatar?: string;
    message: string;
    messageCount?: number;
    onClick: () => void;
}

export class ChatlistItem extends Block {
    static componentName = 'ChatlistItem';

    constructor({ onClick, ...props }: ChatlistItemProps) {
        super({
        ...props, events: { click: onClick },
        });
}

    render(): string {
        return `
                <div class="chatlist-item">
                    <div class="chatlist-item-avatar">
                        {{#if avatar}}
                            {{{Avatar styles="avatar-chatlist"}}}
                        {{else}}
                            {{{Avatar styles="avatar-chatlist-default"}}}
                        {{/if}}
                    </div>

                    <div class="chatlist-item-message">
                        <div class="chatlist-item-message-title">
                            <div class="chatlist-item-message-title-left">  {{displayName}} </div>
                            <div class="chatlist-item-message-title-right"> {{messageTime}} </div>
                        </div>
                        <div class="chatlist-item-message-text">
                            <div class="chatlist-item-message-text-left"> {{message}} </div>
                            <div class="chatlist-item-message-text-right">
                            {{#if messageCount}}
                                <div class="number-circle"> {{messageCount}} </div>
                            {{/if}}
                            </div>
                        </div>

                    </div>
                </div>
        `;
}}