import { HelloWorld } from "./hello-world";
import { jsx } from "@ubs-platform/neolit/jsx-runtime";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    if (!root) {
        console.error("Root element not found");
        return;
    }
    const element = jsx(HelloWorld, { });
    element.componentInstance.mount(root, element.element);
});