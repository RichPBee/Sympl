/// <reference path="./Components.ts">
import { IBaseSettings } from "./Settings";
import { IView } from "./View";
import { BaseComponent } from "../Components/BaseComponent";
import { BaseView } from "../Views/View";
export interface IElementBuilder
{
    buildElement<ComponentSettings extends IBaseSettings>(settings: ComponentSettings): HTMLElement,
};

export interface IRenderer
{
    structurise(components: Array<BaseComponent>): BaseComponent,
    appendSections(parent: BaseComponent | BaseView, child: BaseComponent | Array<BaseComponent>),
    clearSection(section: BaseComponent),
    removeElement(element: BaseComponent),
    updateSection(parent: BaseComponent, child: BaseComponent),
};


export interface IViewController
{
    getCurrentView(): string,
    changeView<TView extends IView>(oldView: TView, newView: TView): void,
    openView<TView extends IView>(view: TView): void,
};
