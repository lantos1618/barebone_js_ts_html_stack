import { h1, html, div, input, p, a, button, type HtmlChild, HtmlNode, HtmlTag } from './html';
export {
    h1,
    html,
    div,
    input,
    p,
    a,
    button,
    type HtmlChild,
    HtmlNode,
    HtmlTag
}

export enum WsMessageType {
    Chat = 'chat',
}

export type ChatMessage = {
    sender: string;
    message: string;
    timestamp: number;
}



export type JsonResponse = {
    message: string;
}

export type WsMessage = {
    type: WsMessageType;
    data: ChatMessage;
}