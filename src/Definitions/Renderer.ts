/// <reference path="./Components.ts">
namespace Sympl.Definitions
{
    export interface IElementBuilder
    {
        buildElement<ComponentSettings extends IBaseSettings>(settings: ComponentSettings),
        //k, v need to be resolved to a stricter type later. (Possible that string, string | number will do, but need to check).
        resolveStyleType<TComponent extends IBaseComponent>(element: TComponent, k: any, v: any),
    };

    export interface IRenderer
    {
        structurise<TComponent extends IBaseComponent>(components: Array<TComponent>): TComponent,
        appendSections<TComponent extends IBaseComponent>(parent: TComponent, child: TComponent | Array<TComponent>),
        clearSection<TComponent extends IBaseComponent>(section: TComponent),
        removeElement<TComponent extends IBaseComponent>(element: TComponent),
        updateSection<TComponent extends IBaseComponent>(parent: TComponent, child: TComponent),

    };

    export interface IViewController
    {
        getCurrentView<TView extends BaseView>(): TView,
        changeView<TView extends BaseView>(oldView: TView, newView: TView),
    };
}