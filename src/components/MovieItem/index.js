// Write your code here

import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl, categoryId} = eachMovie
  console.log(thumbnailUrl)
  return (
    <div className="movie-item-card">
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
            aria-label="Open menu"
          >
            <img className="thumbnail-img" src={thumbnailUrl} alt="thumbnail" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="pop-up-card">
              <div className="close-card">
                <button
                  type="button"
                  className="trigger-button close-bg"
                  data-testid="closeButton"
                  aria-label="close menu"
                  onClick={() => close()}
                >
                  <IoMdClose size="40" />
                </button>
              </div>
              <div className="movie-player-container">
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="40vw"
                  height="40vh"
                />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
