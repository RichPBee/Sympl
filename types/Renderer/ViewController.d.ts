import { IView, IViewController } from "../Definitions/Definitions";
export declare class ViewController implements IViewController {
    protected _currentView: IView;
    protected _views: Map<string, IView>;
    constructor(defaultView: IView);
    openView<TView extends IView>(view: TView): void;
    getCurrentView(): string;
    changeView(oldView: IView, newView: IView): void;
    getView(viewName: string): IView;
    add(viewName: string, view: IView): void;
}
