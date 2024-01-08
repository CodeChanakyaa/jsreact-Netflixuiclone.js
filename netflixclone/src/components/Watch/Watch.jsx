import React from 'react'
import './Watch.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const Watch = () => {
    return (
        <div className='watch'>
            <div className="back">
                <Link to="/" className='link'><ArrowBackIcon /> <span>Home</span></Link>
            </div>
            <video src="https://kingvideostatus.com/video/avenger4/play3.mp4" className='video' progress controls></video>
        </div>
    )
}

export default Watch;