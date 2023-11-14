import { IRenderer, IBaseComponent, IView } from "../Definitions/Definitions";
export declare class Renderer implements IRenderer {
    structurise(components: Array<IBaseComponent>): IBaseComponent;
    appendSections(parent: IBaseComponent | IView, child: IBaseComponent | Array<IBaseComponent>): void;
    clearSection(section: IBaseComponent): void;
    removeElement(element: IBaseComponent): void;
    updateSection(parent: IBaseComponent, child: IBaseComponent): void;
}
