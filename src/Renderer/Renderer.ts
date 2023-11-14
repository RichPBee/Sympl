import { IRenderer, IBaseComponent, IView } from "../Definitions/Definitions";

export class Renderer implements IRenderer
{
    public structurise(components: Array<IBaseComponent>): IBaseComponent {
        const parent = components[0];
        this.appendSections(parent, components.slice(1));
        return parent;
    };

    public appendSections(parent: IBaseComponent | IView, child: IBaseComponent | Array<IBaseComponent>) {
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

    public clearSection(section: IBaseComponent) {
        section.getElement().innerHTML = '';
    };

    public removeElement(element: IBaseComponent) {
        element.getElement().parentElement?.removeChild(element.getElement());    
    };

    public updateSection(parent: IBaseComponent, child: IBaseComponent) {
        parent.getElement().innerHTML = '';
        this.structurise([parent].concat(child));
    };
}