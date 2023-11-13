//Defines the base Sympl component, can be a container or actual element. 
//Components will be combined to create views.
import { IBaseComponent, IBaseSettings, IView } from "../Definitions/Definitions";

export class BaseComponent implements IBaseComponent
{
    private _element: HTMLElement;
    private _parent: IView;
    private _children: Array<BaseComponent>
    
    constructor(parent: IView, id: string, settings: IBaseSettings)
    {
        this._parent = parent;
        this._element = this._parent.ElementBuilder.buildElement(settings);
        this._parent.addChild(this);
    }

    public getElement() { return this._element; };
    
    public addChild(child: BaseComponent)
    {
        this._children.push(child);
        this._parent.Renderer.appendSections(this, child);
    };
};

export interface BaseSettings 
{
    type: string
    id: string
    innerText?: string,
    children?: Array<BaseComponent>,
    attributes?: Map<string, string | number>
    styles?: Map<string, string | number>
};
