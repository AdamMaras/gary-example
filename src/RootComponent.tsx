import { Component, h } from "preact";

import ChildComponent from "./ChildComponent";

export default class RootComponent extends Component {
  public render() {
    return (
      <div>
        Root component!
        <ChildComponent />
      </div>
    );
  }
}
