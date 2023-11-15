import { IButtonSettings, IView } from "../Definitions/Definitions";
import { BaseComponent } from "./BaseComponent";

export class Button extends BaseComponent
{
    constructor(parent: IView, id: string, settings: IButtonSettings, onClick: Function)
    {
        super(parent, id, settings);
        this.getElement().addEventListener('click', () => { 
            onClick();
        });
    };
};
