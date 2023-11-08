namespace Sympl.Definitions
{ 
    export interface IView 
    {
        onOpen(): void,
        onClose(): void,
        getViewName(): string,
    }
}