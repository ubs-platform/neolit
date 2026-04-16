import { isState, NeolitComponent, StateOrPlain } from "@ubs-platform/neolit/core";

export interface InputProperties {
    value: StateOrPlain<string>;
    onInput?: (e: InputEvent) => void;
    placeholder?: string;
}

export class Input extends NeolitComponent {
    value: StateOrPlain<string>;
    onInput?: (e: InputEvent) => void;
    placeholder?: string;

    constructor({ value, onInput, placeholder }: InputProperties) {
        super();
        this.value = value;
        this.onInput = onInput || (() => { });
        this.placeholder = placeholder;

    }

    onInputEvent(e: InputEvent) {
        if (this.onInput) {
            this.onInput(e);
        }

        if (this.value && isState(this.value)) {
            this.value.set((e.target as HTMLInputElement).value);
        }
    }

    render() {
        return (
            <input
                value={this.value}
                onInput={(e: InputEvent) => this.onInputEvent(e)}
                placeholder={this.placeholder}
                className="px-4 py-2 border rounded"
            />
        );
    }
}