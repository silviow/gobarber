import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import history from './services/history';
import Routes from './routes';
import { store, persistor } from './store';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router history={history}>
                    <Routes />
                </Router>
                <GlobalStyle />
                <ToastContainer autoClose={5000} />
            </PersistGate>
        </Provider>
    );
}

export default App;
