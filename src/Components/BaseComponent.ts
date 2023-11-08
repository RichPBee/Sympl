namespace Sympl.Components
{
    //Defines the base Sympl component, can be a container or actual element. 
    //Components will be combined to create views.
    export class BaseComponent implements Definitions.IBaseComponent
    {
        private _element: HTMLElement;
        
        constructor(id: string, settings: Definitions.IBaseSettings)
        {
            this._element = <HTMLElement>document.getElementById(id);
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