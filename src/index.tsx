import { h, render } from "preact";

import RootComponent from "./RootComponent";

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);

render(<RootComponent />, rootElement);