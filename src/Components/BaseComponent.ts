//Defines the base Sympl component, can be a container or actual element. 
//Components will be combined to create views.
import { IBaseComponent, IBaseSettings, IView } from "../Definitions/Definitions";

export class BaseComponent implements IBaseComponent
{
    protected _element: HTMLElement;
    protected _parent: IView;
    protected _children: Array<BaseComponent>;
    protected _componentID: string;
    
    constructor(parent: IView, componentID: string, settings: IBaseSettings)
    {
        this._parent = parent;
        this._element = this._parent.ElementBuilder.buildElement(settings);
        this._parent.addChild(this);
        this._componentID = componentID;
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
