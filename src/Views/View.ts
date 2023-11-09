namespace Sympl.Views
{
    export class BaseView implements Definitions.IView
    {   
        readonly name: string;
        private _parent: Sympl.App

        constructor(parent: Sympl.App, name: string)
        {
            this._parent = parent;
            this.name = name;
        };

        onOpen(): void {
            
        };

        onClose(): void {
            
        };

        public get ElementBuilder(): Definitions.IElementBuilder
        {
            return this._parent.ElementBuilder;
        }

        public get ViewController(): Definitions.IViewController
        {
            return this._parent.ViewController;
        }

        public get Renderer(): Definitions.IRenderer
        {
            return this._parent.Renderer;
        }
    };
}