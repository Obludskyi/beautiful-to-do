import React, {Component} from 'react';
import TaskList from './TaskList'
import Date from './Date';
import Avatar from './Avatar';
import AddButton from './AddButton';

import './App.css';

class App extends Component {
    render() {
        return (
            <div style={{padding: '30px 30px'}}>
                <Avatar/>
                <br/>
                <Date/>
                <br/>
                <TaskList/>
                <br/>
                <AddButton/>
            </div>
        );
    }
}

export default App;
