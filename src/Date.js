/**
 * Created by Oleksii on 08.12.2016.
 */
import React, {Component} from 'react';
import Moment from 'moment';

class Date extends Component {
    render() {
        return (
            <div>
                <h1>{Moment().format('dddd')}</h1>
                <p>{Moment().format('LL')}</p>
            </div>
        );
    }
}

export default Date;