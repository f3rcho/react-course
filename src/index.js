import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// logic to store
import { createStore, compose } from 'redux';
import reducer from './reducers'
import App from './routes/App';

const initialState = {
    "user": {},
    "playing": {},
    "myList": [],
    "trends": [
        {
            "id": 2,
            "slug": "tvshow-2",
            "title": "In the Dark",
            "type": "Scripted",
            "language": "English",
            "year": 2009,
            "contentRating": "16+",
            "duration": 164,
            "cover": "https://i.pinimg.com/originals/b7/e7/c2/b7e7c283053c06ab0c9d9dab3e758650.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 3,
            "slug": "tvshow-3",
            "title": "Instinct",
            "type": "Adventure",
            "language": "English",
            "year": 2002,
            "contentRating": "16+",
            "duration": 137,
            "cover": "https://live.staticflickr.com/609/33139049731_a2cf436fe1_b.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 4,
            "slug": "tvshow-4",
            "title": "Grand Hotel",
            "type": "Comedy",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 163,
            "cover": "https://cdn3.volusion.com/lqpzc.dkrfy/v/vspfiles/photos/18351-2.jpg?v-cache=1565171665",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 5,
            "slug": "tvshow-5",
            "title": "Stargate Atlantis",
            "type": "Scripted",
            "language": "English",
            "year": 2014,
            "contentRating": "16+",
            "duration": 194,
            "cover": "https://cdn.shopify.com/s/files/1/0251/8505/8919/products/guitars_0073_Layer_1.jpg?v=1565979556",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 6,
            "slug": "tvshow-6",
            "title": "Final Space",
            "type": "Scripted",
            "language": "English",
            "year": 2017,
            "contentRating": "16+",
            "duration": 124,
            "cover": "https://cdn.shopify.com/s/files/1/0251/8505/8919/products/guitars_0079_Layer_1.jpg?v=1565979531",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 7,
            "slug": "tvshow-7",
            "title": "The InBetween",
            "type": "Drama",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 179,
            "cover": "https://cdn.shopify.com/s/files/1/0643/3993/collections/251321-1510070116224_680x680.jpg?v=1523555756",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ],
    "originals": [
        {
            "id": 8,
            "slug": "tvshow-8",
            "title": "Stargate Atlantis",
            "type": "Action",
            "language": "English",
            "year": 2012,
            "contentRating": "16+",
            "duration": 148,
            "cover": "https://www.infobae.com/new-resizer/O0tiYtqVZAMFx89O-f7hAKdSQao=/750x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/01/30145619/GENTE-JenSelter-290118-15.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 9,
            "slug": "tvshow-9",
            "title": "Alien Highway",
            "type": "Action",
            "language": "English",
            "year": 2019,
            "contentRating": "16+",
            "duration": 128,
            "cover": "https://i.pinimg.com/236x/68/f6/93/68f693810dccd7cb555e400944a7cf42--jen-selter-body-motivation.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 10,
            "slug": "tvshow-10",
            "title": "Elementary",
            "type": "Animation",
            "language": "English",
            "year": 2011,
            "contentRating": "16+",
            "duration": 346,
            "cover": "https://cambio21.cl/image/5a7b2b5baa2d74192e2721a7.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 11,
            "slug": "tvshow-11",
            "title": "Strange Angel",
            "type": "War",
            "language": "English",
            "year": 2015,
            "contentRating": "16+",
            "duration": 226,
            "cover": "https://fmjovenplottier.com.ar/wp-content/uploads/2018/11/57492-ni-Jen-Selter-Instagram211018_0263.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 12,
            "slug": "tvshow-12",
            "title": "Private Eyes",
            "type": "Comedy",
            "language": "English",
            "year": 2018,
            "contentRating": "16+",
            "duration": 190,
            "cover": "https://media2.s-nbcnews.com/i/newscms/2018_05/2308671/180129-jen-selter-mn-0810_3d3166ca09ba94c43a43a3a37165894a.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        },
        {
            "id": 13,
            "slug": "tvshow-13",
            "title": "NCIS: Los Angeles",
            "type": "Drama",
            "language": "English",
            "year": 2010,
            "contentRating": "16+",
            "duration": 160,
            "cover": "https://www.yucatan.com.mx/wp-content/uploads/2018/01/Selter-9.jpg",
            "description": "Vestibulum ac est lacinia nisi venenatis tristique",
            "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
        }
    ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('app')
);