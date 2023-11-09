namespace Sympl.Components
{
    //Defines the base Sympl component, can be a container or actual element. 
    //Components will be combined to create views.
    export class BaseComponent implements Definitions.IBaseComponent
    {
        private _element: HTMLElement;
        private _parent: Sympl.Views.BaseView;
        
        constructor(parent: Sympl.Views.BaseView, id: string, settings: Definitions.IBaseSettings)
        {
            this._parent = parent;
            this._element = this._parent.ElementBuilder.buildElement(settings);
        }

        public getElement() { return this._element; };
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