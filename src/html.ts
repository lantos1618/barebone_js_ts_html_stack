
export enum HtmlTag {
    html = 'html',
    Head = 'head',
    Body = 'body',
    Title = 'title',
    H1 = 'h1',
    Script = 'script',
    div = 'div',
    Input = 'input',
    A = 'a',
    Button = 'button',
    P = 'p'


}

export type HtmlChild = string | HtmlNode;

export type Attrs = {
    [key: string]: string | null;
};

export class HtmlNode {
    tag: HtmlTag;
    children: HtmlChild[];
    attr: Attrs;

    constructor(tag: HtmlTag, children: HtmlChild[], attrs: Attrs) {
        this.tag = tag;
        this.children = children;
        this.attr = attrs;
    

    }

    toString() {
        let attr_str: string = Object.entries(this.attr).map(([key, value]) => {
            if (value === null) {
                return key;
            }
            return ` ${key}="${value}"`;
        }).join(' ');

        let children_str: string = this.children.map(child => {
            if (child instanceof HtmlNode) {
                return child.toString();
            }
            return child;
        }).join(' ');

        return `<${this.tag} ${attr_str}>${children_str}</${this.tag}>`;
    }
}

export function html(...children: HtmlChild[]) {
    return new HtmlNode(HtmlTag.html, children, {});
}

export function head(...children: HtmlChild[]) {
    return new HtmlNode(HtmlTag.Head, children, {});
}
export function title(...children: HtmlChild[]) {
    return new HtmlNode(HtmlTag.Title, children, {});
}
export function h1(...children: HtmlChild[]) {
    return new HtmlNode(HtmlTag.H1, children, {});
}

export function body(attrs: Attrs, ...children: HtmlChild[]): HtmlNode;
export function body(...children: HtmlChild[]): HtmlNode;

export function body(...args: any[]): HtmlNode {
    let attrs = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args.shift() : {};
    let children = args;
    return new HtmlNode(HtmlTag.Body, children, attrs);
}

export function a(attrs: Attrs, ...children: HtmlChild[]): HtmlNode;
export function a(...children: HtmlChild[]): HtmlNode;

export function a(...args: any[]): HtmlNode {
    let attrs = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args.shift() : {};
    let children = args;
    return new HtmlNode(HtmlTag.A, children, attrs);
}

export function button(attrs: Attrs, ...children: HtmlChild[]): HtmlNode;
export function button(...children: HtmlChild[]): HtmlNode;

export function button(...args: any[]): HtmlNode {
    let attrs = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args.shift() : {};
    let children = args;
    return new HtmlNode(HtmlTag.Button, children, attrs);
}


export function p(attrs: Attrs, ...children: HtmlChild[]): HtmlNode;
export function p(...children: HtmlChild[]): HtmlNode;

export function p(...args: any[]): HtmlNode {
    let attrs = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args.shift() : {};
    let children = args;
    return new HtmlNode(HtmlTag.div, children, attrs);
}


export function script(attrs: Attrs, ...children: (HtmlChild | Function)[]): HtmlNode;
export function script(...children: (HtmlChild | Function)[]): HtmlNode;

export function script(...args: any[]): HtmlNode {
    // Check if the first argument is attrs (an object), otherwise set a default object
    let attrs = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args.shift() : {};
    let children = args.map(child => {
        if (typeof child === 'function') {
            return `(${child.toString()})()`;
        }
        return child;
    });
    return new HtmlNode(HtmlTag.Script, children, attrs);
}


export function div(attrs: Attrs, ...children: HtmlChild[]): HtmlNode;
export function div(...children: HtmlChild[]): HtmlNode;

export function div(...args: any[]): HtmlNode {
    let attrs = args.length > 0 && typeof args[0] === 'object' && !Array.isArray(args[0]) ? args.shift() : {};
    let children = args;
    return new HtmlNode(HtmlTag.div, children, attrs);
}

export function input (attrs: Attrs): HtmlNode {
    return new HtmlNode(HtmlTag.Input, [], attrs);
}