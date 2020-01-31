import { registerApplication, start } from "single-spa";
registerApplication(
  // Name of our single-spa application
  "home",
  // Our loading function
  () => import("./src/home/home.app.js"),
  // Our activity function
  () =>
    location.pathname === "" ||
    location.pathname === "/" ||
    location.pathname.startsWith("/home")
);
registerApplication(
  "navBar",
  () => import("./src/navBar/navBar.app.js").then(module => module.navBar),
  () => true
);

registerApplication(
  "product",
  () => import("./src/product/product.app.js"),
  () =>
    location.pathname === "/product" || location.pathname.startsWith("/product")
);

start();
