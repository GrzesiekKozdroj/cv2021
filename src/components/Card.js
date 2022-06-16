import { Link } from "react-router-dom";
const Card = (props) => {
    const { img, text, title,  urlExample, alt } = props.props
    const sUrl = props.props.url
    const { ind } = props
    return (
        <div className="col s12 m3">
            <div className="card small">
                <Link to={'/cv/'+ind} >
                    <div className="card-image projectImage">
                        <img src={img} alt={alt}/>
                        <span className="card-title">{title}</span>
                    </div>
                    <div className="card-content">
                        <p className="black-text">{text}</p>
                    </div>
                </Link>
                <div className="card-action">
                    <a target="_blank" href={sUrl}>code</a>
                    <a target="_blank" href={urlExample}>live sample</a>
                </div>
            </div>
        </div>
    )
}
export default Card