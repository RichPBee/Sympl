import { IViewController, IElementBuilder, IRenderer, IApp } from "./Definitions/Definitions";
export declare class SymplApp implements IApp {
    private _viewController;
    private _defaultView;
    private _renderer;
    private _elementBuilder;
    private _appContainer;
    constructor();
    get ElementBuilder(): IElementBuilder;
    get ViewController(): IViewController;
    get Renderer(): IRenderer;
    get AppContainer(): HTMLElement;
    load(): void;
}
