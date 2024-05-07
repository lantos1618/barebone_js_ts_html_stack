import { html, head, title, script, body, div, p, button, type HtmlChild } from "../html";

export default function Navbar(target: string) {
    return div({ class: 'container mx-auto' },
        div({ class: 'flex' },
            button({ class: 'flex-1', 'hx-get': '/home', 'hx-trigger': 'click', 'hx-target': target }, 'Home'),
            button({ class: 'flex-1', 'hx-get': '/about', 'hx-trigger': 'click', 'hx-target': target }, 'About'),
            button({ class: 'flex-1', 'hx-get': '/chat', 'hx-trigger': 'click', 'hx-target': target, 'hx-swap': "innerHTML" }, 'Chat'),

        ),
    )
}