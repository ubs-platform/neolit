import * as Neolit from "@ubs-platform/neolith"; 
import { HelloWorld } from "./hello-world";

const element = Neolit.jsx(HelloWorld, {});

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    if (root) {
        root.appendChild(element);
    }
});