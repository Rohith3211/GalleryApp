import './index.css'

const ThumbnailItem = props => {
  const {details, filteringImages, isActive} = props
  const {id, imageUrl, thumbnailUrl, imageAltText, thumbnailAltText} = details
  const onClickTriggered = () => {
    filteringImages(id)
  }

  const active = isActive ? 'img2' : ''
  return (
    <li>
      <button onClick={onClickTriggered} className="btn img2">
        <img
          className={`img ${active}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
