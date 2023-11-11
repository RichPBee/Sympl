import { SymplApp } from "../App";
import { BaseComponent } from "../Components/BaseComponent";
import { IView } from "../Definitions/View";
import { IViewSettings } from "../Definitions/Settings";
import { IElementBuilder, IViewController, IRenderer } from "../Definitions/Renderer";

export class BaseView implements IView
{   
    readonly name: string;
    private _parent: SymplApp;
    private _children: Array<BaseComponent>;
    private _viewContainer: HTMLElement;

    constructor(parent: SymplApp, name: string, settings: IViewSettings)
    {
        this._parent = parent;
        this.name = name;
        this._viewContainer =  this._parent.ElementBuilder.buildElement(settings);
    };

    onOpen(): void {
        this._parent.AppContainer.appendChild(this._viewContainer);
    };

    onClose(): void {
        this._parent.AppContainer.removeChild(this._viewContainer);
    };

    public get ElementBuilder(): IElementBuilder
    {
        return this._parent.ElementBuilder;
    };

    public get ViewController(): IViewController
    {
        return this._parent.ViewController;
    };

    public get Renderer(): IRenderer
    {
        return this._parent.Renderer;
    };

    public get Children(): Array<BaseComponent>
    {
        return this._children;
    };

    public getElement()
    {
        return this._viewContainer;
    };

    public addChild(child: BaseComponent): void
    {
        this._children.push(child);
        this.Renderer.appendSections(this, child);
    };
};
