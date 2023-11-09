namespace Sympl.Definitions
{
    export interface IBaseSettings
    {
        type: string
        id: string
        innerText?: string,
        children?: Array<IBaseComponent>,
        attributes?: Map<string, string>
        styles?: Map<string, string>
    };   
}