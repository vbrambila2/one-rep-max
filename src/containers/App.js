import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import history from '../history';
// import AddPage from './AddPage';
import HomePage from './HomePage';
// import MovementPage from './MovementPage';
// import UpdatePage from './UpdatePage';
// import DeletePage from './DeletePage';

class App extends React.Component {
    render() {
        return (
            <div>
              hello
                <Routes >
                        <Route exact path="/" element={ <HomePage title="One Rep - Home" /> } ></Route>
                        {/* <Route exact path="/movement/:id/:name/:weight" render={ () => <MovementPage title="One Rep - Movement" /> } ></Route>
                        <Route exact path="/add" render={ () => <AddPage title="One Rep - Add" /> } ></Route>
                        <Route exact path="/update/:id/:name" render={ () => <UpdatePage title="One Rep - Update" /> } ></Route>
                        <Route exact path="/delete/:id/:name" render={ () => <DeletePage title="One Rep - Delete" /> } ></Route> */}
                </Routes>
            </div>
        )
    }
};

export default App;