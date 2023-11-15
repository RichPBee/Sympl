import { IButtonSettings, IView } from "../Definitions/Definitions";
import { BaseComponent } from "./BaseComponent";
export declare class Button extends BaseComponent {
    constructor(parent: IView, id: string, settings: IButtonSettings, onClick: Function);
}
