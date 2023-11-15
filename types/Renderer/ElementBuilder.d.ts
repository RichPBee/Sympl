import { IElementBuilder, IBaseSettings } from "../Definitions/Definitions";
export declare class ElementBuilder implements IElementBuilder {
    constructor();
    buildElement(settings: IBaseSettings): HTMLElement;
    protected resolveStyleType(element: HTMLElement, styles: Record<string, string>): void;
    private applyStyle;
}
