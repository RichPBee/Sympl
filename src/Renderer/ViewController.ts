namespace Sympl.Renderer
{
    export class ViewController implements Definitions.IViewController
    {   
        private _currentView: Definitions.IView;

        constructor(defaultView: Definitions.IView)
        {
            this._currentView = defaultView;
        };

        public openView<TView extends Definitions.IView>(view: TView): void
        {
            view.onOpen();
        };

        public getCurrentView(): string
        {
            return this._currentView.getViewName();
        };

        public changeView<TView extends Definitions.IView>(oldView: TView, newView: TView): void 
        {
            oldView.onClose();
            this._currentView = newView;
            newView.onOpen();
        };
    }
}