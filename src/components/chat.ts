import { html, head, title, script, body, div, p, button, type HtmlChild } from "../html";


export default function Chat() {
    const client_script = function () {
        window.addEventListener('load', async () => {
            const ws = new WebSocket('ws://localhost:3000');
            ws.onopen = function () {
                console.log('connected');
            }
            ws.onmessage = function (msg) {
                console.log(msg.data);
            }
            ws.onclose = function () {
                console.log('closed');
            }

        })
    }
    return div({ class: 'container mx-auto' },
        div({ class: 'flex' },
           div("Chat")
        ),
    )
}