/**
 * Created by Oleksii on 08.12.2016.
 */
import React, {Component} from 'react';
import {Row, Col, Image} from 'react-bootstrap';

class Avatar extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={10}></Col>
                    <Col xs={2}>
                        <Image src="https://pp.vk.me/c836620/v836620855/119b4/aWYQCTZjfsc.jpg"
                               thumbnail circle/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Avatar;