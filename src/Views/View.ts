namespace Sympl.Views
{
    export class BaseView implements Definitions.IView
    {   
        readonly name: string;
        private _parent: Sympl.App;
        private _children: Array<Components.BaseComponent>;
        private _viewContainer: HTMLElement;

        constructor(parent: Sympl.App, name: string, settings: Definitions.IViewSettings)
        {
            this._parent = parent;
            this.name = name;
            this._viewContainer =  this._parent.ElementBuilder.buildElement(settings);
        };

        onOpen(): void {
            
        };

        onClose(): void {
            
        };

        public get ElementBuilder(): Definitions.IElementBuilder
        {
            return this._parent.ElementBuilder;
        };

        public get ViewController(): Definitions.IViewController
        {
            return this._parent.ViewController;
        };

        public get Renderer(): Definitions.IRenderer
        {
            return this._parent.Renderer;
        };

        public get Children(): Array<Components.BaseComponent>
        {
            return this._children;
        };

        public getElement()
        {
            return this._viewContainer;
        };

        public addChild(child: Components.BaseComponent): void
        {
            this._children.push(child);
            this.Renderer.appendSections(this, child);
        };
    };
}