import { NeolitNode } from "./neolit-node";
import { State } from "./state";


export abstract class NeolitComponent {
    private _mountTarget: HTMLElement | null = null;
    private _currentElement: NeolitNode | null = null;

    constructor() {
        console.log("NeolitComponent created");
    }

    abstract render(): NeolitNode;

    watch<T>(state: State<T>): void {
        state.subscribe(() => this._rerender());
    }

    mount(target: HTMLElement, initialElement?: NeolitNode): NeolitNode {
        this._mountTarget = target;
        this._currentElement = initialElement ?? this.render();

        if (!target.contains(this._currentElement)) {
            target.appendChild(this._currentElement);
        }

        return this._currentElement;
    }

    private _rerender(): void {
        if (!this._mountTarget || !this._currentElement) return;
        const newElement = this.render();
        this._mountTarget.replaceChild(newElement, this._currentElement);
        this._currentElement = newElement;
    }
}

