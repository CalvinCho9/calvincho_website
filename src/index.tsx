import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import Home from "./pages/Home";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";
import "./styles.css";

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="*" component={NotFound} />
    </Router>
  ),
  document.getElementById("root")!
);
