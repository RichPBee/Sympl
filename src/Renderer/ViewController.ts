import { IView } from "../Definitions/View";
import { IViewController } from "../Definitions/Renderer";


export class ViewController implements IViewController
{   
    private _currentView: IView;

    constructor(defaultView: IView)
    {
        this._currentView = defaultView;
    };

    public openView<TView extends IView>(view: TView): void
    {
        view.onOpen();
    };

    public getCurrentView(): string
    {
        return this._currentView.name;
    };

    public changeView<TView extends IView>(oldView: TView, newView: TView): void 
    {
        oldView.onClose();
        this._currentView = newView;
        newView.onOpen();
    };
}
