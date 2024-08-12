import './watch.scss';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import playback from '../../videoplayback.mp4';

const Watch = () => {
  return (
    <div className='watch'>
       <div className='back'>
           <ArrowBackOutlinedIcon />
           Home
       </div>
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
    </div>
  )
}

export default Watch