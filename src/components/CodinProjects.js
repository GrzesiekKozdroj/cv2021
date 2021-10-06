import Card from './Card.js'
import pack from './vars'
import { useEffect } from 'react'
import { BrowserRouter, Route, Switch, useParams, useRouteMatch, useHistory } from 'react-router-dom'

const SingleProject = ({ onClick }) => {
    let { projectId } = useParams()
    const { img, alt, text, title, url, urlExample } = pack.projects[projectId]
    return (
        <div  className="fakeContajner" onClick={onClick}>
            <section className="article">
                        <h2 className="articleTitle"><span className="card-title">{title}</span></h2>
                        <img className="articleImg" src={img} alt={alt}/>
                        <p className="black-text">{text}</p>
                    <div className="card-action">
                        <a target="_blank" href={url}>code</a>
                        <a target="_blank" href={urlExample}>live sample</a>
                    </div>
            </section>
        </div>
    )
}

const projectInfeed = pack.projects
const CodingProjects = () => {
    let { path, url } = useRouteMatch()
    const history = useHistory()
    const goBack = ()=>history.goBack()
    const load = projectInfeed.map( (el,i) => {
        return <Card props={el} key={i} path={path} url={url} ind={i} />
    })

    return(
        <div className="contentBlock">
            <div className="row codinProjectsMainPanel">
                { load }
            </div>
            <Switch>
                <Route exact path={`${path}/:projectId`} >
                   <SingleProject onClick={goBack}  />
                </Route>
            </Switch>
        </div>
    )
}

export default CodingProjects