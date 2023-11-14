import { IApp, IBaseComponent, IView,IViewSettings, IElementBuilder, IViewController, IRenderer } from "../Definitions/Definitions";

export class BaseView implements IView
{   
    readonly name: string;
    private _parent: IApp;
    private _children: Array<IBaseComponent>;
    private _viewContainer: HTMLElement;

    constructor(parent: IApp, name: string, settings: IViewSettings)
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

    public get Children(): Array<IBaseComponent>
    {
        return this._children;
    };

    public getElement()
    {
        return this._viewContainer;
    };

    public addChild(child: IBaseComponent): void
    {
        this._children.push(child);
        this.Renderer.appendSections(this, child);
    };
};
