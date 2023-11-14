import { IBaseComponent, IBaseSettings, IView } from "../Definitions/Definitions";
export declare class BaseComponent implements IBaseComponent {
    private _element;
    private _parent;
    private _children;
    constructor(parent: IView, id: string, settings: IBaseSettings);
    getElement(): HTMLElement;
    addChild(child: BaseComponent): void;
}
export interface BaseSettings {
    type: string;
    id: string;
    innerText?: string;
    children?: Array<BaseComponent>;
    attributes?: Map<string, string | number>;
    styles?: Map<string, string | number>;
}
