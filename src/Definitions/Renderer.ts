/// <reference path="./Components.ts">
namespace Sympl.Definitions
{
    export interface IElementBuilder
    {
        buildElement<ComponentSettings extends IBaseSettings>(settings: ComponentSettings): HTMLElement,
    };

    export interface IRenderer
    {
        structurise(components: Array<Components.BaseComponent>): Components.BaseComponent,
        appendSections(parent: Components.BaseComponent | Views.BaseView, child: Components.BaseComponent | Array<Components.BaseComponent>),
        clearSection(section: Components.BaseComponent),
        removeElement(element: Components.BaseComponent),
        updateSection(parent: Components.BaseComponent, child: Components.BaseComponent),
    };


    export interface IViewController
    {
        getCurrentView(): string,
        changeView<TView extends IView>(oldView: TView, newView: TView): void,
        openView<TView extends IView>(view: TView): void,
    };
}