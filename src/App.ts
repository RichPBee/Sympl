namespace Sympl
{
    export class App implements Sympl.Definitions.App
    {
        private _viewController: Definitions.IViewController;
        private _defaultView: Definitions.IView;
        private _renderer: Definitions.IRenderer;
        private _elementBuilder: Definitions.IElementBuilder

        constructor()
        {
            this._viewController = new Renderer.ViewController(this._defaultView);
            this._renderer = new Renderer.Renderer();
            this._elementBuilder = new Renderer.ElementBuilder();
            this.load();
        };

        public get ElementBuilder(): Definitions.IElementBuilder
        {
            return this._elementBuilder;
        }

        public get ViewController(): Definitions.IViewController
        {
            return this._viewController;
        }

        public get Renderer(): Definitions.IRenderer
        {
            return this._renderer;
        }

        load(): void {
            this._viewController.openView(this._defaultView);
        }
    }   
}