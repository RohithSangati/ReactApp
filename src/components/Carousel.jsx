import React from 'react';
import './Styles.css';
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'

class Carousel extends React.Component{
    render(){
        return(
            <div class='carousel'>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} alt="Los Angeles" width="100%" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src={img2} alt="Chicago" width="100%" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src={img3} alt="New York" width="100%" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src={img4} alt="Chicago" width="100%" height="500"/>
                    </div>
                    <div class="carousel-item">
                        <img src={img5} alt="New York" width="100%" height="500"/>
                    </div>
                </div>
                <a class="carousel-control-prev cntrl" href="#myCarousel" data-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next cntrl" href="#myCarousel" data-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </a>
            </div>
            
            </div>
            
        );
    }
}

export default Carousel;