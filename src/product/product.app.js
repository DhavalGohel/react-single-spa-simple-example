import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Product from "./root.component.js";
function domElementGetter() {
  return document.getElementById("product");
}
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Product,
  domElementGetter
});
export const bootstrap = [reactLifecycles.bootstrap];
export const mount = [reactLifecycles.mount];
export const unmount = [reactLifecycles.unmount];
