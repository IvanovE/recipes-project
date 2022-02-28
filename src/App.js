import { Route, Switch } from 'react-router-dom';
import { Layout } from "./Layout/Layout/Layout";
import { Welcome } from './pages/Welcome/Welcome';
import { Categories } from "./pages/Categories/Categories";
import { Category } from "./pages/Category/Category";


function App() {
    return (
        <Layout>
            <Switch>
                <Route exact path={"/"}>
                    <Welcome />
                </Route>
                <Route exact path={"/categories"}>
                    <Categories />
                </Route>
                <Route exact path={"/categories/:categoryName"}>
                    <Category />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
