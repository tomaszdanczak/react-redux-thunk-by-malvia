import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProductsPage} />
        <Route
          path="/product/:productId"
          exact
          component={ProductDetailsPage}
        />
        <Route>404 Not Found</Route>
      </Switch>
    </Router>
  );
}

export default App;
