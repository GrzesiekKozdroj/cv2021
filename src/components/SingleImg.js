import CloseButton from './CloseButton'
const SingleImg = ({ id}) => {
    return (
        <div className="fakeContajner">
            <CloseButton />
            <img 
                className="galleryImgPopup"
                src={ `${process.env.PUBLIC_URL}/assets/${id}` } 
                alt={id}
            />
        </div>
    )
}
export default SingleImg