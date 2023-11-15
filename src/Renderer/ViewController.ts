import { IView, IViewController } from "../Definitions/Definitions";


export class ViewController implements IViewController
{   
    protected _currentView: IView;
    protected _views: Map<string, IView>;

    constructor(defaultView: IView)
    {
        this._currentView = defaultView;
        this._views = new Map();
    };

    public openView<TView extends IView>(view: TView): void
    {
        view.onOpen();
    };

    public getCurrentView(): string
    {
        return this._currentView.name;
    };

    public changeView(oldView: IView, newView: IView): void 
    {
        oldView.onClose();
        this._currentView = newView;
        newView.onOpen();
    };

    public getView(viewName: string): IView
    {
        return this._views[viewName];
    }

    public add(viewName: string, view: IView)
    {
        this._views[viewName] = view;
    }
}

