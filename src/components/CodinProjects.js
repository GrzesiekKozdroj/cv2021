import Card from './Card.js'
import pack from './vars'
const projectInfeed = pack.projects
const CodingProjects = () => {
    return(
        <div className="row codinProjectsMainPanel">
                { projectInfeed.map( el => <Card props={el} /> ) }
        </div>
    )
}

export default CodingProjects