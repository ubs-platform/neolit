export class State<DATA> {
    private data: DATA;

    changeListeners: Array<(newData: DATA) => void> = [];

    constructor(initialData: DATA) {
        this.data = initialData;
    }

    get(): DATA {
        return this.data;
    }

    set(newData: DATA): void {
        this.data = newData;

        this.changeListeners.forEach(listener => listener(newData));
    }

    update(updater: (currentData: DATA) => DATA): void {
        this.data = updater(this.data);

        this.changeListeners.forEach(listener => listener(this.data));
    }

    subscribe(listener: (newData: DATA) => void): void {
        this.changeListeners.push(listener);
    }

    toString(): string {
        return this.data?.toString() ?? "";   
    }
}

export function state<DATA>(initialData: DATA): State<DATA> {
    return new State(initialData);
}