import React, {Component} from 'react';
import TaskList from './TaskList'
import Date from './Date';
import Avatar from './Avatar';
import AddButton from './AddButton';

import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    'time': '12',
                    'period': 'AM',
                    'activity_title': 'Finish this app',
                    'activity_description': 'BeautifulToDo'
                }, {
                    'time': '9',
                    'period': 'AM',
                    'activity_title': 'Drink coffee',
                    'activity_description': 'Coffee'
                }, {
                    'time': '11',
                    'period': 'AM',
                    'activity_title': 'Call Mom',
                    'activity_description': 'Return her call before she kills me'
                }, {
                    'time': '3',
                    'period': 'PM',
                    'activity_title': 'Fix website',
                    'activity_description': 'Do some work'
                }, {
                    'time': '6',
                    'period': 'PM',
                    'activity_title': 'Commit and push to repository',
                    'activity_description': 'GitHub is the best'
                }
            ]
        }
    }

    addTask() {
        var task = {'time': '5', 'period': 'AM', 'activity_title': 'Do something', 'activity_description': 'I must do something good'};
        var tasks = this.state.tasks.concat(task);
        this.setState({tasks: tasks});
    }

    render() {
        return (
            <div style={{padding: '30px 30px'}}>
                <Avatar/>
                <br/>
                <Date/>
                <br/>
                <TaskList tasks={this.state.tasks}/>
                <br/>
                <AddButton onClick={this.addTask.bind(this)}/>
            </div>
        );
    }
}

export default App;
