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
            return element;
        };

        public resolveStyleType(element: Definitions.IBaseComponent, settings: Map<string, string|number>): void 
        {
        };
    }
}