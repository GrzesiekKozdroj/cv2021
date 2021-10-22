import { Link } from 'react-router-dom'
const SingleImg = ({ id}) => {
    return (
      <Link to="/">
        <div className="fakeContajner">
            <img 
                className="galleryImgPopup"
                src={ `${process.env.PUBLIC_URL}/assets/${id}` } 
                alt={id}
            />
        </div>
      </Link>
    )
}
export default SingleImg