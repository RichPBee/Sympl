import { IViewController, IElementBuilder, IRenderer, IView, IApp } from "./Definitions/Definitions";
import { Renderer } from "./Renderer/Renderer";
import { ElementBuilder } from "./Renderer/ElementBuilder";
import { ViewController } from "./Renderer/ViewController";
import { BaseView } from "./Views/View";

export class SymplApp implements IApp
{
    protected _viewController: ViewController;
    protected _defaultView: BaseView;
    protected _renderer: Renderer;
    protected _elementBuilder: ElementBuilder;
    protected _appContainer: HTMLElement;

    constructor()
    {
        this._viewController = new ViewController(this._defaultView);
        this._renderer = new Renderer();
        this._elementBuilder = new ElementBuilder();
        this._appContainer = document.getElementById('app');
        //this.load();
    };

    public get ElementBuilder(): ElementBuilder
    {
        return this._elementBuilder;
    };

    public get ViewController(): ViewController
    {
        return this._viewController;
    };

    public get Renderer(): Renderer
    {
        return this._renderer;
    };

    public get AppContainer(): HTMLElement
    {
        return this._appContainer;
    };

    //Not sure if this method should be publicy accessible.
    public load(): void {
        this._viewController.openView(this._defaultView);
    };
};