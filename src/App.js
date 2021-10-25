import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route path="/" exact component={ProductsPage} />
          <Route
            path="/product/:productId"
            exact
            component={ProductDetailsPage}
          />
          <Route>404 Not Found</Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
