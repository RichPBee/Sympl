import { IView, IViewController } from "../Definitions/Definitions";
export declare class ViewController implements IViewController {
    private _currentView;
    constructor(defaultView: IView);
    openView<TView extends IView>(view: TView): void;
    getCurrentView(): string;
    changeView<TView extends IView>(oldView: TView, newView: TView): void;
}
