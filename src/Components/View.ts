namespace Sympl.Components
{
    export class View implements Definitions.IView
    {   
        private _viewName: string;

        constructor(name: string)
        {
            this._viewName = name;
        };

        onOpen(): void {
            
        };

        onClose(): void {
            
        };

        getViewName(): string {
            return '';
        }
    };
}