import { type Request, type Response } from 'express';
import { html, head, title, script, body, div, p, button } from '../html';
import Page from '../components/page';

export default (req: Request, res: Response) => {
    function client_script() {
        window.addEventListener('load', async () => {

        })
    }
    let html_str = Page(
        div({},)
    ).toString(); 

    res.send(html_str);

}