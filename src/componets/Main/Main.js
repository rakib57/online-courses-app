import React from 'react';
import fakeData from '../../fakeData/fakeData.js'
import { useState } from 'react';
import './Main.css'
import Course from '../Course/Course.js';
import Cart from '../Cart/Cart.js';

const Main = () => {
    const first15 = fakeData.slice(0,15)
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (course)=>{
        const newCart = [...cart, course];
        setCart(newCart)
    }
    return (
        <div className="main-container">

           <div className="course-container">
              <ul>
                 {
                 courses.map(cour => <Course 
                    course ={cour}
                    handleAddCourse ={handleAddCourse}
                    ></Course>)
                 }
             </ul>
          </div>
            
           <div className="cart-container">
              <Cart cart={cart}></Cart>
           </div>

        </div>
    );
};

export default Main;