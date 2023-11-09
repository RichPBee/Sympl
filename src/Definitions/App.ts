namespace Sympl.Definitions
{
    export interface App
    {
        load(): void,
        get ElementBuilder(): IElementBuilder,
        get ViewController(): IViewController,
        get Renderer(): IRenderer,
    }
}