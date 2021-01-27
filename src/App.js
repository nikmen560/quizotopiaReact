import './App.css';
import Header from "./components/Header/Header";
// import Content from "./components/Content/Content";
import React from "react";
import Auth from "./components/Auth/Auth";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import QuizzesList from "./components/QuizzesList/QuizzesList";
import QuizCreate from "./components/QuizCreate/QuizCreate";

function App() {
    return (
        <BrowserRouter>
            <div className={'App'}>
                <Header/>
                {/*TODO LAYOUT THAT does not include header, wraps main content, header in layout*/}


                {/*<Switch>*/}

                <Route path={'/auth'}  component={Auth}/>
                <Route path={'/quiz-create'} component={QuizCreate}/>
                <Route path={'/'} exact component={QuizzesList}/>
                {/*</Switch>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
