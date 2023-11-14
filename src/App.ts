import { IViewController, IElementBuilder, IRenderer, IView, IApp } from "./Definitions/Definitions";
import { Renderer } from "./Renderer/Renderer";
import { ElementBuilder } from "./Renderer/ElementBuilder";
import { ViewController } from "./Renderer/ViewController";

export class SymplApp implements IApp
{
    private _viewController: IViewController;
    private _defaultView: IView;
    private _renderer: IRenderer;
    private _elementBuilder: IElementBuilder
    private _appContainer: HTMLElement;

    constructor()
    {
        this._viewController = new ViewController(this._defaultView);
        this._renderer = new Renderer();
        this._elementBuilder = new ElementBuilder();
        this._appContainer = document.getElementById('app');
        //this.load();
    };

    public get ElementBuilder(): IElementBuilder
    {
        return this._elementBuilder;
    };

    public get ViewController(): IViewController
    {
        return this._viewController;
    };

    public get Renderer(): IRenderer
    {
        return this._renderer;
    };

    public get AppContainer(): HTMLElement
    {
        return this._appContainer;
    };

    //Not sure if this method should be publicy accessible.
    public load(): void {
        console.log('a string');
        console.log(this.AppContainer);
        this._viewController.openView(this._defaultView);
    };
};