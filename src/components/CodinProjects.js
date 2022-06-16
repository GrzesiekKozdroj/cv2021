import Card from './Card.js'
import pack from './vars'
import { useRouteMatch } from 'react-router-dom'



const projectInfeed = pack.projects
const CodingProjects = () => {
    let { path, url } = useRouteMatch()
    const load = projectInfeed.map( (el,i) => {
        return <Card props={el} key={i} path={path} url={url} ind={i} />
    })
    return(
        <div >
            <header id="codin_projects" />
            <h3 className="modelsCategories white-text text-darken-4">projects I've done</h3>
            <div className="row codinProjectsMainPanel">
                { load }
            </div>
        </div>
    )
}

export default CodingProjects