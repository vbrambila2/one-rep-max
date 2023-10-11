import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPage from './AddPage';
import HomePage from './HomePage';
import PercentPage from './PercentPage';
import UpdatePage from './UpdatePage';
import DeletePage from './DeletePage';

const App = () => {
    const movements = useSelector((state) => state.moveReducer);
    return (
        <div>
            <Router >
                <Routes >  
                    <Route exact path="/movement/:name/:weight" element={ <PercentPage title="One Rep - Movement" /> } ></Route>
                    <Route exact path="/add" element={ <AddPage title="One Rep - Add" /> } ></Route>
                    <Route exact path="/update/:name/" element={ <UpdatePage title="One Rep - Update" /> } ></Route>
                    <Route exact path="/delete/:name/" element={ <DeletePage title="One Rep - Delete" /> } ></Route>
                    <Route exact path="/" element={ <HomePage title="One Rep - Home" movements={movements} /> } ></Route>
                </Routes>
            </Router>
        </div>
    )
};

export default App;