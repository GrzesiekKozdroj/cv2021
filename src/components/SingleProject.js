import { Link } from 'react-router-dom'
import pack from './vars'
const SingleProject = ({ id }) => {
    const { img, alt, text, title, url, urlExample } = pack.projects[id]
    return (
      <div  className="fakeContajner">
        <section className="article">
          <Link to="/">
            <h2 className="articleTitle"><span className="card-title">{title}</span></h2>
            <img className="articleImg" src={img} alt={alt}/>
            <p className="black-text">{text}</p>
          </Link>
          <div className="card-action">
            <a target="_blank" href={url}>code</a>
            <a target="_blank" href={urlExample}>live sample</a>
          </div>
        </section>
      </div>
    )
  }
export default SingleProject