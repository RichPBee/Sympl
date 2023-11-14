export interface IApp
{
    load(): void,
    get ElementBuilder(): IElementBuilder,
    get ViewController(): IViewController,
    get Renderer(): IRenderer,
    get AppContainer(): HTMLElement
}


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
    changeView<TView extends IView>(oldView: TView, newView: TView): void,
    openView<TView extends IView>(view: TView): void,
};

export interface IBaseSettings
{
    type: string
    id: string
    innerText?: string,
    children?: Array<IBaseComponent>,
    attributes?: Map<string, string>
    styles?: Map<string, string>
};

export interface IViewSettings
{
    type: 'div',
    id: string,
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
    getElement(): HTMLElement
}

