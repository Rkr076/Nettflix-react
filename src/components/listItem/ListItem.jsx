import './listitem.scss';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useState } from 'react';
import playback from '../../videoplayback.mp4';


const ListItem = ({ index }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='listItem'
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/acaa6c091622a154e25d9a7aeb93fac490b0c9d97e9535027690172f896a5414._RI_V_TTW_.jpg'
        alt=''
      />

      {isHovered && (
        <>
          {/* <video className='video'
          autoPlay
          progress
          controls
          alt="All the devices"
          src={playback}
           
          /> */}
          <video className='video'
            autoPlay
            controls
            loop
            muted  >
            <source
              src={playback}
              type="video/mp4"

            />
          </video>
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrowOutlinedIcon className='icon' />
              <AddIcon className='icon' />
              <ThumbUpOutlinedIcon className='icon' />
              <ThumbDownOutlinedIcon className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1999</span>
              <span className='limit'>U/A +16</span>
              <span>1 hr 14 mins</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam ab recusandae suscipit tempore incidunt.
            </div>
            <div className='genre'>
              Action
            </div>
          </div></>
      )}
    </div>
  )
}

export default ListItem