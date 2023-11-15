import { IElementBuilder, IBaseSettings } from "../Definitions/Definitions";

export class ElementBuilder implements IElementBuilder
{
    constructor()
    {

    };

    public buildElement(settings: IBaseSettings): HTMLElement
    {
        let element = document.createElement(settings.type);
        element.setAttribute('id', settings.elementID);

        if (settings.attributes)
        {
            for (const key in settings.attributes)
            {
                element.setAttribute(key, settings.attributes[key]);
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

    protected resolveStyleType(element: HTMLElement, styles: Record<string, string>): void 
    {
        for (const key in styles)
        {
            this.applyStyle(element, key, styles[key]);
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
