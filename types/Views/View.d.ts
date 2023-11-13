import { IApp, IBaseComponent, IView, IViewSettings, IElementBuilder, IViewController, IRenderer } from "../Definitions/Definitions";
export declare class BaseView implements IView {
    readonly name: string;
    private _parent;
    private _children;
    private _viewContainer;
    constructor(parent: IApp, name: string, settings: IViewSettings);
    onOpen(): void;
    onClose(): void;
    get ElementBuilder(): IElementBuilder;
    get ViewController(): IViewController;
    get Renderer(): IRenderer;
    get Children(): Array<IBaseComponent>;
    getElement(): HTMLElement;
    addChild(child: IBaseComponent): void;
}
