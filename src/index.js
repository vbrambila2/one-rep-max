import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
// import { BrowserRouter } from 'react-router-dom';
// import history from './history';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import rootReducer from './reducers';
// import reduxThunk from 'redux-thunk';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//    rootReducer,
//    composeEnhancers(applyMiddleware(reduxThunk))
// );

//const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  //  <Provider store={store} >
      // <PersistGate persistor={persistor}>
      // <BrowserRouter history={history}>
        <App />
       //</BrowserRouter>
      // </PersistGate>
  //  </Provider>
);