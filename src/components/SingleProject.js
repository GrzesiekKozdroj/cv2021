import pack from './vars'
import CloseButton from './CloseButton'
const SingleProject = ({ id }) => {
    const { img, alt, text, title, url, urlExample } = pack.projects[id]
    return (
      <div  className="fakeContajner">
        <section className="article">
            <CloseButton />
            <h2 className="articleTitle white-text"><span className="card-title">{title}</span></h2>
            <img className="articleImg" src={img} alt={alt}/>
            <p className="white-text">{text}</p>
          <div className="card-action">
            <a target="_blank" className="article-links" href={url}>code</a>
            <a target="_blank" className="article-links" href={urlExample}>live sample</a>
          </div>
        </section>
      </div>
    )
  }
export default SingleProject