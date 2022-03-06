import { Route, Switch } from 'react-router-dom';
import { Layout } from "./layout/Layout/Layout";
import { Welcome } from './pages/Welcome/Welcome';
import { Categories } from "./pages/Categories/Categories";
import { Category } from "./pages/Category/Category";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";
import { Error } from "./components/Error/Error";

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
                <Route exact path={"/categories/:categoryName/:idMeal"}>
                    <RecipeDetail />
                </Route>
                <Route path={"*"}>
                    <Error />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
