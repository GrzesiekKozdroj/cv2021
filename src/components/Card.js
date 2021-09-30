import { Link } from "react-router-dom";
const Card = (props) => {
    const { img, text, title, url, urlExample, alt } = props.props
    return (
        <div className="col s12 m3">
                <div className="card small">
                    <div className="card-image projectImage">
                        <img src={img} alt={alt}/>
                        <span className="card-title">{title}</span>
                    </div>
                    <div className="card-content">
                        <p>{text}</p>
                    </div>
                    <div className="card-action">
                        <a target="_blank" href={url}>code</a>
                        <a target="_blank" href={urlExample}>live sample</a>
                    </div>
                </div>
            </div>
    )
}
export default Card