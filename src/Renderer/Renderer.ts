namespace Sympl.Renderer
{
    export class Renderer implements Sympl.Definitions.IRenderer
    {
        public structurise(components: Array<Components.BaseComponent>): Components.BaseComponent {
            const parent = components[0];
            this.appendSections(parent, components.slice(1));
            return parent;
        };

        public appendSections(parent: Components.BaseComponent | Views.BaseView, child: Components.BaseComponent | Array<Components.BaseComponent>) {
            if (Array.isArray(child))
            {
                child.forEach(c => { 
                    parent.getElement().appendChild(c.getElement());
                });
            }
            else 
            {
                parent.getElement().appendChild(child.getElement());   
            };
        };

        public clearSection(section: Components.BaseComponent) {
            section.getElement().innerHTML = '';
        };

        public removeElement(element: Components.BaseComponent) {
            element.getElement().parentElement?.removeChild(element.getElement());    
        };

        public updateSection(parent: Components.BaseComponent, child: Components.BaseComponent) {
            parent.getElement().innerHTML = '';
            this.structurise([parent].concat(child));
        };
    }
}