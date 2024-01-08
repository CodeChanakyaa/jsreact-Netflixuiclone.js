import React from 'react';
import './Home.scss';
import Navbar from '../components/Navbar/Navbar';
import Featured from '../components/Featured/Featured';
import List from '../components/List/List';
import Footer from '../components/Footer/Footer';

const movies = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bMV1tOYiozJYnN30ORUot5oAyDwgaa2uIg&usqp=CAU",
        video: "https://www.w3schools.com/html/mov_bbb.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "Marvel Comics featuring the character Carol Danvers / Captain Marvel.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Zxs6kYUpfUPJ5658f3AzOrOuzJag7HVu9A&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHCAfKE9we5MUtQYV3SJpPkVG1S9uO30NDLQ&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadf7lp95zMgX8fvNkgrIAcIgbCJIz0AfIFQ&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQXTCmPtlvsyAj-LJvXdeaLXkpn2pLJ_zXw&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu0FyYDy78jOpbJnCMmAX9L40O4ByeTEwQSQ&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStrDm7ByFbQicmGY65O9G6mrupMUoZtXLsgSycPDZg7an99_h1o3sR5_m2se7SZyhRiD4&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSwXReR_Fgkry-Boq7GMBgyc3Vb1iqg_uWog&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdp-4VwnfjxUXTgqjt_RuRT3u4eCbY9rdovgSfSiOUksFVWapbG6taweUA_ZQ4VtKw0kw&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZzMg3WayzHQXWQqKg3QSl6ljUGkrJRo9zwTO_Snq7xix_QVYllTM_M5QXpgPRvmIfpE&usqp=CAU",
        video: "https://kingvideostatus.com/video/avenger4/play3.mp4",
        timing: "1 hour 14 minutes",
        limit: "18",
        desc: "This is just simple description for this movie.",
        reseased: "1984",
    },
]

function Home() {
    return (
        <div className='home'>
            <Navbar />
            <Featured />
            <List movies={movies} heading="Popular on Netflix" />
            <List movies={movies} heading="New Releases" />
            <List movies={movies} heading="Action & Adventure Movies" />
            <List movies={movies} heading="Top Web Series" />
            <Footer />
        </div>
    )
}

export default Home;