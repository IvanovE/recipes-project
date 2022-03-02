import { Route, Switch } from 'react-router-dom';
import { Layout } from "./Layout/Layout/Layout";
import { Welcome } from './pages/Welcome/Welcome';
import { Categories } from "./pages/Categories/Categories";
import { Category } from "./pages/Category/Category";
import { RecipeDetail } from "./pages/RecipeDetail/RecipeDetail";


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
            </Switch>
        </Layout>
    );
}

export default App;
