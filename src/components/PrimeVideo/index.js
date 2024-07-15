// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')
  console.log(actionMovies, comedyMovies)
  return (
    <div className="prime-video-card">
      <div className="prime-video-img-card">
        <img
          className="prime-video-img"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
      </div>
      <div className="">
        <div className="action-movies-card">
          <div className="slider-container">
            <h1 className="action-movies-card-heading">Action Movies</h1>
            <MoviesSlider moviesData={actionMovies} />
          </div>
          <div className="slider-container">
            <h1 className="action-movies-card-heading">Comedy Movies</h1>
            <MoviesSlider moviesData={comedyMovies} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
