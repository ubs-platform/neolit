import { NeolitComponent, state, NeolitNode } from "@ubs-platform/neolit/core";
import { fromState } from "@ubs-platform/neolit/structural";

export class TodoList extends NeolitComponent {
  static sampleDescription =
    "Basit bir yapılacaklar listesi örneği. Kullanıcıdan yapılacaklar listesini girmesini istiyor ve ardından listeyi güncelliyor.";
  static repoPath = "src/landing/samples/todo-list.tsx";

  todoItems = state<string[]>([]);
  newTodo = state("");

  constructor() {
    super();
  }

  addTodo() {
    if (this.newTodo.get().trim() !== "") {
      this.todoItems.set([...this.todoItems.get(), this.newTodo.get()]);
      this.newTodo.set("");
    }
  }

  render(): NeolitNode {
    return (
      <div>
        <h2>Yapılacaklar Listesi</h2>
        <input
          type="text"
          value={this.newTodo}
          oninput={(e: InputEvent) =>
            this.newTodo.set((e.target as HTMLInputElement).value)
          }
          placeholder="Yeni yapılacak..."
        />
        <button onclick={() => this.addTodo()}>Ekle</button>
        <ul>
          {fromState(this.todoItems).renderFor((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
