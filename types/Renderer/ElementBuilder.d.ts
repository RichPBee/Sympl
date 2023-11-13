import { IElementBuilder, IBaseSettings } from "../Definitions/Definitions";
export declare class ElementBuilder implements IElementBuilder {
    constructor();
    buildElement(settings: IBaseSettings): HTMLElement;
    private resolveStyleType;
    private applyStyle;
}
