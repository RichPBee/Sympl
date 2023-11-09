namespace Sympl.Definitions
{ 
    export interface IView 
    {
        readonly name: string,
        onOpen(): void,
        onClose(): void,
        get ElementBuilder(): IElementBuilder,
        get ViewController(): IViewController,
        get Renderer(): IRenderer,
    }
}