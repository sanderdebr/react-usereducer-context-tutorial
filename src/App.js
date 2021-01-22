import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Layout from "./_layout";
import { ThemeProvider } from "./context/theme";
import Users from "./pages/Users";
import { UsersProvider } from "./context/users";

function App() {
  return (
    <ThemeProvider>
      <UsersProvider>
        <Layout>
          <Router>
            <Switch>
              <Route path="/">
                <Users />
              </Route>
              {/* Add more routes here */}
            </Switch>
          </Router>
        </Layout>
      </UsersProvider>
    </ThemeProvider>
  );
}

export default App;
