import { NeolitComponent } from "./component";

export class Operation {
    
    renderMainComponent(mainElement: HTMLElement, component: NeolitComponent): void {
        const renderedElement = component.render();
        mainElement.appendChild(renderedElement);
    }
}