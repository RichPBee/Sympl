export interface IApp
{
    load(): void,
    get ElementBuilder(): IElementBuilder,
    get ViewController(): IViewController,
    get Renderer(): IRenderer,
    get AppContainer(): HTMLElement
};

export interface IBaseComponent
{
    getElement(): HTMLElement;   
};

export interface IElementBuilder
{
    buildElement<ComponentSettings extends IBaseSettings>(settings: ComponentSettings): HTMLElement,
};

export interface IRenderer
{
    structurise(components: Array<IBaseComponent>): IBaseComponent,
    appendSections(parent: IBaseComponent | IView, child: IBaseComponent | Array<IBaseComponent>),
    clearSection(section: IBaseComponent),
    removeElement(element: IBaseComponent),
    updateSection(parent: IBaseComponent, child: IBaseComponent),
};


export interface IViewController
{
    getCurrentView(): string,
    changeView(oldView: IView, newView: IView): void,
    openView<TView extends IView>(view: TView): void,
    getView(viewName: string): IView,
    add(viewName: string, view: IView): void
};

export interface IBaseSettings
{
    type: string
    elementID: string
    innerText?: string,
    children?: Array<IBaseComponent>,
    attributes?: Record<string, string>,
    styles?: Record<string, string>
};

export interface IViewSettings
{
    type: 'div',
    elementID: string,
}

export interface IButtonSettings extends IBaseSettings
{
    type: 'button',
    elementID: string,
}

export interface IView 
{
    readonly name: string,
    onOpen(): void,
    onClose(): void,
    get ElementBuilder(): IElementBuilder,
    get ViewController(): IViewController,
    get Renderer(): IRenderer,
    get Children(): Array<IBaseComponent>,
    addChild(child: IBaseComponent): void,
    getElement(): HTMLElement,
}

