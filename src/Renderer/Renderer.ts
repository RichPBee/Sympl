import { IRenderer } from "../Definitions/Renderer";
import { BaseComponent } from "../Components/BaseComponent";
import { BaseView } from "../Views/View";

export class Renderer implements IRenderer
{
    public structurise(components: Array<BaseComponent>): BaseComponent {
        const parent = components[0];
        this.appendSections(parent, components.slice(1));
        return parent;
    };

    public appendSections(parent: BaseComponent | BaseView, child: BaseComponent | Array<BaseComponent>) {
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

    public clearSection(section: BaseComponent) {
        section.getElement().innerHTML = '';
    };

    public removeElement(element: BaseComponent) {
        element.getElement().parentElement?.removeChild(element.getElement());    
    };

    public updateSection(parent: BaseComponent, child: BaseComponent) {
        parent.getElement().innerHTML = '';
        this.structurise([parent].concat(child));
    };
}