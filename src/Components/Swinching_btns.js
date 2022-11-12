import {Routes, Route, Link } from 'react-router-dom';


import EditedTasks from './EditedTasks';
import ListTasks  from './ListTasks';

export default function Switching_btns(){

    return (

        <div className="switching">

            <Routes>
                <Route path="/" component={ <ListTasks /> } />
                <Route path="/EditTasks" component={ <EditedTasks /> } />
            </Routes>
            <button className="switching_btn" 
                >Выполнено</button>
            <button className="switching_btn">Удалено</button>
        </div>
    );
}