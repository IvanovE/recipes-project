import { Route, Switch } from 'react-router-dom';
import { Welcome } from './pages/Welcome/Welcome';
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";


function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <Route exact path={"/"}>
                        <Welcome />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

export default App;
