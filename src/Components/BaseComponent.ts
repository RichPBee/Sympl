namespace Sympl.Components
{
    //Defines the base Sympl component, can be a container or actual element. 
    //Components will be combined to create views.
    export class BaseComponent implements Definitions.IBaseComponent
    {
        private _element: HTMLElement;
        private _parent: Sympl.Views.BaseView;
        private _children: Array<Components.BaseComponent>
        
        constructor(parent: Sympl.Views.BaseView, id: string, settings: Definitions.IBaseSettings)
        {
            this._parent = parent;
            this._element = this._parent.ElementBuilder.buildElement(settings);
            this._parent.addChild(this);
        }

        public getElement() { return this._element; };
        
        public addChild(child: Components.BaseComponent)
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
}