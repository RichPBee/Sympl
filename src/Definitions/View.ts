import { IElementBuilder, IRenderer, IViewController } from "./Renderer";
import { BaseComponent } from "../Components/BaseComponent";

export interface IView 
{
    readonly name: string,
    onOpen(): void,
    onClose(): void,
    get ElementBuilder(): IElementBuilder,
    get ViewController(): IViewController,
    get Renderer(): IRenderer,
    get Children(): Array<BaseComponent>
    addChild(child: BaseComponent): void
}
