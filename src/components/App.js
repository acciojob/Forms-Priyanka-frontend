import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link id="form-link" to="/">
          Form
        </Link>

        <Link id="form-ref-link" to="/form-ref">
          Form Ref
        </Link>

        <Link id="form-state-link" to="/form-state">
          Form State
        </Link>
      </nav>

      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;