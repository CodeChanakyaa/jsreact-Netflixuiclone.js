import React, { useState } from 'react'
import './Item.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Link } from 'react-router-dom';

const Items = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='list-item'
      style={{ left: isHovered && (props.index * 300) + (props.index * 12) }} // index*width - increased/2 +index*mr
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <img src={props.image} alt="" />

      {
        isHovered && (
          <>
            <video src={props.video} type="video/mp4" autoPlay={true}></video>

            <div className="item-info">
              <div className="icons">
                <Link to="/watch"><PlayArrowIcon className='icon' /></Link>
                <AddIcon className='icon' />
                <ThumbUpIcon className='icon' />
                <ThumbDownIcon className='icon' />
              </div>

              <div className="item-info-top">
                <span>{props.timing}</span>
                <span className='limit'>{props.limit}</span>
                <span>{props.released}</span>
              </div>

              <div className="desc">
                {props.desc}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default Items