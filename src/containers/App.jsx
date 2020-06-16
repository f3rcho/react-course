import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories'
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';

const App = () => {
    const [ videos, setVideos ] = useState([]);
    const API = 'http://localhost:3000/initalState';
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);

    console.log(videos);


    return (
        <div className="App">
            <Header/>
            <Search/>

            <Categories title="My list">
                <Carousel>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>
                    <CarouselItem url="https://s3.amazonaws.com/mundo-bucket-s3/wp-content/uploads/2018/01/07123638/jenselter4.jpg"/>

                </Carousel>
            </Categories>

            <Categories title="Trens">
                <Carousel>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>
                    <CarouselItem url="https://ejerciciosencasa.es/wp-content/uploads/2014/04/jen-selter-la-mejor-cola-de-instagram9oki.jpg"/>

                </Carousel>
            </Categories>

            <Categories title="Original from PlatziVideo">
                <Carousel>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>
                    <CarouselItem url="https://pbs.twimg.com/media/BjM30DbIYAAjGWs.jpg"/>

                </Carousel>
            </Categories>

            <Footer/>
        </div>
    )
}


export default App;