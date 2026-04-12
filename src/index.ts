import { jsx } from "@ubs-platform/neolit/jsx-runtime";
import { Introduction } from "./landing/introduction";


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    if (!root) {
        console.error("Root element not found");
        return;
    }
    const component = new Introduction();
    component.mount(root);
});