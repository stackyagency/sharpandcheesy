/** @format */

import { utilsHandler } from "./components/utilsHandler";

document.addEventListener("readystatechange", () => {
  switch (document.readyState) {
    case "loading":
      break;
    case "interactive":
      break;
    case "complete":
      window.addEventListener("load", () => {
        // axeptioHandler.loadCookie();

        switch (true) {
          case location.pathname.split('"')[0] === "/":
            break;
          //   case location.pathname.includes("homepage"):
          //     break;
          default:
            console.log("Route not found");
            break;
        }
      });
      break;
  }
});
