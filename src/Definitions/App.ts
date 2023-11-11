
import { IElementBuilder, IRenderer, IViewController } from "./Renderer";

export interface IApp
{
    load(): void,
    get ElementBuilder(): IElementBuilder,
    get ViewController(): IViewController,
    get Renderer(): IRenderer,
}
