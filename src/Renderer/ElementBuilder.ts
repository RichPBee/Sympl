import { IElementBuilder } from "../Definitions/Renderer";
import { IBaseSettings } from "../Definitions/Settings";

export class ElementBuilder implements IElementBuilder
{
    constructor()
    {

    };


    public buildElement(settings: IBaseSettings): HTMLElement
    {
        let element = document.createElement(settings.type);
        element.setAttribute('id', settings.id);
        if (settings.attributes)
        {
            for (const [k,v] of settings.attributes)
            {
                element.setAttribute(`${k}`, v);
            }
        }

        if (settings.children)
        {
            settings.children.forEach(child => {
                element.appendChild(child.getElement());
            });
        }

        if (settings.styles)
        {
            this.resolveStyleType(element, settings.styles);
        }
        return element;
    };

    private resolveStyleType(element: HTMLElement, styles: Map<string, string>): void 
    {
        for (const [k,v] of styles)
        {
            this.applyStyle(element, k, v);
        }
    };

    private applyStyle(element: HTMLElement, k: string, v: string): void
    {
        switch(k)
        {
            case('justify-content'):
                element.style.justifyContent = v;
                break;
            default:
                return;
        };
    }
}
