import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookReader} from '@fortawesome/free-solid-svg-icons'

import './Course.css'

const Course = (props) => {
const {name, title, price} = props.course;
    return (
        <div className="course">
            <h2><span className="name">Course-name:</span> {name}</h2>
            <h4> <span className="title">Course-title:</span> {title}</h4>
            <p>price: {price}</p>
            <button className="button" onClick={()=>props.handleAddCourse(props.course)}> <FontAwesomeIcon icon = {faBookReader} /> Enroll now</button>
        </div>
    );
};

export default Course;