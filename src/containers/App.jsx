import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories'
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss';

const App = () => {
    const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: []})
    // const API = 'http://localhost:3000/initalState';
    useEffect(() => {
        fetch('http://localhost:3000/initalState')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, []);
console.log(videos);

    return (
        <div className="App">
            <Header/>
            <Search/>

            {videos.mylist?.length > 0 &&
                <Categories title="My own list">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Trens">
                <Carousel>
                    {videos.trends?.map(item =>
                        <CarouselItem key={item.id} { ...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Original from PlatziVideo">
                <Carousel>
                    { videos.originals?.map(item => (
                        <CarouselItem key={item.id} { ...item} />
                    )) }
                    <CarouselItem />

                </Carousel>
            </Categories>

            <Footer/>
        </div>
    )
}


export default App;