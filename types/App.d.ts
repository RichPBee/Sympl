import { IApp } from "./Definitions/Definitions";
import { Renderer } from "./Renderer/Renderer";
import { ElementBuilder } from "./Renderer/ElementBuilder";
import { ViewController } from "./Renderer/ViewController";
import { BaseView } from "./Views/View";
export declare class SymplApp implements IApp {
    protected _viewController: ViewController;
    protected _defaultView: BaseView;
    protected _renderer: Renderer;
    protected _elementBuilder: ElementBuilder;
    protected _appContainer: HTMLElement;
    constructor();
    get ElementBuilder(): ElementBuilder;
    get ViewController(): ViewController;
    get Renderer(): Renderer;
    get AppContainer(): HTMLElement;
    load(): void;
}
