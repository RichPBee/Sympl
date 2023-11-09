namespace Sympl.Definitions
{
    export interface App
    {
        load(): void,
        get ElementBuilder(): IElementBuilder,
    }
}