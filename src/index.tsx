import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import App from "./App";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import "./styles.css";

render(
  () => (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/cv" component={CV} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
    </Router>
  ),
  document.getElementById("root")!
);
