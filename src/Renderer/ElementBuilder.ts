namespace Sympl.Renderer
{
    export class ElementBuilder implements Definitions.IElementBuilder
    {
        constructor()
        {

        };


        public buildElement(settings: Definitions.IBaseSettings): HTMLElement
        {
            let element = document.createElement(settings.type);
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

        private resolveStyleType(element: HTMLElement, settings: Map<string, string>): void 
        {
        };
    }
}