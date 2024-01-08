import React, { useRef, useState } from 'react'
import './List.scss';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Item from '../Items/Item';
import { Link } from 'react-router-dom';


const List = (props) => {

    const [sildeNumber, setSlideNumber] = useState(0);

    const listRef = useRef();

    const clickHandler = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;

        if (direction === "left" && sildeNumber > 0) {
            setSlideNumber(sildeNumber - 1)
            listRef.current.style.transform = `translateX(${312 + distance}px)`
        }
        if (direction === "right" && sildeNumber < 5) {
            setSlideNumber(sildeNumber + 1)
            listRef.current.style.transform = `translateX(${-312 + distance}px)`
        }
    }

    return (
        <div className='list'>
            <Link className='list-link' to=""><span className='list-title'>{props.heading}</span></Link>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className='slider left' onClick={() => clickHandler('left')} />
                <div className="wrap-list">
                    <div className="container" ref={listRef}>
                        {
                            props.movies.map((e, index) => {
                                return (<Item key={index} index={index} image={e.img} video={e.video} desc={e.desc} timing={e.timing} released={e.reseased} limit={e.limit} />);
                            })
                        }
                    </div>
                </div>
                <ArrowForwardIosOutlinedIcon className='slider right' onClick={() => clickHandler('right')} />
            </div>
        </div>
    )
}

export default List;