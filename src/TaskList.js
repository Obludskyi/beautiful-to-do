/**
 * Created by Oleksii on 08.12.2016.
 */
import React, {Component} from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {
        return (
            <div>
                <Task/>
                <Task/>
                <Task/>
            </div>
        );
    }
}

export default TaskList;