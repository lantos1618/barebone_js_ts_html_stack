import { html, head, title, script, body, div, p, button, type HtmlChild } from "../html";
import Navbar from "./navbar";

export default function Page(content: HtmlChild) {
    return html(
        head(
            title('Hello World'),
            script({ src: "https://cdn.tailwindcss.com" },),
            script({ src: "https://unpkg.com/htmx.org@1.9.11" }),
            script({ src: "/bundle.js" }),
        ),
        body(
            {},
            div({ class: 'container mx-auto' },
                Navbar("#content"),
                div({ id: 'content' }, content),
            ),
        )
    )
}