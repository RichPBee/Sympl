import { IBaseComponent, IBaseSettings, IView } from "../Definitions/Definitions";
export declare class BaseComponent implements IBaseComponent {
    protected _element: HTMLElement;
    protected _parent: IView;
    protected _children: Array<BaseComponent>;
    protected _componentID: string;
    constructor(parent: IView, componentID: string, settings: IBaseSettings);
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
