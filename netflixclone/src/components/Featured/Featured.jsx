import React from 'react';
import './Featured.scss';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className='featured'>
      <img className="background" src="https://images.hdqwalls.com/download/captain-marvel-avengers-end-game-8k-l7-1280x800.jpg" alt="" />

      <div className="info">
        <img src="https://www.pngall.com/wp-content/uploads/11/Captain-Marvel-PNG.png" alt="" />
        <p className="desc">American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel.</p>

        <div className="buttons">
          <Link className='link' to="/watch"><button className='play'>
            <PlayCircleOutlineIcon />
            <span>Play</span>
          </button>
          </Link>
          <Link className='link' to="">
            <button className='more'>
              <InfoOutlinedIcon />
              <span>Info</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Featured