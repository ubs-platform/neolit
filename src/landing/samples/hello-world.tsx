import { NeolitComponent, state, NeolitNode } from "@ubs-platform/neolit/core";
import { Button } from "../../general/button";

export class HelloWorld extends NeolitComponent {
  sampleDescription =
    "Basit merhaba dünya örneği. Bir butona tıklayarak kullanıcıdan adını girmesini istiyor ve ardından merhaba mesajını güncelliyor.";
  repoPath = "src/landing/samples/hello-world.tsx";

  name = state("Dünya");

  constructor() {
    super();
  }

  askUsersName() {
    const userName = prompt("Adınız nedir?");
    if (userName) {
      this.name.set(userName);
    }
  }

  render(): NeolitNode {
    return (
      <div>
        <h1 style={{ fontSize: "32px" }}> Merhaba, {this.name}!</h1>
        <div></div>
        <Button onclick={() => this.askUsersName()}>Adı değiştir</Button>
        {/* <button className="mt-2 px-3 py-1 rounded bg-blue-500 text-white" onclick={() => this.askUsersName()}>Adı değiştir</button> */}
      </div>
    );
  }
}
