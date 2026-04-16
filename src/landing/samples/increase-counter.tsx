import { NeolitComponent, state, NeolitNode } from "@ubs-platform/neolit/core";

export class IncreaseCounter extends NeolitComponent {
    
    static sampleDescription = "Basit bir sayaç örneği. Bir butona tıklayarak sayacı arttırıyor.";
    static repoPath = "src/landing/samples/increase-counter.tsx";

    counter = state(0);

    constructor() {
        super();
    }

    increaseCounter() {
        this.counter.set(this.counter.get() + 1);
    }

    render(): NeolitNode {
        return <div>
            Sayaç: {this.counter}
            <button onclick={() => this.increaseCounter()}>Arttır</button>
        </div>
    }
}