const rootJs = document.getElementById("root-js");
const heading = document.createElement("h1");
heading.textContent = "Namaste from javascript";
rootJs.append(heading);

const heading1 = React.createElement("h1", { id: "title1" }, "Namaste React");

const heading2 = React.createElement("h2", { id: "title2" }, "Namaste React");

const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root-react"));

root.render(container);
