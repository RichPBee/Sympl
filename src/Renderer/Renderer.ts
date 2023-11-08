namespace Sympl.Renderer
{
    export class Renderer implements Sympl.Definitions.IRenderer
    {
        public structurise<TComponent extends Definitions.IBaseComponent>(components: TComponent[]): TComponent {
            const parent = components[0];
            this.appendSections(parent, components.slice(1));
            return parent;
        };

        public appendSections<TComponent extends Definitions.IBaseComponent>(parent: TComponent, child: TComponent | TComponent[]) {
            if (Array.isArray(child))
            {
                child.forEach(c => { 
                    parent.getElement().appendChild(c.getElement());
                })
            }
            else 
            {
                parent.getElement().appendChild(child.getElement());   
            }
        };

        public clearSection<TComponent extends Definitions.IBaseComponent>(section: TComponent) {
            section.getElement().innerHTML = '';
        };

        public removeElement<TComponent extends Definitions.IBaseComponent>(element: TComponent) {
            element.getElement().parentElement?.removeChild(element.getElement());    
        }

        public updateSection<TComponent extends Definitions.IBaseComponent>(parent: TComponent, child: TComponent) {
            parent.getElement().innerHTML = '';
            this.structurise([parent].concat(child));
        }
    }
}