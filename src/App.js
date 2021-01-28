import './App.css';
import React from "react";
import Auth from "./components/Auth/Auth";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuizzesList from "./components/QuizzesList/QuizzesList";
import QuizCreate from "./components/QuizCreate/QuizCreate";
import Layout from "./hoc/Layout/Layout";

function App() {
    return (

        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path={'/auth'} component={Auth}/>
                    <Route path={'/quiz-create'} component={QuizCreate}/>
                    <Route path={'/'} component={QuizzesList}/>
                </Switch>
            </Layout>
        </BrowserRouter>

    );
}

export default App;
