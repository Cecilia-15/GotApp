import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";
import { GotApp } from "./GotApp";
import { store } from './store/store';
// import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <GotApp/>
            </Router>
        </Provider>
    </React.StrictMode>
)