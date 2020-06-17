import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories'
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initialState'

const App = () => {
    const initialState = useInitialState(API)
    return (
        <div className="App">
            <Header/>
            <Search/>

            {initialState.mylist.length > 0 &&
                <Categories title="My own list">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            <Categories title="Trens">
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} { ...item} />
                    )}
                </Carousel>
            </Categories>

            <Categories title="Original from PlatziVideo">
                <Carousel>
                    { initialState.originals.map(item =>
                        <CarouselItem key={item.id} { ...item} />
                    )}
                </Carousel>
            </Categories>

            <Footer/>
        </div>
    )
}


export default App;