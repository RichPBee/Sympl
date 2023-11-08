namespace Sympl.Definitions
{
    export interface IBaseComponent
    {
        getElement(): HTMLElement;   
    }

    export interface IBaseSettings
    {
        type: string
        id: string
        innerText?: string,
        children?: Array<IBaseComponent>,
        attributes?: Map<string, string | number>
        styles?: Map<string, string | number>
    }   
}