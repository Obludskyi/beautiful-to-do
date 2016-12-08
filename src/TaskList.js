/**
 * Created by Oleksii on 08.12.2016.
 */
import React, {Component} from 'react';
import Task from './Task';

class TaskList extends Component {
    render() {
        var tasks = [
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
        ];

        return (
            <div>
                {tasks.map(function(task, index) {
                    return <Task
                        key={index}
                        time={task.time}
                        period={task.period}
                        activity_title={task.activity_title}
                        activity_description={task.activity_description}/>
                })}
            </div>
        );
    }
}

export default TaskList;