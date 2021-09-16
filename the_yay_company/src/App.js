import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
