import React from "react";
import { createRoot } from "react-dom/client";

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

const NavigationBar = () => {
  // TODO: Actually implement a navigation bar
  return <h1>Hello from React!</h1>;
};

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(
  <>
    <NavigationBar />
  </>
);
